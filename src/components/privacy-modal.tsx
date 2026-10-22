"use client";

import React, { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";

export function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#privacy") {
        setIsOpen(true);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const close = () => {
    setIsOpen(false);
    if (window.location.hash === "#privacy") {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl border-2 border-primary bg-card p-6 sm:p-8 shadow-2xl text-foreground max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={close}
          aria-label="Close Privacy Policy"
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground border border-border"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-bold mb-2">
          <Shield className="size-4" aria-hidden="true" />
          <span>Shadez Privacy Policy</span>
        </div>

        <h2 id="privacy-title" className="text-2xl sm:text-3xl font-display font-bold uppercase mb-4">
          Privacy Policy & Data Handling
        </h2>

        <div className="space-y-4 text-sm text-muted-foreground font-sans leading-relaxed">
          <p>
            At Shadez, we respect your privacy. This policy outlines how we handle the personal information you submit through our website.
          </p>

          <h3 className="font-display text-lg font-bold uppercase text-foreground">
            1. Information We Collect
          </h3>
          <p>
            When you submit a project inquiry, we collect your name, email address, optional telephone/WhatsApp number, service interest, timeline, and project description.
          </p>

          <h3 className="font-display text-lg font-bold uppercase text-foreground">
            2. How We Use Your Information
          </h3>
          <p>
            Your information is used strictly to evaluate your project requirements, communicate directly with you, and prepare customized project estimates. We never sell, rent, or monetize your contact details.
          </p>

          <h3 className="font-display text-lg font-bold uppercase text-foreground">
            3. Data Security & Storage
          </h3>
          <p>
            Inquiry submissions are transmitted securely over TLS/HTTPS directly to our founders. We retain your message only for the duration required to process your project inquiry.
          </p>

          <h3 className="font-display text-lg font-bold uppercase text-foreground">
            4. Your Rights & Inquiries
          </h3>
          <p>
            You may request the deletion or correction of your submitted information at any time by emailing us directly at{" "}
            <a href="mailto:believewave4u@gmail.com" className="text-primary hover:underline font-mono">
              believewave4u@gmail.com
            </a>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border flex justify-end">
          <button
            type="button"
            onClick={close}
            className="bg-primary px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-primary-foreground font-bold hover:bg-brand-orange-hover"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

