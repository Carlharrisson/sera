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
        question: "What exactly do I get with each project or membership?",
        answer: (
            <div className="space-y-4">
                <p>
                    Every project includes specific, measurable deliverables:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>2-3 custom AI workflow automations</li>
                    <li>Complete UI/UX design system</li>
                    <li>Integration with your existing tools</li>
                    <li>Analytics dashboard for tracking ROI</li>
                    <li>30-day optimization period</li>
                </ul>
                <p>
                    Membership clients get additional benefits like weekly optimization, priority support, and continuous development of new automations.
                </p>
            </div>
        ),
    },
    {
        question: "How do you ensure the AI automation will actually work for my business?",
        answer: (
            <div className="space-y-4">
                <p>
                    We follow a proven process to guarantee results:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Week 1: Deep analysis of your processes and ROI calculation</li>
                    <li>Week 2: Development and testing with your team</li>
                    <li>Week 3+: Launch, training, and optimization</li>
                </ul>
                <p>
                    Plus, we offer a money-back guarantee if you&apos;re not satisfied with the results. Our clients typically see ROI within 2-3 months through time savings and increased efficiency.
                </p>
            </div>
        ),
    },
    {
        question: "What happens if I'm not happy with the results?",
        answer: (
            <div className="space-y-4">
                <p>
                    Your satisfaction is our priority. We provide multiple guarantees:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>2-week delivery guarantee or your money back</li>
                    <li>30-day optimization period included with every project</li>
                    <li>Unlimited revisions during development</li>
                    <li>Monthly membership can be cancelled anytime</li>
                </ul>
                <p>
                    If at any point you&apos;re not satisfied, we&apos;ll work with you to make it right or refund your investment.
                </p>
            </div>
        ),
    },
    {
        question: "Who is Sera best suited for?",
        answer: (
            <div className="space-y-4">
                <p>
                    We work best with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tech Startups:</strong> Needing to automate operations and scale efficiently</li>
                    <li><strong>E-commerce Brands:</strong> Looking to automate customer service and operations</li>
                    <li><strong>SaaS Companies:</strong> Wanting to enhance product UX with AI</li>
                    <li><strong>Agencies:</strong> Seeking to automate client workflows</li>
                </ul>
                <p>
                    Ideal clients typically have established processes they want to automate and are ready to invest in scaling their operations.
                </p>
            </div>
        ),
    },
    {
        question: "How do you ensure consistent quality as you scale?",
        answer: (
            <div className="space-y-4">
                <p>
                    We maintain high quality through systematic processes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Standardized implementation methodology</li>
                    <li>Rigorous quality assurance protocols</li>
                    <li>Automated testing and monitoring</li>
                    <li>Continuous team training and development</li>
                </ul>
                <p>
                    Our focus is on building scalable systems that maintain consistency while adapting to each client&apos;s unique needs.
                </p>
            </div>
        ),
    },
    {
        question: "How much involvement do you need from our team?",
        answer: (
            <div className="space-y-4">
                <p>
                    Our implementation process is designed to be efficient and systematic:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Initial discovery and planning session</li>
                    <li>Structured implementation checkpoints</li>
                    <li>Comprehensive team training</li>
                    <li>Regular progress reviews and updates</li>
                </ul>
                <p>
                    We handle the technical implementation while keeping you informed and involved in key decisions.
                </p>
            </div>
        ),
    },
    {
        question: "How do you protect our sensitive data and information?",
        answer: (
            <div className="space-y-4">
                <p>
                    Security is our top priority. We maintain strict data protection standards:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Enterprise-grade encryption for all data</li>
                    <li>Secure API integrations and authentication</li>
                    <li>Regular security audits and updates</li>
                    <li>Compliance with GDPR and industry standards</li>
                    <li>Signed NDAs for all projects</li>
                </ul>
                <p>
                    We only access the data necessary for automation and follow best practices for data handling and storage.
                </p>
            </div>
        ),
    },
    {
        question: "What technologies do you use and why?",
        answer: (
            <div className="space-y-4">
                <p>
                    We use industry-leading technologies chosen for reliability and performance:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>AI/ML:</strong> OpenAI, Anthropic, AWS AI services</li>
                    <li><strong>Automation:</strong> n8n, custom Python scripts</li>
                    <li><strong>Frontend:</strong> React, Next.js, TypeScript</li>
                    <li><strong>Backend:</strong> Python, Node.js, Supabase</li>
                </ul>
                <p>
                    Our stack is enterprise-ready and scales with your needs, while remaining flexible enough to integrate with your existing tools.
                </p>
            </div>
        ),
    },
    {
        question: "How do you measure and report success?",
        answer: (
            <div className="space-y-4">
                <p>
                    We track specific metrics aligned with your business goals:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Time saved per workflow automated</li>
                    <li>Error reduction rates</li>
                    <li>Cost savings and ROI</li>
                    <li>User adoption rates</li>
                    <li>System performance metrics</li>
                </ul>
                <p>
                    You get access to a real-time dashboard tracking these metrics, plus weekly/monthly reports with insights and optimization recommendations.
                </p>
            </div>
        ),
    },
    {
        question: "Can you integrate with our existing tools and systems?",
        answer: (
            <div className="space-y-4">
                <p>
                    Yes, we specialize in seamless integrations with popular business tools:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>CRM systems (Salesforce, HubSpot)</li>
                    <li>Project management (Asana, Jira, Trello)</li>
                    <li>Communication tools (Slack, Teams)</li>
                    <li>Custom internal systems via API</li>
                </ul>
                <p>
                    During Week 1, we&apos;ll audit your tech stack and create an integration plan that ensures smooth data flow between systems.
                </p>
            </div>
        ),
    },
    {
        question: "What ongoing support do you provide?",
        answer: (
            <div className="space-y-4">
                <p>
                    Every project includes comprehensive support:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>30-day optimization period</li>
                    <li>Documentation and training materials</li>
                    <li>Email and chat support</li>
                    <li>Bug fixes and maintenance</li>
                </ul>
                <p>
                    Membership clients get additional benefits like 2-hour response times, proactive monitoring, and continuous optimization of their systems.
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
                        <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Common Questions</span>
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl mt-3">Everything You Need to Know</h2>
                        <p className="text-muted-foreground mt-6 mx-auto max-w-3xl">
                            From deliverables and timelines to guarantees and support, we&apos;ve answered the most common questions to help you make an informed decision. Still have questions? Contact us for a quick response.
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
