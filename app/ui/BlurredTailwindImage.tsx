"use client";

import Image from "next/image";
import { useState } from "react";
import cn from "clsx";

interface BlurredTailwindImageProps {
  url: string;
  alt: string;
}

export default function BlurredTailwindImage({
  url,
  alt,
}: BlurredTailwindImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={url}
      fill
      alt={alt}
      className={cn(
        "duration-200 ease-[cubic-bezier(0.3,0.2,0.2,0.8)]",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      style={{ objectFit: "cover" }}
      unoptimized
      onLoad={() => setIsLoading(false)}
    />
  );
}
