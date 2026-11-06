import React, { useEffect, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "../config/site";

export function ReelModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.8));
      }
    }, 200);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [isOpen, isPlaying, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="dialog-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Demo Reel"
    >
      <div
        className="project-dialog"
        style={{ maxWidth: 900, background: "#0c080a", border: "1px solid #541d26" }}
      >
        {/* Header */}
        <div className="dialog-heading">
          <span className="eyebrow">
            INTERACTIVE SHOWREEL // 4K 60FPS // {siteConfig.identity.fullName.toUpperCase()}
          </span>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close reel"
            style={{ width: 36, height: 36, border: "none" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            background: "#050405",
            overflow: "hidden"
          }}
        >
          {/* Animated SVG Showreel Graphics */}
          <svg viewBox="0 0 960 540" width="100%" height="100%">
            <defs>
              <linearGradient id="reelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#140b0e" />
                <stop offset="50%" stopColor="#241016" />
                <stop offset="100%" stopColor="#090506" />
              </linearGradient>
            </defs>
            <rect width="960" height="540" fill="url(#reelGrad)" />
            
            {/* Ambient Animated Radar Circles */}
            <circle cx="480" cy="270" r="140" fill="none" stroke="#ef4151" strokeOpacity="0.25" strokeWidth="1.5" />
            <circle cx="480" cy="270" r="220" fill="none" stroke="#ef4151" strokeOpacity="0.15" strokeDasharray="6,6" strokeWidth="1" />
            <circle cx="480" cy="270" r="300" fill="none" stroke="#ef4151" strokeOpacity="0.08" strokeWidth="1" />

            {/* Central Typography Showcase */}
            <text x="480" y="240" fill="#ef4151" fontFamily="Anton" fontSize="74" letterSpacing="3" textAnchor="middle">
              {siteConfig.identity.displayName}
            </text>
            <text x="480" y="295" fill="#f2efeb" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="4" textAnchor="middle">
              SELECTED WORKS & SYSTEMS COMPILATION
            </text>
            <text x="480" y="325" fill="#a09c9a" fontFamily="monospace" fontSize="12" textAnchor="middle">
              REACT 19 // WEBGL // FRAMER MOTION // HIGH-CONCURRENCY
            </text>

            {/* Audio Waveforms */}
            <g transform="translate(240, 410)">
              {Array.from({ length: 48 }).map((_, i) => {
                const height = Math.sin((i + progress) * 0.4) * 20 + 24;
                return (
                  <rect
                    key={i}
                    x={i * 10}
                    y={-height / 2}
                    width="4"
                    height={height}
                    rx="2"
                    fill={i % 4 === 0 ? "#ef4151" : "#4a1c24"}
                  />
                );
              })}
            </g>
          </svg>

          {/* HUD Overlay Badges */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 20,
              fontSize: 10,
              fontFamily: "monospace",
              color: "#ef4151",
              display: "flex",
              gap: 16
            }}
          >
            <span>● LIVE PLAYBACK</span>
            <span>FRAME: 02:45:18</span>
            <span>FPS: 60.0</span>
          </div>

          <div
            style={{
              position: "absolute",
              top: 16,
              right: 20,
              fontSize: 10,
              fontFamily: "monospace",
              color: "#a09c9a"
            }}
          >
            4K UHD // STEREO
          </div>
        </div>

        {/* Custom Media Controls */}
        <div
          style={{
            padding: "16px 24px",
            background: "#140e10",
            borderTop: "1px solid #331c21"
          }}
        >
          {/* Progress Bar */}
          <div
            style={{
              height: 4,
              background: "#2b181d",
              borderRadius: 2,
              marginBottom: 14,
              cursor: "pointer",
              position: "relative"
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress((clickX / rect.width) * 100);
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "#ef4151",
                borderRadius: 2,
                boxShadow: "0 0 8px #ef4151"
              }}
            />
          </div>

          {/* Control Buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="icon-button"
                style={{ width: 38, height: 38, borderRadius: "50%", background: "#ef4151", border: "none", color: "#fff" }}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
              </button>

              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="icon-button"
                style={{ width: 34, height: 34, border: "none" }}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              <span style={{ fontSize: 11, fontFamily: "monospace", color: "#a09c9a" }}>
                00:{String(Math.floor((progress / 100) * 45)).padStart(2, "0")} / 00:45
              </span>
            </div>

            <div style={{ fontSize: 11, color: "#a09c9a", display: "flex", alignItems: "center", gap: 8 }}>
              <span>PRODUCED BY {siteConfig.identity.fullName.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
