import { Link } from "react-router"
import { usePageTitle } from "../usePageTitle.ts"

export function NotFound() {
  usePageTitle("Page not found")

  return (
    <div className="wrap page">
      <header className="page-intro">
        <p className="eyebrow">404</p>
        <h1>That page is not on this site.</h1>
        <p>The address does not match a page in the portfolio.</p>
        <Link className="button" to="/">
          Back home
        </Link>
      </header>
    </div>
  )
}
