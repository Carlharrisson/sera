"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/form/button'
import Image from 'next/image'
import { TextEffect } from '@/components/animations/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/animations/motion-primitives/animated-group'
import { motion, useInView } from 'framer-motion'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

// Define logo data for reusability
interface Logo {
    src: string;
    alt: string;
    height: number;
    width: number;
}

const topRowLogos: Logo[] = [
    { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", height: 20, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", height: 16, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub Logo", height: 16, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike Logo", height: 20, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub Logo", height: 16, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike Logo", height: 20, width: 80 },
]

const bottomRowLogos: Logo[] = [
    { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", height: 20, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", height: 16, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", height: 28, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", height: 24, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", height: 28, width: 80 },
    { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", height: 24, width: 80 },
]

// Create arrays with duplicated logos for the scrolling effect
const generateScrollLogos = (logos: Logo[], repeat = 4): Logo[] => {
    // Remove the random shuffle to maintain consistent order between server and client
    return Array(repeat).fill([...logos]).flat();
}

// Logo component with Framer Motion
const LogoItem = ({ logo }: { logo: Logo }) => (
    <motion.div
        className="flex shrink-0 mx-8 sm:mx-12"
        whileHover={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 0.3 }}
    >
        <Image
            className="mx-auto w-fit dark:invert filter drop-shadow-[0_0_8px_rgba(0,255,170,0.15)]"
            src={logo.src}
            alt={logo.alt}
            height={logo.height}
            width={logo.width}
            style={{ height: `${logo.height}px` }}
        />
    </motion.div>
)

// Scrolling logos container
interface LogoScrollerProps {
    logos: Logo[];
    direction?: "left" | "right";
    speed?: number;
}

const LogoScroller = ({ logos, direction = "left", speed = 25 }: LogoScrollerProps) => {
    const scrollLogos = generateScrollLogos(logos);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    return (
        <div
            ref={containerRef}
            className="overflow-hidden relative"
        >
            {/* Enhanced gradient fades on edges */}
            <div className="absolute left-0 top-0 w-32 h-full z-10 bg-gradient-to-r from-background via-background/90 to-transparent"></div>

            <motion.div
                className="flex py-3"
                initial={{ x: direction === "left" ? "0%" : "-50%" }}
                animate={isInView ? {
                    x: direction === "left" ? "-50%" : "0%"
                } : {}}
                transition={{
                    repeat: Infinity,
                    duration: speed,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {scrollLogos.map((logo, index) => (
                    <LogoItem key={`${logo.alt}-${index}`} logo={logo} />
                ))}
            </motion.div>

            {/* Enhanced gradient fade on right edge */}
            <div className="absolute right-0 top-0 w-32 h-full z-10 bg-gradient-to-l from-background via-background/90 to-transparent"></div>
        </div>
    )
}

export default function HeroSection() {
    return (
        <section id="home">
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,oklch(0.886_0.133_173.7/.08)_0,oklch(0.693_0.133_173.7/.05)_50%,oklch(0.564_0.133_173.7/0)_80%)]" />
                    <div className="h-320 absolute right-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.757_0.133_173.7/.06)_0,oklch(0.628_0.133_173.7/.04)_50%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-1/2 top-1/4 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.950_0.133_173.7/.04)_0,oklch(0.821_0.133_173.7/.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-42">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,oklch(0.500_0.133_173.7/.03)_0%,var(--color-background)_70%)]"></div>

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background/60 hover:border-[oklch(0.564_0.133_173.7)] bg-background/40 backdrop-blur-sm group mx-auto flex w-fit items-center gap-4 rounded-full border border-foreground/10 p-2 pl-3 shadow-xs transition-all duration-300 dark:border-white/5 dark:shadow-zinc-950/10">
                                        <span className="text-foreground/80 text-xs font-light md:text-sm">Now accepting clients for Q1 2025</span>

                                        <div className="bg-[oklch(0.564_0.133_173.7/0.1)] group-hover:bg-[oklch(0.564_0.133_173.7/0.2)] size-5 overflow-hidden rounded-full duration-500 flex items-center justify-center">
                                            <ArrowRight className="m-auto size-2.5 text-[oklch(0.564_0.133_173.7)]" />
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 text-balance text-6xl text-foreground md:text-7xl lg:mt-8 xl:text-[5.25rem]">
                                    AI-Driven Automation, Built with Precision Design
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    Sera creates intelligent systems that don&apos;t just automate workflows—they enhance the
                                    way people interact with technology. Our work blends AI, automation, and seamless digital
                                    experiences to help businesses scale without friction.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="rounded-[calc(var(--radius-xl)+0.125rem)] border border-[oklch(0.564_0.133_173.7)] bg-gradient-to-r from-[oklch(0.500_0.133_173.7/0.1)] to-[oklch(0.693_0.133_173.7/0.2)] p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Get Started</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Contact</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    delayChildren: 0.9,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                >
                                    <div className="relative mx-auto max-w-4xl bg-gradient-to-b from-background/30 to-transparent rounded-2xl p-1 mt-16">
                                        {/* Top row - right to left animation using Framer Motion */}
                                        <div className="group-hover:blur-xs opacity-90 group-hover:opacity-40 transition-all duration-500">
                                            <LogoScroller logos={topRowLogos} direction="left" speed={30} />
                                        </div>

                                        {/* Bottom row - left to right animation using Framer Motion */}
                                        <div className="mt-12 group-hover:blur-xs opacity-90 group-hover:opacity-40 transition-all duration-500">
                                            <LogoScroller logos={bottomRowLogos} direction="right" speed={25} />
                                        </div>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 1.1,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-16 overflow-hidden px-2 sm:mr-0 sm:mt-20 md:mt-24">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[oklch(0.564_0.133_173.7)/0.3] p-4 shadow-lg shadow-[oklch(0.436_0.133_173.7)/0.1] ring-1">
                                    <div className="aspect-[15/8] relative">
                                        <Image
                                            className="bg-background rounded-2xl dark:block object-cover"
                                            src="/images/google-deepmind-K2V_fqM2RY8-unsplash.jpg"
                                            alt="Sera AI interface"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </section>
    )
}
