"use client";

import { useEffect, useState } from "react";

export function PrivacyContent() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/privacy-content.html")
      .then((res) => res.text())
      .then((text) => setHtml(text))
      .catch(() => setHtml("<p>Failed to load privacy policy.</p>"));
  }, []);

  if (!html) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-2 border-[#336443] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="privacy-policy-content prose prose-green max-w-none text-[#1f2a1d] [&_h1]:text-[#1f2a1d] [&_h2]:text-[#1f2a1d] [&_h3]:text-[#1f2a1d] [&_a]:text-[#336443] [&_ul]:list-disc [&_ul]:pl-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
