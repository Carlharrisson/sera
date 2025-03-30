export default function TermsOfService() {
    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl mb-8">Terms of Service</h1>
            <p className="text-lg text-muted-foreground mb-16">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl mb-6">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                        By accessing and using Sera&apos;s services, you agree to be bound by these Terms of Service
                        and all applicable laws and regulations.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">2. Services Description</h2>
                    <p className="text-muted-foreground">
                        Sera provides AI-driven automation and design services. We reserve the right to modify,
                        suspend, or discontinue any part of our services at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">3. User Responsibilities</h2>
                    <p className="text-muted-foreground mb-4">
                        You are responsible for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Maintaining the confidentiality of your account</li>
                        <li>All activities that occur under your account</li>
                        <li>Ensuring your use of the services complies with all applicable laws</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">4. Intellectual Property</h2>
                    <p className="text-muted-foreground">
                        All content, features, and functionality of our services are owned by Sera
                        and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">5. Contact</h2>
                    <p className="text-muted-foreground">
                        For any questions regarding these Terms of Service, please contact us at:
                        <br />
                        <a href="mailto:legal@sera.ai" className="text-primary hover:underline">legal@sera.ai</a>
                    </p>
                </section>
            </div>
        </article>
    )
} 