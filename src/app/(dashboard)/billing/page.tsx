import { createClient } from '@/lib/supabase/server';
import { BillingForm } from '@/components/dashboard/billing-form';

export default async function BillingPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user?.id || '')
    .single();

  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground mt-2">
          Manage your subscription and billing details.
        </p>
      </div>
      
      <BillingForm subscription={subscription} />
    </div>
  );
}
