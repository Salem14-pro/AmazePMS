"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#f0f4eb] rounded-[2.5rem] p-8 sm:p-16 lg:p-20 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 text-[#1f2a1d] tracking-tight">
                Ready to transform <br />
                your facility?
              </h2>
              <p className="text-[#4b5b47] text-lg mb-10 max-w-md">
                Get a customized quote for your property. Our team of experts is ready to build a comprehensive management plan.
              </p>

              <div className="space-y-6">
                {[
                  "Tailored solutions for your specific needs",
                  "Transparent pricing with no hidden costs",
                  "Dedicated account manager",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#336443]" />
                    </div>
                    <span className="text-[#2d3a2a] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-[#336443]/5 border border-[#e4e9df]/50"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[#1f2a1d]">
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        className="w-full px-4 py-3 bg-[#f7f9f5] border border-[#e4e9df] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#336443]/20 focus:border-[#336443] transition-all text-[#1f2a1d]"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[#1f2a1d]">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 bg-[#f7f9f5] border border-[#e4e9df] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#336443]/20 focus:border-[#336443] transition-all text-[#1f2a1d]"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-[#1f2a1d]">
                      Company (Optional)
                    </label>
                    <input
                      {...register("company")}
                      id="company"
                      className="w-full px-4 py-3 bg-[#f7f9f5] border border-[#e4e9df] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#336443]/20 focus:border-[#336443] transition-all text-[#1f2a1d]"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#1f2a1d]">
                      How can we help?
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#f7f9f5] border border-[#e4e9df] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#336443]/20 focus:border-[#336443] transition-all text-[#1f2a1d] resize-none"
                      placeholder="Tell us about your facility management needs..."
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full h-12 bg-[#1f2a1d] hover:bg-[#2d3a2a] text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isSuccess ? (
                      "Message Sent!"
                    ) : (
                      <>
                        Get your quote
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
