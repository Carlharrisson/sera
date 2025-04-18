"use client"

import { Button } from '@/components/ui/form/button'
import { Input } from '@/components/ui/form/input'
import { Textarea } from '@/components/ui/form/textarea'
import { useEffect, useRef, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/form/select"
import { Toaster } from "@/components/ui/overlay/sonner"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/form/radio-group"

const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().min(2, "Company name must be at least 2 characters"),
    role: z.string().min(2, "Please specify your role"),
    automationGoal: z.string().min(10, "Please provide more details about your automation goals"),
    startTimeframe: z.enum(["ASAP", "1-2_weeks", "1_month_plus"], {
        required_error: "Please select your preferred start timeframe",
    }),
    executionModel: z.enum(["project_build", "ongoing_support", "not_sure"], {
        required_error: "Please select a preferred model",
    }),
    briefLink: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
})

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formError, setFormError] = useState<string | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            company: "",
            role: "",
            automationGoal: "",
            startTimeframe: undefined,
            executionModel: undefined,
            briefLink: "",
        },
        mode: "onTouched",
    })

    // Clear form error when form changes
    useEffect(() => {
        const subscription = form.watch(() => {
            if (formError) setFormError(null)
        })
        return () => subscription.unsubscribe()
    }, [form, formError])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setFormError(null)

        try {
            const response = await fetch('https://formspree.io/f/manywlrl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(values),
            })

            if (response.ok) {
                form.reset()
                toast.success("Thanks! We'll review your request and get back to you shortly.", {
                    id: 'contact-success'
                })
            } else {
                const errorData = await response.json().catch(() => null)
                throw new Error(errorData?.message || 'Failed to submit')
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
            setFormError(errorMessage)
            toast.error(errorMessage, {
                id: 'contact-error'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    // Function to determine if a field has an error
    const hasFieldError = (fieldName: keyof z.infer<typeof formSchema>) => {
        return !!form.formState.errors[fieldName]
    }

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 border-b border-border bg-gradient-to-b from-background to-background/80" id="contact">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <div ref={contentRef} className="grid grid-cols-1 gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="text-center mb-4">
                        <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-heading)] tracking-[-0.01em] text-balance bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                            Fix a Workflow or Get Ongoing Support
                        </h2>
                    </div>
                    <div>
                        <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground text-center max-w-2xl mx-auto">
                            Describe the bottleneck or manual work slowing you down. We&apos;ll follow up async to confirm scope or ask clarifying questions.
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="rounded-2xl border p-6 md:p-8 shadow-sm">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                                noValidate
                            >
                                {formError && (
                                    <div className="rounded-lg bg-destructive/10 p-4 border border-destructive text-destructive text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" role="alert">
                                        <p>{formError}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your full name"
                                                        {...field}
                                                        className={`h-11 ${hasFieldError('fullName') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                        aria-invalid={hasFieldError('fullName')}
                                                        aria-describedby={hasFieldError('fullName') ? `fullName-error` : undefined}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" id="fullName-error" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="your@email.com"
                                                        type="email"
                                                        {...field}
                                                        className={`h-11 ${hasFieldError('email') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                        aria-invalid={hasFieldError('email')}
                                                        aria-describedby={hasFieldError('email') ? `email-error` : undefined}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" id="email-error" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Company Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your company"
                                                        {...field}
                                                        className={`h-11 ${hasFieldError('company') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                        aria-invalid={hasFieldError('company')}
                                                        aria-describedby={hasFieldError('company') ? `company-error` : undefined}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" id="company-error" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="role"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Your Role</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g. Founder, Head of Ops"
                                                        {...field}
                                                        className={`h-11 ${hasFieldError('role') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                        aria-invalid={hasFieldError('role')}
                                                        aria-describedby={hasFieldError('role') ? `role-error` : undefined}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" id="role-error" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="automationGoal"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>What workflow/bottleneck needs fixing?</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Describe the specific manual task, slow process, or system gap..."
                                                    {...field}
                                                    className={`min-h-[160px] resize-none ${hasFieldError('automationGoal') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                    aria-invalid={hasFieldError('automationGoal')}
                                                    aria-describedby={hasFieldError('automationGoal') ? `automationGoal-error` : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-xs" id="automationGoal-error" />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="startTimeframe"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Preferred Start Timeframe</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger
                                                            className={`h-11 ${hasFieldError('startTimeframe') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                            aria-invalid={hasFieldError('startTimeframe')}
                                                            aria-describedby={hasFieldError('startTimeframe') ? `startTimeframe-error` : undefined}
                                                        >
                                                            <SelectValue placeholder="When would you like to start?" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="ASAP">As Soon As Possible</SelectItem>
                                                        <SelectItem value="1-2_weeks">In 1-2 Weeks</SelectItem>
                                                        <SelectItem value="1_month_plus">1 Month or Later</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage className="text-xs" id="startTimeframe-error" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="briefLink"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium">Brief or Notes Link (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Google Drive or Notion link"
                                                        {...field}
                                                        className={`h-11 ${hasFieldError('briefLink') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                        aria-invalid={hasFieldError('briefLink')}
                                                        aria-describedby={hasFieldError('briefLink') ? `briefLink-error` : undefined}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" id="briefLink-error" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="executionModel"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Preferred Model</FormLabel>
                                            <div className={hasFieldError('executionModel') ? 'border border-destructive p-3 rounded-lg' : ''}>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                                        aria-invalid={hasFieldError('executionModel')}
                                                        aria-describedby={hasFieldError('executionModel') ? `executionModel-error` : undefined}
                                                    >
                                                        <label htmlFor="project_build" className="cursor-pointer">
                                                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5">
                                                                <FormControl>
                                                                    <RadioGroupItem value="project_build" id="project_build" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal cursor-pointer select-none">
                                                                    Project Build
                                                                </FormLabel>
                                                            </FormItem>
                                                        </label>
                                                        <label htmlFor="ongoing_support" className="cursor-pointer">
                                                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5">
                                                                <FormControl>
                                                                    <RadioGroupItem value="ongoing_support" id="ongoing_support" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal cursor-pointer select-none">
                                                                    Ongoing Support
                                                                </FormLabel>
                                                            </FormItem>
                                                        </label>
                                                        <label htmlFor="not_sure" className="cursor-pointer">
                                                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5">
                                                                <FormControl>
                                                                    <RadioGroupItem value="not_sure" id="not_sure" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal cursor-pointer select-none">
                                                                    Not Sure Yet
                                                                </FormLabel>
                                                            </FormItem>
                                                        </label>
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                            <FormMessage className="text-xs" id="executionModel-error" />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-col items-center gap-6 pt-4">
                                    {form.formState.submitCount > 0 && !form.formState.isValid && (
                                        <div className="w-full rounded-lg bg-destructive/10 p-4 border border-destructive text-destructive text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" role="alert">
                                            <p>Please fix the errors above before submitting.</p>
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center gap-4">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full md:w-auto min-w-[240px] text-[length:var(--font-size-body)] leading-[var(--line-height-body)]"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                    <span>Sending...</span>
                                                </div>
                                            ) : (
                                                'Submit Request'
                                            )}
                                        </Button>
                                        <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                            Or email us directly: <a href="mailto:hello@seraworks.com" className="text-primary hover:underline">hello@seraworks.com</a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </section>
    )
}
