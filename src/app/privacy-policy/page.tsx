import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { PrivacyContent } from "./privacy-content";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f7f9f5] pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-sm border border-[#e4e9df]/50">
            <h1 className="text-3xl sm:text-4xl font-medium text-[#1f2a1d] mb-8">
              Privacy Policy
            </h1>
            <PrivacyContent />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
