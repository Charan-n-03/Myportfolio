import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section-wrapper" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <span className="section-eyebrow">Technical Competencies</span>
        <h2 id="skills-heading" className="section-heading">
          Skills &amp; Technologies
        </h2>
        <p className="section-desc">
          Strictly derived from verified project experience and academic coursework. Focused on core software engineering fundamentals.
        </p>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="skill-category-card cursor-target"
              data-cursor-label={category.category}
            >
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.category}</h3>
                <p className="skill-category-desc">{category.description}</p>
              </div>

              <ul className="skill-pill-list" aria-label={`Skills in ${category.category}`}>
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-pill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

