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
                            Built to Fix Your Operational Bottlenecks
                        </h2>
                    </div>
                    <div>
                        <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground text-center max-w-2xl mx-auto">
                            We build specific systems to solve painful workflows: Slack bots, custom integrations, internal dashboards. Always fast, always functional.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    <Card className="flex flex-col h-[280px] relative group hover:border-primary/20 transition-colors">
                        <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="mb-auto">
                                <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                    <Workflow className="size-6 text-primary/80" />
                                </div>
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">Automated Workflows</h3>
                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Replace manual CRM updates, broken handoffs, and copy-paste tasks. Built in days. Saves 20+ hours/week.
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
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">Custom Internal Tools</h3>
                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Get the dashboards, interfaces, and simple tools your team needs without complex builds. Fixes operational gaps fast.
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
                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">AI & Slack Assistants</h3>
                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                    Answer repetitive questions, qualify leads, and trigger workflows directly in Slack. Reduces noise, increases speed.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
