"use client"

import Image from "next/image"

export function SSTLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/sst-logo.png"
        alt="SST Intelligence Logo"
        width={120}
        height={60}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  )
}
