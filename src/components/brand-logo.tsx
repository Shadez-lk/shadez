import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "icon" | "full";
}

export function BrandLogo({
  className = "",
  size = "md",
  variant = "icon",
}: BrandLogoProps) {
  const iconDimensions = {
    sm: { box: "size-7", imgSize: 28 },
    md: { box: "size-9", imgSize: 36 },
    lg: { box: "size-12", imgSize: 48 },
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const fullDimensions = {
    sm: { width: 70, height: 64 },
    md: { width: 92, height: 84 },
    lg: { width: 130, height: 118 },
  };

  if (variant === "full") {
    const dim = fullDimensions[size];
    return (
      <Link
        href="/"
        className={`group inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
      >
        <div className="relative overflow-hidden flex items-center justify-center">
          <Image
            src="/brand/trademark_logo.png"
            alt="Shadez logo"
            width={dim.width}
            height={dim.height}
            loading="eager"
            className="brand-cube-image object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
    );
  }

  const currentDim = iconDimensions[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
    >
      {/* Trademark Isometric Cube Monogram */}
      <div
        suppressHydrationWarning
        className={`relative ${currentDim.box} shrink-0 overflow-hidden flex items-center justify-center rounded-none`}
      >
        <Image
          src="/brand/trademark_logo.png"
          alt="Shadez monogram"
          width={currentDim.imgSize}
          height={currentDim.imgSize}
          loading="eager"
          className="brand-cube-image object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <span
        className={`font-display font-bold tracking-tight text-foreground leading-none ${textSizes[size]}`}
      >
        shadez
      </span>
    </Link>
  );
}
