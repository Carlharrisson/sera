"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { trackButtonClick, trackExternalLink } from "@/components/analytics";

const Navbar = () => {
    const navItems = [
        { name: 'Services', path: '#what-we-do', isActive: false },
        { name: 'Projects', path: '#projects', isActive: false },
        { name: 'About', path: '#about', isActive: false },
        { name: 'FAQ', path: '#faq', isActive: false },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-30 backdrop-blur-2xl border-b border-border">
            {/* Progressive blur background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background from-0% via-background via-10% to-background/10"></div>

            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/Logo.svg"
                                alt="Logo"
                                width={164}
                                height={164}
                                className="w-7 h-7 sm:w-8 sm:h-8"
                                priority
                                quality={100}
                                sizes="(max-width: 640px) 28px, 32px"
                            />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-sm transition-colors hover:text-foreground ${item.isActive ? 'text-foreground' : 'text-muted-foreground'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA button */}
                    <div className="hidden md:flex items-center">
                        <Button className="ml-8" onClick={() => {
                            trackButtonClick('navbar-book-call-desktop');
                            trackExternalLink('cal.com', 'navbar-desktop');
                            window.open('https://cal.com/carl-harrisson-9w1ec9/quick-chat', '_blank');
                        }}>
                            Book A Call
                        </Button>
                    </div>

                    {/* Mobile CTA button - replaces hamburger menu */}
                    <div className="md:hidden">
                        <Button
                            size="sm"
                            onClick={() => {
                                trackButtonClick('navbar-book-call-mobile');
                                trackExternalLink('cal.com', 'navbar-mobile');
                                window.open('https://cal.com/carl-harrisson-9w1ec9/quick-chat', '_blank');
                            }}
                        >
                            Book A Call
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;