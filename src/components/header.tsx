import { Package } from 'lucide-react'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div>
      <div className="mx-auto flex max-w-[1080px] items-center gap-6 pt-4 max-[1080px]:px-6">
        <h1 className="text-md font-bold">
          shrink<span className="text-muted-foreground">.er</span>
        </h1>

        <div className="bg-border h-4 w-px" />

        <nav className="flex items-center gap-6">
          <NavLink to="/links">
            <Package className="size-4" />
            Links
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
