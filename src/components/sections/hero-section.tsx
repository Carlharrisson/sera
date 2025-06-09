"use client"
import { heroButtonBook, heroHeadline, heroButtonContact } from "@/content/copy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { trackButtonClick, trackExternalLink } from "@/components/analytics";
import { useState, useEffect } from "react";
import { useSectionTracking } from "@/hooks/use-section-tracking";

const HeroSection = () => {
    const [animationDuration, setAnimationDuration] = useState(10);
    const sectionRef = useSectionTracking('hero-section');

    useEffect(() => {
        // Set animation duration based on screen size after component mounts
        const updateDuration = () => {
            const width = window.innerWidth;
            if (width < 640) {
                // Small mobile devices - faster for mobile
                setAnimationDuration(10);
            } else if (width < 768) {
                // Large mobile devices
                setAnimationDuration(30);
            } else if (width < 1024) {
                // Tablet devices
                setAnimationDuration(40);
            } else {
                // Desktop devices
                setAnimationDuration(80);
            }
        };

        updateDuration();
        window.addEventListener('resize', updateDuration);

        return () => window.removeEventListener('resize', updateDuration);
    }, []);

    const images = [
        "/LandingPage.png",
        "/Branding.png",
        "/ProductPage.png",
        "/Branding2.png",
        "/ProductDesign.png"

    ];

    return (
        <section ref={sectionRef} className="relative pt-32">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <Badge className="mb-4"><div className=" w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></div><span>Q2 Bookings now open</span></Badge>
                <h1
                    className="text-base mb-6 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: heroHeadline }}
                />
                <div className="flex flex-row gap-3 sm:gap-4">
                    <Button
                        aria-label={heroButtonBook}
                        onClick={() => {
                            trackButtonClick('hero-book-call');
                            trackExternalLink('cal.com', 'hero');
                            window.open('https://cal.com/carl-harrisson-9w1ec9/quick-chat', '_blank');
                        }}
                    >
                        {heroButtonBook}
                    </Button>
                    <Button
                        aria-label={heroButtonContact}
                        variant="secondary"
                        onClick={() => {
                            trackButtonClick('hero-contact');
                            trackExternalLink('email', 'hero');
                            window.open('mailto:carl.harrisson@gmail.com', '_blank');
                        }}
                    >
                        {heroButtonContact}
                    </Button>
                </div>
            </div>

            {/* project carousel*/}
            <div className="mt-12 sm:mt-16 overflow-hidden">
                <motion.div
                    key={`carousel-${animationDuration}`}
                    className="flex gap-2 sm:gap-3 md:gap-4 will-change-transform"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: animationDuration,
                            ease: "linear",
                        },
                    }}
                    style={{
                        transform: "translateZ(0)", // Force hardware acceleration
                    }}
                >
                    {/* Original images */}
                    {images.map((src, index) => (
                        <Image
                            key={`original-${index}`}
                            src={src}
                            alt={`Sera Agency project showcase ${index + 1} - Custom web development and automation solution`}
                            width={400}
                            height={400}
                            sizes="(max-width: 640px) 60vw, (max-width: 768px) 50vw, 40vw"
                            className="h-48 sm:h-64 md:h-80 lg:h-[32rem] w-auto object-cover flex-shrink-0 rounded-lg border border-border transform-gpu"
                            priority={index < 2}
                            quality={75}
                            loading={index < 2 ? "eager" : "lazy"}
                        />
                    ))}

                    {/* Duplicate images for seamless loop */}
                    {images.map((src, index) => (
                        <Image
                            key={`duplicate-${index}`}
                            src={src}
                            alt={`Sera Agency project showcase ${index + 1} duplicate for animation`}
                            width={400}
                            height={400}
                            sizes="(max-width: 640px) 60vw, (max-width: 768px) 50vw, 40vw"
                            className="h-48 sm:h-64 md:h-80 lg:h-[32rem] w-auto object-cover flex-shrink-0 rounded-lg border border-border transform-gpu"
                            quality={75}
                            loading="lazy"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection; 