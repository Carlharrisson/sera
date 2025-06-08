"use client"
import { ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { latestProjectsData } from "@/content/data/latest-projects";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const LatestProjectsSection = () => {

    return (
        <section id="projects" className="relative pt-16">
            <div className="container mx-auto max-w-xl">
                <h2 className="text-base mb-3">
                    {latestProjectsData.title}
                </h2>

                <div className="space-y-6 mt-6">
                    {latestProjectsData.projects.map((project) => (
                        <Dialog key={project.id}>
                            <DialogTrigger asChild>
                                <div className="flex items-center justify-between transition-colors cursor-pointer group">
                                    <div className="flex items-start gap-3">
                                        <div className={`w-12 h-12 ${project.backgroundColor} ${project.borderColor} ${project.shadowColor} border rounded-xl flex items-center justify-center flex-shrink-0 p-2 shadow-lg`}>
                                            <Image
                                                src={project.logo}
                                                alt={`${project.name} logo`}
                                                width={32}
                                                height={32}
                                                className="w-full h-full object-contain filter brightness-0 invert"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base mb-1">{project.name}</h3>
                                            <p className="text-muted-foreground group-hover:text-foreground text-xs transition-colors">{project.description}</p>
                                        </div>
                                    </div>
                                    <ArrowUpRightIcon className="w-6 h-6 text-muted-foreground bg-card border border-border rounded-full p-1 transition-all group-hover:bg-gray-200" />
                                </div>
                            </DialogTrigger>
                            <DialogContent showCloseButton={false}>
                                <DialogClose asChild>
                                    <Button
                                        className="fixed top-4 right-4 z-10"
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <XMarkIcon className="w-12 h-12" />
                                    </Button>
                                </DialogClose>

                                <DialogHeader className="mb-6">
                                    <DialogTitle>
                                        {project.modalTitle}
                                    </DialogTitle>
                                    <DialogDescription className="leading-relaxed text-base mt-4">
                                        {project.modalDescription}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-4">
                                    <div className="w-full h-auto relative rounded-lg overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.modalTitle}
                                            width={1000}
                                            height={1000}
                                            className="object-contain"
                                        />
                                    </div>

                                    {project.additionalImages && project.additionalImages.map((image, index) => (
                                        <div key={index} className="w-full h-auto relative rounded-lg overflow-hidden">
                                            <Image
                                                src={image}
                                                alt={`${project.modalTitle} - Image ${index + 2}`}
                                                width={1000}
                                                height={1000}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProjectsSection; 