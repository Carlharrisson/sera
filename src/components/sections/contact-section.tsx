import { contactHeadline, contactBookButton, contactUsButton, contactSocialProof } from "@/content/copy";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
    return (
        <section className="relative pt-16">
            <div className="container mx-auto max-w-xl">
                <h2
                    className="text-base mb-3 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: contactHeadline }}
                />

                <div className="flex gap-3 mb-6">
                    <Button
                    >
                        {contactBookButton}
                    </Button>

                    <Button
                        variant="secondary"
                    >
                        {contactUsButton}
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