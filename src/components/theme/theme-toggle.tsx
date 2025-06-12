import { MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <MoonIcon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <SunIcon className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">Mudar tema</TooltipContent>
    </Tooltip>
  )
}
