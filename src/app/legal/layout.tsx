export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full border-b border-border">
            <div className="mx-auto max-w-[120rem] px-6">
                <div className="grid grid-cols-12 gap-8 py-24 md:py-32">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
} 