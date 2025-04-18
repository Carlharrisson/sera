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
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl mt-3">Built by Builders, Not Advisors</h2>
                        <p className="text-muted-foreground mt-6 mx-auto max-w-3xl">
                            Sera builds operational systems, fast. No decks, no strategy phases. Just automation that works on day one and saves your team hours every week.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Traditional column */}
                        <div className="space-y-8 rounded-xl border border-foreground/10 bg-background/60 backdrop-blur-md shadow-xs p-6">
                            <h3 className="text-xl font-semibold">Consultants & Agencies</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Strategy over Execution</p>
                                        <p className="text-muted-foreground text-sm">Months of planning, decks, and roadmaps before build</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Slow Time-to-Value</p>
                                        <p className="text-muted-foreground text-sm">Solutions take months or quarters to go live</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Focus on Replacing Tools</p>
                                        <p className="text-muted-foreground text-sm">Expensive overhauls instead of targeted fixes</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Advisory, Not Operational</p>
                                        <p className="text-muted-foreground text-sm">High-level advice, not hands-on building</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        <X className="size-4 text-foreground/60" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Requires Heavy Internal Lift</p>
                                        <p className="text-muted-foreground text-sm">Needs significant team time for management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sera column */}
                        <div className="group relative">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[oklch(0.500_0.133_173.7/0.2)] to-[oklch(0.693_0.133_173.7/0.3)] blur-[32px] transition-all duration-500 group-hover:blur-[40px]"></div>
                            <div className="relative space-y-8 rounded-xl border-2 border-[oklch(0.564_0.133_173.7)/0.5] bg-background/95 backdrop-blur-md p-6 shadow-lg shadow-[oklch(0.436_0.133_173.7)/0.15] transition-all duration-300 hover:border-[oklch(0.564_0.133_173.7)/0.8]">
                                <h3 className="text-xl font-semibold">Sera</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Execution over Strategy</p>
                                            <p className="text-muted-foreground text-sm">We build systems, not PowerPoints. Live in days.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Ships in Days</p>
                                            <p className="text-muted-foreground text-sm">Fast deployment focused on immediate impact</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Integrates with Your Stack</p>
                                            <p className="text-muted-foreground text-sm">Builds around how your team works, doesn&apos;t replace it</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Operational, Not Strategic</p>
                                            <p className="text-muted-foreground text-sm">Focus on fixing bottlenecks and saving hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0">
                                            <Check className="size-4 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Zero Internal Overhead</p>
                                            <p className="text-muted-foreground text-sm">Async process, managed via Slack. Frees up your team.</p>
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