"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/data-display/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/data-display/avatar'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Testimonials() {
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
        <section ref={sectionRef} id="testimonials" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div ref={contentRef}>
                    <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Industry Endorsements</span>
                        <h2 className="text-4xl font-semibold lg:text-5xl mt-3">AI Automation Expertise</h2>
                        <p>Endorsements from industry professionals on our team&apos;s capabilities in AI-driven automation and precision design.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 mt-16">
                        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                            <CardHeader>
                                <Image className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="TechFlow Logo" height="24" width="24" />
                            </CardHeader>
                            <CardContent>
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-xl font-medium">Sera transformed our entire sales funnel with AI automation. Their team built an intelligent system that automated lead capture, scoring, and follow-ups. The results were immediate—our sales team now focuses on high-value conversations while the AI handles repetitive tasks. We&apos;ve seen a 35% increase in conversions and dramatically reduced our manual workload.</p>

                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Sarah Chen" height="400" width="400" loading="lazy" />
                                            <AvatarFallback>SC</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <cite className="text-sm font-medium">Sarah Chen</cite>
                                            <span className="text-muted-foreground block text-sm">CTO, TechFlow</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                        <Card className="md:col-span-2">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-xl font-medium">The AI-powered dashboard Sera built for us has completely changed how we make decisions. Real-time data, automated reporting, and intelligent insights all in one place—it&apos;s been a game-changer for our operations.</p>

                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarImage src="https://tailus.io/images/reviews/jonathan.webp" alt="Michael Rodriguez" height="400" width="400" loading="lazy" />
                                            <AvatarFallback>MR</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-medium">Michael Rodriguez</cite>
                                            <span className="text-muted-foreground block text-sm">Operations Director, Elevate Solutions</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p>Sera&apos;s AI-first UX approach completely transformed our product. The interface is intuitive, the automation is seamless, and our users love how effortless everything feels.</p>

                                    <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                        <Avatar className="size-12">
                                            <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Emma Watson" height="400" width="400" loading="lazy" />
                                            <AvatarFallback>EW</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-medium">Emma Watson</cite>
                                            <span className="text-muted-foreground block text-sm">Product Lead, NexGen</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                        <Card className="card variant-mixed">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p>Our e-commerce store was struggling with abandoned carts until Sera implemented their AI retention automation. Now we&apos;ve seen a 40% recovery rate and significantly higher customer LTV.</p>

                                    <div className="grid grid-cols-[auto_1fr] gap-3">
                                        <Avatar className="size-12">
                                            <AvatarImage src="https://tailus.io/images/reviews/rodrigo.webp" alt="David Park" height="400" width="400" loading="lazy" />
                                            <AvatarFallback>DP</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">David Park</p>
                                            <span className="text-muted-foreground block text-sm">Founder, Urban Essentials</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
