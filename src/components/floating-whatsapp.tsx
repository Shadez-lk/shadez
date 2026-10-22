"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick Contact Actions">
      <a
        href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Shadez founders on WhatsApp"
        className="sm:hidden fixed bottom-5 right-5 z-40 size-12 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageSquare className="size-6 fill-current" aria-hidden="true" />
      </a>
    </aside>
  );
}

