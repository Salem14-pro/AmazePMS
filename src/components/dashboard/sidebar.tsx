import { DashboardNav } from '@/components/dashboard/nav';
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="hidden w-[200px] flex-col md:flex border-r h-screen px-4 py-6">
      <div className="flex items-center mb-8 px-2">
        <Link href="/" className="font-bold text-xl tracking-tight">
          SaaS.
        </Link>
      </div>
      <DashboardNav />
    </aside>
  );
}
