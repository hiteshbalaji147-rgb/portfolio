import React, { useState } from "react";
import { ArrowLeftRight, Layers, Cpu } from "lucide-react";

export function Breakdown() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="section-wrap breakdown" id="breakdown">
      {/* Left Editorial Copy */}
      <div className="breakdown-copy">
        <span className="eyebrow">System Design & Craft</span>
        <h2>
          From Wireframe <br />
          <span className="accent">To Shipped Reality.</span>
        </h2>
        <p>
          Great software begins long before visual styling. We break down complex product requirements into modular system architectures, stress-tested state machines, and accessible primitives—delivering experiences that remain resilient under load.
        </p>

        <div style={{ display: "flex", gap: 20, marginTop: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Layers size={18} className="accent" />
            <span style={{ fontSize: 11, fontWeight: 600 }}>Modular Primitives</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Cpu size={18} className="accent" />
            <span style={{ fontSize: 11, fontWeight: 600 }}>Sub-16ms Frame Times</span>
          </div>
        </div>

        <span className="muted" style={{ display: "block", fontSize: 10, marginTop: 24 }}>
          Drag the slider horizontally to compare the raw architectural wireframe with the final production interface.
        </span>
      </div>

      {/* Interactive Split-Screen Comparison Stage */}
      <div className="comparison">
        <div
          className="comparison-stage"
          style={{ "--cut": `${sliderPos}%` }}
        >
          {/* Layer 1: Raw Wireframe Blueprint */}
          <div className="comparison-before">
            <svg viewBox="0 0 800 460" width="100%" height="100%">
              <rect width="800" height="460" fill="#0d0a0b" />
              <g stroke="#ef4151" strokeOpacity="0.12" strokeWidth="1">
                <line x1="0" y1="60" x2="800" y2="60" />
                <line x1="0" y1="140" x2="800" y2="140" />
                <line x1="0" y1="220" x2="800" y2="220" />
                <line x1="0" y1="300" x2="800" y2="300" />
                <line x1="0" y1="380" x2="800" y2="380" />
                <line x1="100" y1="0" x2="100" y2="460" />
                <line x1="200" y1="0" x2="200" y2="460" />
                <line x1="300" y1="0" x2="300" y2="460" />
                <line x1="400" y1="0" x2="400" y2="460" />
                <line x1="500" y1="0" x2="500" y2="460" />
                <line x1="600" y1="0" x2="600" y2="460" />
                <line x1="700" y1="0" x2="700" y2="460" />
              </g>
              <rect x="50" y="40" width="700" height="50" fill="none" stroke="#66222c" strokeDasharray="4,4" strokeWidth="1.5" />
              <text x="70" y="70" fill="#a09c9a" fontFamily="monospace" fontSize="11">&lt;Header&gt; // w: 100%, z: 70</text>
              
              <rect x="50" y="110" width="460" height="230" fill="none" stroke="#66222c" strokeDasharray="4,4" strokeWidth="1.5" />
              <text x="70" y="140" fill="#a09c9a" fontFamily="monospace" fontSize="11">&lt;InteractiveHeroCanvas&gt; // flex: 1</text>
              <line x1="50" y1="110" x2="510" y2="340" stroke="#66222c" strokeOpacity="0.3" />
              <line x1="510" y1="110" x2="50" y2="340" stroke="#66222c" strokeOpacity="0.3" />
              
              <rect x="530" y="110" width="220" height="230" fill="none" stroke="#66222c" strokeDasharray="4,4" strokeWidth="1.5" />
              <text x="545" y="140" fill="#a09c9a" fontFamily="monospace" fontSize="11">&lt;TelemetryMetrics /&gt;</text>
              
              <rect x="50" y="360" width="700" height="70" fill="none" stroke="#66222c" strokeDasharray="4,4" strokeWidth="1.5" />
              <text x="70" y="400" fill="#a09c9a" fontFamily="monospace" fontSize="11">&lt;BottomDockControls&gt; // fixed bottom</text>
            </svg>
          </div>

          {/* Layer 2: Final Production Shipped UI */}
          <div className="comparison-after">
            <svg viewBox="0 0 800 460" width="100%" height="100%">
              <rect width="800" height="460" fill="#140f11" />
              <rect x="0" y="0" width="800" height="50" fill="#1c1316" />
              <circle cx="35" cy="25" r="6" fill="#ef4151" />
              <circle cx="55" cy="25" r="6" fill="#f59e0b" />
              <circle cx="75" cy="25" r="6" fill="#10b981" />
              <text x="400" y="30" fill="#f2efeb" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">
                NEXUS PRODUCTION CLIENT v3.4 [LIVE 60 FPS]
              </text>
              
              <rect x="50" y="80" width="460" height="260" rx="6" fill="#090809" stroke="#3d2128" />
              <text x="80" y="140" fill="#f2efeb" fontFamily="Anton" fontSize="38" letterSpacing="1">ARCHITECTED FOR SCALE</text>
              <rect x="80" y="165" width="280" height="8" rx="4" fill="#241418" />
              <rect x="80" y="165" width="220" height="8" rx="4" fill="#ef4151" />
              <rect x="80" y="200" width="140" height="42" rx="4" fill="#ca2032" />
              <text x="150" y="226" fill="#fff" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">DEPLOYED</text>
              
              <rect x="530" y="80" width="220" height="260" rx="6" fill="#1a1215" stroke="#3d2128" />
              <text x="555" y="120" fill="#ef4151" fontFamily="monospace" fontSize="11" fontWeight="bold">SYSTEM HEALTH</text>
              <text x="555" y="165" fill="#f2efeb" fontFamily="sans-serif" fontSize="28" fontWeight="900">99.98%</text>
              <text x="555" y="190" fill="#10b981" fontFamily="monospace" fontSize="10">CORE WEB VITALS: AAA</text>
              <text x="555" y="230" fill="#a09c9a" fontFamily="monospace" fontSize="10">LATENCY: 11.2 MS</text>
              
              <rect x="50" y="360" width="700" height="65" rx="6" fill="#1a1215" stroke="#3d2128" />
              <text x="80" y="400" fill="#a09c9a" fontFamily="monospace" fontSize="11">CONNECTED: WebSocket Cluster us-east-1 // Zero Frame Drops</text>
            </svg>
          </div>

          {/* Badges */}
          <span className="comparison-label raw-label">RAW BLUEPRINT</span>
          <span className="comparison-label final-label">PRODUCTION SHIPPED</span>

          {/* Slider Divider Line & Handle */}
          <div className="comparison-divider">
            <div className="comparison-handle" aria-hidden="true">
              <ArrowLeftRight size={18} />
            </div>
          </div>

          {/* Accessible Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label="Comparison slider percentage between wireframe blueprint and shipped interface"
          />
        </div>

        <div className="comparison-caption">
          <span>01 / System Wireframe Architecture</span>
          <span>Position: {sliderPos}%</span>
          <span>02 / Live Production Build</span>
        </div>
      </div>
    </section>
  );
}
