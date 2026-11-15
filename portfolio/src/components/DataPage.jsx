import { projects } from '../data/portfolioData'
import { DetailLayout } from './DetailLayout'

export function DataPage() {
  return (
    <DetailLayout title="Data">
      <div className="data-panel">
        <h1>Data</h1>
        <p className="data-summary">Three projects in machine learning, analytics, and forecasting.</p>
        <div className="project-grid">
          {projects.map(([monogram, name, description, repositoryUrl]) => (
            <article className="project-card" key={name}>
              <div className="project-icon">{monogram}</div>
              <h2>{name}</h2>
              <p>{description}</p>
              <a href={repositoryUrl} target="_blank" rel="noreferrer">View GitHub repository&nbsp; ↗</a>
            </article>
          ))}
        </div>
      </div>
    </DetailLayout>
  )
}
