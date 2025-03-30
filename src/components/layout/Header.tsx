'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/form/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/common/theme-toggle'
import Image from 'next/image'

const menuItems = [
    { name: 'SERVICES', href: '#services' },
    { name: 'PROCESS', href: '#process' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'CONTACT', href: '#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState('')

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.href.substring(1))
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            setActiveSection(current || '')
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed z-20 w-full bg-background border-b border-gray-200 dark:border-gray-800">
            <nav className="h-16">
                <div className="mx-auto max-w-[120rem] px-4 sm:px-6 h-full">
                    <div className="flex justify-between items-center h-full relative">
                        {/* Logo */}
                        <div className="flex-1 flex justify-start  items-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center">
                                <Image
                                    src="/SeraLogo.svg"
                                    alt="Sera Logo"
                                    width={32}
                                    height={32}
                                    className="dark:invert"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <ul className="flex gap-8">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "text-[length:var(--font-size-caption)] uppercase tracking-[0.05em] text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-100",
                                                activeSection === item.href.substring(1) && "text-gray-900 underline underline-offset-8 decoration-gray-300 dark:text-gray-100 dark:decoration-gray-700"
                                            )}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions - Right */}
                        <div className="flex-1 flex items-center justify-end gap-4">
                            {/* Theme Toggle */}
                            <ThemeToggle />

                            {/* Contact Button - Desktop */}
                            <div className="hidden lg:block">
                                <Button
                                    asChild
                                    variant="default"
                                    size="sm"
                                    className="text-[length:var(--font-size-caption)]">
                                    <Link href="#contact">Contact</Link>
                                </Button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="lg:hidden relative size-9 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center">
                                <Menu className={cn("size-5 duration-200 absolute", menuState && "rotate-180 scale-0 opacity-0")} />
                                <X className={cn("size-5 duration-200 absolute", !menuState && "-rotate-180 scale-0 opacity-0")} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={cn(
                        "fixed inset-x-0 top-16 bg-background border-t border-gray-200 dark:border-gray-800 lg:hidden transition-all duration-200 ease-in-out",
                        menuState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    )}>
                        <div className="p-6">
                            <ul className="grid gap-6">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="text-center">
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuState(false)}
                                            className={cn(
                                                "text-[length:var(--font-size-caption)] uppercase tracking-[0.05em] text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-100",
                                                activeSection === item.href.substring(1) && "text-gray-900 underline underline-offset-8 decoration-gray-300 dark:text-gray-100 dark:decoration-gray-700"
                                            )}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className="text-center mt-2">
                                    <Button
                                        asChild
                                        variant="default"
                                        size="sm"
                                        className="text-[length:var(--font-size-caption)]"
                                        onClick={() => setMenuState(false)}>
                                        <Link href="#contact">Contact</Link>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
