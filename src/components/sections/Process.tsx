"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/data-display/card'
import { Lightbulb, Blocks, Rocket } from 'lucide-react'

export default function Process() {
    return (
        <section id="process" className="py-16 md:py-24 border-b border-border overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="text-center mb-4">
                        <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-heading)] tracking-[-0.01em] text-balance">
                            From Chaos to Clarity.
                        </h2>
                    </div>
                    <div>
                        <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground text-center max-w-2xl mx-auto">
                            A streamlined process that delivers results in weeks, not months.
                            Start with a single system, then scale as you see the impact.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    <Card className="flex flex-col h-[320px] md:h-[400px] relative group hover:border-primary/20 transition-colors">
                        <CardContent className="p-6 md:p-8 flex flex-col h-full relative">
                            <span className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] absolute top-6 md:top-8 right-6 md:right-8 font-medium text-muted-foreground">01</span>
                            <div className="mb-auto">
                                <div className="flex items-center mb-6 md:mb-8">
                                    <div className="size-12 md:size-16 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Lightbulb className="size-6 md:size-8 text-primary/80" />
                                    </div>
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-4">AI Execution Strategy</h3>
                                <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground">
                                    We map out your workflow and identify every opportunity to remove friction with AI.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col h-[320px] md:h-[400px] relative group hover:border-primary/20 transition-colors">
                        <CardContent className="p-6 md:p-8 flex flex-col h-full relative">
                            <span className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] absolute top-6 md:top-8 right-6 md:right-8 font-medium text-muted-foreground">02</span>
                            <div className="mb-auto">
                                <div className="flex items-center mb-6 md:mb-8">
                                    <div className="size-12 md:size-16 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Blocks className="size-6 md:size-8 text-primary/80" />
                                    </div>
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-4">AI-Driven UX & Automation</h3>
                                <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Build and test your new automated workflow in real-time. No waiting around.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col h-[320px] md:h-[400px] relative group hover:border-primary/20 transition-colors md:col-span-2">
                        <CardContent className="p-6 md:p-8 flex flex-col h-full relative">
                            <span className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] absolute top-6 md:top-8 right-6 md:right-8 font-medium text-muted-foreground">03</span>
                            <div className="mb-auto">
                                <div className="flex items-center mb-6 md:mb-8">
                                    <div className="size-12 md:size-16 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Rocket className="size-6 md:size-8 text-primary/80" />
                                    </div>
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-4">Full AI Execution Deployment</h3>
                                <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Your system goes live with continuous learning and scaling built right in.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="max-w-3xl mx-auto mt-8 md:mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2">
                        <div className="text-center md:border-r border-border">
                            <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-medium">100% Async</p>
                            <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">No meetings required</p>
                        </div>
                        <div className="text-center md:border-r border-border">
                            <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-medium">Pause any time</p>
                            <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">Adjust to your design needs</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] font-medium">Manage via Slack</p>
                            <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">Effortless coordination</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
