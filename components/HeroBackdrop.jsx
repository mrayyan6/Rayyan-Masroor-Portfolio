"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroBackdrop({
  gridColor = "rgba(59, 130, 246, 0.07)",
  glowColor = "#3B82F6",
}) {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSize = 40;
    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
        ctx.stroke();
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [gridColor]);

  const glowA = {
    left: "50%",
    top: "34%",
    marginLeft: -192,
    marginTop: -192,
    background: `radial-gradient(circle, ${glowColor}40 0%, transparent 70%)`,
  };
  const glowB = {
    left: "34%",
    top: "72%",
    marginLeft: -160,
    marginTop: -160,
    background: `radial-gradient(circle, ${glowColor}26 0%, transparent 70%)`,
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      {reduce ? (
        <div className="absolute h-96 w-96 rounded-full opacity-40 blur-3xl" style={glowA} />
      ) : (
        <motion.div
          className="absolute h-96 w-96 rounded-full blur-3xl"
          style={glowA}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {reduce ? (
        <div className="absolute h-80 w-80 rounded-full opacity-30 blur-3xl" style={glowB} />
      ) : (
        <motion.div
          className="absolute h-80 w-80 rounded-full blur-3xl"
          style={glowB}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      )}
    </div>
  );
}
