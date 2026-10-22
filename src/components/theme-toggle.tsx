"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, toggleTheme } = useTheme();

  // Guarantee identical DOM output during SSR and initial client hydration
  const isDark = isMounted ? theme === "dark" : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isMounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Switch theme"}
      className={`group relative inline-flex items-center gap-2 border border-border bg-card/80 px-2.5 py-1.5 transition-all duration-200 hover:border-primary hover:bg-card ${className}`}
      suppressHydrationWarning
    >
      <div className="relative size-4 flex items-center justify-center" suppressHydrationWarning>
        {isDark ? (
          <Sun className="size-3.5 text-primary transition-transform duration-200 group-hover:rotate-45" />
        ) : (
          <Moon className="size-3.5 text-foreground transition-transform duration-200 group-hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span
          className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground"
          suppressHydrationWarning
        >
          {isMounted ? (isDark ? "Light" : "Dark") : "Theme"}
        </span>
      )}
    </button>
  );
}

