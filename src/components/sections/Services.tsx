"use client"

import { Card, CardContent } from '@/components/ui/data-display/card'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function Services() {
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
        <section ref={sectionRef} className="py-16 md:py-32 dark:bg-transparent" id="services">
            <div className="mx-auto max-w-5xl px-6">
                <div ref={contentRef} className="services-content">
                    <div className="text-center mb-16">
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Our Services</span>
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl mt-3">AI Automation + Design Excellence</h2>
                        <p className="text-muted-foreground mt-6 mx-auto max-w-3xl">
                            Sera combines powerful AI automation with exceptional design to create seamless, intelligent solutions.
                            We transform manual processes into efficient workflows while ensuring intuitive user experiences that drive adoption.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 grid grid-cols-6 gap-6">
                            <Card className="card relative col-span-6 lg:col-span-2">
                                <CardContent className="flex flex-col h-full p-5 space-y-3">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/images/Keyboard.svg"
                                            alt="AI Workflow"
                                            width={80}
                                            height={80}
                                            className="mb-2"
                                        />
                                    </div>
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-lg font-medium transition">Custom AI Workflow Development</h2>
                                        <p className="text-muted-foreground text-sm">Transform manual processes with tailored AI solutions that integrate seamlessly with your existing tools. From data processing to decision automation, we build intelligent systems that work for you.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="card relative col-span-6 lg:col-span-2">
                                <CardContent className="flex flex-col h-full p-5 space-y-3">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/images/Interface.svg"
                                            alt="UX/UI Design"
                                            width={80}
                                            height={80}
                                            className="mb-2"
                                        />
                                    </div>
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-lg font-medium transition">AI-First Design & UX</h2>
                                        <p className="text-muted-foreground text-sm">Create intuitive interfaces for AI tools that users love. We combine automation power with thoughtful design to ensure high adoption and seamless user experiences.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="card relative col-span-6 lg:col-span-2">
                                <CardContent className="flex flex-col h-full p-5 space-y-3">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/images/Client Aquisition.svg"
                                            alt="Client Automation"
                                            width={80}
                                            height={80}
                                            className="mb-2"
                                        />
                                    </div>
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-lg font-medium transition">Intelligent Process Automation</h2>
                                        <p className="text-muted-foreground text-sm">Automate repetitive tasks, streamline workflows, and enhance efficiency with AI-powered solutions that adapt to your business needs.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="card relative col-span-6 lg:col-span-3">
                                <CardContent className="grid h-full grid-cols-2 items-center gap-8 p-8">
                                    <div className="space-y-3">
                                        <h2 className="text-xl font-medium transition">AI Analytics & Insights</h2>
                                        <p className="text-muted-foreground">Turn data into actionable insights with AI-powered analytics, predictive modeling, and intelligent dashboards for data-driven decisions.</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/images/Data.svg"
                                            alt="AI Analytics"
                                            width={160}
                                            height={160}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="card relative col-span-6 lg:col-span-3">
                                <CardContent className="grid h-full grid-cols-2 items-center gap-8 p-8">
                                    <div className="space-y-3">
                                        <h2 className="text-xl font-medium transition">Seamless AI Integration</h2>
                                        <p className="text-muted-foreground">Connect AI solutions with your existing tools and systems for unified workflows that enhance productivity and reduce manual work.</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/images/Shopping Cart.svg"
                                            alt="Integration"
                                            width={160}
                                            height={160}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
