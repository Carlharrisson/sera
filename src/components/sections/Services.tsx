"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/data-display/card'
import { Workflow, Layers, LayoutDashboard, Bot } from 'lucide-react'

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-24 border-b border-border overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="text-center mb-4">
                        <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-heading)] tracking-[-0.01em] text-balance">
                            Work Smarter, Not Harder
                        </h2>
                    </div>
                    <div>
                        <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground text-center max-w-2xl mx-auto">
                            Transform your daily operations with smart solutions that save time, reduce errors, and help your team focus on what matters most.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    <Card className="flex flex-col h-[280px] relative group hover:border-primary/20 transition-colors">
                        <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="mb-auto">
                                <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                    <Workflow className="size-6 text-primary/80" />
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">Workflow Automation</h3>
                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Automate repetitive tasks and let your systems work 24/7 while your team focuses on growth.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col h-[280px] relative group hover:border-primary/20 transition-colors">
                        <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="mb-auto">
                                <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                    <Layers className="size-6 text-primary/80" />
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">Adaptive UX</h3>
                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Smart interfaces that learn from your team&apos;s habits to make work flow naturally.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col h-[280px] relative group hover:border-primary/20 transition-colors">
                        <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="mb-auto">
                                <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                    <LayoutDashboard className="size-6 text-primary/80" />
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">Dashboards & Ops Tools</h3>
                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Clear insights and simple controls to keep your automated systems running smoothly.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col h-[280px] relative group hover:border-primary/20 transition-colors">
                        <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="mb-auto">
                                <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                    <Bot className="size-6 text-primary/80" />
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">AI Integration</h3>
                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Enhance your existing tools with smart features, without disrupting your workflow.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
