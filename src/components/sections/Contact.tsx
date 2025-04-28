"use client"

import { Button } from '@/components/ui/form/button'
import { Input } from '@/components/ui/form/input'
import { Textarea } from '@/components/ui/form/textarea'
import { useEffect, useRef, useState } from 'react'
import { Toaster } from "@/components/ui/overlay/sonner"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/form/radio-group"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    workEmail: z.string().email("Please enter a valid work email address"),
    role: z.string().min(2, "Please specify your role"),
    company: z.string().optional(),
    currentProcess: z.string().min(10, "Please provide more details about the process that's slowing you down"),
    currentTools: z.string().min(2, "Please specify the tools you're using"),
    hoursLost: z.enum(["under_5", "5_to_10", "10_to_20", "over_20"]).optional(),
    impact: z.string().optional(),
    timeframe: z.enum(["ASAP", "few_weeks", "exploring"]).optional(),
    systemOwner: z.string().min(2, "Please specify who will own the system"),
})

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formError, setFormError] = useState<string | null>(null)
    const [resetKey, setResetKey] = useState(0)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            workEmail: "",
            role: "",
            company: "",
            currentProcess: "",
            currentTools: "",
            hoursLost: undefined,
            impact: "",
            timeframe: undefined,
            systemOwner: "",
        },
        mode: "onTouched",
    })
    const defaultFormValues = form.control._defaultValues; // Store default values

    // Clear form error when form changes
    useEffect(() => {
        const subscription = form.watch(() => {
            if (formError) setFormError(null)
        })
        return () => subscription.unsubscribe()
    }, [form, formError])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form submission started with values:", values)
        setIsSubmitting(true)
        setFormError(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            console.log("API response received:", response)

            if (response.ok) {
                console.log("Form submission successful (response.ok)")
                // Reset the entire form using the stored default values
                form.reset(defaultFormValues)
                setFormError(null)
                // Force remount of RadioGroup components
                setResetKey(prev => prev + 1)
                // Remove all existing toasts and show a single success message
                toast.dismiss()
                setTimeout(() => {
                    toast.success("Build request submitted. We'll review and respond within 24 hours.", {
                        id: 'contact-form-success',
                        duration: 5000,
                        className: "bg-background text-foreground border-border",
                        // Prevent duplicate toasts
                        dismissible: true,
                    })
                }, 100)
            } else {
                const errorData = await response.json().catch(() => ({ message: "Failed to parse error response" }))
                console.error("Form submission failed (response not ok):", response.status, errorData)
                throw new Error(errorData?.message || 'Failed to submit')
            }
        } catch (error) {
            console.error("Error during form submission process:", error)
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
            setFormError(errorMessage)
        } finally {
            console.log("Form submission finished (finally block)")
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
                            Submit a Build Request
                        </h2>
                    </div>
                    <div>
                        <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground text-center max-w-2xl mx-auto">
                            Describe the manual process slowing you down. We&apos;ll scope the fix and build the system. Expect a response within 24 hours.
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
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Your name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className={`h-11 ${hasFieldError('name') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                        aria-invalid={hasFieldError('name')}
                                                        aria-describedby={hasFieldError('name') ? `name-error` : undefined}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" id="name-error" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="workEmail"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Work email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        {...field}
                                                        className={`h-11 ${hasFieldError('workEmail') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                        aria-invalid={hasFieldError('workEmail')}
                                                        aria-describedby={hasFieldError('workEmail') ? `workEmail-error` : undefined}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" id="workEmail-error" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="role"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Your role</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Founder, COO, Ops Lead…"
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
                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium">Company name (optional)</FormLabel>
                                                <FormControl>
                                                    <Input
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
                                </div>

                                <FormField
                                    control={form.control}
                                    name="currentProcess"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>What process is slowing you down right now?</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Example: Manually updating Salesforce after calls, chasing approvals in Slack, copy-pasting between Sheets and Airtable..."
                                                    {...field}
                                                    rows={3}
                                                    className={`resize-none ${hasFieldError('currentProcess') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                    aria-invalid={hasFieldError('currentProcess')}
                                                    aria-describedby={hasFieldError('currentProcess') ? `currentProcess-error` : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-xs" id="currentProcess-error" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="currentTools"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>What tools are you using for this today?</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Slack, Airtable, Salesforce, HubSpot, Sheets..."
                                                    {...field}
                                                    className={`h-11 ${hasFieldError('currentTools') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                    aria-invalid={hasFieldError('currentTools')}
                                                    aria-describedby={hasFieldError('currentTools') ? `currentTools-error` : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-xs" id="currentTools-error" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="hoursLost"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium">Hours lost per week to this process</FormLabel>
                                            <div className={hasFieldError('hoursLost') ? 'border border-destructive p-3 rounded-lg' : ''}>
                                                <FormControl>
                                                    <RadioGroup
                                                        key={`hoursLost-${resetKey}`}
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        className="grid grid-cols-1 md:grid-cols-4 gap-4"
                                                        aria-invalid={hasFieldError('hoursLost')}
                                                        aria-describedby={hasFieldError('hoursLost') ? `hoursLost-error` : undefined}
                                                    >
                                                        {[
                                                            { value: "under_5", label: "Under 5" },
                                                            { value: "5_to_10", label: "5-10 hours" },
                                                            { value: "10_to_20", label: "10-20 hours" },
                                                            { value: "over_20", label: "20+ hours" },
                                                        ].map((option) => (
                                                            <FormItem key={option.value}>
                                                                <FormControl>
                                                                    <label
                                                                        htmlFor={option.value}
                                                                        className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50 [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5 cursor-pointer text-[length:var(--font-size-caption)] leading-[var(--line-height-body)]"
                                                                    >
                                                                        <RadioGroupItem
                                                                            value={option.value}
                                                                            id={option.value}
                                                                            className="translate-y-[2px]"
                                                                        />
                                                                        <span className="font-normal select-none text-sm">
                                                                            {option.label}
                                                                        </span>
                                                                    </label>
                                                                </FormControl>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                            <FormMessage className="text-xs" id="hoursLost-error" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="impact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium">What breaks because this isn&apos;t automated?</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Examples: Leads dropped, deals stalled, engineers doing ops work, team wasting hours..."
                                                    {...field}
                                                    rows={2}
                                                    className={`resize-none ${hasFieldError('impact') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                    aria-invalid={hasFieldError('impact')}
                                                    aria-describedby={hasFieldError('impact') ? `impact-error` : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-xs" id="impact-error" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="timeframe"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>How soon do you want this fixed?</FormLabel>
                                            <div className={hasFieldError('timeframe') ? 'border border-destructive p-3 rounded-lg' : ''}>
                                                <FormControl>
                                                    <RadioGroup
                                                        key={`timeframe-${resetKey}`}
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                                        aria-invalid={hasFieldError('timeframe')}
                                                        aria-describedby={hasFieldError('timeframe') ? `timeframe-error` : undefined}
                                                    >
                                                        {[
                                                            { value: "ASAP", label: "ASAP" },
                                                            { value: "few_weeks", label: "Within a few weeks" },
                                                            { value: "exploring", label: "Just exploring" },
                                                        ].map((option) => (
                                                            <FormItem key={option.value}>
                                                                <FormControl>
                                                                    <label
                                                                        htmlFor={option.value}
                                                                        className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50 [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5 cursor-pointer text-[length:var(--font-size-caption)] leading-[var(--line-height-body)]"
                                                                    >
                                                                        <RadioGroupItem
                                                                            value={option.value}
                                                                            id={option.value}
                                                                            className="translate-y-[2px]"
                                                                        />
                                                                        <span className="font-normal select-none text-sm">
                                                                            {option.label}
                                                                        </span>
                                                                    </label>
                                                                </FormControl>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                            <FormMessage className="text-xs" id="timeframe-error" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="systemOwner"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" required>Who on your team will own this system?</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="We need one point of contact for feedback & adoption."
                                                    {...field}
                                                    className={`h-11 ${hasFieldError('systemOwner') ? 'border-destructive focus-visible:ring-destructive/20' : ''}`}
                                                    aria-invalid={hasFieldError('systemOwner')}
                                                    aria-describedby={hasFieldError('systemOwner') ? `systemOwner-error` : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-xs" id="systemOwner-error" />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-col items-center gap-6 pt-4">
                                    {/* Show server-side error from Formspree */}
                                    {formError && (
                                        <div className="w-full rounded-lg bg-destructive/10 p-4 border border-destructive text-destructive text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium" role="alert">
                                            <p>{formError}</p>
                                        </div>
                                    )}
                                    {/* Client-side validation errors are shown below each field by <FormMessage /> */}

                                    <div className="flex flex-col items-center gap-4">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full md:w-auto min-w-[240px] text-[length:var(--font-size-body)] leading-[var(--line-height-body)] cursor-pointer"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                    <span>Sending...</span>
                                                </div>
                                            ) : (
                                                'Submit Build Request'
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
            {/* <Toaster position="bottom-right" /> // Removed: Toaster should be global */}
        </section>
    )
}
