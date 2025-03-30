"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X } from 'lucide-react'

export default function Comparison() {
    const sectionRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        if (contentRef.current) {
            // Set initial state - blurred and transparent for the entire section content
            gsap.set(contentRef.current, {
                opacity: 0,
                filter: 'blur(24px)',
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

        return () => {
            // Clean up ScrollTrigger when component unmounts
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section ref={sectionRef} className="py-16 md:py-32 dark:bg-transparent" id="comparison">
            <div className="mx-auto max-w-5xl px-6">
                <div ref={contentRef}>
                    <div className="text-center mb-16">
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Why Choose Us</span>
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl mt-3">Results First, Scale Later</h2>
                        <p className="text-muted-foreground mt-6 mx-auto max-w-3xl">
                            We deliver working solutions that prove their value immediately.
                            No lengthy consultations - just practical AI automation that drives results.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Traditional column */}
                        <div className="space-y-8 rounded-xl border border-foreground/10 bg-background/60 backdrop-blur-md shadow-xs p-6">
                            <h3 className="text-xl font-semibold">Traditional AI Consultants</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Strategy without implementation</p>
                                        <p className="text-muted-foreground text-sm">Lengthy reports and roadmaps without real solutions</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Months of planning</p>
                                        <p className="text-muted-foreground text-sm">Long strategy phases before any implementation</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Complex pricing structure</p>
                                        <p className="text-muted-foreground text-sm">Hidden fees and unexpected costs</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Poor user experience</p>
                                        <p className="text-muted-foreground text-sm">Powerful AI with difficult interfaces</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">No clear ROI</p>
                                        <p className="text-muted-foreground text-sm">Undefined success metrics and value</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sera column */}
                        <div className="group relative">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[oklch(0.500_0.133_173.7/0.2)] to-[oklch(0.693_0.133_173.7/0.3)] blur-[32px] transition-all duration-500 group-hover:blur-[40px]"></div>
                            <div className="relative space-y-8 rounded-xl border-2 border-[oklch(0.564_0.133_173.7)/0.5] bg-background/95 backdrop-blur-md p-6 shadow-lg shadow-[oklch(0.436_0.133_173.7)/0.15] transition-all duration-300 hover:border-[oklch(0.564_0.133_173.7)/0.8]">
                                <h3 className="text-xl font-semibold">Sera Approach</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">2-Week Implementation</p>
                                            <p className="text-muted-foreground text-sm">Quick discovery and rapid deployment</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Premium Design Integration</p>
                                            <p className="text-muted-foreground text-sm">Beautiful interfaces your team will love</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Clear, No-Fluff Pricing</p>
                                            <p className="text-muted-foreground text-sm">Transparent pricing with no hidden costs</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Guaranteed ROI</p>
                                            <p className="text-muted-foreground text-sm">Measurable results from day one</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Start Small, Scale Big</p>
                                            <p className="text-muted-foreground text-sm">Begin with one process, expand with results</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 