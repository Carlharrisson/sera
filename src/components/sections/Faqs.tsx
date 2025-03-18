"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/common/accordion"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
    {
        question: "What is Sera's AI-First Execution approach?",
        answer: (
            <p>
                Sera is an AI-first execution powerhouse that combines automation with precision design to build seamless, scalable systems. We engineer solutions that eliminate inefficiencies, optimize business processes, and enhance digital interactions through AI-driven automation, allowing your business to move faster and scale without friction.
            </p>
        ),
    },
    {
        question: "How does Sera's Membership Model work?",
        answer: (
            <p>
                Our Membership Model provides seamless, ongoing AI execution, automation, and design support for $4,800/month. This includes unlimited AI workflow automation & system optimization, AI-powered dashboards & product execution, UX/UI design for AI-first experiences, and a private Slack channel for direct collaboration with our team.
            </p>
        ),
    },
    {
        question: "What types of projects can Sera handle?",
        answer: (
            <p>
                Sera specializes in three core areas: AI Automation & Workflow Execution, AI-First UX/UI & Digital Product Design, and AI-Optimized E-Commerce Automation & Growth. We can handle everything from end-to-end business automation and AI-powered dashboards to intelligent interfaces, seamless digital products, and AI-optimized e-commerce solutions.
            </p>
        ),
    },
    {
        question: "How is the Project-Based pricing structured?",
        answer: (
            <p>
                Our Project-Based pricing starts at $5,000 per project and includes AI workflow automation or dashboard design, custom-built interfaces or product execution, and 48-hour updates & iteration support. The exact price depends on the scope and complexity of your specific project requirements.
            </p>
        ),
    },
    {
        question: "What is your typical timeline for implementing AI automation?",
        answer: (
            <p>
                Our Strategic AI Implementation Framework follows a proven process: Discovery & Strategy to analyze your needs and create a roadmap, Design & Development to build and integrate AI solutions, and Launch & Optimize for deployment and continuous improvement. We focus on delivering value quickly while ensuring sustainable long-term success through our Continuous Partnership approach.
            </p>
        ),
    },
    {
        question: "How does Sera differ from traditional design or AI consulting agencies?",
        answer: (
            <p>
                Sera is not just a design agency or an AI consultant—we&apos;re an execution partner that builds intelligent systems, AI-powered experiences, and automated workflows that scale. We focus on execution, not just strategy, combining AI-first automation with high-performance design to deliver tangible business results.
            </p>
        ),
    },
    {
        question: "Can I cancel my Membership subscription at any time?",
        answer: (
            <p>
                Yes, you can cancel your Membership subscription at any time. There are no long-term contracts or cancellation fees. Your subscription will remain active until the end of your current billing period, giving you full access to our services during that time.
            </p>
        ),
    },
    {
        question: "What kind of businesses benefit most from Sera's services?",
        answer: (
            <p>
                Businesses that benefit most from our services include those looking to scale operations efficiently, eliminate manual workflows, enhance digital experiences, or optimize e-commerce performance. This includes SaaS companies, e-commerce brands, B2B enterprises, and startups seeking to leverage AI for competitive advantage.
            </p>
        ),
    },
    {
        question: "What technologies and tools does Sera use?",
        answer: (
            <p>
                Our team is proficient in cutting-edge AI and automation technologies, as well as industry-standard design tools. We work with various AI frameworks, workflow automation platforms, and design systems to create custom solutions tailored to your specific business needs and technology stack.
            </p>
        ),
    },
    {
        question: "How do you measure the success of AI automation implementations?",
        answer: (
            <p>
                We measure success through tangible business outcomes: increased operational efficiency, reduced manual workload, improved conversion rates, enhanced user experiences, and ultimately, business growth. We establish clear KPIs at the beginning of each engagement and provide regular reporting on performance metrics.
            </p>
        ),
    },
];

export default function FAQs() {
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
        <section ref={sectionRef} className="py-16 md:py-32 dark:bg-transparent" id="faqs">
            <div className="mx-auto max-w-5xl px-6">
                <div ref={contentRef}>
                    <div className="text-center mb-16">
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Frequently Asked Questions</span>
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl mt-3">AI Automation & Execution Insights</h2>
                        <p className="text-muted-foreground mt-6 mx-auto max-w-3xl">
                            Get answers to common questions about our AI-driven automation and design services. If you don&apos;t find what you&apos;re looking for, feel free to contact us directly.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-gray-100 dark:border-zinc-800 last:border-0"
                            >
                                <AccordionTrigger className="text-left py-6 text-lg font-medium transition-colors duration-200 hover:text-gray-500 dark:hover:text-gray-400">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-body pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
