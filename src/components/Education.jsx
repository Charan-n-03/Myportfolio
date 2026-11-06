import { GraduationCap } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section className="section-wrapper" id="education" aria-labelledby="education-heading">
      <div className="container">
        <span className="section-eyebrow">Academic Foundation</span>
        <h2 id="education-heading" className="section-heading">
          Education
        </h2>
        <p className="section-desc">
          Formal academic training in computer science, mathematical problem solving, and engineering methodologies.
        </p>

        <div className="education-list">
          {educationHistory.map((item, idx) => (
            <div
              key={idx}
              className="education-card cursor-target"
              data-cursor-label="Education"
            >
              <div className="education-card-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <GraduationCap size={18} style={{ color: 'var(--text-primary)', flexShrink: 0 }} aria-hidden="true" />
                  <h3 className="education-degree">{item.degree}</h3>
                </div>
                <span className="education-period-badge">{item.period}</span>
              </div>

              <div className="education-institution">{item.institution}</div>

              <div className="education-score-row">
                <span style={{ color: 'var(--text-tertiary)' }}>Performance:</span>
                <span>{item.score}</span>
              </div>

              <p className="education-details">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

