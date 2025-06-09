"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const navItems = [
        { name: 'Services', path: '#what-we-do', isActive: false },
        { name: 'Projects', path: '#projects', isActive: false },
        { name: 'About', path: '#about', isActive: false },
        { name: 'FAQ', path: '#faq', isActive: false },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-30 bg-card/6 backdrop-blur-2xl border-b border-border">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image src="/Logo.svg" alt="Logo" width={28} height={28} />
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
                            window.location.href = 'https://cal.com/carl-harrisson-9w1ec9/quick-chat';
                        }}>
                            Book A Call
                        </Button>
                    </div>

                    {/* Mobile CTA button - replaces hamburger menu */}
                    <div className="md:hidden">
                        <Button
                            size="sm"
                            onClick={() => {
                                window.location.href = 'https://cal.com/carl-harrisson-9w1ec9/quick-chat';
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