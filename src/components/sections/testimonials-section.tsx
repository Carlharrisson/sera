"use client"
import { testimonialsData } from "@/content/data/testimonials";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentTestimonial = testimonialsData.testimonials[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.testimonials.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-16">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="transition-all duration-500 ease-in-out min-h-[200px] flex flex-col">
                    <blockquote className="text-base italic mb-6 leading-relaxed flex-1 flex items-start">
                        &quot;{currentTestimonial.quote}&quot;
                    </blockquote>

                    <div className="flex mb-6 items-center mt-auto">
                        <Avatar className="w-12 h-12 mr-3 border border-border shadow-lg">
                            <AvatarImage
                                src={currentTestimonial.author.image}
                                alt={currentTestimonial.author.name}
                                className="object-cover"
                            />
                            <AvatarFallback>
                                {currentTestimonial.author.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 className="text-xs mb-1">
                                {currentTestimonial.author.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                                {currentTestimonial.author.title}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    {testimonialsData.testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                                ? 'w-4 bg-foreground'
                                : 'w-2 bg-muted hover:bg-muted-foreground/50'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default TestimonialsSection; 