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
  showTagline = false,
  size = "md",
  variant = "icon",
}: BrandLogoProps) {
  const iconDimensions = {
    sm: { box: "size-7", imgSize: 36 },
    md: { box: "size-9", imgSize: 46 },
    lg: { box: "size-12", imgSize: 64 },
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
            src="/brand/shadez-cube-logo.jpg"
            alt="shadez studio logo"
            width={dim.width}
            height={dim.height}
            priority
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
      {/* Isometric Cube Monogram from Image */}
      <div
        suppressHydrationWarning
        className={`relative ${currentDim.box} shrink-0 overflow-hidden flex items-center justify-center rounded-none`}
      >
        <Image
          src="/brand/shadez-cube-logo.jpg"
          alt="shadez monogram"
          width={currentDim.imgSize}
          height={currentDim.imgSize}
          priority
          className="brand-cube-image object-cover -translate-y-[8%] scale-[1.35] transition-transform duration-300 group-hover:scale-[1.42]"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display font-bold tracking-tight lowercase text-foreground leading-none ${textSizes[size]}`}
        >
          shadez
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans mt-0.5">
            studio
          </span>
        )}
      </div>
    </Link>
  );
}
