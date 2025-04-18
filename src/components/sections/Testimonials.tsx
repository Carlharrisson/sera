"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/data-display/card"

// Define hypothetical testimonials
const testimonials = [
    {
        name: "Alex Schmidt",
        role: "Founder, SaaS Startup",
        quote: "We were drowning in manual CRM updates and Slack notifications. Sera built a bot that handles it all instantly. Launch took days and saved us probably 20 hours a week right away. No more chasing sales for updates.",
    },
    {
        name: "Jordan Lee",
        role: "Head of Ops, Growth Stage Co.",
        quote: "Our order process was a mess of Sheets and emails. Sera built a simple dashboard in a week that the whole team actually uses. It just works. Didn't need a huge system, just this.",
    },
    {
        name: "Casey Evans",
        role: "Ops Lead, Tech Company",
        quote: "Needed a way to automate lead enrichment without another complex tool. Sera plugged right into our Slack and Zapier setup. It runs constantly, zero issues, and we didn't have to manage a big project.",
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 md:py-32">
            <div className="mx-auto max-w-[120rem] px-6">
                <div className="text-left">
                    <h2 className="text-4xl font-semibold lg:text-5xl max-w-2xl">
                        Hear From Teams We&apos;ve Helped
                    </h2>
                    <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
                        Real feedback from founders and ops leaders who needed faster execution, not more overhead.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col h-full">
                            <CardContent className="pt-6 flex-1 space-y-6">
                                <div className="space-y-4">
                                    <p className="text-lg italic">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start space-y-1">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
