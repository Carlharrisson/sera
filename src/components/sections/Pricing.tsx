"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/form/button'
import { Card, CardContent, CardHeader } from '@/components/ui/data-display/card'
import { ArrowRight } from 'lucide-react'

interface PricingTier {
    title: string;
    subtitle: string;
    price: string;
    period?: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
}

const pricingTiers: PricingTier[] = [
    {
        title: "Project Builds",
        subtitle: "For high-impact systems and complex workflows",
        price: "5,000 EUR",
        features: [
            "Fixes one core operational problem",
            "Built & shipped in 1-3 weeks",
            "Clear scope, fixed price",
            "Includes build, testing & handover",
            "Priced by outcome, not hours"
        ],
        buttonText: "Scope a Project",
        buttonLink: "#contact"
    },
    {
        title: "Ongoing Support",
        subtitle: "Continuous execution, like an internal team",
        price: "4,800 EUR",
        period: "/month",
        features: [
            "Four system requests per month",
            "48-hour response time",
            "Direct Slack channel access",
            "Two revisions per request",
            "Month-to-month, cancel anytime"
        ],
        buttonText: "Start Monthly Support",
        buttonLink: "https://buy.stripe.com/aEUbIT0CscsNcbmbII"
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-24 border-b border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="text-center mb-4">
                        <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-heading)] tracking-[-0.01em] text-balance">
                            Pricing Built for Execution
                        </h2>
                    </div>
                    <div>
                        <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground text-center max-w-2xl mx-auto">
                            Choose a fixed project for a specific outcome or monthly support for ongoing operational needs. No retainers, no hourly billing.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <div key={index} className="relative">
                            <Card className={`border border-border/40 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50 ${tier.title === 'Ongoing Support' ? 'shadow-lg border-primary/20' : ''}`}>
                                <CardHeader className="p-6 pb-0">
                                    <div className="space-y-4">

                                        <div>
                                            <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">{tier.title}</h3>
                                            <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">{tier.subtitle}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <div className="flex flex-col pb-2 border-b">
                                        <span className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground mb-1">
                                            {tier.title === "Project Builds" ? "Starting from" : "Fixed monthly rate"}
                                        </span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium">{tier.price}</span>
                                            {tier.period && (
                                                <span className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">{tier.period}</span>
                                            )}
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {tier.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3 text-[length:var(--font-size-caption)] leading-[var(--line-height-body)]">
                                                <ArrowRight className="size-4 mt-1 text-primary shrink-0" />
                                                <span className="text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        asChild
                                        size="lg"
                                        variant={tier.title === 'Ongoing Support' ? 'default' : 'outline'}
                                        className="w-full">
                                        <Link
                                            href={tier.buttonLink}
                                            target={tier.buttonLink.startsWith('http') ? "_blank" : "_self"}
                                            rel={tier.buttonLink.startsWith('http') ? "noopener noreferrer" : undefined}>
                                            {tier.buttonText}
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
