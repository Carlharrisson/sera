export default function PrivacyPolicy() {
    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl mb-8">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-16">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl mb-6">Introduction</h2>
                    <p className="text-muted-foreground">
                        This Privacy Policy describes how Sera (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses information in connection with the provision of our custom automation system services (the &quot;Services&quot;) and the use of our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Information We Collect</h2>
                    <p className="text-muted-foreground mb-4">
                        We collect information in the following ways:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li><strong>Information You Provide:</strong> We collect information you provide directly to us when you inquire about or engage our Services, such as your name, email address, company information, and details about your operational processes.</li>
                        <li><strong>Information Collected via Services:</strong> In the course of providing Services, we may process data from your systems, tools, or third-party applications as necessary to build and operate the custom automation systems. This may include API keys, configuration data, workflow information, and data processed by the automation. We process this data solely on your behalf and according to your instructions or as necessary to provide the Services.</li>
                        <li><strong>Information Collected Automatically:</strong> When you visit our website, we may collect standard log information and details of visitor behavior patterns using cookies or similar technologies.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Provide, operate, maintain, and improve our Services.</li>
                        <li>Communicate with you, including responding to your comments, questions, and requests, and providing customer service and support.</li>
                        <li>Process transactions and send related information, including confirmations and invoices.</li>
                        <li>Send technical notices, updates, security alerts, and support messages.</li>
                        <li>Analyze usage patterns and trends to optimize user experience on our website and for service improvement.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                        We act as a data processor for the information processed by the custom automation systems we build for you. We process this data based on your instructions and the scope of the agreed Services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Information Sharing</h2>
                    <p className="text-muted-foreground">
                        We do not sell your personal information. We may share information with third-party service providers who need access to such information to carry out work on our behalf (e.g., hosting providers, analytics providers), or if required by law or to protect the rights, property, or safety of Sera, our clients, or others.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Data Security</h2>
                    <p className="text-muted-foreground">
                        We implement appropriate technical and organizational measures to protect the information we process. This includes securing access to systems and data, using encryption where appropriate, and limiting access to information to authorized personnel.
                        However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Your Rights</h2>
                    <p className="text-muted-foreground">
                        Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">Contact Us</h2>
                    <p className="text-muted-foreground">
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <a href="mailto:hello@seraworks.com" className="text-primary hover:underline">hello@seraworks.com</a>
                    </p>
                </section>
            </div>
        </article>
    )
} 