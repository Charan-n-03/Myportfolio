import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="section-wrapper" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 id="contact-heading" className="section-heading">
          Contact &amp; Connect
        </h2>
        <p className="section-desc">
          Feel free to reach out regarding software development roles, collaborations, or technical inquiries.
        </p>

        <div className="contact-grid">
          {/* Direct Email Card */}
          <div className="contact-info-card">
            <div className="contact-email-box">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-tertiary)'
                }}
              >
                Direct Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-email-link cursor-target"
                data-cursor-label="Send Email"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="contact-actions-row">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary cursor-target"
                data-cursor-label="Compose"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Compose Mail</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary cursor-target"
                data-cursor-label="Copy Email"
                onClick={handleCopyEmail}
                aria-live="polite"
              >
                {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                <span>{copied ? 'Email Copied!' : 'Copy Address'}</span>
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1rem',
                marginTop: 'auto'
              }}
            >
              <MapPin size={16} aria-hidden="true" />
              <span>Based in {personalInfo.location} (IST / UTC+5:30)</span>
            </div>
          </div>

          {/* Social and Developer Profiles */}
          <div className="contact-profiles-list">
            <a
              href="https://github.com/Charan-n-03"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-profile-card cursor-target"
              data-cursor-label="GitHub"
              aria-label="Charan N on GitHub (opens in new tab)"
            >
              <div className="contact-profile-left">
                <GithubIcon size={20} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                <div>
                  <div className="contact-profile-title">GitHub</div>
                  <div className="contact-profile-username">github.com/Charan-n-03</div>
                </div>
              </div>
              <ExternalLink size={16} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/charann03/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-profile-card cursor-target"
              data-cursor-label="LinkedIn"
              aria-label="Charan N on LinkedIn (opens in new tab)"
            >
              <div className="contact-profile-left">
                <LinkedinIcon size={20} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                <div>
                  <div className="contact-profile-title">LinkedIn</div>
                  <div className="contact-profile-username">linkedin.com/in/charann03</div>
                </div>
              </div>
              <ExternalLink size={16} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
            </a>

            <a
              href="https://leetcode.com/u/charanu03/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-profile-card cursor-target"
              data-cursor-label="LeetCode"
              aria-label="Charan N on LeetCode (opens in new tab)"
            >
              <div className="contact-profile-left">
                <LeetCodeIcon size={20} style={{ color: 'var(--text-primary)' }} aria-hidden="true" />
                <div>
                  <div className="contact-profile-title">LeetCode</div>
                  <div className="contact-profile-username">leetcode.com/u/charanu03</div>
                </div>
              </div>
              <ExternalLink size={16} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
