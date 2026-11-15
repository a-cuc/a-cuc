export function InterestIcon({ type }) {
  if (type === 'networks') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="16" r="7" />
        <circle cx="17" cy="43" r="7" />
        <circle cx="47" cy="43" r="7" />
        <path d="M27.5 22.5 20.5 36M36.5 22.5 43.5 36M24 43h16" />
      </svg>
    )
  }

  if (type === 'data') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="32" cy="17" rx="14" ry="7" />
        <path d="M18 17v15c0 4 6.3 7 14 7s14-3 14-7V17M18 32v15c0 4 6.3 7 14 7s14-3 14-7V32" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="10" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />
    </svg>
  )
}
