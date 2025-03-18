"use client"

import { Card, CardContent } from '@/components/ui/data-display/card'
import { Workflow, Sparkles, Zap, Link } from 'lucide-react'
import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Process() {
    const sectionRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

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

        return () => {
            // Clean up ScrollTrigger when component unmounts
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section ref={sectionRef} id="process" className="py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div ref={contentRef} className="process-content">
                    <div className="text-center mb-8 md:mb-16">
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Our Execution Framework</span>
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl mt-3">Strategic AI Implementation</h2>
                        <p className="mt-4">Our proven execution framework ensures successful AI automation implementation through careful planning, iterative development, and continuous optimization.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="group shadow-zinc-950/5 relative">
                            <CardContent className="flex flex-col h-full p-8 space-y-6">
                                <span className="absolute top-4 left-4 text-muted-foreground text-sm font-medium">01</span>
                                <div className="flex items-center justify-center">
                                    <CardDecorator>
                                        <Zap className="size-6" aria-hidden />
                                    </CardDecorator>
                                </div>
                                <div className="space-y-3 text-center">
                                    <h3 className="text-xl font-medium">Discovery & Strategy</h3>
                                    <p className="text-muted-foreground text-sm">Deep analysis of your processes, identification of automation opportunities, and development of a tailored AI implementation roadmap.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5 relative">
                            <CardContent className="flex flex-col h-full p-8 space-y-6">
                                <span className="absolute top-4 left-4 text-muted-foreground text-sm font-medium">02</span>
                                <div className="flex items-center justify-center">
                                    <CardDecorator>
                                        <Workflow className="size-6" aria-hidden />
                                    </CardDecorator>
                                </div>
                                <div className="space-y-3 text-center">
                                    <h3 className="text-xl font-medium">Design & Development</h3>
                                    <p className="text-muted-foreground text-sm">Iterative development of AI solutions with user-centric design, ensuring seamless integration with your existing tools and workflows.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5 relative">
                            <CardContent className="flex flex-col h-full p-8 space-y-6">
                                <span className="absolute top-4 left-4 text-muted-foreground text-sm font-medium">03</span>
                                <div className="flex items-center justify-center">
                                    <CardDecorator>
                                        <Sparkles className="size-6" aria-hidden />
                                    </CardDecorator>
                                </div>
                                <div className="space-y-3 text-center">
                                    <h3 className="text-xl font-medium">Launch & Optimize</h3>
                                    <p className="text-muted-foreground text-sm">Smooth deployment, team training, and continuous optimization of AI systems to ensure maximum efficiency and ROI.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Big block for Continuous Partnership */}
                    <Card className="group shadow-zinc-950/5 relative mt-6">
                        <CardContent className="flex flex-col p-8 space-y-6">
                            <span className="absolute top-4 left-4 text-muted-foreground text-sm font-medium">04</span>
                            <div className="flex items-center justify-center">
                                <CardDecorator>
                                    <Link className="size-6" aria-hidden />
                                </CardDecorator>
                            </div>
                            <div className="space-y-3 text-center">
                                <h3 className="text-xl font-medium">Continuous Partnership</h3>
                                <p className="text-muted-foreground text-sm mx-auto max-w-2xl">
                                    Success with AI automation requires ongoing refinement and support. Through our membership model,
                                    we provide continuous optimization, monitoring, and enhancement of your AI systems. As your business
                                    grows, we scale and adapt your automation solutions to meet evolving needs.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bottom row with 3 features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="flex flex-col items-center text-center p-4">
                            <span className="font-medium text-sm mb-2">Rapid Implementation</span>
                            <p className="text-xs text-muted-foreground">From strategy to execution in weeks, not months</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-4">
                            <span className="font-medium text-sm mb-2">Flexible Engagement</span>
                            <p className="text-xs text-muted-foreground">Project-based or ongoing membership options</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-4">
                            <span className="font-medium text-sm mb-2">Dedicated Support</span>
                            <p className="text-xs text-muted-foreground">Direct access to your AI automation team</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
