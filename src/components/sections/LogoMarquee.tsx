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
        src: "https://html.tailus.io/blocks/customers/nvidia.svg",
        alt: "Nvidia Logo",
        height: 5,
    },
    {
        src: "https://html.tailus.io/blocks/customers/github.svg",
        alt: "GitHub Logo",
        height: 4,
    },
    {
        src: "https://html.tailus.io/blocks/customers/lilly.svg",
        alt: "Lilly Logo",
        height: 5,
    },
    {
        src: "https://html.tailus.io/blocks/customers/openai.svg",
        alt: "OpenAI Logo",
        height: 4,
    },
    {
        src: "https://html.tailus.io/blocks/customers/nike.svg",
        alt: "Nike Logo",
        height: 4,
    },
    {
        src: "https://html.tailus.io/blocks/customers/laravel.svg",
        alt: "Laravel Logo",
        height: 4,
    },
]

interface LogoMarqueeProps {
    title?: string
    className?: string
    delay?: number
}

export function LogoMarquee({ title = "TRUSTED BY INDUSTRY LEADERS", className = "", delay = 0.5 }: LogoMarqueeProps) {
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
            className={` backdrop-blur-sm py-4 px-4 rounded-xl relative overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 15,
                filter: isVisible ? "blur(0px)" : "blur(8px)"
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

            {/* Left fade gradient */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[15%] bg-gradient-to-r from-background/90 to-transparent dark:from-black/90"></div>

            {/* Right fade gradient */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[15%] bg-gradient-to-l from-background/90 to-transparent dark:from-black/90"></div>

            {/* Simple and reliable marquee implementation */}
            <div className="relative overflow-hidden">
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
                                duration: 40,
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
                                    className="w-auto dark:invert"
                                    width={logo.height * 12}
                                    height={logo.height * 4}
                                    style={{ height: `${logo.height * 4}px` }}
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
                                duration: 40,
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
                                    className="w-auto dark:invert"
                                    width={logo.height * 12}
                                    height={logo.height * 4}
                                    style={{ height: `${logo.height * 4}px` }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
} 