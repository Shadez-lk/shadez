"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check, MessageSquare, AlertCircle, Loader2, Shield, Copy, CheckCheck, Clock } from "lucide-react";

const SERVICE_OPTIONS = [
  { value: "Shop + Website Together", label: "Shop + Web Together (Full Suite)" },
  { value: "Websites & Software", label: "Websites & Software" },
  { value: "Shop & Interior Design", label: "Shop & Interior Design" },
  { value: "Branding & Design", label: "Branding & Visual Systems" },
  { value: "Social Media & Ads", label: "Social Media & Ads" },
];

const TIMELINE_OPTIONS = [
  { value: "Immediate (< 1 month)", label: "< 1 Month (Fast-Track)" },
  { value: "1-3 months", label: "1–3 Months (Standard)" },
  { value: "3-6 months", label: "3–6 Months (Phased)" },
  { value: "Exploratory / Discovery", label: "Exploratory / Discovery" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceFocus: "Shop + Website Together",
    timeline: "1-3 months",
    message: "",
    _gotcha: "", // Honeypot spam trap
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for spam bots
    if (formData._gotcha) {
      setSubmitted(true);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Project Scope).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c6e7248c-75dd-4b7e-9341-4a3efda43b09",
          subject: `New Project Inquiry from ${formData.name} — Shadez`,
          from_name: "Shadez Inquiry Desk",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service_focus: formData.serviceFocus,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.message || "Unable to send message. Please reach us directly via email or WhatsApp."
        );
      }
    } catch {
      setErrorMessage("Network issue detected. Please email believewave4u@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 border-b border-border bg-background py-16 sm:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* High-Impact Studio Callout Banner (Signature Industrial Orange Accent) */}
        <div className="bg-primary text-primary-foreground p-7 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-primary-foreground/80 font-bold mb-2 block">
                Direct Maker Access • 24h Response SLA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                Ready to build your space and software together?
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/90 font-sans mt-3 leading-relaxed">
                One unified contract with two founding leads. Direct collaboration between computer engineering and landscape architecture without agency bloat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp inquiry with Shadez founders"
                className="inline-flex items-center justify-center gap-2.5 bg-black text-white hover:bg-neutral-900 px-6 py-3.5 min-h-[48px] text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="size-4" aria-hidden="true" />
                <span>WhatsApp: +94 76 434 6350</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-border mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              <span>06 / Project Commission Desk</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-foreground">
              Let&apos;s build something.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-sans max-w-md">
            Whether you need a search-optimized web platform, a physical commercial shop layout, or an end-to-end brand launch — direct collaboration starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Studio Coordinates & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 border border-border bg-card p-6 sm:p-9 relative shadow-sm">
            {/* Technical Corner Markers */}
            <span aria-hidden="true" className="absolute -top-1 -left-1 text-primary font-mono text-xs select-none">┌</span>
            <span aria-hidden="true" className="absolute -top-1 -right-1 text-primary font-mono text-xs select-none">┐</span>
            <span aria-hidden="true" className="absolute -bottom-1 -left-1 text-primary font-mono text-xs select-none">└</span>
            <span aria-hidden="true" className="absolute -bottom-1 -right-1 text-primary font-mono text-xs select-none">┘</span>

            <div>
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                  Direct Maker Channels
                </span>
                <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-foreground">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>Q4 Commissions Open</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Phone & WhatsApp Channel */}
                <div className="flex items-start gap-4">
                  <div className="size-10 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Phone className="size-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Phone & WhatsApp
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy("+94764346350", "phone")}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors uppercase px-2 py-1 border border-border bg-background min-h-[32px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        title="Copy Phone Number"
                      >
                        {copiedKey === "phone" ? (
                          <>
                            <CheckCheck className="size-3 text-primary" aria-hidden="true" />
                            <span className="text-primary font-bold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" aria-hidden="true" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href="tel:+94764346350"
                      className="font-mono text-sm text-foreground hover:text-primary transition-colors font-bold block mt-1"
                    >
                      +94 76 434 6350
                    </a>
                    <a
                      href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline font-semibold mt-1"
                    >
                      <MessageSquare className="size-3.5" aria-hidden="true" />
                      <span>Chat directly on WhatsApp →</span>
                    </a>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex items-start gap-4">
                  <div className="size-10 bg-background border border-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="size-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Founder Direct Email
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy("believewave4u@gmail.com", "email")}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors uppercase px-2 py-1 border border-border bg-background min-h-[32px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        title="Copy Email Address"
                      >
                        {copiedKey === "email" ? (
                          <>
                            <CheckCheck className="size-3 text-primary" aria-hidden="true" />
                            <span className="text-primary font-bold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" aria-hidden="true" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href="mailto:believewave4u@gmail.com"
                      className="font-mono text-sm text-foreground hover:text-primary transition-colors font-bold block mt-1 truncate"
                    >
                      believewave4u@gmail.com
                    </a>
                    <div className="text-xs text-muted-foreground font-sans mt-0.5">
                      Direct founder inbox • Zero account managers
                    </div>
                  </div>
                </div>

                {/* Studio Hub */}
                <div className="flex items-start gap-4">
                  <div className="size-10 bg-background border border-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      Physical Studio Hub
                    </div>
                    <div className="font-mono text-sm text-foreground font-semibold mt-0.5">
                      Maruthamunai, Eastern Province
                    </div>
                    <div className="text-xs text-muted-foreground font-sans mt-0.5">
                      Sri Lanka (UTC+05:30) • Open for regional & global clients
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 pt-2 border-t border-border/60">
                  <div className="size-10 bg-background border border-border flex items-center justify-center text-muted-foreground shrink-0 mt-0.5">
                    <Clock className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      Working Hours
                    </div>
                    <div className="font-mono text-xs text-foreground font-medium mt-0.5">
                      Mon – Sat: 9:00 AM – 6:00 PM (UTC+05:30)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Guarantee Box */}
            <div className="border-t border-border pt-6 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-foreground font-semibold uppercase">
                <Shield className="size-4 text-primary" aria-hidden="true" />
                <span>Response Standard</span>
              </div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                We review every project brief personally. <strong>We reply within 24 business hours.</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Project Commission Terminal */}
          <div className="lg:col-span-7 border border-border bg-card p-6 sm:p-9 shadow-sm">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="size-14 bg-primary/10 border-2 border-primary text-primary flex items-center justify-center">
                  <Check className="size-7" aria-hidden="true" />
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-foreground">
                  Inquiry Transmitted
                </h3>
                <p className="text-base text-muted-foreground max-w-md font-sans leading-relaxed">
                  Thank you for reaching out to Shadez. Your project brief has been transmitted directly to our founders. We reply within 24 business hours.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        serviceFocus: "Shop + Website Together",
                        timeline: "1-3 months",
                        message: "",
                        _gotcha: "",
                      });
                    }}
                    className="font-mono text-xs uppercase tracking-wider text-primary hover:underline font-semibold min-h-[44px] flex items-center"
                  >
                    Submit another inquiry
                  </button>
                  <span className="text-border" aria-hidden="true">•</span>
                  <a
                    href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors font-semibold min-h-[44px]"
                  >
                    <MessageSquare className="size-3.5 text-primary" aria-hidden="true" />
                    <span>Quick chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Header Note */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Project Brief Specifications
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Sent directly to founders
                  </span>
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="border border-destructive/40 bg-destructive/10 p-4 text-xs text-destructive flex items-center gap-2"
                  >
                    <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot spam trap */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="_gotcha">Leave this field blank</label>
                  <input
                    id="_gotcha"
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._gotcha}
                    onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  />
                </div>

                {/* Interactive Service Interest Pill Selectors */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2">
                    Primary Service Interest <span className="text-primary">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="radiogroup" aria-label="Primary Service Interest">
                    {SERVICE_OPTIONS.map((opt) => {
                      const isSelected = formData.serviceFocus === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setFormData({ ...formData, serviceFocus: opt.value })}
                          className={`px-3 py-2.5 text-xs font-mono text-left transition-all border min-h-[44px] flex items-center justify-between focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                            isSelected
                              ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                              : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                          }`}
                        >
                          <span className="truncate pr-2">{opt.label}</span>
                          {isSelected ? (
                            <span className="size-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                          ) : (
                            <span className="size-1.5 rounded-full border border-muted-foreground/40 shrink-0" aria-hidden="true" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Target Timeline Selector */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2">
                    Target Execution Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="radiogroup" aria-label="Target Execution Timeline">
                    {TIMELINE_OPTIONS.map((opt) => {
                      const isSelected = formData.timeline === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setFormData({ ...formData, timeline: opt.value })}
                          className={`px-2 py-2 text-xs font-mono text-center transition-all border min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground font-bold shadow-sm"
                              : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                          }`}
                        >
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Coordinates Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                    >
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      aria-required="true"
                      autoComplete="name"
                      type="text"
                      placeholder="e.g. Inshaf or Business Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                    >
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      type="email"
                      placeholder="e.g. contact@business.lk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                  >
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="e.g. +94 76 434 6350"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                  >
                    Project Scope & Objectives <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    aria-required="true"
                    rows={4}
                    placeholder="Briefly describe your requirements (e.g. retail shop square footage, website specifications, brand visual kit, or launch timeline)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none font-sans"
                  />
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-muted-foreground font-sans">
                  Your information is sent securely to our founders and used only to respond to your brief. By submitting, you agree to our{" "}
                  <a href="#privacy" className="text-primary hover:underline font-mono">
                    Privacy Policy
                  </a>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary min-h-[48px] px-8 text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold hover:bg-brand-orange-hover transition-all duration-200 shadow-lg shadow-primary/15 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:believewave4u@gmail.com"
                    className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors text-center sm:text-right min-h-[44px] flex items-center justify-center sm:justify-end"
                  >
                    Direct Email: believewave4u@gmail.com
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Screen reader live notification for copy button feedback */}
      <div aria-live="polite" className="sr-only">
        {copiedKey ? `${copiedKey === "phone" ? "Phone number" : "Email address"} copied to clipboard.` : ""}
      </div>
    </section>
  );
}
