import { useEffect, useState } from "react"

const colors = [
  "#f7fbff",
  "#9b8cff",
  "#49d4ff",
  "#7ee0c8",
  "#d2b4ff",
  "#6ec1ff",
  "#ffffff",
  "#b9a6ff",
]

export function TypedName({ text }: { text: string }) {
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduce(media.matches)
    apply()
    media.addEventListener("change", apply)
    return () => media.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    if (reduce) return
    const atEnd = count === text.length
    const atStart = count === 0
    const hold = (atEnd && !deleting) || (atStart && deleting)
    const delay = hold ? 1100 : deleting ? 42 : 78
    const timer = window.setTimeout(() => {
      if (atEnd && !deleting) setDeleting(true)
      else if (atStart && deleting) setDeleting(false)
      else setCount((current) => current + (deleting ? -1 : 1))
    }, delay)
    return () => window.clearTimeout(timer)
  }, [count, deleting, reduce, text])

  const shown = reduce ? text : text.slice(0, count)

  return (
    <h1 className="typed-name" aria-label={text}>
      <span aria-hidden="true">
        {Array.from(shown).map((char, index) => (
          <span key={`${index}-${char}`} style={{ color: colors[index % colors.length] }}>
            {char === " " ? "\u00a0" : char}
          </span>
        ))}
        {reduce ? null : <span className="typed-caret" />}
      </span>
    </h1>
  )
}
