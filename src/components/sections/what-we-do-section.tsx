import { whatWeDoDescription, whatWeDoHeadline, whatWeDoItems } from "@/content/copy";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";


const HeroSection = () => {
    return (
        <section id="what-we-do" className="relative pt-16">
            <div className="container mx-auto max-w-xl">
                <h2 className="text-base mb-3">
                    {whatWeDoHeadline}
                </h2>
                <p
                    className="text-base mb-6 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: whatWeDoDescription }}
                />
                <div className="grid grid-cols-3 gap-2">
                    {whatWeDoItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Card key={index}>
                                <CardHeader>
                                    <IconComponent className="w-6 h-6 mb-2 text-muted-foreground" />
                                    <CardTitle>
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 