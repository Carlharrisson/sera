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
        question: "What does a typical project build include?",
        answer: (
            <div className="space-y-4">
                <p>
                    Project builds focus on fixing one specific, painful workflow or bottleneck. This typically includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Identifying the core problem & desired outcome (async).</li>
                    <li>Building the automation system (e.g., Slack bot, Airtable automation, simple dashboard).</li>
                    <li>Integrating with 1-2 key tools you already use (e.g., Slack, CRM, Sheets).</li>
                    <li>Testing and handover with brief instructions.</li>
                    <li>Two rounds of revisions for tweaks.</li>
                    <li>30 days of basic support for fixes.</li>
                </ul>
                <p>
                    The goal is a working system, shipped fast, that solves the immediate pain and saves significant time (often 20+ hours/week).
                </p>
            </div>
        ),
    },
    {
        question: "How does the 'Ongoing Support' membership work?",
        answer: (
            <div className="space-y-4">
                <p>
                    It&apos;s like having an execution-focused team member on retainer, without the hiring overhead. You get:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>A dedicated Slack channel for requests.</li>
                    <li>Capacity for up to four defined automation/tooling tasks per month.</li>
                    <li>We aim for a 48-hour response time to acknowledge and start work.</li>
                    <li>Two revisions included per task if needed.</li>
                    <li>Focus on building, tweaking, or maintaining your operational systems.</li>
                    <li>Simple monthly billing, cancel anytime.</li>
                </ul>
                <p>
                    Ideal for teams needing consistent automation help without managing another hire.
                </p>
            </div>
        ),
    },
    {
        question: "How fast do you actually build things?",
        answer: (
            <div className="space-y-4">
                <p>
                    Speed is core to what we do. We aim to ship initial versions of project builds within days or 1-2 weeks, depending on complexity. Ongoing support tasks are typically addressed within 48 hours.
                </p>
                <p>
                    We achieve this by scoping tightly, avoiding unnecessary meetings/strategy, using reliable tools (Make, Airtable, Slack, Retool, etc.), and focusing purely on execution.
                </p>
            </div>
        ),
    },
    {
        question: "Who is Sera for, and who is it NOT for?",
        answer: (
            <div className="space-y-4">
                <p>
                    Sera works best for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>SaaS Founders/Teams (Seed-Series B):</strong> Overwhelmed by manual ops, need systems fast.</li>
                    <li><strong>Heads of Ops/RevOps:</strong> Dealing with messy workflows, tool overload, slow handoffs.</li>
                    <li><strong>Ops-Heavy Team Leads:</strong> Swamped with manual tasks, no internal tools team.</li>
                    <li><strong>Exec Buyers (COO/VP Ops):</strong> Need to scale ops without bloating headcount immediately.
                    </li>
                </ul>
                <p>Key signals include heavy reliance on Slack/Airtable/Sheets, frustration with manual work, desire for quick results, and an internal owner for the system.</p>
                <p>
                    Sera is <strong>NOT</strong> a fit for those wanting strategic advice/decks, lacking a clear problem to solve, needing complex enterprise overhauls, or lacking an internal champion to use what we build.
                </p>
            </div>
        ),
    },
    {
        question: "What does the async process look like? Do we need meetings?",
        answer: (
            <div className="space-y-4">
                <p>
                    We operate almost entirely async, primarily via Slack (or email/your preferred async tool). Meetings are rare and only if absolutely necessary to unblock something specific.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Kickoff:</strong> We get context via a form or brief async chat.</li>
                    <li><strong>Building:</strong> We provide updates and ask clarifying questions in Slack.</li>
                    <li><strong>Feedback/Revisions:</strong> Handled async via Loom videos or comments.</li>
                    <li><strong>Handover:</strong> Quick Loom video walkthrough and documentation.</li>
                </ul>
                <p>
                    This minimizes disruption and allows us (and you) to focus on execution.
                </p>
            </div>
        ),
    },
    {
        question: "Do you integrate with our existing tools?",
        answer: (
            <div className="space-y-4">
                <p>
                    Yes, absolutely. Our approach is built around integration, not replacement. We commonly work with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Slack, Airtable, Notion, Google Sheets</li>
                    <li>CRMs (HubSpot, Salesforce - via standard APIs)</li>
                    <li>Automation Platforms (Make, Zapier, n8n)</li>
                    <li>Databases (Supabase, Postgres)</li>
                    <li>APIs for common SaaS tools</li>
                </ul>
                <p>
                    We aim to connect the tools you already use to automate the gaps between them.
                </p>
            </div>
        ),
    },
    {
        question: "What kind of support is included after a project?",
        answer: (
            <div className="space-y-4">
                <p>
                    Project builds include 30 days of support after handover. This covers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Fixing any bugs or issues with the delivered system.</li>
                    <li>Answering clarifying questions about how it works.</li>
                </ul>
                <p>
                    This does <strong>not</strong> include new features, major changes, or building additional automations. For ongoing work, improvements, or new requests, the Ongoing Support membership is the best fit.
                </p>
            </div>
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
                filter: 'blur(24px)',
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
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl mt-3">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mt-6 mx-auto max-w-3xl">
                            Quick answers about how Sera works, who it&apos;s for, pricing, and our process. If you don&apos;t see your question, just ask.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-dashed border-gray-100 dark:border-zinc-800 last:border-0"
                            >
                                <AccordionTrigger className="text-left py-6 text-lg font-medium transition-all duration-300 hover:text-[oklch(0.564_0.133_173.7)] dark:hover:text-[oklch(0.693_0.133_173.7)]">
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
