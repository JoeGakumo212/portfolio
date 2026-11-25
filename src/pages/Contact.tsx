import { FormEvent } from "react"
import { profile } from "../content.ts"
import { usePageTitle } from "../usePageTitle.ts"

export function Contact() {
  usePageTitle("Contact")

  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = `Portfolio message from ${name}`
    const body = `From: ${name} <${email}>\n\n${message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="wrap page page-contact">
      <header className="center-intro">
        <h1>
          Connect with me <span className="grad">today</span>
        </h1>
      </header>
      <div className="contact-split">
        <div>
          <h2>Let&apos;s talk</h2>
          <p>
            Email, phone, and postal code are from the November 2026 CV. The
            form opens your email app with the message addressed to Joseph.
          </p>
          <h3>Contact details</h3>
          <ul className="contact-lines">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
            </li>
            <li>
              {profile.place} · Postal code {profile.postalCode}
            </li>
          </ul>
          <h3>Stay connected</h3>
          <p className="github-row">
            {profile.accounts.map((account) => (
              <a key={account.handle} href={account.href} target="_blank" rel="noreferrer">
                {account.handle}
              </a>
            ))}
          </p>
        </div>
        <form className="message-card" onSubmit={send}>
          <h2>Send a message</h2>
          <label>
            Full name
            <input name="name" type="text" required autoComplete="name" placeholder="Enter your name" />
          </label>
          <label>
            Email address
            <input name="email" type="email" required autoComplete="email" placeholder="Enter your email" />
          </label>
          <label>
            Your message
            <textarea name="message" required rows={5} placeholder="Write your message here" />
          </label>
          <button className="button" type="submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}
