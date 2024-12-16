import { color } from "framer-motion";
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
      <rect
        width={256}
        height={256}
        fill="#fff"
        className="fill-dark dark:fill-light"
        rx={60}
      />
      <rect
        width={256}
        height={256}
        fill="#000"
        className="fill-dark dark:fill-light"
        rx={60}
      />
      <path
        fill="#fff"
        className="fill-light dark:fill-dark"
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
  width="1470"
  height="1470"
  viewBox="0 0 1470 1470"
  xmlSpace="preserve"
  className={`w-full h-auto ${className}`}
  {...rest}

  >
<text
      transform="translate(446.16 323.09) rotate(-26.32)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"F"}
      </tspan>
    </text>
    <text
      transform="translate(568.22 262.63) rotate(-12.8)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"r"}
      </tspan>
    </text>
    <text
      transform="translate(672.18 235.75) rotate(1.12)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"o"}
      </tspan>
    </text>
    <text
      transform="translate(810.17 235.43) rotate(17.71)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"n"}
      </tspan>
    </text>
    <text
      transform="translate(956.84 284.42) rotate(32.29)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"t"}
      </tspan>
    </text>
    <text
      transform="translate(1043.91 335.94) rotate(45.51)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"e"}
      </tspan>
    </text>
    <text
      transform="translate(1137.8 426.66) rotate(61.62)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"n"}
      </tspan>
    </text>
    <text
      transform="translate(1211.9 561.03) rotate(78.69)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"d"}
      </tspan>
    </text>
    <text
      transform="translate(1237.67 706.47) rotate(90.93)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0} />
    </text>
    <text
      transform="translate(1252.76 769.25) rotate(108.09)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"W"}
      </tspan>
    </text>
    <text
      transform="translate(1175.2 988.55) rotate(128)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"e"}
      </tspan>
    </text>
    <text
      transform="translate(1096.66 1093.1) rotate(143.5)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"b"}
      </tspan>
    </text>
    <text
      transform="translate(977.76 1177.01) rotate(155.45)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0} />
    </text>
    <text
      transform="translate(924.01 1210.77) rotate(169.32)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"D"}
      </tspan>
    </text>
    <text
      transform="translate(749.5 1241.96) rotate(-173.37)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"e"}
      </tspan>
    </text>
    <text
      transform="translate(619.35 1228.95) rotate(-157.99)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"v"}
      </tspan>
    </text>
    <text
      transform="translate(490.85 1178.14) rotate(-142.68)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"e"}
      </tspan>
    </text>
    <text
      transform="translate(386.46 1095.98) rotate(-130.9)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"l"}
      </tspan>
    </text>
    <text
      transform="translate(334.23 1042.59) rotate(-118.7)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"o"}
      </tspan>
    </text>
    <text
      transform="translate(266.02 923.03) rotate(-102.46)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"p"}
      </tspan>
    </text>
    <text
      transform="translate(233.92 779.71) rotate(-86.78)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"e"}
      </tspan>
    </text>
    <text
      transform="translate(241.42 648.26) rotate(-73.11)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"r"}
      </tspan>
    </text>
    <text
      transform="translate(274.62 543.31) rotate(-63.06)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0} />
    </text>
    <text
      transform="translate(297.59 483.8) rotate(-50.33)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0}>
        {"\u2022"}
      </tspan>
    </text>
    <text
      transform="translate(403.15 363.22) rotate(-37.65)"
      style={{
        fontFamily: "Kefa-Regular, Kefa",
        fontSize: 284,
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    >
      <tspan x={0} y={0} />
    </text>
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

export const Mail = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g transform="scale(0.26)">
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M 80.89 78.772 H 9.11 c -5.023 0 -9.11 -4.087 -9.11 -9.11 V 20.338 c 0 -5.023 4.087 -9.11 9.11 -9.11 h 71.78 c 5.023 0 9.11 4.087 9.11 9.11 v 49.324 C 90 74.686 85.913 78.772 80.89 78.772 z M 9.11 17.228 c -1.715 0 -3.11 1.396 -3.11 3.11 v 49.324 c 0 1.715 1.395 3.11 3.11 3.11 h 71.78 c 1.715 0 3.11 -1.396 3.11 -3.11 V 20.338 c 0 -1.715 -1.396 -3.11 -3.11 -3.11 H 9.11 z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M 45 55.427 c -5.408 0 -10.599 -2.292 -14.242 -6.288 L 2.493 18.125 l 4.435 -4.042 l 28.265 31.013 c 2.545 2.792 6.028 4.331 9.807 4.331 c 3.779 0 7.262 -1.538 9.808 -4.331 l 28.266 -31.013 l 4.434 4.042 L 59.241 49.138 C 55.599 53.135 50.408 55.427 45 55.427 z"
      />
      <rect
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x="-0.96"
        y="57.16"
        rx="0"
        ry="0"
        width="38.98"
        height="6"
        transform="rotate(-45 18.5 60.2)"
      />
      <rect
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x="68.47"
        y="40.67"
        rx="0"
        ry="0"
        width="6"
        height="38.98"
        transform="rotate(-45 71.5 60.2)"
      />
    </g>
  </svg>
);
