import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// from <svg> tag removed attributes:
// xmlns:xlink="http://www.w3.org/1999/xlink"
// xml:space="preserve"

export function Icon({
  children,
  _horizontalFill,
  iconBaseColor = "#C2C2C2",
  fillColor = "#FDC82F"
}) {
  const [horizontalFill, setHorizontalFill] = useState(() => Math.random());
  useEffect(() => {
    setInterval(() => {
      setHorizontalFill((fillDegree) => {
        return fillDegree >= 1 ? 0 : fillDegree + 0.01;
      });
    }, 50);
  }, []);
  const maskId = useMemo(() => uuidv4(), []);
  console.log(horizontalFill);
  const maskWidth = Math.round(horizontalFill * 1000);
  console.log(maskWidth);
  return (
    <svg
      className="icon-svg"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1100 1100"
    >
      <mask id={maskId}>
        <rect x="50" y="0" width={maskWidth} height="1100" fill="white" />
      </mask>

      <circle cx="549.3" cy="550" r="500" fill={iconBaseColor} />
      <circle
        cx="549.3"
        cy="550"
        r="500"
        fill={fillColor}
        mask={`url(#${maskId})`}
      />

      {children}
    </svg>
  );
}
