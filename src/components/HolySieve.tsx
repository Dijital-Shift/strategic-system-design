import { forwardRef } from "react";

const HolySieve = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 200 160"
      className="w-48 h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="holyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(270 45% 45%)" stopOpacity="0.2" />
          <stop offset="70%" stopColor="hsl(270 45% 45%)" stopOpacity="0.05" />
          <stop offset="100%" stopColor="hsl(270 45% 45%)" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Subtle glow behind */}
      <ellipse cx="100" cy="80" rx="90" ry="70" fill="url(#holyGlow)" />

      {/* Outer ornate frame */}
      <rect
        x="15"
        y="15"
        width="170"
        height="130"
        rx="8"
        fill="none"
        stroke="hsl(270 50% 55%)"
        strokeWidth="2"
        opacity="0.9"
      />
      
      {/* Inner frame */}
      <rect
        x="25"
        y="25"
        width="150"
        height="110"
        rx="4"
        fill="none"
        stroke="hsl(270 50% 55%)"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Corner flourishes - top left */}
      <path
        d="M15 35 Q5 25 15 15 M35 15 Q25 5 15 15"
        fill="none"
        stroke="hsl(270 50% 55%)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      
      {/* Corner flourishes - top right */}
      <path
        d="M185 35 Q195 25 185 15 M165 15 Q175 5 185 15"
        fill="none"
        stroke="hsl(270 50% 55%)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      
      {/* Corner flourishes - bottom left */}
      <path
        d="M15 125 Q5 135 15 145 M35 145 Q25 155 15 145"
        fill="none"
        stroke="hsl(270 50% 55%)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      
      {/* Corner flourishes - bottom right */}
      <path
        d="M185 125 Q195 135 185 145 M165 145 Q175 155 185 145"
        fill="none"
        stroke="hsl(270 50% 55%)"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Crosshatch mesh pattern - vertical lines */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={40 + i * 10}
          y1="40"
          x2={40 + i * 10}
          y2="120"
          stroke="hsl(0 0% 55%)"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}
      
      {/* Crosshatch mesh pattern - horizontal lines */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="35"
          y1={40 + i * 10}
          x2="165"
          y2={40 + i * 10}
          stroke="hsl(0 0% 55%)"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}

      {/* Diagonal mesh overlay */}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`d1-${i}`}
          x1={35 + i * 22}
          y1="40"
          x2={35 + i * 22 + 80}
          y2="120"
          stroke="hsl(0 0% 55%)"
          strokeWidth="0.3"
          opacity="0.15"
        />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`d2-${i}`}
          x1={165 - i * 22}
          y1="40"
          x2={165 - i * 22 - 80}
          y2="120"
          stroke="hsl(0 0% 55%)"
          strokeWidth="0.3"
          opacity="0.15"
        />
      ))}

      {/* Top medallions */}
      <circle cx="50" cy="15" r="6" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.7" />
      <circle cx="50" cy="15" r="2" fill="hsl(270 50% 55%)" opacity="0.5" />
      
      <circle cx="100" cy="15" r="8" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1.5" opacity="0.8" />
      <line x1="96" y1="15" x2="104" y2="15" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.6" />
      <line x1="100" y1="11" x2="100" y2="19" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.6" />
      
      <circle cx="150" cy="15" r="6" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.7" />
      <circle cx="150" cy="15" r="2" fill="hsl(270 50% 55%)" opacity="0.5" />

      {/* Bottom medallions */}
      <circle cx="50" cy="145" r="6" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.7" />
      <circle cx="50" cy="145" r="2" fill="hsl(270 50% 55%)" opacity="0.5" />
      
      <circle cx="100" cy="145" r="8" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1.5" opacity="0.8" />
      <circle cx="100" cy="145" r="3" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.8" opacity="0.5" />
      
      <circle cx="150" cy="145" r="6" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.7" />
      <circle cx="150" cy="145" r="2" fill="hsl(270 50% 55%)" opacity="0.5" />

      {/* Left medallions */}
      <circle cx="15" cy="55" r="5" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.8" opacity="0.5" />
      <circle cx="15" cy="80" r="6" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.6" />
      <circle cx="15" cy="80" r="2" fill="hsl(270 50% 55%)" opacity="0.4" />
      <circle cx="15" cy="105" r="5" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.8" opacity="0.5" />

      {/* Right medallions */}
      <circle cx="185" cy="55" r="5" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.8" opacity="0.5" />
      <circle cx="185" cy="80" r="6" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="1" opacity="0.6" />
      <circle cx="185" cy="80" r="2" fill="hsl(270 50% 55%)" opacity="0.4" />
      <circle cx="185" cy="105" r="5" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.8" opacity="0.5" />

      {/* Central sacred geometry */}
      <circle cx="100" cy="80" r="20" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.8" opacity="0.3" />
      <circle cx="100" cy="80" r="12" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.6" opacity="0.25" />
      <circle cx="100" cy="80" r="5" fill="none" stroke="hsl(270 50% 55%)" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
});

HolySieve.displayName = "HolySieve";

export default HolySieve;
