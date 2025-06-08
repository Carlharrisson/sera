"use client"
import { faqData } from "@/content/data/faq";
import { faqHeadline } from "@/content/copy";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
    return (
        <section className="relative pt-16">
            <div className="container mx-auto max-w-xl">
                <h2 className="text-base mb-3">
                    {faqHeadline}
                </h2>

                <Accordion type="single" collapsible className="w-full mt-6">
                    {faqData.items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                            <AccordionTrigger >
                                <span className="pr-4">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 pr-12">
                                <p className="text-sm text-foreground leading-relaxed">
                                    {item.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FaqSection; 