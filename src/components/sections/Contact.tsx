"use client"

import { Button } from '@/components/ui/form/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { create } from 'zustand'
import Cal, { getCalApi } from "@calcom/embed-react";

// Define the Zustand store for contact form state
interface ContactStore {
    activeTab: 'quote' | 'call';
    setActiveTab: (tab: 'quote' | 'call') => void;
}

const useContactStore = create<ContactStore>((set) => ({
    activeTab: 'quote',

    setActiveTab: (tab: 'quote' | 'call') => {
        set({ activeTab: tab });
    },
}));

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const { activeTab, setActiveTab } = useContactStore()

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        if (contentRef.current) {
            // Set initial state - blurred and transparent for the entire section content
            gsap.set(contentRef.current, {
                opacity: 0,
                filter: 'blur(80px)',
            })

            // Create the animation for the entire content to fade in and unblur simultaneously
            gsap.to(contentRef.current, {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                }
            })
        }

        // Clean up component when unmounting
        return () => {
            // Clean up ScrollTrigger
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    // Initialize Cal.com API
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            // Set Cal.com UI preferences
            cal?.('ui', {
                styles: { branding: { brandColor: "#18181B" } },
                hideEventTypeDetails: true,
            });
        })();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-32" id="contact">
            <div className="mx-auto max-w-5xl px-6">
                <div ref={contentRef}>
                    <div className="text-center mb-8">
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Get in Touch</span>
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl mt-3">Ready for AI-Powered Automation?</h2>
                        <p className="text-muted-foreground mt-6 mx-auto max-w-3xl">
                            Do you have a completely different idea in mind? Feel free to contact us.
                        </p>
                    </div>

                    <div className="mt-8 max-w-3xl mx-auto">
                        {/* Tabs */}
                        <div className="flex justify-center gap-4 mb-8">
                            <Button
                                variant={activeTab === 'quote' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('quote')}
                                className="px-6"
                            >
                                Request a quote
                            </Button>
                            <Button
                                variant={activeTab === 'call' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('call')}
                                className="px-6"
                            >
                                Book a call
                            </Button>
                        </div>

                        {/* Content container */}
                        <div className="w-full">
                            {activeTab === 'quote' && (
                                <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                                    <div className="px-6 py-8 md:p-8">
                                        <form className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Email <span className="text-red-500">*</span>
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="your@email.com"
                                                        required
                                                        className="border-dashed"
                                                    />
                                                </div>

                                                <div className="space-y-2 md:col-span-2">
                                                    <label htmlFor="details" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Project details <span className="text-red-500">*</span>
                                                    </label>
                                                    <Textarea
                                                        id="details"
                                                        placeholder="Tell us about your project"
                                                        required
                                                        className="min-h-[120px] border-dashed"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="budget" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        What is your budget? <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        id="budget"
                                                        required
                                                        defaultValue=""
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

                                                <div className="space-y-2">
                                                    <label htmlFor="timeline" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        When do you want to go live with your project? <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        id="timeline"
                                                        required
                                                        defaultValue=""
                                                        className="flex h-10 w-full rounded-md border border-dashed bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    >
                                                        <option value="" disabled>Select...</option>
                                                        <option value="1month">Within 1 month</option>
                                                        <option value="3months">Within 3 months</option>
                                                        <option value="6months">Within 6 months</option>
                                                        <option value="unsure">Not sure yet</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-3 mb-8">
                                                <label className="text-sm font-medium leading-none mb-4 block">
                                                    What type of project do you need?
                                                </label>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="ai-workflow" className="h-5 w-5 rounded-sm border border-zinc-300 focus:ring-0 focus:ring-offset-0 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white" />
                                                        <label htmlFor="ai-workflow" className="text-sm font-medium">Custom AI Workflow Development</label>
                                                    </div>

                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="ai-design" className="h-5 w-5 rounded-sm border border-zinc-300 focus:ring-0 focus:ring-offset-0 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white" />
                                                        <label htmlFor="ai-design" className="text-sm font-medium">AI-First Design & UX</label>
                                                    </div>

                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="process-automation" className="h-5 w-5 rounded-sm border border-zinc-300 focus:ring-0 focus:ring-offset-0 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white" />
                                                        <label htmlFor="process-automation" className="text-sm font-medium">Intelligent Process Automation</label>
                                                    </div>

                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="ai-analytics" className="h-5 w-5 rounded-sm border border-zinc-300 focus:ring-0 focus:ring-offset-0 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white" />
                                                        <label htmlFor="ai-analytics" className="text-sm font-medium">AI Analytics & Insights</label>
                                                    </div>

                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox id="ai-integration" className="h-5 w-5 rounded-sm border border-zinc-300 focus:ring-0 focus:ring-offset-0 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white" />
                                                        <label htmlFor="ai-integration" className="text-sm font-medium">Seamless AI Integration</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800">Submit</Button>
                                        </form>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'call' && (
                                <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                                    <div className="w-full" style={{ minHeight: "100vh" }}>
                                        <Cal
                                            calLink="carl-harrisson-9w1ec9/30min"
                                            style={{ width: "100%", height: "100%", minHeight: "100vh" }}
                                            config={{
                                                layout: "week_view",
                                                hideEventTypeDetails: "true",
                                                theme: "light",
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
