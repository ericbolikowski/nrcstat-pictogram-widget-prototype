import React from "react";
import "./all-icons-style.scss";
import { PeopleIcon } from "./PeopleIcon.js";
import { IconBar } from "./IconBar";

export const PeopleChildren = IconBar(PeopleChildrenIcon);

function PeopleChildrenIcon(props) {
  return (
    <PeopleIcon {...props}>
      {(fillColor, iconBaseColor, fillMaskId, baseMaskId) => (
        <>
          <defs>
            <clipPath id="clipPath18" clipPathUnits="userSpaceOnUse">
              <path id="path16" d="M 0,100 H 100 V 0 H 0 Z" />
            </clipPath>
          </defs>
          {[
            [fillColor, fillMaskId],
            [iconBaseColor, baseMaskId]
          ].map(([color, maskId], index) => (
            <>
              <g
                transform="matrix(1.3333333,0,0,-1.3333333,0,133.33333)"
                mask={`url(#${maskId})`}
              >
                <g>
                  <g clip-path="url(#clipPath18)">
                    <g transform="translate(76.8389,93.5903)">
                      <path
                        fill={color}
                        className="path-thingy"
                        d="m 0,0 c 5.763,0 10.434,-4.671 10.434,-10.433 0,-5.762 -4.671,-10.433 -10.434,-10.433 -5.762,0 -10.433,4.671 -10.433,10.433 C -10.433,-4.671 -5.762,0 0,0"
                      />
                    </g>
                    <g transform="translate(56.5674,37.0518)">
                      <path
                        fill={color}
                        className="path-thingy"
                        d="m 0,0 c 0.125,-0.015 0.25,-0.021 0.374,-0.021 1.634,0 3.044,1.228 3.234,2.89 C 4.564,11.233 6.443,16.666 8.34,20.185 6.842,11.42 5.111,-0.424 5.111,-8.366 c 0,-0.698 2.111,-1.212 5.217,-1.542 v -21.368 c 0,-2.341 1.897,-4.24 4.238,-4.24 2.341,0 4.239,1.899 4.239,4.24 v 20.933 c 0.975,-0.011 1.959,-0.011 2.934,0 v -20.933 c 0,-2.341 1.897,-4.24 4.239,-4.24 2.34,0 4.238,1.899 4.238,4.24 v 21.368 c 3.105,0.33 5.217,0.844 5.217,1.542 0,7.945 -1.733,19.795 -3.232,28.56 1.896,-3.517 3.778,-8.964 4.732,-17.324 0.189,-1.663 1.599,-2.891 3.235,-2.891 0.123,0 0.247,0.007 0.373,0.021 1.789,0.204 3.073,1.82 2.87,3.608 -1.433,12.583 -4.929,19.884 -8.407,24.101 -3.122,3.803 -6.181,4.956 -7.17,5.226 -1.478,0.491 -3.842,0.952 -7.563,0.952 -3.716,0 -6.08,-0.46 -7.558,-0.95 C 11.731,32.67 8.665,31.523 5.534,27.709 2.058,23.491 -1.438,16.19 -2.871,3.609 -3.074,1.82 -1.79,0.204 0,0"
                      />
                    </g>
                    <g transform="translate(22.4395,98.4639)">
                      <path
                        fill={color}
                        className="path-thingy"
                        d="m 0,0 c 6.302,0 11.412,-5.109 11.412,-11.411 0,-6.302 -5.11,-11.411 -11.412,-11.411 -6.302,0 -11.411,5.109 -11.411,11.411 C -11.411,-5.109 -6.302,0 0,0"
                      />
                    </g>
                    <g transform="translate(3.0952,37.3701)">
                      <path
                        fill={color}
                        className="path-thingy"
                        d="m 0,0 c 0.057,-0.003 0.113,-0.004 0.168,-0.004 1.726,0 3.165,1.354 3.253,3.095 0.603,12.077 2.693,18.698 4.512,22.13 V -0.526 -30.521 c 0,-2.881 2.336,-5.217 5.217,-5.217 2.881,0 5.216,2.336 5.216,5.217 v 26.734 h 1.957 v -26.734 c 0,-2.881 2.335,-5.217 5.216,-5.217 2.881,0 5.217,2.336 5.217,5.217 V -0.526 25.21 c 0.063,-0.119 0.127,-0.235 0.191,-0.362 1.776,-3.522 3.738,-10.106 4.322,-21.757 0.087,-1.741 1.528,-3.095 3.252,-3.095 0.056,0 0.112,0.001 0.168,0.004 1.799,0.09 3.183,1.622 3.092,3.42 -0.716,13.983 -3.27,21.703 -6.029,26.191 -2.729,4.497 -5.903,5.563 -6.728,5.662 -0.33,0.057 -0.651,0.047 -0.966,0.007 -0.184,0.032 -0.37,0.056 -0.563,0.056 H 11.193 c -0.194,0 -0.381,-0.024 -0.566,-0.056 -0.313,0.039 -0.634,0.049 -0.961,-0.008 v 0.001 C 8.841,35.174 5.666,34.107 2.938,29.611 0.18,25.123 -2.375,17.405 -3.091,3.421 -3.183,1.622 -1.798,0.092 0,0"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </>
          ))}
        </>
      )}
    </PeopleIcon>
  );
}