"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check, MessageSquare, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              06 / GET IN TOUCH
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Let&apos;s build something.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground font-sans leading-relaxed">
            Have a project in mind, a dynamic website to engineer, a brand to design, or a shop space to plan? Reach out directly to our founders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Studio Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 border border-border bg-card p-6 sm:p-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-primary font-bold mb-6">
                Direct Channels
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase">Email</div>
                    <a
                      href="mailto:believewave4u@gmail.com"
                      className="font-mono text-sm text-foreground hover:text-primary transition-colors font-semibold"
                    >
                      believewave4u@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase">Phone / WhatsApp</div>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+94764346350"
                        className="font-mono text-sm text-foreground hover:text-primary transition-colors font-semibold"
                      >
                        +94 76 434 6350
                      </a>
                      <a
                        href="https://wa.me/94764346350"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                      >
                        <MessageSquare className="size-3" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase">Location</div>
                    <div className="font-mono text-sm text-foreground font-semibold">
                      Maruthamunai, Sri Lanka
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Open for regional and global clients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Response SLA
              </div>
              <p className="text-xs text-foreground font-sans leading-relaxed">
                We review inquiries daily and respond with an actionable perspective within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 border border-primary text-primary flex items-center justify-center">
                  <Check className="size-6" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                  Inquiry Received
                </h3>
                <p className="text-sm text-muted-foreground max-w-md font-sans">
                  Thank you for reaching out to Shadez. Your brief has been forwarded directly to our founders. We will review your requirements and respond within 24 hours.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        timeline: "1-3 months",
                        message: "",
                      });
                    }}
                    className="font-mono text-xs uppercase tracking-wider text-primary hover:underline"
                  >
                    Submit another inquiry
                  </button>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://wa.me/94764346350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-primary hover:underline"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
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
                      className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
                    >
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +94 76 434 6350"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
                    >
                      Estimated Timeline
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                      <option value="1-3 months">1–3 months</option>
                      <option value="3-6 months">3–6 months</option>
                      <option value="Exploratory / Flexible">Exploratory / Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Project Overview & Goals *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about what you want to build or design (dynamic website, brand system, shop layout, or marketing campaign)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-primary-foreground font-semibold hover:bg-brand-orange-hover transition-colors shadow-lg shadow-primary/10 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send inquiry</span>
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:believewave4u@gmail.com"
                    className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors text-center sm:text-right"
                  >
                    Or email directly: believewave4u@gmail.com
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
