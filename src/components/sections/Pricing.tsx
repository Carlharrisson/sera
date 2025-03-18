"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/form/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/data-display/card'
import { Check } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Pricing() {
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
        <section ref={sectionRef} id="pricing" className="py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-6">
                <div ref={contentRef}>
                    <div className="mx-auto max-w-2xl space-y-6 text-center">
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Pricing Options</span>
                        <h1 className="text-center text-4xl font-semibold lg:text-5xl mt-3">Flexible AI Implementation</h1>
                        <p>Choose the engagement model that best fits your AI automation and design needs, with clear pricing and scalable solutions.</p>
                    </div>

                    <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Project-Based</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">$5,000</span>
                                <CardDescription className="text-sm">Starting at, per project</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {[
                                        'One custom AI automation solution',
                                        'User-centric interface design',
                                        'Integration with existing systems',
                                        'Training & documentation',
                                        'Post-launch support period'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="#contact">Request Quote</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="relative flex flex-col">
                            <span className="bg-[oklch(0.564_0.133_173.7)] absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[oklch(0.564_0.133_173.7)] glow-effect">Recommended</span>

                            <CardHeader>
                                <CardTitle className="font-medium">Membership</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">$4,800 / mo</span>
                                <CardDescription className="text-sm">Continuous partnership</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {[
                                        'Multiple AI workflow automations',
                                        'Continuous system optimization',
                                        'AI-powered analytics & insights',
                                        'Dedicated automation team',
                                        'Monthly strategy & planning',
                                        'Priority support response'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button asChild className="w-full bg-[oklch(0.564_0.133_173.7)] hover:bg-[oklch(0.500_0.133_173.7)]">
                                    <Link href="https://buy.stripe.com/test_cN22bS7ey8sQ1uo6or">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Enterprise</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">Custom</span>
                                <CardDescription className="text-sm">Tailored solutions</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {[
                                        'Enterprise-wide AI strategy',
                                        'Custom AI solution development',
                                        'Full-scale system integration',
                                        'Dedicated development team',
                                        'Custom SLAs & support',
                                        'Quarterly business reviews'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="#contact">Contact Sales</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
