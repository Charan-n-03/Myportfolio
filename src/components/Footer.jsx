import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container footer-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            {personalInfo.name} — {personalInfo.role}
          </span>
          <span>Bengaluru, India • Aspiring Software Developer</span>
        </div>

        <div>
          <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

