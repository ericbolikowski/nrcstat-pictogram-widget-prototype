import React from "react";
import "./all-icons-style.scss";
import { PeopleIcon } from "./PeopleIcon.js";
import { IconBar } from "./IconBar";

export const PeopleMale = IconBar(PeopleMaleIcon);

function PeopleMaleIcon(props) {
  return (
    <PeopleIcon {...props}>
      {(fillColor, iconBaseColor, fillMaskId, baseMaskId) => (
        <>
          <defs id="defs6">
            <clipPath id="clipPath18" clipPathUnits="userSpaceOnUse">
              <path id="path16" d="M 0,100 H 100 V 0 H 0 Z" />
            </clipPath>
          </defs>

          <g
            transform="matrix(1.3333333,0,0,-1.3333333,0,133.33333)"
            mask={`url(#${fillMaskId})`}
          >
            <g>
              <g clip-path="url(#clipPath18)">
                <g transform="translate(48.2432,95.8018)">
                  <path
                    fill={fillColor}
                    className="path-thingy"
                    d="m 0,0 c 4.166,0 7.544,-3.377 7.544,-7.544 0,-4.166 -3.378,-7.543 -7.544,-7.543 -4.167,0 -7.544,3.377 -7.544,7.543 C -7.544,-3.377 -4.167,0 0,0"
                  />
                </g>
                <g transform="translate(57.4033,78.5586)">
                  <path
                    fill={fillColor}
                    className="path-thingy"
                    d="m 0,0 h -1.616 -15.088 -1.617 c -4.445,0 -8.082,-3.637 -8.082,-8.083 V -8.621 -9.699 -32.33 c 0,-1.638 1.327,-2.964 2.964,-2.964 1.636,0 2.963,1.326 2.963,2.964 v 22.631 h 1.617 V -70.05 c 0,-2.371 1.94,-4.31 4.31,-4.31 2.371,0 4.311,1.939 4.311,4.31 v 34.487 h 2.155 V -70.05 c 0,-2.371 1.94,-4.31 4.312,-4.31 2.37,0 4.31,1.939 4.31,4.31 V -9.699 H 2.155 V -32.33 c 0,-1.638 1.327,-2.964 2.964,-2.964 1.637,0 2.964,1.326 2.964,2.964 v 22.631 1.078 0.538 C 8.083,-3.637 4.445,0 0,0"
                  />
                </g>
              </g>
            </g>
          </g>

          <g
            transform="matrix(1.3333333,0,0,-1.3333333,0,133.33333)"
            mask={`url(#${baseMaskId})`}
          >
            <g>
              <g clip-path="url(#clipPath18)">
                <g transform="translate(48.2432,95.8018)">
                  <path
                    fill={iconBaseColor}
                    className="path-thingy"
                    d="m 0,0 c 4.166,0 7.544,-3.377 7.544,-7.544 0,-4.166 -3.378,-7.543 -7.544,-7.543 -4.167,0 -7.544,3.377 -7.544,7.543 C -7.544,-3.377 -4.167,0 0,0"
                  />
                </g>
                <g transform="translate(57.4033,78.5586)">
                  <path
                    fill={iconBaseColor}
                    className="path-thingy"
                    d="m 0,0 h -1.616 -15.088 -1.617 c -4.445,0 -8.082,-3.637 -8.082,-8.083 V -8.621 -9.699 -32.33 c 0,-1.638 1.327,-2.964 2.964,-2.964 1.636,0 2.963,1.326 2.963,2.964 v 22.631 h 1.617 V -70.05 c 0,-2.371 1.94,-4.31 4.31,-4.31 2.371,0 4.311,1.939 4.311,4.31 v 34.487 h 2.155 V -70.05 c 0,-2.371 1.94,-4.31 4.312,-4.31 2.37,0 4.31,1.939 4.31,4.31 V -9.699 H 2.155 V -32.33 c 0,-1.638 1.327,-2.964 2.964,-2.964 1.637,0 2.964,1.326 2.964,2.964 v 22.631 1.078 0.538 C 8.083,-3.637 4.445,0 0,0"
                  />
                </g>
              </g>
            </g>
          </g>
        </>
      )}
    </PeopleIcon>
  );
}
