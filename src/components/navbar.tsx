"use client"
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
            <div className="max-w-xl mx-auto ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image src="/logo.svg" alt="Logo" width={28} height={28} />
                        </Link>
                    </div>

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

                    <div className="flex items-center">
                        <Button className="ml-8 ">
                            Book A Call
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${item.isActive
                                ? 'bg-muted text-foreground'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;