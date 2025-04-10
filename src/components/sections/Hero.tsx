"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/form/button'
import { Badge } from "@/components/ui/data-display/badge"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/navigation/carousel"
import { ArrowRight } from 'lucide-react'

// Define logo data for reusability
interface Logo {
    src: string;
    alt: string;
    height: number;
    width: number;
}

const logos: Logo[] = [
    { src: "/Logos/openai.svg", alt: "OpenAI Logo", height: 24, width: 120 },
    { src: "/Logos/anthropic.svg", alt: "Anthropic Logo", height: 24, width: 120 },
    { src: "/Logos/vercel-black.svg", alt: "Vercel Logo", height: 24, width: 120 },
    { src: "/Logos/aws.svg", alt: "AWS Logo", height: 24, width: 120 },
    { src: "/Logos/microsoft.svg", alt: "Microsoft Logo", height: 24, width: 120 },
    { src: "/Logos/n8n.svg", alt: "n8n Logo", height: 24, width: 120 },
]

// Duplicate logos for seamless loop
const duplicatedLogos = [...logos, ...logos, ...logos, ...logos] // 4x duplication for smoother loop

export default function HeroSection() {
    const images = [
        "/images/screencapture-preview-cozy-dashboard-display-lovable-app-2025-03-26-18_36_13.png",
        "/images/screencapture-preview-minimal-dashboard-wizard-lovable-app-2025-03-26-19_01_16.png",
        "/images/screencapture-preview-minimalassist-lovable-app-2025-03-26-19_05_50.png"
    ];

    return (
        <section id="home" className="border-b border-[--divider-color] pb-24 md:pb-32">
            <div className="pt-24 md:pt-42">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center">
                        <Badge variant="default">
                            BUILT FOR AMBITIOUS TEAMS
                        </Badge>

                        <h1 className="text-[length:var(--font-size-h1)] leading-[var(--line-height-heading)] tracking-[-0.02em] mx-auto max-w-4xl my-8">
                            Your Team Shouldn&apos;t Be Doing Repetitive Work
                        </h1>

                        <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] mx-auto max-w-2xl mb-12">
                            Transform your workflow with AI-powered automation. Our solutions help teams reclaim valuable time and focus on what matters most.
                        </p>

                        <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                            <Button
                                asChild
                                variant="default"
                                size="lg">
                                <Link href="#contact" onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                        setTimeout(() => {
                                            const buttons = contactSection.querySelectorAll('button');
                                            const callButton = Array.from(buttons).find(
                                                button => button.textContent?.toLowerCase().includes('schedule call')
                                            ) as HTMLButtonElement;
                                            if (callButton) {
                                                callButton.click();
                                            }
                                        }, 500);
                                    }
                                }}>
                                    <span className="text-nowrap font-medium">Get Started</span>
                                    <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline">
                                <Link href="#pricing">
                                    <span className="text-nowrap font-medium">Become a Member</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="col-span-12 relative mx-auto max-w-4xl rounded-xl p-1 mt-16">
                        <div className="text-center mb-4">
                            <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-center">TECHNOLOGIES WE LEVERAGE</p>
                        </div>
                        <div className="overflow-hidden relative rounded-lg">
                            {/* Fade gradient on the left */}
                            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

                            {/* Fade gradient on the right */}
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                            <motion.div
                                className="flex py-3"
                                animate={{
                                    x: [0, -50 * logos.length * 2], // Animate through 2 sets of logos
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 30, // Slower animation for smoother effect
                                        ease: "linear",
                                    },
                                }}
                                style={{
                                    width: `${logos.length * 100}%`, // Ensure container is wide enough
                                }}
                            >
                                {duplicatedLogos.map((logo, index) => (
                                    <div key={`${logo.alt}-${index}`} className="flex shrink-0 mx-8 sm:mx-12">
                                        <Image
                                            className="mx-auto w-fit dark:invert"
                                            src={logo.src}
                                            alt={logo.alt}
                                            height={logo.height}
                                            width={logo.width}
                                            style={{ height: `${logo.height}px`, width: 'auto', objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Image Gallery - Using shadcn Carousel */}
                <div className="mt-16 md:mt-20">
                    <div className="mx-auto ">
                        <div className="relative w-full ">
                            <Carousel
                                opts={{
                                    align: "center",
                                    containScroll: false,
                                    dragFree: false,
                                    loop: true,
                                }}
                                className="w-full flex flex-col space-y-8"
                            >
                                <CarouselContent>
                                    {images.map((src, index) => (
                                        <CarouselItem key={index} className="basis-[90%] sm:basis-[85%] md:basis-[75%] lg:basis-[65%]">
                                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                                                <Image
                                                    className="object-cover w-full"
                                                    src={src}
                                                    alt={`AI Application Example ${index + 1}`}
                                                    fill
                                                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, 65vw"
                                                    priority={index === 1}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <div className="flex justify-center items-center gap-4">
                                    <CarouselPrevious
                                        variant="outline"
                                        className="static translate-y-0 translate-x-0 rounded-full"
                                    />
                                    <CarouselNext
                                        variant="outline"
                                        className="static translate-y-0 translate-x-0 rounded-full"
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
