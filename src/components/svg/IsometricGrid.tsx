"use client";

export function IsometricGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 720 720"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* Grid lines */}
      {[...Array(13)].map((_, i) => (
        <line key={`h-${i}`} x1={0} y1={60 * i} x2={720} y2={60 * i} stroke="#27272a" strokeWidth="1" />
      ))}
      {[...Array(13)].map((_, i) => (
        <line key={`v-${i}`} x1={60 * i} y1={0} x2={60 * i} y2={720} stroke="#27272a" strokeWidth="1" />
      ))}

      {/*
        Nodes - positioned by cell (col, row)
        Node rect: x = col*60 + 12, y = row*60 + 12, size 36x36
        Node center: col*60 + 30, row*60 + 30

        ISLANDS - grupos separados, posiciones orgánicas/caóticas
      */}

      {/* ===== ISLA 1: Cluster superior izquierdo ===== */}
      <rect x={1*60 + 12} y={0*60 + 12} width="36" height="36" fill="#22c55e" /> {/* A: (1,0) */}
      <rect x={0*60 + 12} y={2*60 + 12} width="36" height="36" fill="#3b82f6" /> {/* B: (0,2) */}
      <rect x={2*60 + 12} y={1*60 + 12} width="36" height="36" fill="#eab308" /> {/* C: (2,1) */}
      <rect x={3*60 + 12} y={3*60 + 12} width="36" height="36" fill="#22c55e" /> {/* D: (3,3) */}

      {/* Conexiones Isla 1 */}
      <line x1={1*60+30} y1={0*60+30} x2={2*60+30} y2={1*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />
      <line x1={0*60+30} y1={2*60+30} x2={2*60+30} y2={1*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-reverse" />
      <line x1={2*60+30} y1={1*60+30} x2={3*60+30} y2={3*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />

      {/* ===== ISLA 2: Nodo solitario arriba derecha ===== */}
      <rect x={9*60 + 12} y={1*60 + 12} width="36" height="36" fill="#ef4444" /> {/* E: (9,1) */}

      {/* ===== ISLA 3: Cluster central-derecho ===== */}
      <rect x={7*60 + 12} y={4*60 + 12} width="36" height="36" fill="#22c55e" /> {/* F: (7,4) */}
      <rect x={10*60 + 12} y={3*60 + 12} width="36" height="36" fill="#3b82f6" /> {/* G: (10,3) */}
      <rect x={9*60 + 12} y={5*60 + 12} width="36" height="36" fill="#eab308" /> {/* H: (9,5) */}
      <rect x={11*60 + 12} y={5*60 + 12} width="36" height="36" fill="#22c55e" /> {/* I: (11,5) */}

      {/* Conexiones Isla 3 */}
      <line x1={7*60+30} y1={4*60+30} x2={10*60+30} y2={3*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />
      <line x1={10*60+30} y1={3*60+30} x2={9*60+30} y2={5*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-reverse" />
      <line x1={9*60+30} y1={5*60+30} x2={11*60+30} y2={5*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />
      <line x1={7*60+30} y1={4*60+30} x2={9*60+30} y2={5*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />

      {/* ===== ISLA 4: Cluster inferior izquierdo ===== */}
      <rect x={1*60 + 12} y={6*60 + 12} width="36" height="36" fill="#ef4444" /> {/* J: (1,6) */}
      <rect x={0*60 + 12} y={8*60 + 12} width="36" height="36" fill="#22c55e" /> {/* K: (0,8) */}
      <rect x={2*60 + 12} y={9*60 + 12} width="36" height="36" fill="#3b82f6" /> {/* L: (2,9) */}

      {/* Conexiones Isla 4 */}
      <line x1={1*60+30} y1={6*60+30} x2={0*60+30} y2={8*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />
      <line x1={0*60+30} y1={8*60+30} x2={2*60+30} y2={9*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-reverse" />

      {/* ===== ISLA 5: Cadena central-inferior ===== */}
      <rect x={5*60 + 12} y={7*60 + 12} width="36" height="36" fill="#eab308" /> {/* M: (5,7) */}
      <rect x={6*60 + 12} y={9*60 + 12} width="36" height="36" fill="#22c55e" /> {/* N: (6,9) */}
      <rect x={4*60 + 12} y={10*60 + 12} width="36" height="36" fill="#22c55e" /> {/* O: (4,10) */}

      {/* Conexiones Isla 5 */}
      <line x1={5*60+30} y1={7*60+30} x2={6*60+30} y2={9*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />
      <line x1={6*60+30} y1={9*60+30} x2={4*60+30} y2={10*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-reverse" />

      {/* ===== ISLA 6: Par inferior derecha ===== */}
      <rect x={10*60 + 12} y={8*60 + 12} width="36" height="36" fill="#3b82f6" /> {/* P: (10,8) */}
      <rect x={8*60 + 12} y={10*60 + 12} width="36" height="36" fill="#ef4444" /> {/* Q: (8,10) */}

      {/* Conexiones Isla 6 */}
      <line x1={10*60+30} y1={8*60+30} x2={8*60+30} y2={10*60+30} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow" />

      {/* ===== CURSORES COLABORATIVOS ===== */}
      {/* Path 1: Curvas orgánicas por zona izquierda */}
      <path
        id="cursor-path-1"
        d="M 90,30
           C 200,60 120,150 150,90
           C 180,140 280,180 210,210
           Q 150,300 90,390
           C 40,450 80,480 30,510
           Q 100,550 150,570
           C 250,520 280,480 330,450
           Q 380,500 390,570
           C 320,620 300,600 270,630
           Q 180,400 90,30"
        fill="none"
        stroke="none"
      />
      {/* Path 2: Curvas orgánicas por zona derecha */}
      <path
        id="cursor-path-2"
        d="M 450,270
           C 520,220 580,240 630,210
           Q 620,280 570,330
           C 630,340 660,320 690,330
           Q 650,200 570,90
           C 620,300 650,400 630,510
           Q 580,580 510,630
           C 460,550 440,400 450,270"
        fill="none"
        stroke="none"
      />
      {/* Path 3: Curvas por zona central */}
      <path
        id="cursor-path-3"
        d="M 330,450
           C 280,380 350,320 270,280
           Q 320,200 400,180
           C 480,200 520,350 450,420
           Q 400,500 390,570
           C 350,520 300,500 330,450"
        fill="none"
        stroke="none"
      />
      {/* Path 4: Curvas por zona superior-central */}
      <path
        id="cursor-path-4"
        d="M 360,120
           C 420,80 500,100 540,150
           Q 500,220 440,260
           C 380,240 340,200 320,160
           Q 340,130 360,120"
        fill="none"
        stroke="none"
      />

      {/* Cursor shape - flecha estilo Figma */}
      <defs>
        <path
          id="cursor-shape"
          d="M 0,0 L 0,16 L 4,12 L 7,18 L 9,17 L 6,11 L 11,11 Z"
          transform="scale(1.2)"
        />
      </defs>

      {/* Cursor 1 - Violeta (Kuma) */}
      <g>
        <use href="#cursor-shape" fill="#8b5cf6">
          <animateMotion dur="22s" repeatCount="indefinite">
            <mpath href="#cursor-path-1" />
          </animateMotion>
        </use>
        {/* Label */}
        <g>
          <animateMotion dur="22s" repeatCount="indefinite">
            <mpath href="#cursor-path-1" />
          </animateMotion>
          <rect x="0" y="22" width="42" height="16" rx="4" fill="#8b5cf6" />
          <text x="6" y="34" fill="#fff" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">Kuma</text>
        </g>
      </g>

      {/* Cursor 2 - Naranja (Veronica) */}
      <g>
        <use href="#cursor-shape" fill="#f97316">
          <animateMotion dur="18s" repeatCount="indefinite">
            <mpath href="#cursor-path-2" />
          </animateMotion>
        </use>
        {/* Label */}
        <g>
          <animateMotion dur="18s" repeatCount="indefinite">
            <mpath href="#cursor-path-2" />
          </animateMotion>
          <rect x="0" y="22" width="58" height="16" rx="4" fill="#f97316" />
          <text x="6" y="34" fill="#fff" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">Veronica</text>
        </g>
      </g>

      {/* Cursor 3 - Verde (Edinson) */}
      <g>
        <use href="#cursor-shape" fill="#22c55e">
          <animateMotion dur="25s" repeatCount="indefinite">
            <mpath href="#cursor-path-3" />
          </animateMotion>
        </use>
        {/* Label */}
        <g>
          <animateMotion dur="25s" repeatCount="indefinite">
            <mpath href="#cursor-path-3" />
          </animateMotion>
          <rect x="0" y="22" width="52" height="16" rx="4" fill="#22c55e" />
          <text x="6" y="34" fill="#fff" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">Edinson</text>
        </g>
      </g>

      {/* Cursor 4 - Cyan (you) */}
      <g>
        <use href="#cursor-shape" fill="#06b6d4">
          <animateMotion dur="20s" repeatCount="indefinite">
            <mpath href="#cursor-path-4" />
          </animateMotion>
        </use>
        {/* Label */}
        <g>
          <animateMotion dur="20s" repeatCount="indefinite">
            <mpath href="#cursor-path-4" />
          </animateMotion>
          <rect x="0" y="22" width="30" height="16" rx="4" fill="#06b6d4" />
          <text x="6" y="34" fill="#fff" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">you</text>
        </g>
      </g>
    </svg>
  );
}
