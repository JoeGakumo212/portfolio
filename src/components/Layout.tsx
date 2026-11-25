import { useEffect, useRef, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router"
import { profile } from "../content.ts"

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/services", label: "Services", end: false },
  { to: "/work", label: "Projects", end: false },
  { to: "/contact", label: "Contact", end: false },
]

function sceneFor(pathname: string) {
  if (pathname === "/") return "home"
  if (pathname === "/work") return "work"
  if (pathname.startsWith("/work/")) return "project"
  if (pathname === "/about") return "about"
  if (pathname === "/services") return "services"
  if (pathname === "/contact") return "contact"
  return "plain"
}

export function Layout() {
  const { pathname } = useLocation()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname
  const buttonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.dataset.scene = sceneFor(pathname)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const nav = navRef.current
    const button = buttonRef.current
    const linksInMenu = nav
      ? Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"))
      : []
    linksInMenu[0]?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null)
        button?.focus()
        return
      }
      if (event.key !== "Tab" || linksInMenu.length === 0) return
      const first = linksInMenu[0]
      const last = linksInMenu[linksInMenu.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        button?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        button?.focus()
      } else if (!event.shiftKey && document.activeElement === button) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && document.activeElement === button) {
        event.preventDefault()
        last.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className={open ? "mast is-open" : "mast"}>
        <div className="mast-bar">
          <NavLink className="brand" to="/" end>
            <img
              className="avatar"
              src="/images/avatar.jpg"
              alt="Joseph Gakumo Munyui"
            />
            <span className="brand-text" aria-hidden="true">
              <span className="mast-name">Joseph Gakumo</span>
              <span className="mast-role">Software engineer</span>
            </span>
          </NavLink>
          <button
            ref={buttonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="menu-icon" data-open={open ? "true" : "false"} />
          </button>
          <nav
            id="site-nav"
            ref={navRef}
            className={open ? "is-open" : undefined}
            aria-label="Primary"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  [link.to === "/contact" ? "nav-cta" : "", isActive ? "active" : ""]
                    .filter(Boolean)
                    .join(" ")
                }
                onClick={() => setOpenPath(null)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="content" data-scene={sceneFor(pathname)}>
        <Outlet />
      </main>
      <footer>
        <div>
          <p className="footer-name">{profile.name}</p>
          <p>{profile.title}</p>
        </div>
        <p className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.accounts[0].href}>{profile.accounts[0].handle}</a>
          <a href={profile.accounts[1].href}>{profile.accounts[1].handle}</a>
        </p>
      </footer>
    </>
  )
}
