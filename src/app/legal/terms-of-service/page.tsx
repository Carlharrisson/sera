export default function TermsOfService() {
    return (
        <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl mb-8">Terms of Service</h1>
            <p className="text-lg text-muted-foreground mb-16">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl mb-6">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                        By accessing and using Sera&apos;s website, engaging our services, or receiving a custom automation system (&quot;Service&quot; or &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;) and all applicable laws and regulations.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">2. Services Description</h2>
                    <p className="text-muted-foreground">
                        Sera specializes in designing, building, and implementing custom automation systems tailored to client specifications. Our services involve analyzing client workflows, identifying automation opportunities, developing software solutions, integrating with third-party tools and APIs, and providing related support and maintenance as agreed upon in specific project scopes or service agreements. We reserve the right to modify or discontinue service offerings.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">3. Client Responsibilities</h2>
                    <p className="text-muted-foreground mb-4">
                        To facilitate the successful delivery of Services, you agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Provide accurate and complete information about the processes to be automated.</li>
                        <li>Grant necessary access to relevant systems, tools, APIs, and data required for the project.</li>
                        <li>Designate a point of contact for communication and decision-making.</li>
                        <li>Cooperate reasonably with Sera during the development, testing, and implementation phases.</li>
                        <li>Ensure your use of the delivered automation systems complies with all applicable laws and third-party service terms.</li>
                        <li>Maintain the confidentiality of any Sera proprietary information shared during the engagement.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">4. Intellectual Property</h2>
                    <p className="text-muted-foreground mb-4">
                        All pre-existing intellectual property belonging to either party remains the property of that party. Sera retains ownership of its underlying tools, methodologies, frameworks, and know-how.
                    </p>
                    <p className="text-muted-foreground">
                        Upon full payment for the Services related to a specific custom automation system, Sera grants the client a perpetual, non-exclusive, transferable license to use, modify, and operate the delivered system for their internal business purposes. Specific ownership terms may be further defined in individual project agreements. All content on the Sera website remains the property of Sera.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">5. Disclaimers and Limitation of Liability</h2>
                    <p className="text-muted-foreground mb-4">
                        Sera provides Services &quot;as is&quot;. While we strive for high-quality, reliable automation systems, we do not warrant that the Services will be error-free or uninterrupted. The performance of automation systems may depend on third-party services, APIs, or client systems, for which Sera is not responsible.
                    </p>
                    <p className="text-muted-foreground">
                        To the maximum extent permitted by law, Sera shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl mb-6">6. Contact</h2>
                    <p className="text-muted-foreground">
                        For any questions regarding these Terms of Service, please contact us at:
                        <br />
                        <a href="mailto:hello@seraworks.com" className="text-primary hover:underline">hello@seraworks.com</a>
                    </p>
                </section>
            </div>
        </article>
    )
} 