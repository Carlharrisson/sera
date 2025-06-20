import Link from "next/link";

const FooterSection = () => {
    return (
        <footer className="relative pt-16 pb-8">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>© Sera Agency 2025</span>
                    <div className="flex items-center gap-6">
                        <Link href="/legal" className="hover:text-foreground transition-colors">
                            Legal
                        </Link>
                        <Link href="https://www.linkedin.com/company/seraworks/" className="hover:text-foreground transition-colors">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection; 