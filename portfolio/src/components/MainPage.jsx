import { interests } from '../data/portfolioData'
import { InterestIcon } from './InterestIcon'

export function MainPage() {
  return (
    <main className="portfolio-page">
      <header className="navigation">
        <a className="wordmark" href="#top" aria-label="Portfolio home">
          <span className="signature-dot" />
          <span>Portfolio</span>
        </a>
      </header>
      <section className="welcome" id="top">
        <h1>Angelo Luis Cu</h1>
        <p>A collection of my work</p>
      </section>
      <section className="interest-section" aria-labelledby="interests-title">
        <div className="section-heading">
          <h2 id="interests-title">My interests</h2>
          <span>3 apps</span>
        </div>
        <div className="interest-folder">
          {interests.map((interest) => (
            <a className="interest" href={`#${interest.name.toLowerCase()}`} key={interest.name}>
              <span className={`interest-icon ${interest.className}`}>
                <InterestIcon type={interest.className} />
              </span>
              <span className="interest-copy">
                <strong>{interest.name}</strong>
                <span>{interest.description}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="contact-card">
          <div className="contact-heading">
            <h2>Let’s connect</h2>
            <p>For opportunities &amp; enquiries</p>
          </div>
          <div className="contact-details">
            <a href="mailto:cu.gelo@gmail.com"><span>Email</span><strong>cu.gelo@gmail.com</strong></a>
            <a href="https://linkedin.com/in/angelo-luis-cu" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/angelo-luis-cu</strong></a>
            <a href="https://github.com/a-cuc" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/a-cuc</strong></a>
          </div>
        </div>
        <p className="footer-note">Connections, curiosity, and a little sunshine.</p>
      </footer>
    </main>
  )
}
