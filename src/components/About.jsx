import React from "react";
import { siteConfig } from "../config/site";
import { educationData, skillsList, processSteps } from "../data/experience";
import { Sparkles, Terminal } from "lucide-react";

export function About() {
  return (
    <section className="section-wrap about" id="about">
      {/* Studio Header Lead */}
      <div className="about-lead">
        <div>
          <span className="eyebrow">Studio & Philosophy</span>
          <h2>
            Designing for Clarity, <br />
            <span className="accent">Engineering for Velocity.</span>
          </h2>
        </div>
        <p>
          {siteConfig.identity.about} I treat every web application as a complete holistic system—where ergonomic visual hierarchy and strict engineering standards converge.
        </p>
      </div>

      {/* 3-Column Studio Grid */}
      <div className="studio-grid">
        {/* Column 1: Education & Skills */}
        <div className="education-panel">
          <h3 className="panel-heading">Education & Accreditations</h3>
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-row">
              <strong>{edu.institution}</strong>
              <span>{edu.period}</span>
              <p>{edu.details}</p>
            </div>
          ))}

          <h3 className="panel-heading skills-heading">Technical Arsenal</h3>
          <div className="skill-tags">
            {skillsList.map((skill, idx) => (
              <span key={idx}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Column 2: 4-Step Process Pipeline */}
        <div className="process-panel">
          <h3 className="panel-heading">Engineering Lifecycle</h3>
          <div className="process-list">
            <div className="process-track">
              <div />
            </div>

            {processSteps.map((step) => (
              <div key={step.number} className="process-row">
                <span className="process-num display">{step.number}</span>
                <div className="process-node" />
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Red Gradient Quote & Philosophy Panel */}
        <div className="quote-panel">
          <span className="quote-mark">“</span>
          <span className="handwriting">Code is craft</span>
          <blockquote>
            Simplicity is not the lack of clutter; it is the <em>prerequisite for reliability</em> and long-term maintainability.
          </blockquote>
          <div className="quote-bottom">
            <span>HITESH BALAJI // STUDIO CORE MANIFESTO</span>
            <p>Every constraint is an invitation to invent a more elegant architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
