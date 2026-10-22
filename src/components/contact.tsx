"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check, MessageSquare, AlertCircle, Loader2, Shield, Copy, CheckCheck, Clock } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceFocus: "Websites & Software",
    timeline: "1-3 months",
    message: "",
    _gotcha: "", // Honeypot spam trap (Section 5.2)
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
      setErrorMessage("Please complete all required fields.");
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
    <section id="contact" className="relative scroll-mt-20 border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Plain language per Section 4.1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>Contact</span>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <span className="text-muted-foreground">Start a Conversation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Let&apos;s build something.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              Whether you need a search-optimized web platform, a physical commercial shop layout, or an end-to-end brand launch — direct collaboration starts here.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Studio Coordinates (Section 3.8 Rebalanced layout) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 border-2 border-border bg-card p-7 sm:p-9 relative shadow-sm">
            {/* Corner Markers (Screen-reader hidden) */}
            <span aria-hidden="true" className="absolute -top-1 -left-1 text-primary font-mono text-xs select-none">┌</span>
            <span aria-hidden="true" className="absolute -top-1 -right-1 text-primary font-mono text-xs select-none">┐</span>
            <span aria-hidden="true" className="absolute -bottom-1 -left-1 text-primary font-mono text-xs select-none">└</span>
            <span aria-hidden="true" className="absolute -bottom-1 -right-1 text-primary font-mono text-xs select-none">┘</span>

            <div>
              <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                  Direct Maker Channels
                </span>
                <span className="font-mono text-[11px] text-muted-foreground uppercase">
                  Zero Bureaucracy
                </span>
              </div>

              <div className="space-y-6">
                {/* Phone & WhatsApp Channel (Highlighted primary channel per 2.4) */}
                <div className="flex items-start gap-4">
                  <div className="size-9 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Phone className="size-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Phone & WhatsApp
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy("+94764346350", "phone")}
                        className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase px-2 py-1 border border-border/80 bg-background min-h-[32px]"
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
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline font-semibold mt-1.5"
                    >
                      <MessageSquare className="size-3.5" aria-hidden="true" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex items-start gap-4">
                  <div className="size-9 bg-background border border-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="size-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Studio Email
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy("believewave4u@gmail.com", "email")}
                        className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase px-2 py-1 border border-border/80 bg-background min-h-[32px]"
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
                      className="font-mono text-sm text-foreground hover:text-primary transition-colors font-bold block mt-1"
                    >
                      believewave4u@gmail.com
                    </a>
                    <div className="text-xs text-muted-foreground font-sans mt-0.5">
                      Direct founder inbox
                    </div>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="flex items-start gap-4">
                  <div className="size-9 bg-background border border-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      Studio Hub
                    </div>
                    <div className="font-mono text-sm text-foreground font-semibold mt-0.5">
                      Maruthamunai, Eastern Province
                    </div>
                    <div className="text-xs text-muted-foreground font-sans mt-0.5">
                      Sri Lanka (UTC+05:30) • Open for regional & global clients
                    </div>
                  </div>
                </div>

                {/* Working Hours (Section 3.8 Content Rebalance) */}
                <div className="flex items-start gap-4 pt-2 border-t border-border/60">
                  <div className="size-9 bg-background border border-border flex items-center justify-center text-muted-foreground shrink-0 mt-0.5">
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

            {/* Response Guarantee Box (Section 2.6 Consistent wording) */}
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

          {/* Right Column: Project Commission Form (Section 3.8 & 5.2 Clean single control set) */}
          <div className="lg:col-span-7 border border-border bg-card p-7 sm:p-9">
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
                        serviceFocus: "Websites & Software",
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
                {/* Header Note: Section 2.6 Honest Security Statement */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Project Inquiry Form
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Your details are sent securely
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

                {/* Spam protection honeypot (Section 5.2) */}
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
                      placeholder="e.g. Your name"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      htmlFor="serviceFocus"
                      className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                    >
                      Primary Service Interest
                    </label>
                    <select
                      id="serviceFocus"
                      value={formData.serviceFocus}
                      onChange={(e) => setFormData({ ...formData, serviceFocus: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors font-sans"
                    >
                      <option value="Shop & Website Together">Shop + Website Together (Full Studio Suite)</option>
                      <option value="Websites & Software">Websites & Software (Next.js & Search Ready)</option>
                      <option value="Shop & Interior Design">Shop & Interior Design (Commercial Layouts)</option>
                      <option value="Branding & Design">Branding & Design (Logos & Product Assets)</option>
                      <option value="Social Media & Ads">Social Media & Targeted Advertising</option>
                      <option value="Business Strategy">Business Growth Strategy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                  >
                    Target Execution Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors font-sans"
                  >
                    <option value="Immediate (< 1 month)">Immediate Launch (&lt; 1 month)</option>
                    <option value="1-3 months">Standard Progression (1–3 months)</option>
                    <option value="3-6 months">Phased Commercial Rollout (3–6 months)</option>
                    <option value="Exploratory / Discovery Stage">Exploratory / Discovery Stage</option>
                  </select>
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
                    placeholder="Briefly describe your goals (e.g. retail shop location, website requirements, brand identity, or growth targets)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none font-sans"
                  />
                </div>

                {/* Consent & Privacy Notice (Section 5.2) */}
                <p className="text-xs text-muted-foreground font-sans">
                  Your information is sent securely and used only to respond to your inquiry. By submitting, you agree to our{" "}
                  <a href="#privacy" className="text-primary hover:underline font-mono">
                    Privacy Policy
                  </a>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary min-h-[48px] px-8 text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold hover:bg-brand-orange-hover transition-all duration-200 shadow-lg shadow-primary/15 disabled:opacity-60"
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
                    className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors text-center sm:text-right min-h-[44px] flex items-center"
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
