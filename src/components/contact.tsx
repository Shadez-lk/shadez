"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check } from "lucide-react";

export function Contact() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    timeline: "1-3 months",
  });

  const disciplines = [
    "01 Strategy",
    "02 Software",
    "03 Product Design",
    "04 Architecture",
    "05 Marketing",
  ];

  const toggleDiscipline = (item: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            Have a project in mind, a commercial space to plan, or a digital platform to engineer? Direct access to our founders starts here.
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
                      href="mailto:hello@shadez.lk"
                      className="font-mono text-sm text-foreground hover:text-primary transition-colors font-semibold"
                    >
                      hello@shadez.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase">Phone</div>
                    <span className="font-mono text-sm text-foreground font-semibold">
                      [Your phone number]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase">Location</div>
                    <div className="font-mono text-sm text-foreground font-semibold">
                      Galle, Sri Lanka
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Open for global & regional clients
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
                We review inquiries daily and respond with an initial discovery perspective within 24 hours.
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
                  Thank you for reaching out to Shadez. Our team will review your project brief and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 font-mono text-xs uppercase tracking-wider text-primary hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Disciplines Required
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {disciplines.map((d) => {
                      const isSelected = selectedDisciplines.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleDiscipline(d)}
                          className={`px-3 py-1.5 font-mono text-xs border transition-colors ${
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground font-bold"
                              : "border-border bg-background text-muted-foreground hover:border-border/90"
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </div>

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
                      Work Email *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="e.g. inshaf@company.lk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
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
                    placeholder="Tell us about what you want to build or design (digital platform, retail space, or complete identity)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-primary-foreground font-semibold hover:bg-brand-orange-hover transition-colors shadow-lg shadow-primary/10"
                >
                  <span>Send inquiry</span>
                  <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
