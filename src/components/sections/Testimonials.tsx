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
        name: "Sarah Chen",
        role: "CTO, TechFlow",
        quote: "The AI automation system transformed our sales process completely. Our team now closes 40% more deals while spending less time on repetitive tasks. The intelligent lead scoring is a game-changer.",
        company: "AI-Driven Sales Platform",
    },
    {
        name: "Michael Rodriguez",
        role: "Head of Operations, SwiftScale",
        quote: "Having AI handle our customer support queries 24/7 has been revolutionary. Response times dropped from hours to seconds, and our team can focus on complex cases that truly need human expertise.",
        company: "E-commerce Solutions",
    },
    {
        name: "Emily Watson",
        role: "Product Director, DataFlow",
        quote: "The workflow automation suite eliminated our manual data processing bottlenecks. What used to take our team days now happens automatically in minutes. The ROI has been incredible.",
        company: "Enterprise Software",
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 md:py-32">
            <div className="mx-auto max-w-[120rem] px-6">
                <div className="text-left">
                    <h2 className="text-4xl font-semibold lg:text-5xl max-w-2xl">
                        What Success Looks Like
                    </h2>
                    <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
                        See how AI automation transforms business operations and drives growth.
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
                                <p className="text-sm text-primary">{testimonial.company}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
