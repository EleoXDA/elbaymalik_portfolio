import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" className="fill-dark dark:fill-light" rx={60} />
      <rect width={256} height={256} fill="#000" className="fill-dark dark:fill-light" rx={60} />
      <path
        fill="#fff" className="fill-light dark:fill-dark"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="496"
    height="496"
    viewBox="0 0 496 496"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2537 4532 c-67 -4 -61 6 -132 -189 -26 -73 -51 -133 -55 -133 -4 0
-44 63 -89 140 -46 77 -86 141 -89 143 -4 2 -34 1 -67 -2 -60 -6 -78 -23 -31
-29 29 -4 31 -8 46 -189 15 -177 15 -172 -20 -179 -33 -7 -42 -34 -11 -34 63
0 141 14 141 26 0 7 -14 14 -32 16 l-33 3 -7 80 c-4 44 -9 107 -12 140 -7 74
-6 73 100 -112 42 -74 81 -132 87 -130 7 2 39 77 72 168 59 162 60 163 67 123
3 -23 8 -88 10 -145 3 -101 2 -104 -19 -107 -13 -2 -23 -10 -23 -19 0 -12 12
-14 78 -8 42 3 87 8 100 11 31 6 29 34 -3 34 -29 0 -30 3 -45 161 -16 179 -15
196 15 203 24 6 33 21 18 28 -5 2 -34 2 -66 0z"
className="fill-dark dark:fill-light"/>
<path d="M3140 4424 c0 -8 7 -17 15 -20 8 -4 15 -14 14 -23 0 -9 -33 -88 -73
-176 -63 -141 -74 -160 -94 -158 -38 4 -25 -23 23 -48 39 -21 47 -22 55 -9 8
12 14 10 35 -17 87 -109 244 -28 261 135 9 85 -60 152 -141 136 l-35 -6 16 38
c9 22 27 60 40 86 l24 47 -58 11 c-31 6 -63 13 -69 15 -7 3 -13 -2 -13 -11z
m134 -230 c35 -35 6 -149 -49 -192 -35 -28 -57 -28 -90 1 l-26 22 25 57 c14
32 32 73 40 93 13 31 19 35 50 35 19 0 42 -7 50 -16z"
className="fill-dark dark:fill-light"/>
<path d="M2750 4358 c-56 -38 -80 -82 -80 -147 0 -70 24 -113 79 -141 119 -60
246 14 245 145 0 96 -57 156 -153 163 -46 3 -62 0 -91 -20z m146 -33 c28 -43
7 -177 -34 -227 -18 -22 -65 -23 -85 -3 -30 30 -29 115 1 196 24 62 87 81 118
34z" className="fill-dark dark:fill-light"/>
<path d="M1524 4276 c-98 -43 -97 -151 2 -192 l33 -14 -24 -47 c-29 -54 -31
-73 -9 -119 18 -38 58 -64 99 -64 54 0 155 75 155 116 0 17 -3 16 39 4 35 -10
74 1 115 32 29 22 12 39 -25 26 -24 -8 -38 -7 -68 6 l-37 17 -1 105 c0 95 1
106 19 115 14 7 17 14 10 21 -7 7 -30 0 -71 -23 -61 -34 -71 -55 -21 -44 32 7
35 0 39 -92 1 -35 -2 -63 -7 -63 -5 0 -26 7 -46 15 -20 8 -52 22 -71 30 l-35
14 20 33 c27 45 25 83 -5 113 -27 28 -64 31 -111 11z m63 -38 c18 -17 23 -32
23 -71 0 -41 -3 -48 -16 -43 -9 3 -19 6 -24 6 -5 0 -22 12 -39 26 -49 41 -38
103 18 104 8 0 25 -10 38 -22z m89 -218 c90 -41 91 -43 51 -87 -22 -25 -74
-31 -108 -13 -36 20 -65 111 -42 133 9 9 3 11 99 -33z" className="fill-dark dark:fill-light"/>
<path d="M3574 4215 c-15 -23 -15 -27 0 -50 21 -32 59 -33 80 -3 20 29 20 34
-4 58 -27 27 -56 25 -76 -5z" className="fill-dark dark:fill-light"/>
<path d="M3450 4099 c0 -6 7 -17 16 -24 14 -10 9 -22 -42 -103 -50 -79 -63
-92 -83 -90 -44 5 -31 -17 36 -59 68 -44 87 -47 65 -12 -11 17 -3 34 68 139
44 65 76 121 72 123 -4 3 -27 10 -52 17 -25 6 -53 13 -62 16 -10 3 -18 0 -18
-7z" className="fill-dark dark:fill-light"/>
<path d="M3727 4103 c-4 -3 0 -15 10 -25 14 -16 14 -20 1 -35 -182 -217 -231
-273 -238 -273 -5 0 -12 5 -15 10 -7 11 -25 4 -25 -8 0 -8 115 -102 125 -102
3 0 4 12 1 28 -6 24 10 46 129 187 74 88 135 162 135 165 0 5 -105 60 -114 60
-1 0 -6 -3 -9 -7z" className="fill-dark dark:fill-light"/>
<path d="M1170 3863 c-35 -24 -48 -43 -56 -80 l-6 -33 -69 62 c-38 34 -71 59
-73 57 -1 -2 -16 -27 -32 -56 -30 -55 -29 -72 5 -51 19 11 26 7 83 -47 206
-197 208 -198 202 -222 -9 -34 16 -29 56 12 26 27 31 37 21 48 -9 12 -6 16 20
21 66 13 110 94 89 166 -11 37 -70 104 -112 126 -37 19 -98 18 -128 -3z m96
-82 c44 -31 70 -65 80 -106 8 -31 -27 -75 -60 -75 -12 1 -52 30 -90 65 -67 64
-68 66 -56 95 24 57 67 64 126 21z" className="fill-dark dark:fill-light"/>
<path d="M3755 3788 c-32 -17 -76 -61 -91 -90 -46 -88 22 -206 126 -216 41 -4
50 -2 50 12 0 11 -9 16 -33 16 -69 0 -106 81 -67 144 12 20 25 36 29 36 3 0
35 -34 70 -75 34 -41 66 -75 70 -75 10 0 46 40 60 67 28 55 0 136 -61 173 -37
22 -120 27 -153 8z m173 -60 c19 -16 14 -49 -10 -75 -29 -31 -46 -29 -85 9
-39 38 -41 51 -10 66 47 23 76 23 105 0z" className="fill-dark dark:fill-light"/>
<path d="M926 3551 c-82 -54 -96 -170 -28 -244 49 -55 151 -73 208 -38 60 36
97 131 72 180 -22 42 -36 36 -31 -13 5 -41 2 -48 -26 -77 -28 -28 -37 -31 -73
-26 -65 9 -66 17 -10 109 28 45 48 87 45 91 -9 15 -70 37 -100 37 -15 0 -41
-9 -57 -19z m65 -51 c10 -6 19 -20 19 -31 0 -21 -40 -99 -52 -99 -3 0 -18 14
-32 31 -28 32 -34 77 -14 97 15 15 53 16 79 2z" className="fill-dark dark:fill-light"/>
<path d="M4243 3450 c2 -30 -1 -32 -110 -80 -62 -26 -134 -56 -159 -66 -46
-18 -46 -18 -64 6 -9 12 -22 20 -28 16 -14 -8 78 -219 110 -253 66 -70 162
-87 248 -43 142 71 157 157 66 365 -37 85 -65 110 -63 55z m67 -146 c24 -71
-8 -133 -90 -178 -70 -38 -153 -45 -197 -17 -30 19 -70 77 -60 88 6 5 319 141
329 142 3 1 12 -15 18 -35z" className="fill-dark dark:fill-light"/>
<path d="M624 3264 c-13 -48 -14 -68 -6 -76 8 -8 14 -4 21 15 6 15 15 27 21
27 11 0 187 -106 209 -125 11 -11 -7 -14 -95 -20 -60 -3 -121 -9 -136 -11 -26
-5 -28 -3 -28 25 0 49 -17 36 -35 -26 -25 -86 -30 -123 -15 -123 6 0 14 9 17
20 3 11 10 20 15 20 12 0 218 -141 218 -149 0 -3 -58 -8 -129 -9 l-129 -4 -4
29 c-2 15 -7 27 -13 26 -7 -2 -54 -151 -55 -175 0 -17 29 -7 35 11 5 17 21 20
158 26 199 9 270 17 274 31 2 6 -62 56 -142 110 -80 54 -142 100 -138 101 4 1
82 9 172 17 160 15 203 27 171 46 -286 175 -345 217 -344 243 1 54 -24 37 -42
-29z" className="fill-dark dark:fill-light"/>
<path d="M4145 2945 c-79 -28 -117 -103 -95 -186 13 -48 59 -99 89 -99 28 0
27 5 -10 38 -57 51 -36 134 42 161 25 9 28 7 33 -17 7 -33 26 -154 26 -164 0
-15 56 -8 87 12 68 41 82 135 30 204 -48 62 -120 80 -202 51z m170 -87 c29
-13 43 -53 28 -77 -6 -9 -24 -20 -42 -25 -42 -12 -59 5 -67 67 l-7 47 31 0
c17 0 43 -5 57 -12z" className="fill-dark dark:fill-light"/>
<path d="M4368 2622 c-4 -13 -48 -34 -152 -72 -119 -45 -146 -58 -144 -73 2
-13 45 -37 143 -80 115 -52 141 -67 143 -85 7 -44 27 -15 30 41 2 46 0 57 -13
57 -8 0 -15 -9 -15 -20 0 -11 -2 -20 -5 -20 -19 0 -184 75 -178 81 5 4 40 17
78 28 39 12 78 24 87 27 11 3 17 -2 20 -17 2 -12 9 -24 16 -27 9 -3 12 19 12
87 0 83 -11 118 -22 73z" className="fill-dark dark:fill-light"/>
<path d="M890 2487 c0 -18 -20 -39 -80 -85 -45 -34 -85 -62 -90 -62 -18 0 -78
61 -84 85 -4 14 -12 25 -19 25 -10 0 -11 -16 -3 -74 7 -56 12 -73 23 -69 7 3
13 14 13 24 0 10 3 19 6 19 14 0 124 -94 117 -100 -4 -4 -70 -14 -146 -22 -76
-9 -140 -18 -144 -21 -7 -8 37 -127 48 -127 4 0 9 12 11 28 l3 27 170 22 c219
27 212 27 219 1 3 -15 9 -19 15 -13 9 9 -4 153 -14 164 -8 8 -25 -12 -25 -29
0 -14 -9 -19 -42 -22 -40 -4 -78 8 -78 23 0 4 32 31 70 59 49 37 69 57 66 69
-3 9 -6 35 -8 59 -2 44 -28 62 -28 19z" className="fill-dark dark:fill-light"/>
<path d="M4092 2250 c-38 -23 -71 -88 -72 -138 0 -35 19 -81 43 -101 23 -18
31 4 13 31 -23 33 -19 72 10 107 22 26 33 31 70 31 24 0 44 -5 44 -10 0 -6
-10 -49 -21 -96 -25 -98 -21 -107 43 -107 80 0 127 52 129 143 2 63 -29 112
-87 140 -53 26 -129 26 -172 0z m189 -103 c27 -18 34 -29 34 -56 0 -44 -27
-62 -74 -49 l-33 9 6 52 c11 77 14 80 67 44z" className="fill-dark dark:fill-light"/>
<path d="M890 2103 c0 -5 14 -16 30 -25 54 -31 62 -98 18 -145 -29 -31 -111
-57 -153 -49 -30 6 -75 45 -75 66 0 5 16 17 36 29 29 17 35 26 32 49 -4 38
-39 41 -67 6 -61 -77 11 -217 119 -231 80 -11 179 53 195 125 15 72 -51 182
-109 182 -14 0 -26 -3 -26 -7z" className="fill-dark dark:fill-light"/>
<path d="M3983 1973 c-3 -10 -17 -42 -30 -72 -13 -30 -21 -56 -18 -59 3 -3 16
0 28 7 21 11 44 4 208 -64 101 -42 191 -77 199 -78 11 -2 17 14 24 61 10 70 3
88 -22 54 l-17 -22 -110 45 c-243 100 -235 95 -235 121 0 28 -18 32 -27 7z" className="fill-dark dark:fill-light"/>
<path d="M1020 1841 c0 -5 7 -11 15 -15 28 -10 15 -24 -77 -77 -98 -58 -132
-97 -123 -139 9 -36 51 -97 81 -116 43 -29 103 -18 104 18 0 17 -35 39 -54 34
-12 -3 -31 -9 -43 -12 -18 -5 -23 -1 -28 19 -10 36 1 60 34 80 27 16 29 16 46
-3 35 -39 108 -80 141 -80 17 0 42 8 55 18 43 36 19 119 -43 150 -21 10 -26
19 -26 48 0 23 -8 44 -23 60 -22 23 -59 33 -59 15z m82 -138 c20 -18 24 -63 6
-81 -20 -20 -71 -14 -103 12 -16 13 -28 26 -25 29 9 7 95 57 99 57 3 0 13 -7
23 -17z" className="fill-dark dark:fill-light"/>
<path d="M3915 1762 c-48 -23 -69 -45 -90 -95 -31 -74 -12 -138 57 -191 91
-69 211 -31 254 79 21 57 13 105 -28 151 -58 65 -128 86 -193 56z m104 -95
c33 -20 64 -49 75 -70 19 -33 19 -36 3 -61 -13 -20 -26 -26 -53 -26 -70 0
-194 89 -194 140 0 11 10 30 21 41 28 28 75 21 148 -24z" className="fill-dark dark:fill-light"/>
<path d="M3587 1578 c-55 -63 -66 -92 -23 -64 22 14 26 12 71 -34 l47 -48 -31
-7 c-37 -8 -78 -54 -86 -99 -12 -60 46 -155 117 -192 71 -37 156 -1 179 77 13
40 22 48 35 27 5 -8 18 10 35 47 27 56 30 90 6 66 -23 -23 -46 -7 -165 112
-111 111 -123 126 -117 150 11 42 -8 32 -68 -35z m193 -242 l72 -70 -16 -33
c-17 -36 -55 -51 -90 -35 -66 30 -122 109 -110 157 6 23 49 57 66 52 3 -1 39
-33 78 -71z" className="fill-dark dark:fill-light"/>
<path d="M1194 1558 c-4 -6 3 -18 16 -28 13 -10 21 -25 19 -35 -2 -11 -40 -50
-83 -88 l-80 -68 -24 31 c-19 24 -27 28 -38 19 -11 -9 -10 -16 8 -40 l22 -29
-31 -33 c-29 -30 -30 -33 -16 -55 l16 -22 42 25 c42 24 43 24 60 5 14 -15 21
-17 32 -9 11 10 11 14 -1 28 -14 16 -8 23 62 81 97 79 112 97 112 125 0 47
-97 124 -116 93z" className="fill-dark dark:fill-light"/>
<path d="M1306 1339 c-33 -39 -33 -64 4 -132 33 -63 37 -89 15 -107 -17 -14
-46 -6 -70 20 -15 17 -16 24 -6 47 10 22 9 29 -4 42 -14 14 -18 13 -40 -10
l-26 -25 23 -34 c60 -87 143 -117 193 -70 33 31 33 85 0 150 -29 57 -31 82 -9
100 21 18 61 3 87 -32 19 -26 19 -28 3 -54 -16 -24 -16 -28 -2 -42 13 -13 18
-13 31 -2 34 28 37 49 14 86 -34 55 -94 94 -145 94 -35 0 -47 -5 -68 -31z" className="fill-dark dark:fill-light"/>
<path d="M1566 1221 c-3 -5 1 -14 9 -21 17 -14 29 9 -122 -222 -56 -87 -99
-159 -95 -162 24 -15 117 -44 124 -40 5 4 1 16 -10 28 l-20 21 104 158 c87
132 107 157 123 152 44 -14 26 16 -32 54 -68 44 -73 46 -81 32z" className="fill-dark dark:fill-light"/>
<path d="M3385 1216 c-48 -22 -86 -69 -92 -115 -5 -33 -3 -41 11 -41 11 0 16
9 16 25 0 38 45 75 90 75 38 0 90 -31 90 -53 0 -7 -34 -34 -75 -61 -42 -27
-78 -53 -81 -57 -8 -14 27 -59 60 -76 90 -47 206 30 206 136 0 55 -20 98 -63
140 -28 27 -46 35 -84 38 -28 2 -61 -3 -78 -11z m155 -186 c14 -53 -9 -99 -48
-100 -19 0 -62 46 -62 68 0 18 79 83 92 75 4 -2 12 -22 18 -43z" className="fill-dark dark:fill-light"/>
<path d="M1720 1120 c0 -5 7 -13 16 -18 13 -7 1 -38 -80 -202 -53 -107 -96
-197 -96 -201 0 -4 21 -12 48 -18 26 -5 55 -13 65 -16 23 -9 23 21 0 34 -16 9
-10 27 67 181 69 139 88 170 104 168 43 -6 22 19 -39 50 -69 34 -85 38 -85 22z" className="fill-dark dark:fill-light"/>
<path d="M3151 1076 c-79 -34 -109 -64 -54 -53 30 6 31 5 66 -78 44 -105 41
-138 -15 -143 -20 -2 -42 -9 -48 -17 -17 -20 -3 -54 26 -61 31 -8 59 16 75 64
11 33 13 34 25 17 7 -10 15 -23 17 -29 2 -5 24 7 50 28 52 42 62 70 23 60 -21
-5 -27 2 -65 89 -47 107 -48 112 -23 126 11 6 14 13 7 19 -6 6 -37 -2 -84 -22z" className="fill-dark dark:fill-light"/>
<path d="M1880 1040 c0 -7 7 -18 15 -24 13 -10 10 -28 -25 -145 -23 -73 -39
-135 -38 -136 2 -1 27 -7 56 -12 55 -11 77 -1 48 20 -14 11 -13 20 10 97 14
47 35 93 46 103 23 20 68 23 86 5 18 -18 15 -44 -22 -160 -37 -119 -40 -110
36 -123 46 -9 66 2 41 20 -16 12 -16 18 10 103 15 50 27 107 27 126 0 67 -62
101 -137 74 l-43 -16 0 28 c0 22 -5 29 -29 33 -16 3 -40 9 -55 13 -18 4 -26 2
-26 -6z" className="fill-dark dark:fill-light"/>
<path d="M2362 928 c3 -7 15 -15 29 -18 21 -5 24 -12 27 -60 5 -84 -4 -120
-31 -120 -49 0 -67 11 -67 41 0 22 -5 29 -19 29 -17 0 -20 -9 -23 -75 -3 -66
-1 -75 15 -75 9 0 17 8 17 18 0 34 15 43 59 36 l43 -7 -6 -76 c-3 -42 -6 -78
-6 -80 0 -10 -125 10 -132 22 -4 6 -8 24 -8 40 0 22 -4 27 -25 27 -24 0 -25
-3 -25 -54 l0 -53 113 -7 c61 -4 138 -9 170 -13 47 -5 57 -3 57 10 0 9 -12 18
-30 22 -24 5 -29 11 -26 28 3 12 8 83 11 157 8 169 11 180 41 180 14 0 24 6
24 14 0 9 -21 15 -67 19 -105 10 -145 9 -141 -5z" className="fill-dark dark:fill-light"/>
<path d="M2770 779 c-26 -47 25 -100 69 -72 20 13 26 60 10 79 -18 22 -66 18
-79 -7z" className="fill-dark dark:fill-light"/>
</g>
</svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

