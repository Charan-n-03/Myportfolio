import { lazy, Suspense } from "react";
import { ArrowDownRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";
import TechText from "./react-bits/TechText";
import "./Hero.css";
import image1 from "../components/assets/charanProfile.jpeg"

// Lazy-load the heavy 3D WebGL component for instant hero rendering
const Lanyard = lazy(() => import("./react-bits/Lanyard"));

export default function Hero() {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#f4f4f6" : "#121214";
  const accentColor = theme === "dark" ? "#a0a0ab" : "#71717a";

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-name">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro & TechText Typography */}
          <div className="hero-content">
            <div className="hero-meta-badge">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>Available for Software Developer Roles</span>
              <span style={{ color: "var(--border-hover)" }}>|</span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <MapPin size={12} /> {personalInfo.location}
              </span>
            </div>

            {/* TechText used ONLY here for the hero heading */}
            <div className="hero-techtext-container" aria-hidden="true">
              <TechText
                text="CHARAN N"
                fontFamily="'Inter', -apple-system, sans-serif"
                fontWeight={700}
                fontSize={92}
                letterSpacing={-0.03}
                color={textColor}
                accentColor={accentColor}
                align="left"
                reach={140}
                softness={0.7}
                dashLength={3}
                dashGap={2}
                strokeWidth={1.5}
                reveal="letter"
                specks={10}
                selection={true}
                labels={false}
                draggable={true}
                bounce={0.3}
                sweep={true}
                speed={0.8}
                intro="metrics"
                introDuration={1.8}
              />
            </div>

            {/* Accessible screen-reader heading */}
            <h1 id="hero-name" className="sr-only">
              Charan N — React &amp; Full-Stack Developer
            </h1>

            <div className="hero-role">{personalInfo.role}</div>

            <p className="hero-bio">{personalInfo.summary}</p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary cursor-target"
                data-cursor-label="Projects"
              >
                <span>View Featured Projects</span>
                <ArrowDownRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="btn btn-secondary cursor-target"
                data-cursor-label="Contact"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Verified Developer Profiles */}
            <div className="hero-socials">
              <a
                href="https://github.com/Charan-n-03"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link cursor-target"
                data-cursor-label="GitHub"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon size={16} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/charann03/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link cursor-target"
                data-cursor-label="LinkedIn"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/charanu03/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link cursor-target"
                data-cursor-label="LeetCode"
                aria-label="LeetCode Profile (opens in new tab)"
              >
                <LeetCodeIcon size={16} aria-hidden="true" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contained Lanyard Profile Showcase */}
          <div className="hero-lanyard-wrapper">
            <div
              className="hero-lanyard-box cursor-target"
              data-cursor-label="Interactive Badge"
              aria-label="Interactive 3D profile ID badge for Charan N. Drag to interact."
            >
              <Suspense
                fallback={
                  <div className="lanyard-fallback">
                    <div className="lanyard-fallback-card">
                      <img
                        src={personalInfo.profileImage}
                        alt="Profile badge preview"
                        className="lanyard-fallback-img"
                      />
                    </div>
                  </div>
                }
              >
                <Lanyard
                  frontImage={image1}
                  backImage={image1}
                  strapImage="/band.png"
                  imageFit="cover"
                  cardColor="#ffffff"
                  orientation="portrait"
                  finish="glossy"
                  cornerRadius={0.3}
                  size={0.6}
                  anchor="center"
                  strapLength={0.5}
                  strapColor="#111111"
                  strapWidth={0.65}
                  metal="silver"
                  gravity={1}
                  damping={0.5}
                  elasticity={0.5}
                  breeze={0.5}
                  interactive
                  intro
                />
              </Suspense>
            </div>
            <span className="hero-lanyard-caption">
              Interactive 3D Badge • Click to flip / Drag to move
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
