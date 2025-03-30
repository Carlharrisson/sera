'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Logo = {
    src: string
    alt: string
    height: number
}

const logos: Logo[] = [
    {
        src: "/Logos/openai.svg",
        alt: "OpenAI Logo",
        height: 12,
    },
    {
        src: "/Logos/anthropic.svg",
        alt: "Anthropic Logo",
        height: 12,
    },
    {
        src: "/Logos/vercel-black.svg",
        alt: "Vercel Logo",
        height: 12,
    },
    {
        src: "/Logos/next.js.svg",
        alt: "Next.js Logo",
        height: 12,
    },
    {
        src: "/Logos/typescript.svg",
        alt: "TypeScript Logo",
        height: 12,
    },
    {
        src: "/Logos/react.svg",
        alt: "React Logo",
        height: 12,
    },
]

interface LogoMarqueeProps {
    title?: string
    className?: string
    delay?: number
}

export function LogoMarquee({ title = "BUILT WITH ENTERPRISE-GRADE AI TECHNOLOGY", className = "", delay = 0.5 }: LogoMarqueeProps) {
    // Entry animation state
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay the visibility for entry animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <motion.div
            className={` backdrop-blur-md py-4 px-4 rounded-xl relative overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 15, filter: "blur(16px)" }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 15,
                filter: isVisible ? "blur(0px)" : "blur(16px)"
            }}
            transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }}
        >
            {title && (
                <div className="text-center mb-3">
                    <h3 className="text-sm tracking-wider uppercase font-meltmino text-foreground/70">{title}</h3>
                </div>
            )}

            <div className="relative overflow-hidden w-screen -mx-[50vw] left-1/2 right-1/2">
                {/* Left fade gradient */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[25%] bg-gradient-to-r from-white to-transparent dark:from-background"></div>

                {/* Right fade gradient */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[25%] bg-gradient-to-l from-white to-transparent dark:from-background"></div>

                <div className="flex whitespace-nowrap">
                    {/* First set for animation */}
                    <motion.div
                        className="flex items-center gap-24 px-8"
                        animate={{
                            x: ["0%", "-100%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            }
                        }}
                        style={{ display: isVisible ? "flex" : "none" }}
                    >
                        {/* Repeat logos to ensure continuous loop */}
                        {logos.map((logo, index) => (
                            <div key={`logo-a-${index}`} className="flex-shrink-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="w-auto dark:invert transition-all duration-300 hover:scale-110"
                                    width={logo.height * 20}
                                    height={logo.height * 10}
                                    style={{ height: `${logo.height * 10}px`, width: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Second identical set to create seamless loop */}
                    <motion.div
                        className="flex items-center gap-24 px-8"
                        animate={{
                            x: ["0%", "-100%"]
                        }}
                        initial={{ x: "100%" }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            }
                        }}
                        style={{ display: isVisible ? "flex" : "none", position: "absolute", left: "100%" }}
                    >
                        {logos.map((logo, index) => (
                            <div key={`logo-b-${index}`} className="flex-shrink-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="w-auto dark:invert transition-all duration-300 hover:scale-110"
                                    width={logo.height * 20}
                                    height={logo.height * 10}
                                    style={{ height: `${logo.height * 10}px`, width: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
} 