"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/form/button'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

// Define types for form data
type ProjectType = 'ai-workflow' | 'ai-design' | 'process-automation' | 'ai-analytics' | 'ai-integration' | 'custom'
type Budget = '5k-10k' | '10k-25k' | '25k-50k' | '50k+' | 'membership'
type Timeline = '1month' | '3months' | '6months' | 'unsure'
type CompanySize = '1-10' | '11-50' | '51-200' | '201-500' | '500+'
type IndustryType = 'technology' | 'healthcare' | 'finance' | 'education' | 'retail' | 'manufacturing' | 'other'
type CommunicationPreference = 'email' | 'phone' | 'video' | 'slack'
type TechStack = 'web' | 'mobile' | 'desktop' | 'cloud' | 'other'
type DataPrivacy = 'public' | 'private' | 'hipaa' | 'gdpr' | 'ccpa'

interface FormData {
    name: string
    email: string
    phone: string
    company: string
    companySize: CompanySize | ''
    industry: IndustryType | ''
    projectTypes: ProjectType[]
    details: string
    currentProcess: string
    budget: Budget | ''
    timeline: Timeline | ''
    challenges: string
    goals: string
    techStack: TechStack[]
    dataPrivacy: DataPrivacy[]
    stakeholders: string
    communicationPreference: CommunicationPreference | ''
    technicalRequirements: string
}

interface FormErrorProps {
    message: string
    onClose: () => void
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options: Array<{ value: string; label: string }>
    error?: string
}

function FormError({ message, onClose }: FormErrorProps) {
    return (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 relative">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label="Close error message"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span className="text-red-800 dark:text-red-200">{message}</span>
            </div>
        </div>
    )
}

export default function QuoteRequestForm() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        industry: '',
        projectTypes: [],
        details: '',
        currentProcess: '',
        budget: '',
        timeline: '',
        challenges: '',
        goals: '',
        techStack: [],
        dataPrivacy: [],
        stakeholders: '',
        communicationPreference: '',
        technicalRequirements: ''
    })

    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

    const totalSteps = 4

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        setTouchedFields(prev => new Set([...prev, name]))
        validateField(name, value)
    }

    const handleCheckboxChange = (type: ProjectType) => {
        setFormData(prev => ({
            ...prev,
            projectTypes: prev.projectTypes.includes(type)
                ? prev.projectTypes.filter(t => t !== type)
                : [...prev.projectTypes, type]
        }))
    }

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
            window.scrollTo(0, 0)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
            window.scrollTo(0, 0)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            // Send form data to the API endpoint
            const response = await fetch('/api/quote-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong')
            }

            // Redirect to thank you page
            router.push('/quote-request/thank-you')
        } catch (error) {
            console.error('Error submitting form:', error)
            setIsSubmitting(false)
            setError(error instanceof Error ? error.message : 'Failed to submit your request. Please try again.')
            window.scrollTo(0, 0)
        }
    }

    const validateField = (name: string, value: string) => {
        const errors: Record<string, string> = {}

        switch (name) {
            case 'email':
                if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    errors[name] = 'Please enter a valid email address'
                }
                break
            case 'phone':
                if (value && !value.match(/^\+?[\d\s-]{10,}$/)) {
                    errors[name] = 'Please enter a valid phone number'
                }
                break
            // Add more validation cases as needed
        }

        setValidationErrors(prev => ({
            ...prev,
            ...errors
        }))
    }

    const canNavigateToStep = (stepNumber: number) => {
        // Can always go back to previous steps
        if (stepNumber < currentStep) return true;

        // Can't skip ahead
        if (stepNumber > currentStep) return false;

        return true;
    }

    const handleStepClick = (stepNumber: number) => {
        if (!canNavigateToStep(stepNumber)) return;
        setCurrentStep(stepNumber);
        window.scrollTo(0, 0);
    }

    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Personal Information</h3>
                            <p className="text-muted-foreground mt-2">Tell us about yourself and your company.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FloatingLabelInput
                                id="name"
                                name="name"
                                type="text"
                                label="Full Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                autoComplete="name"
                                error={touchedFields.has('name') && !formData.name ? 'Name is required' : ''}
                            />

                            <FloatingLabelInput
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                autoComplete="email"
                                error={validationErrors.email}
                            />

                            <FloatingLabelInput
                                id="phone"
                                name="phone"
                                type="tel"
                                label="Phone (optional)"
                                value={formData.phone}
                                onChange={handleInputChange}
                                autoComplete="tel"
                                error={validationErrors.phone}
                            />

                            <FloatingLabelInput
                                id="company"
                                name="company"
                                type="text"
                                label="Company"
                                value={formData.company}
                                onChange={handleInputChange}
                                autoComplete="organization"
                            />

                            <Select
                                id="companySize"
                                name="companySize"
                                label="Company Size"
                                value={formData.companySize}
                                onChange={handleInputChange}
                                options={[
                                    { value: '1-10', label: '1-10 employees' },
                                    { value: '11-50', label: '11-50 employees' },
                                    { value: '51-200', label: '51-200 employees' },
                                    { value: '201-500', label: '201-500 employees' },
                                    { value: '500+', label: '500+ employees' }
                                ]}
                            />

                            <Select
                                id="industry"
                                name="industry"
                                label="Industry"
                                value={formData.industry}
                                onChange={handleInputChange}
                                options={[
                                    { value: 'technology', label: 'Technology' },
                                    { value: 'healthcare', label: 'Healthcare' },
                                    { value: 'finance', label: 'Finance' },
                                    { value: 'education', label: 'Education' },
                                    { value: 'retail', label: 'Retail' },
                                    { value: 'manufacturing', label: 'Manufacturing' },
                                    { value: 'other', label: 'Other' }
                                ]}
                            />
                        </div>
                    </div>
                )

            case 2:
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Project Details</h3>
                            <p className="text-muted-foreground mt-2">Tell us about the project you need help with.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <label className="text-sm font-medium leading-none block">
                                    What type of project do you need? <span className="text-red-500">*</span>
                                </label>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { id: 'ai-workflow', label: 'Custom AI Workflow Development', description: 'End-to-end AI pipeline development and optimization' },
                                        { id: 'ai-design', label: 'AI-First Design & UX', description: 'User interfaces designed around AI capabilities' },
                                        { id: 'process-automation', label: 'Intelligent Process Automation', description: 'Streamline operations with AI-powered automation' },
                                        { id: 'ai-analytics', label: 'AI Analytics & Insights', description: 'Advanced analytics and business intelligence' },
                                        { id: 'ai-integration', label: 'Seamless AI Integration', description: 'Integrate AI into existing systems' },
                                        { id: 'custom', label: 'Custom Solution', description: 'Tailored to your specific needs' }
                                    ].map((type) => (
                                        <div
                                            key={type.id}
                                            className="flex items-center space-x-3"
                                        >
                                            <Checkbox
                                                id={type.id}
                                                checked={formData.projectTypes.includes(type.id as ProjectType)}
                                                onCheckedChange={() => handleCheckboxChange(type.id as ProjectType)}
                                                className="h-5 w-5 rounded-sm border border-zinc-300 focus:ring-0 focus:ring-offset-0 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white"
                                            />
                                            <div>
                                                <label
                                                    htmlFor={type.id}
                                                    className="text-sm font-medium cursor-pointer"
                                                    onClick={() => handleCheckboxChange(type.id as ProjectType)}
                                                >
                                                    {type.label}
                                                </label>
                                                <p className="text-sm text-zinc-500">{type.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="details" className="text-sm font-medium leading-none">
                                        Project details <span className="text-red-500">*</span>
                                    </label>
                                    <Textarea
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        placeholder="Describe what you're looking to build and what problems you're trying to solve"
                                        required
                                        className="min-h-[120px] border-dashed"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="technicalRequirements" className="text-sm font-medium leading-none">
                                        Technical Requirements
                                    </label>
                                    <Textarea
                                        id="technicalRequirements"
                                        name="technicalRequirements"
                                        value={formData.technicalRequirements}
                                        onChange={handleInputChange}
                                        placeholder="Any specific technical requirements or constraints"
                                        className="min-h-[80px] border-dashed"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Project Requirements</h3>
                            <p className="text-muted-foreground mt-2">Help us understand your timeline and budget constraints.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <label className="text-sm font-medium leading-none block">
                                    What is your budget? <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-dashed bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="" disabled>Select...</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="50k+">$50,000+</option>
                                    <option value="membership">Membership ($4,800/mo)</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-medium leading-none block">
                                    When do you want to go live? <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleInputChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-dashed bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="" disabled>Select...</option>
                                    <option value="1month">Within 1 month</option>
                                    <option value="3months">Within 3 months</option>
                                    <option value="6months">Within 6 months</option>
                                    <option value="unsure">Not sure yet</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="stakeholders" className="text-sm font-medium leading-none">
                                    Project Stakeholders
                                </label>
                                <Textarea
                                    id="stakeholders"
                                    name="stakeholders"
                                    value={formData.stakeholders}
                                    onChange={handleInputChange}
                                    placeholder="List the key stakeholders involved in this project"
                                    className="min-h-[80px] border-dashed"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="challenges" className="text-sm font-medium leading-none">
                                    Challenges or Pain Points
                                </label>
                                <Textarea
                                    id="challenges"
                                    name="challenges"
                                    value={formData.challenges}
                                    onChange={handleInputChange}
                                    placeholder="What challenges are you facing with your current process?"
                                    className="min-h-[80px] border-dashed"
                                />
                            </div>
                        </div>
                    </div>
                )

            case 4:
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Project Goals</h3>
                            <p className="text-muted-foreground mt-2">Tell us about your desired outcomes and success metrics.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label htmlFor="goals" className="text-sm font-medium leading-none">
                                    Project Goals and Success Metrics <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="goals"
                                    name="goals"
                                    value={formData.goals}
                                    onChange={handleInputChange}
                                    placeholder="What specific outcomes are you hoping to achieve with this project?"
                                    required
                                    className="min-h-[120px] border-dashed"
                                />
                            </div>

                            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-dashed space-y-4">
                                <div>
                                    <h4 className="text-base font-medium mb-4">What happens next?</h4>
                                    <ol className="space-y-4">
                                        {[
                                            {
                                                title: 'Review & Analysis',
                                                description: 'Our team will review your requirements within 1-2 business days'
                                            },
                                            {
                                                title: 'Proposal Development',
                                                description: 'We\'ll prepare a detailed project estimate and proposal'
                                            },
                                            {
                                                title: 'Consultation Call',
                                                description: 'We\'ll schedule a call to discuss the proposal'
                                            },
                                            {
                                                title: 'Project Kickoff',
                                                description: 'If you decide to proceed, we\'ll begin the project'
                                            }
                                        ].map((step, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                                                    <span className="text-sm font-medium">{index + 1}</span>
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-sm mb-1">{step.title}</h5>
                                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    const renderProgressBar = () => {
        const steps = [
            { title: 'Personal', description: 'Your information' },
            { title: 'Project', description: 'Project details' },
            { title: 'Budget', description: 'Timeline & budget' },
            { title: 'Goals', description: 'Success metrics' }
        ]

        return (
            <div className="w-full mb-12">
                <div className="flex items-center justify-between relative">
                    {/* Progress line */}
                    <div className="absolute top-[11px] left-0 w-full h-[2px] bg-zinc-100 dark:bg-zinc-800">
                        <div
                            className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ease-in-out"
                            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="relative z-10 flex justify-between w-full">
                        {steps.map((step, index) => {
                            const stepNumber = index + 1
                            const isCompleted = stepNumber < currentStep
                            const isCurrent = stepNumber === currentStep
                            const isClickable = stepNumber < currentStep // Only previous steps are clickable

                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center ${isClickable ? 'cursor-pointer' : ''}`}
                                    onClick={() => isClickable && handleStepClick(stepNumber)}
                                    role={isClickable ? "button" : undefined}
                                    tabIndex={isClickable ? 0 : -1}
                                    onKeyDown={(e) => {
                                        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                                            handleStepClick(stepNumber);
                                        }
                                    }}
                                    aria-label={isClickable ? `Go back to step ${stepNumber}: ${step.title}` : undefined}
                                >
                                    <div
                                        className={`
                                            w-6 h-6 rounded-full flex items-center justify-center
                                            text-xs font-medium transition-all duration-300
                                            ${isCompleted || isCurrent
                                                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500'
                                            }
                                            ${isClickable ? 'hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600' : ''}
                                        `}
                                    >
                                        {isCompleted ? (
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <span>{stepNumber}</span>
                                        )}
                                    </div>
                                    <div className="mt-2 text-center">
                                        <div className={`text-sm font-medium transition-colors duration-300
                                            ${isCurrent ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400'}
                                            ${isClickable ? 'hover:text-zinc-700 dark:hover:text-zinc-300' : ''}
                                        `}>
                                            {step.title}
                                        </div>
                                        <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 hidden sm:block">
                                            {step.description}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <div className="rounded-xl border bg-card text-card-foreground shadow-md overflow-hidden">
                <div className="px-5 py-6 sm:px-6 md:px-8 md:py-8">
                    {error && <FormError message={error} onClose={() => setError(null)} />}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {renderProgressBar()}
                        <div className="min-h-[360px]">
                            {renderFormStep()}
                        </div>

                        <div className="flex justify-between mt-12 pt-4 border-t border-dashed">
                            {currentStep > 1 ? (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={prevStep}
                                    disabled={isSubmitting}
                                >
                                    Previous
                                </Button>
                            ) : (
                                <div />
                            )}

                            {currentStep < totalSteps ? (
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={
                                        (currentStep === 1 && (!formData.name || !formData.email)) ||
                                        (currentStep === 2 && (formData.projectTypes.length === 0 || !formData.details)) ||
                                        (currentStep === 3 && (!formData.budget || !formData.timeline))
                                    }
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    disabled={!formData.goals || isSubmitting}
                                    className="px-8"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const FloatingLabelInput = ({ id, label, error, ...props }: InputProps) => {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label} {props.required && <span className="text-red-500">*</span>}
            </label>
            <Input
                {...props}
                id={id}
                className={`border-dashed ${error ? 'border-red-500' : ''}`}
            />
            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    )
}

const Select = ({ id, label, options, error, ...props }: SelectProps) => {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label} {props.required && <span className="text-red-500">*</span>}
            </label>
            <select
                {...props}
                id={id}
                className="flex h-10 w-full rounded-md border border-dashed bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <option value="" disabled>Select...</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    )
} 