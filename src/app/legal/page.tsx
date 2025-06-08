"use client"
import { legalData } from "@/content/data/legal";

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-background pt-32">
            <div className="container mx-auto max-w-xl">

                <h1 className="text-base mb-3">{legalData.title}</h1>
                <p className="text-base leading-relaxed text-muted-foreground mb-8">
                    {legalData.description}
                </p>

                <div className="space-y-16">
                    {legalData.sections.map((section) => (
                        <section key={section.id}>
                            <h2 className="text-base mb-3">{section.title}</h2>
                            <div
                                className="text-base leading-relaxed text-muted-foreground"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </section>
                    ))}

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-base mb-3">Contact Information</h2>
                        <div className="text-base leading-relaxed text-muted-foreground">
                            <p className="mb-4">
                                For any legal inquiries or questions about these policies, please contact us:
                            </p>
                            <div className="space-y-2">
                                <div>
                                    <span className="text-foreground">Email:</span>{" "}
                                    <a
                                        href={`mailto:${legalData.contact.email}`}
                                        className="hover:underline"
                                    >
                                        {legalData.contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
} 