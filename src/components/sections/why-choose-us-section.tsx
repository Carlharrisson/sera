import { whyChooseUsHeadline, whyChooseUsDescription, whyChooseUsReasons } from "@/content/copy";

const WhyChooseUsSection = () => {
    return (
        <section className="relative pt-16">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-base mb-3">
                    {whyChooseUsHeadline}
                </h2>
                <p
                    className="text-base text-muted-foreground mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: whyChooseUsDescription }}
                />

                <div className="space-y-6">
                    {whyChooseUsReasons.map((reason, index) => {
                        const IconComponent = reason.icon;
                        return (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-card border border-border shadow-[0_1px_2px_0_rgba(0,0,0,0.04)] rounded-lg flex items-center justify-center">
                                    <IconComponent className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <h3 className="text-sm">
                                    {reason.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection; 