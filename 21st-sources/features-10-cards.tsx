// 21st.dev Component: Features 10 — paired asymmetric card layout for program overview
// Query: "program cards asymmetric editorial"
// Cached: 2026-04-21
// Borrowed: 2-column FeatureCard grid with icon + heading + description + dashed divider + muted radial-gradient preview panel

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Calendar, LucideIcon, MapIcon } from 'lucide-react';
import { ReactNode } from 'react';

export function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
                <div className="mx-auto grid gap-4 lg:grid-cols-2">
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={MapIcon}
                                title="Real time location tracking"
                                description="Advanced tracking system, Instantly locate all your assets."
                            />
                        </CardHeader>
                        <div className="relative mb-6 border-t border-dashed sm:mb-0">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),white_125%)]"></div>
                            <div className="aspect-[76/59] p-1 px-6">
                                {/* Image element omitted in cache */}
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}

const FeatureCard = ({ children, className }: { children: ReactNode; className?: string }) => (
    <Card className={cn('group relative rounded-none shadow-zinc-950/5', className)}>
        <CardDecorator />
        {children}
    </Card>
);

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -right-px -bottom-px block size-2 border-b-2 border-r-2"></span>
    </>
);

interface CardHeadingProps { icon: LucideIcon; title: string; description: string; }
const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span className="text-muted-foreground flex items-center gap-2">
            <Icon className="size-4" />
            {title}
        </span>
        <p className="mt-8 text-2xl font-semibold">{description}</p>
    </div>
);
