import { aboutHeadline, aboutDescription, aboutAuthor } from "@/content/copy";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
    return (
        <section className="relative pt-16">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-base mb-3">
                    {aboutHeadline}
                </h2>

                <div className="mb-8">
                    <p
                        className="text-base leading-relaxed whitespace-pre-line text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: aboutDescription }}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <Avatar className="w-14 h-14 border border-border shadow-lg ">
                        <AvatarImage
                            src={aboutAuthor.image}
                            alt={aboutAuthor.name}
                            className="object-cover object-right-top"
                        />
                        <AvatarFallback>
                            {aboutAuthor.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="text-sm">
                            {aboutAuthor.name}
                        </h4>
                        <p className="text-sm text-muted-foreground ">
                            {aboutAuthor.title}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection; 