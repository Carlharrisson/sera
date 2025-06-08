"use client"
import { heroButtonBook, heroHeadline, heroButtonContact } from "@/content/copy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { trackButtonClick } from "@/components/analytics";

const HeroSection = () => {
    const images = [
        "/LandingPage.png",
        "/Branding.png",
        "/ProductPage.png",
        "/Branding2.png",
        "/ProductDesign.png"

    ];

    return (
        <section className="relative pt-32">
            <div className="container mx-auto max-w-xl">
                <Badge className="mb-4"><div className=" w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></div><span>Q2 Bookings now open</span></Badge>
                <h1
                    className="text-base mb-6 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: heroHeadline }}
                />
                <div className="flex gap-4">
                    <Button
                        aria-label={heroButtonBook}
                        onClick={() => {
                            trackButtonClick('hero-book-call');
                            window.location.href = 'https://cal.com/carl-harrisson-9w1ec9/quick-chat';
                        }}
                    >
                        {heroButtonBook}
                    </Button>
                    <Button
                        aria-label={heroButtonContact}
                        variant="secondary"
                        onClick={() => {
                            trackButtonClick('hero-contact');
                            window.location.href = `mailto:carl.harrisson@gmail.com`;
                        }}
                    >
                        {heroButtonContact}
                    </Button>
                </div>
            </div>

            {/* project carousel*/}
            <div className=" mt-16 overflow-hidden ">
                <motion.div
                    className="flex gap-4"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 80,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Original images */}
                    {images.map((src, index) => (
                        <Image
                            key={`original-${index}`}
                            src={src}
                            alt={`Sera Agency project showcase ${index + 1} - Custom web development and automation solution`}
                            width={800}
                            height={800}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="h-[32rem] w-auto object-cover flex-shrink-0 rounded-lg border border-border "
                            priority={index < 2}
                        />
                    ))}

                    {/* Duplicate images for seamless loop */}
                    {images.map((src, index) => (
                        <Image
                            key={`duplicate-${index}`}
                            src={src}
                            alt={`Sera Agency project showcase ${index + 1} duplicate for animation`}
                            width={800}
                            height={800}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="h-[32rem] w-auto object-cover flex-shrink-0 rounded-lg border border-border "
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection; 