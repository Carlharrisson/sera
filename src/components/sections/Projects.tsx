'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Automated CRM & Slack Updates",
        description: "Eliminated manual CRM entry & sales handoffs via Slack bots.",
        imageSrc: "/images/placeholder-project-1.png",
    },
    {
        id: 2,
        title: "Ops Dashboard for Orders",
        description: "Replaced messy Sheets/Slack/email workflow with a single dashboard.",
        imageSrc: "/images/placeholder-project-2.png",
    },
    {
        id: 3,
        title: "AI Assistant for FAQs & Lead Filtering",
        description: "Handled 80% of inbound DMs, syncing qualified leads to Slack.",
        imageSrc: "/images/placeholder-project-3.png",
    },
    {
        id: 4,
        title: "Automated Client Onboarding",
        description: "Streamlined setup, data collection, and kickoff notifications.",
        imageSrc: "/images/placeholder-project-4.png",
    },
    {
        id: 5,
        title: "Internal Tool for Support Tickets",
        description: "Fast interface to track, assign, and resolve issues without context switching.",
        imageSrc: "/images/placeholder-project-5.png",
    },
    {
        id: 6,
        title: "Lead Enrichment & Routing Bot",
        description: "Appended data to inbound leads and assigned to reps in Slack instantly.",
        imageSrc: "/images/placeholder-project-6.png",
    },
    {
        id: 7,
        title: "Automated Reporting Workflow",
        description: "Generated and distributed weekly reports, saving 5+ hours/week.",
        imageSrc: "/images/placeholder-project-7.png",
    },
    {
        id: 8,
        title: "Custom Slack Integration for Ops",
        description: "Connected disparate tools into a unified Slack command center.",
        imageSrc: "/images/placeholder-project-8.png",
    }
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative w-full overflow-hidden py-16 md:py-32 dark:bg-transparent" id="projects">
            <div className="text-center mb-16">
                <h2 className="text-balance text-2xl font-semibold md:text-3xl lg:text-4xl mt-3">Systems We&apos;ve Shipped</h2>
                <p className="text-muted-foreground mt-4 mx-auto max-w-2xl text-sm">
                    Real automation examples built for teams like yours. Delivered in days, used every day.
                </p>
            </div>

            {/* Left fade gradient */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[25%] bg-gradient-to-r from-white to-transparent dark:from-background"></div>

            {/* Right fade gradient */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[25%] bg-gradient-to-l from-white to-transparent dark:from-background"></div>

            <div className="w-full" ref={containerRef}>
                <motion.div
                    ref={carouselRef}
                    className="flex gap-12 py-8"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear"
                        }
                    }}
                    style={{
                        width: "fit-content",
                    }}
                >
                    {/* First set of projects */}
                    {projects.map((project) => (
                        <div
                            key={`${project.id}-1`}
                            className="relative h-[600px] w-[800px] overflow-hidden rounded-xl"
                        >
                            <Image
                                src={project.imageSrc}
                                alt={project.title}
                                className="object-cover transition-transform duration-300 hover:scale-105"
                                fill
                                priority={project.id <= 3}
                            />
                        </div>
                    ))}

                    {/* Duplicated for continuous loop effect */}
                    {projects.map((project) => (
                        <div
                            key={`${project.id}-2`}
                            className="relative h-[600px] w-[800px] overflow-hidden rounded-xl"
                        >
                            <Image
                                src={project.imageSrc}
                                alt={project.title}
                                className="object-cover transition-transform duration-300 hover:scale-105"
                                fill
                                priority={false}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 