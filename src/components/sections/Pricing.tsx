"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/form/button'
import { Card, CardContent, CardHeader } from '@/components/ui/data-display/card'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/data-display/badge'
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
        title: "Project-Based",
        subtitle: "Fixed scope, focused execution",
        price: "5,000 EUR",
        features: [
            "1 primary deliverable",
            "2-4 weeks timeline",
            "1-2 revision rounds",
            "Custom solution architecture",
            "30 days post-launch support"
        ],
        buttonText: "Start Project",
        buttonLink: "#contact"
    },
    {
        title: "Membership",
        subtitle: "Ongoing execution & support",
        price: "4,800 EUR",
        period: "/month",
        features: [
            "4 requests per month",
            "48-hour turnaround time",
            "1 active request at a time",
            "Priority support access",
            "Custom API integrations",
            "Performance monitoring",

        ],
        buttonText: "Apply Now",
        buttonLink: "https://buy.stripe.com/aEUbIT0CscsNcbmbII"
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 md:py-32 border-b border-border">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-heading)] tracking-[-0.01em] text-balance mb-6">
                        Pricing Built for Momentum.
                    </h2>
                    <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-muted-foreground max-w-2xl mx-auto">
                        Clear, value-driven pricing that scales with your needs.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <div key={index} className="relative">
                                <Card className={` border border-border/40 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50 ${tier.title === 'Membership' ? 'shadow-lg border-primary/20' : ''}`}>
                                    <CardHeader className="p-6 pb-0">
                                        <div className="space-y-4">
                                            {tier.title === 'Membership' && (
                                                <Badge variant="outline"  >
                                                    <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-green-600 font-medium">
                                                        3 spots remaining for Q1
                                                    </p>
                                                </Badge>
                                            )}
                                            <div>
                                                <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium mb-2">{tier.title}</h3>
                                                <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">{tier.subtitle}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-6">
                                        <div className="flex items-baseline gap-2 pb-2 border-b">
                                            <span className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] font-medium">{tier.price}</span>
                                            {tier.period && (
                                                <span className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">{tier.period}</span>
                                            )}
                                        </div>

                                        <ul className="space-y-4 mb-8">
                                            {tier.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-3 text-[length:var(--font-size-caption)] leading-[var(--line-height-body)]">
                                                    <ArrowRight className="size-4 mt-1 text-muted-foreground shrink-0" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            asChild
                                            size="lg"
                                            variant={tier.title === 'Membership' ? 'default' : 'outline'}
                                            className="w-full">
                                            <Link href={tier.buttonLink}>
                                                {tier.buttonText}
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
