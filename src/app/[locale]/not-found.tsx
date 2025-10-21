import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default async function NotFound() {
    const t = await getTranslations();

    return (
        <div className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto max-w-2xl px-4">
                <Card className="text-center">
                    <CardContent className="p-12">
                        <div className="mb-8">
                            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                Page Not Found
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Link href="/">
                                <Button size="lg" className="w-full sm:w-auto">
                                    {t('navigation.home')}
                                </Button>
                            </Link>

                            <div className="text-sm text-muted-foreground">
                                <p>Or visit one of these pages:</p>
                                <div className="flex flex-wrap justify-center gap-4 mt-2">
                                    <Link href="/services" className="text-primary hover:underline">
                                        {t('navigation.services')}
                                    </Link>
                                    <Link href="/branches" className="text-primary hover:underline">
                                        {t('navigation.branches')}
                                    </Link>
                                    <Link href="/contact" className="text-primary hover:underline">
                                        {t('navigation.contact')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}