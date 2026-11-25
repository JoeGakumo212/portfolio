import { useEffect } from "react"
import { profile } from "./content.ts"

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title =
      title === profile.name ? profile.name : `${title} — ${profile.name}`
  }, [title])
}
