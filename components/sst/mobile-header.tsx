"use client"

import { Menu, User, Share2, MoreVertical } from "lucide-react"

interface MobileHeaderProps {
  onMenuClick: () => void
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border/30 bg-background px-4 py-3 lg:hidden">
      <button 
        onClick={onMenuClick}
        className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2">
        <button className="rounded-full bg-secondary p-2 text-foreground">
          <User className="h-5 w-5" />
        </button>
        <button className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <Share2 className="h-4 w-4" />
        </button>
        <button className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
