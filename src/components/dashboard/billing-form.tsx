'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface BillingFormProps {
  subscription: any;
}

export function BillingForm({ subscription }: BillingFormProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCheckout = async (priceId: string) => {
    setIsLoading(priceId);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to start checkout process. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(null);
    }
  };

  const starterPriceId = process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID;
  const proPriceId = process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID;

  const isActive = subscription?.status === 'active' || subscription?.status === 'trialing';

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Starter Plan</CardTitle>
          <CardDescription>Perfect for individuals just getting started.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$9/mo</div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={subscription?.plan === starterPriceId && isActive ? 'outline' : 'default'}
            disabled={isLoading === starterPriceId || (subscription?.plan === starterPriceId && isActive)}
            onClick={() => handleCheckout(starterPriceId!)}
          >
            {isLoading === starterPriceId && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {subscription?.plan === starterPriceId && isActive ? 'Current Plan' : 'Subscribe'}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pro Plan</CardTitle>
          <CardDescription>For professionals who need more power.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$29/mo</div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={subscription?.plan === proPriceId && isActive ? 'outline' : 'default'}
            disabled={isLoading === proPriceId || (subscription?.plan === proPriceId && isActive)}
            onClick={() => handleCheckout(proPriceId!)}
          >
            {isLoading === proPriceId && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {subscription?.plan === proPriceId && isActive ? 'Current Plan' : 'Subscribe'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
