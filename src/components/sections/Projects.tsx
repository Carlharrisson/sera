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
        title: "AI-Powered Sales Automation",
        description: "Automated lead scoring and follow-up system that increased conversions by 35%",
        imageSrc: "/images/google-deepmind-0I6IX0SxX3c-unsplash.jpg",
    },
    {
        id: 2,
        title: "Intelligent Analytics Dashboard",
        description: "Real-time business insights platform with predictive analytics",
        imageSrc: "/images/google-deepmind-9KN2RK4kOqg-unsplash.jpg",
    },
    {
        id: 3,
        title: "AI-First E-commerce UX",
        description: "Personalized shopping experience that boosted customer retention by 40%",
        imageSrc: "/images/google-deepmind-BMn5Z-MGv5c-unsplash.jpg",
    },
    {
        id: 4,
        title: "Process Automation Suite",
        description: "End-to-end workflow automation reducing manual tasks by 75%",
        imageSrc: "/images/google-deepmind-K2V_fqM2RY8-unsplash.jpg",
    },
    {
        id: 5,
        title: "AI Customer Service Platform",
        description: "Intelligent support system handling 80% of customer inquiries",
        imageSrc: "/images/google-deepmind-o1wMfCjFPHU-unsplash.jpg",
    },
    {
        id: 6,
        title: "Smart Document Processing",
        description: "AI-powered system automating document review and data extraction",
        imageSrc: "/images/google-deepmind-oHizDeuLDik-unsplash.jpg",
    },
    {
        id: 7,
        title: "AI Integration Framework",
        description: "Seamless connection of AI tools with existing business systems",
        imageSrc: "/images/google-deepmind-RN6Pip2bR3Q-unsplash.jpg",
    },
    {
        id: 8,
        title: "Predictive Maintenance System",
        description: "AI-driven monitoring reducing equipment downtime by 60%",
        imageSrc: "/images/google-deepmind-ryxY5haw8xg-unsplash.jpg",
    }
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative w-full overflow-hidden py-16 md:py-32 dark:bg-transparent" id="projects">
            <div className="text-center mb-16">
                <span className="text-primary-600 dark:text-primary-500 font-meltmino text-xs font-medium uppercase tracking-wider">Our Work</span>
                <h2 className="text-balance text-2xl font-semibold md:text-3xl lg:text-4xl mt-3">AI Automation Success Stories</h2>
                <p className="text-muted-foreground mt-4 mx-auto max-w-2xl text-sm">
                    Explore how we&apos;ve helped businesses transform their operations with intelligent automation and user-centric design.
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