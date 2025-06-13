export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export function getCookieValue(name: string): string | null {
  const cookies = document.cookie
    .split('; ')
    .reduce<Record<string, string>>((acc, cookie) => {
      const [key, value] = cookie.split('=')

      acc[key] = value

      return acc
    }, {})

  return cookies[name] ?? null
}
