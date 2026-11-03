import { personalInfo, personalInterests } from '../data/portfolioData';
import { Camera, Trophy } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="section-wrapper" id="about" aria-labelledby="about-heading">
      <div className="container">
        <span className="section-eyebrow">Background &amp; Profile</span>
        <h2 id="about-heading" className="section-heading">
          About Charan N
        </h2>
        <p className="section-desc">
          Early-career developer committed to building scalable web applications and continuous technical learning.
        </p>

        <div className="about-grid">
          {/* Main narrative */}
          <div className="about-text-col">
            <p className="about-paragraph">
              I am an aspiring software developer pursuing a Bachelor of Engineering in Computer Science at{' '}
              <strong>Government Engineering College, Ramanagar</strong>. My journey centers on developing
              robust, user-centric web applications by blending structured problem-solving with modern frontend and backend tooling.
            </p>
            <p className="about-paragraph">
              With a solid grounding in <strong>Python, Java, SQL, and JavaScript</strong>, I have designed and implemented full-stack
              solutions like <strong>TasteGo</strong>, focusing on role-based access control, session-driven authentication, and efficient
              relational database design with MySQL.
            </p>
            <p className="about-paragraph">
              I emphasize clean code structure, predictable state management in React, and disciplined version control with Git.
              Outside of building applications, I refine my algorithmic intuition on LeetCode and explore creative perspectives.
            </p>

            {/* Resume-supported personal interests */}
            <div className="about-interests-wrap">
              <h3 className="about-interests-title">Interests &amp; Disciplines</h3>
              <div className="about-interests-grid">
                {personalInterests.map((interest, idx) => (
                  <div key={idx} className="about-interest-card cursor-target" data-cursor-label="Interest">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      {interest.title.includes('Chess') ? (
                        <Trophy size={16} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                      ) : (
                        <Camera size={16} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                      )}
                      <span className="about-interest-name">{interest.title}</span>
                    </div>
                    <p className="about-interest-desc">{interest.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick facts sidebar */}
          <div className="about-facts">
            <div className="about-fact-item">
              <span className="about-fact-label">Location</span>
              <span className="about-fact-value">{personalInfo.location}</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Current Education</span>
              <span className="about-fact-value">B.E. Computer Science (2022–2026)</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Primary Specialization</span>
              <span className="about-fact-value">React JS &amp; Full-Stack Development</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Backend Stacks</span>
              <span className="about-fact-value">Python, Flask, MySQL</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Version Control</span>
              <span className="about-fact-value">Git &amp; GitHub</span>
            </div>
            <div className="about-fact-item">
              <span className="about-fact-label">Status</span>
              <span className="about-fact-value">Open to Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
