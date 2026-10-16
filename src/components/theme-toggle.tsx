"use client";

import React from "react";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`group relative inline-flex items-center gap-2 border border-border bg-card/80 px-2.5 py-1.5 transition-all duration-200 hover:border-primary hover:bg-card ${className}`}
    >
      <div className="relative size-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="size-3.5 text-primary transition-transform duration-200 group-hover:rotate-45" />
        ) : (
          <Moon className="size-3.5 text-foreground transition-transform duration-200 group-hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}

