"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/form/button'
import { Input } from '@/components/ui/form/input'
import { toast } from "sonner"
import { Toaster } from "@/components/ui/overlay/sonner"

const navigationLinks = [
    { title: 'Services', url: '#services' },
    { title: 'Process', url: '#process' },
    { title: 'Pricing', url: '#pricing' },
    { title: 'Contact', url: '#contact' },
]

const footerLinks = [
    { title: 'Privacy Policy', url: '/legal/privacy-policy' },
    { title: 'Terms of Service', url: '/legal/terms-of-service' },
]

const socialLinks = [
    {
        title: 'X/Twitter',
        url: '#',
        icon: (
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
            </svg>
        ),
    },
    {
        title: 'LinkedIn',
        url: '#',
        icon: (
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </svg>
        ),
    },
    {
        title: 'Facebook',
        url: '#',
        icon: (
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
        ),
    },
    {
        title: 'Instagram',
        url: '#',
        icon: (
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
        ),
    },
]

export default function FooterSection() {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('https://formspree.io/f/manywlrl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email }),
            })

            if (response.ok) {
                setEmail('')
                toast.success('Thanks for subscribing!', {
                    id: 'newsletter-success'
                })
            } else {
                const errorData = await response.json().catch(() => null)
                throw new Error(errorData?.message || 'Failed to subscribe')
            }
        } catch {
            toast.error('Something went wrong. Please try again.', {
                id: 'newsletter-error'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <footer className="w-full border-t border-border">
            <div className="mx-auto max-w-[120rem] px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24">
                    {/* Left Column - Logo and Navigation */}
                    <div className="lg:col-span-8">
                        <Link href="/" className="mb-8 block">
                            <Image
                                src="/SeraLogo.svg"
                                alt="Sera Logo"
                                width={40}
                                height={40}
                                className="dark:invert"
                            />
                        </Link>
                        <div>
                            <ul className="space-y-4">
                                {navigationLinks.map((link, index) => (
                                    <li key={index} className="font-medium">
                                        <Link href={link.url} className="text-muted-foreground hover:text-primary duration-150">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Newsletter */}
                    <div className="lg:col-span-4">
                        <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-heading)] mb-6">Subscribe to Our Newsletter</h3>
                        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="newsletter-email" className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] font-medium flex items-center gap-0.5">
                                    Email<span className="text-destructive">*</span>
                                </label>
                                <Input
                                    id="newsletter-email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <Button type="submit" variant="default" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                        <span>Subscribing...</span>
                                    </div>
                                ) : (
                                    'Subscribe'
                                )}
                            </Button>
                        </form>
                        <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                            By subscribing you agree to our{' '}
                            <Link href="/legal/privacy-policy" className="text-primary hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-border py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Legal Links */}
                        <div className="md:col-span-4">
                            <ul className="flex flex-wrap justify-center md:justify-start gap-6">
                                {footerLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground hover:text-primary">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Copyright */}
                        <div className="md:col-span-4 text-center">
                            <p className="text-[length:var(--font-size-caption)] leading-[var(--line-height-body)] text-muted-foreground">
                                © {new Date().getFullYear()} Sera - AI-Driven Automation & Precision Design
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="md:col-span-4 flex justify-center md:justify-end">
                            <div className="flex gap-6">
                                {socialLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.title}
                                        className="text-muted-foreground hover:text-primary duration-150"
                                    >
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </footer>
    )
}
