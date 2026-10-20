"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check, MessageSquare, AlertCircle, Loader2, Shield, Copy, CheckCheck } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2000);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceFocus: "Full-Spectrum Studio Suite",
    timeline: "1-3 months",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          from_name: "Shadez Lead System",
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
    <section id="contact" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>06 / COMMISSION A PROJECT</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">DIRECT FOUNDER ACCESS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Let&apos;s build something.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Whether you need a dynamic web platform with #1 Google ranking, a physical commercial shop layout, or an end-to-end brand launch — direct collaboration starts here.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Studio Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 border-2 border-border bg-card p-7 sm:p-9 relative shadow-sm">
            {/* Corner Markers */}
            <span className="absolute -top-1 -left-1 text-primary font-mono text-xs select-none">┌</span>
            <span className="absolute -top-1 -right-1 text-primary font-mono text-xs select-none">┐</span>
            <span className="absolute -bottom-1 -left-1 text-primary font-mono text-xs select-none">└</span>
            <span className="absolute -bottom-1 -right-1 text-primary font-mono text-xs select-none">┘</span>

            <div>
              <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                  DIRECT MAKER CHANNELS
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase">
                  ZERO MIDDLEMEN
                </span>
              </div>

              <div className="space-y-6">
                {/* Email Channel */}
                <div className="flex items-start gap-4">
                  <div className="size-8 bg-background border border-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="size-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Studio Email
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy("believewave4u@gmail.com", "email")}
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase px-1.5 py-0.5 border border-border/80 bg-background"
                        title="Copy Email Address"
                      >
                        {copiedKey === "email" ? (
                          <>
                            <CheckCheck className="size-3 text-primary" />
                            <span className="text-primary font-bold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-2.5" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href="mailto:believewave4u@gmail.com"
                      className="font-mono text-sm text-foreground hover:text-primary transition-colors font-bold block mt-0.5"
                    >
                      believewave4u@gmail.com
                    </a>
                    <div className="text-[11px] text-muted-foreground font-sans mt-0.5">
                      Direct inbox of the founders
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp Channel */}
                <div className="flex items-start gap-4">
                  <div className="size-8 bg-background border border-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Phone className="size-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Phone & WhatsApp
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy("+94764346350", "phone")}
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase px-1.5 py-0.5 border border-border/80 bg-background"
                        title="Copy Phone Number"
                      >
                        {copiedKey === "phone" ? (
                          <>
                            <CheckCheck className="size-3 text-primary" />
                            <span className="text-primary font-bold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-2.5" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href="tel:+94764346350"
                      className="font-mono text-sm text-foreground hover:text-primary transition-colors font-bold block mt-0.5"
                    >
                      +94 76 434 6350
                    </a>
                    <a
                      href="https://wa.me/94764346350"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline font-semibold mt-1"
                    >
                      <MessageSquare className="size-3" />
                      <span>Launch WhatsApp Chat</span>
                    </a>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="flex items-start gap-4">
                  <div className="size-8 bg-background border border-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Studio Hub
                    </div>
                    <div className="font-mono text-sm text-foreground font-semibold">
                      Maruthamunai, Eastern Province
                    </div>
                    <div className="text-[11px] text-muted-foreground font-sans mt-0.5">
                      Sri Lanka (UTC+05:30) • Open for regional & global clients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA & Confidence Box */}
            <div className="border-t border-border pt-6 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-foreground font-semibold uppercase">
                <Shield className="size-4 text-primary" />
                <span>The Shadez Response Guarantee</span>
              </div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                We review every project brief personally and provide an initial diagnostic perspective within <strong>24 business hours</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Project Commission Terminal */}
          <div className="lg:col-span-7 border border-border bg-card p-7 sm:p-9">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="size-14 rounded-none bg-primary/10 border-2 border-primary text-primary flex items-center justify-center">
                  <Check className="size-7" />
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-foreground">
                  Inquiry Received
                </h3>
                <p className="text-sm text-muted-foreground max-w-md font-sans leading-relaxed">
                  Thank you for reaching out to Shadez. Your project brief has been transmitted directly to our co-founders. We will review your goals and respond within 24 hours.
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
                        serviceFocus: "Full-Spectrum Studio Suite",
                        timeline: "1-3 months",
                        message: "",
                      });
                    }}
                    className="font-mono text-xs uppercase tracking-wider text-primary hover:underline font-semibold"
                  >
                    Submit another inquiry
                  </button>
                  <span className="text-border">•</span>
                  <a
                    href="https://wa.me/94764346350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors font-semibold"
                  >
                    <MessageSquare className="size-3.5 text-primary" />
                    <span>Quick chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    PROJECT SPECIFICATION FORM
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    ALL FIELDS ENCRYPTED
                  </span>
                </div>

                {errorMessage && (
                  <div className="border border-destructive/40 bg-destructive/10 p-4 text-xs text-destructive flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="e.g. Inshaf Naazir"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                    >
                      Work / Contact Email *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="e.g. contact@business.lk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +94 76 434 6350"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="serviceFocus"
                      className="block font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-2"
                    >
                      Primary Service Focus
                    </label>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {[
                        "Full-Spectrum Studio Suite",
                        "Software & Web Engineering",
                        "Commercial Shop & Spatial Architecture",
                        "Brand Identity & Product Design",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceFocus: item })}
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border transition-all ${
                            formData.serviceFocus === item
                              ? "border-primary bg-primary text-primary-foreground font-bold"
                              : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-border/80"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <select
                      id="serviceFocus"
                      value={formData.serviceFocus}
                      onChange={(e) => setFormData({ ...formData, serviceFocus: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-sans"
                    >
                      <option value="Full-Spectrum Studio Suite">Full-Spectrum Suite (Physical + Digital)</option>
                      <option value="Software & Web Engineering">Software & Web Engineering (#1 SEO)</option>
                      <option value="Commercial Shop & Spatial Architecture">Commercial Shop & Spatial Architecture</option>
                      <option value="Brand Identity & Product Design">Brand Identity & Product Design</option>
                      <option value="Digital Marketing & Algorithmic Ads">Digital Marketing & Algorithmic Ads</option>
                      <option value="Business Growth Strategy">Business Growth Strategy</option>
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
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {[
                      { key: "Immediate (< 1 month)", label: "Immediate (< 1 mo)" },
                      { key: "1-3 months", label: "Standard (1-3 mos)" },
                      { key: "3-6 months", label: "Phased (3-6 mos)" },
                      { key: "Exploratory / Discovery Stage", label: "Discovery" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: item.key })}
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border transition-all ${
                          formData.timeline === item.key
                            ? "border-primary bg-primary text-primary-foreground font-bold"
                            : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-border/80"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-sans"
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
                    Project Scope & Objectives *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your goals (e.g. retail shop location, dynamic website requirements, brand redesign, or targeted growth targets)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none font-sans"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary h-12 px-8 text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold hover:bg-brand-orange-hover transition-all duration-200 shadow-lg shadow-primary/15 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:believewave4u@gmail.com"
                    className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors text-center sm:text-right"
                  >
                    Direct Email: believewave4u@gmail.com
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
