import React from "react";

const Logo = (): JSX.Element => (
  <svg
    width="159"
    height="36"
    viewBox="0 0 159 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <mask
      id="mask0_385_209"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="27"
      height="36"
    >
      <rect width="26.5437" height="35.332" fill="url(#pattern0)" />
    </mask>
    <g mask="url(#mask0_385_209)">
      <rect width="26.5437" height="35.332" fill="#243748" />
    </g>
    <mask
      id="mask1_385_209"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="30"
      y="6"
      width="129"
      height="24"
    >
      <rect
        x="30.5439"
        y="6"
        width="128.106"
        height="23.5392"
        fill="url(#pattern1)"
      />
    </mask>
    <g mask="url(#mask1_385_209)">
      <rect x="30.5439" y="6" width="128.106" height="23.5392" fill="#243748" />
      <rect x="65.0898" y="6" width="93.561" height="23.5392" fill="#EE9E26" />
    </g>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_385_209"
          transform="translate(-1.53559 -0.105676) scale(0.0158842 0.0119332)"
        />
      </pattern>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_385_209"
          transform="translate(-0.187883 -2.69108) scale(0.00533675 0.029044)"
        />
      </pattern>
      <image
        id="image0_385_209"
        width="256"
        height="144"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Logo;
