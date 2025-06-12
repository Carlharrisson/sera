"use client"
import { contactHeadline, contactBookButton, contactUsButton, contactSocialProof } from "@/content/copy";
import { Button } from "@/components/ui/button";
import { trackButtonClick, trackExternalLink } from "@/components/analytics";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section className="relative pt-16">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-base mb-3 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: contactHeadline }}
                />

                <div className="flex gap-3 mb-6">
                    <Button
                        onClick={() => {
                            trackButtonClick('contact-book-call');
                            trackExternalLink('cal.com', 'contact');
                            window.open('https://cal.com/carl-harrisson-9w1ec9/quick-chat', '_blank');
                        }}
                    >
                        {contactBookButton}
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => {
                            trackButtonClick('contact-email');
                            trackExternalLink('email', 'contact');
                            window.open('mailto:carl.harrisson@gmail.com', '_blank');
                        }}
                        className="flex items-center gap-2"
                    >
                        {contactUsButton}
                        <Image
                            src="/Telegram_logo.svg.webp"
                            alt="Telegram"
                            width={16}
                            height={16}
                            className="flex-shrink-0"
                        />
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">
                        {contactSocialProof}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ContactSection; 