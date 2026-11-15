export function BackButton() {
  return <a className="back-button" href="#main">← Back</a>
}

export function DetailLayout({ title, children }) {
  return (
    <main className="detail-page">
      <div className="detail-topbar">
        <BackButton />
        <p>Portfolio&nbsp; / &nbsp;{title}</p>
      </div>
      <section className="detail-folder">{children}</section>
    </main>
  )
}

export function PhotoPlaceholder({ src, label, className = '' }) {
  return (
    <div className={`photo-placeholder ${className}`}>
      <img src={src} alt={label} />
    </div>
  )
}
