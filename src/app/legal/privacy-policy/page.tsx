export default function PrivacyPolicy() {
    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl mb-8">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-16">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl mb-6">Information We Collect</h2>
                    <p className="text-muted-foreground mb-4">
                        We collect information that you provide directly to us, including when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Create an account or sign up for our services</li>
                        <li>Contact us for support or information</li>
                        <li>Subscribe to our newsletter</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Provide and improve our services</li>
                        <li>Send you technical notices and updates</li>
                        <li>Respond to your comments and questions</li>
                        <li>Analyze usage patterns and optimize user experience</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Data Security</h2>
                    <p className="text-muted-foreground">
                        We implement appropriate technical and organizational measures to protect your personal information.
                        However, no method of transmission over the Internet is 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Contact Us</h2>
                    <p className="text-muted-foreground">
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <a href="mailto:privacy@sera.ai" className="text-primary hover:underline">privacy@sera.ai</a>
                    </p>
                </section>
            </div>
        </article>
    )
} 