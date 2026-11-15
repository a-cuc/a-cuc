import { DetailLayout, PhotoPlaceholder } from './DetailLayout'
import { InterestIcon } from './InterestIcon'

export function ExperiencePage({ type }) {
  const isSolar = type === 'solar'

  return (
    <DetailLayout title={isSolar ? 'Solar' : 'Networks'}>
      <div className="experience-panel">
        <div className={`detail-icon ${isSolar ? 'solar' : 'networks'}`}>
          {isSolar ? 'PV' : <InterestIcon type="networks" />}
        </div>
        <div className="detail-intro">
          <h1>{isSolar ? 'Solar' : 'Networks'}</h1>
          {isSolar ? (
            <>
              <p>I have been supporting my father’s solar installation business through:</p>
              <ul>
                <li>Client visits to understand requirements</li>
                <li>Creating quotations that reflect the requirements</li>
                <li>Actual solar power system installation</li>
              </ul>
            </>
          ) : (
            <p>During my studies, I gained hands-on experience configuring and troubleshooting Cisco devices. My foundational networking knowledge is also backed by my Cisco Certified Network Associate (CCNA) certification.</p>
          )}
        </div>
        <p className="gallery-label">{isSolar ? 'SOLAR INSTALLATION IN PRACTICE' : 'NETWORKING IN PRACTICE'}</p>
        <div className={`photo-grid ${isSolar ? 'solar-photos' : 'network-photos'}`}>
          <PhotoPlaceholder
            src={`${import.meta.env.BASE_URL}${isSolar ? 'images/solar-1.jpg' : 'images/network-2.jpg'}`}
            label={isSolar ? 'Solar photo 01' : 'Portrait photo'}
          />
          <PhotoPlaceholder
            src={`${import.meta.env.BASE_URL}${isSolar ? 'images/solar-2.jpg' : 'images/network-1.png'}`}
            label={isSolar ? 'Solar photo 02' : 'Landscape photo'}
            className={!isSolar ? 'certificate-photo' : ''}
          />
        </div>
      </div>
    </DetailLayout>
  )
}
