import React from "react";
import "./all-icons-style.scss";
import { PeopleIcon } from "./PeopleIcon.js";
import { IconBar } from "./IconBar";

export const PeopleRefugeeFamily = IconBar(PeopleRefugeeFamilyIcon);

function PeopleRefugeeFamilyIcon(props) {
  return (
    <PeopleIcon {...props}>
      {(fillColor, iconBaseColor, fillMaskId, baseMaskId) => (
        <>
          {[
            [fillColor, fillMaskId],
            [iconBaseColor, baseMaskId]
          ].map(([color, maskId], index) => (
            <g
              transform="matrix(1.3333333,0,0,-1.3333333,0,133.33333)"
              mask={`url(#${maskId})`}
              key={index}
            >
              <g>
                <g clip-path="url(#clipPath18)">
                  <g transform="translate(23.2759,50.8135)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="m 0,0 -0.132,-0.002 c -2.312,0 -4.179,1.811 -4.249,4.122 l -0.567,18.425 c -0.034,1.13 0.394,2.248 1.175,3.066 0.384,0.395 1.213,1.163 2.522,1.93 1.383,0.808 3.624,1.773 6.451,1.775 0.008,0 0.015,-10e-4 0.023,-10e-4 0.095,0.007 0.189,0.014 0.285,0.014 h 2.631 c -1.306,0.969 -2.884,1.759 -4.599,2.272 -4.278,1.28 -9.4,0.833 -13.237,-2.902 -13.176,-12.827 -16.526,-36.882 0.966,-38.767 6.701,-0.723 9.189,2.381 10.104,7.165 V 0.274 C 0.938,0.111 0.477,0.015 0,0"
                    />
                  </g>
                  <g transform="translate(48.4976,27.4023)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="M 0,0 C -3.798,1.048 -5.816,2.229 -5.964,2.318 L -6.48,2.627 -6.359,3.217 0,34.469 v 11.554 c 0.513,0.152 1.104,0.319 1.763,0.489 C 1.467,46.311 1.162,46.088 0.85,45.844 v -8.136 c 0.317,0.465 0.629,0.887 0.935,1.272 L -3.812,11.473 -0.548,9.449 -4.481,8.183 -5.526,3.048 c 0,0 6.383,-3.827 18.425,-3.827 2.763,0 5.225,0.203 7.383,0.512 0.224,6.563 1.362,11.703 3.391,15.297 1.451,2.592 3.207,3.916 4.311,4.432 l -0.79,3.888 c -0.235,0.674 -0.382,1.387 -0.434,2.128 l -2.746,13.496 c 0.035,-0.043 0.069,-0.08 0.103,-0.124 1.365,-1.746 2.861,-4.273 4.242,-7.884 1.138,1.54 2.79,2.67 4.704,3.137 -1.653,4.013 -3.502,6.922 -5.318,9.039 -0.765,0.894 -1.521,1.631 -2.249,2.252 1.584,-0.843 3.069,-1.914 4.423,-3.282 0.665,-0.673 1.542,-1.009 2.419,-1.009 0.865,0 1.729,0.327 2.392,0.982 1.336,1.321 1.348,3.476 0.026,4.811 -2.18,2.207 -4.631,3.861 -7.181,5.068 l -2.327,-3.043 -0.922,4.335 c -1.183,0.386 -2.371,0.684 -3.557,0.921 -1.841,-2.362 -4.696,-3.828 -7.861,-3.828 -0.761,0 -1.526,0.089 -2.274,0.262 -2.239,0.522 -4.184,1.77 -5.582,3.554 -4.336,-0.724 -7.648,-1.797 -9.011,-2.275 h -12.694 c 0.401,-1.111 0.579,-3.225 0.617,-5.222 0.363,-0.091 0.715,-0.227 1.044,-0.41 2.047,-1.14 2.786,-3.734 1.645,-5.783 l -8.291,-14.882 c -0.335,-0.602 -0.807,-1.1 -1.362,-1.469 V 5.015 L -18.974,6.188 -23,1.987 v -15.805 l 3.743,0.66 -1.134,-2.126 -0.992,-1.7 -1.617,-0.762 v -4.4 c 0,-2.904 2.354,-5.256 5.257,-5.256 2.903,0 5.257,2.352 5.257,5.256 v 38.383 h 1.971 v -38.383 c 0,-2.904 2.354,-5.256 5.257,-5.256 2.903,0 5.258,2.352 5.258,5.256 z"
                    />
                  </g>
                  <g transform="translate(36.9971,100)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="m 0,0 c 5.284,0 9.567,-4.283 9.567,-9.567 0,-5.284 -4.283,-9.567 -9.567,-9.567 -5.284,0 -9.567,4.283 -9.567,9.567 C -9.567,-4.283 -5.284,0 0,0"
                    />
                  </g>
                  <g transform="translate(23.5903,51.6909)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="M 0,0 C 0.138,0.019 0.272,0.046 0.404,0.081 0.433,0.088 0.46,0.097 0.487,0.104 0.595,0.135 0.7,0.17 0.802,0.211 0.832,0.223 0.861,0.233 0.89,0.246 0.904,0.252 0.92,0.257 0.934,0.264 v 0.004 c 0.65,0.288 1.218,0.779 1.592,1.45 L 10.817,16.6 c 0.914,1.641 0.325,3.712 -1.316,4.627 C 7.86,22.141 5.789,21.552 4.874,19.91 L -1.009,9.349 -1.279,10.61 4.133,20.324 C 4.687,21.32 5.611,22.035 6.679,22.342 5.461,24.546 3.945,26.671 3.354,27.479 1.492,27.23 -0.036,26.573 -1.136,25.931 -2.534,25.11 -3.316,24.309 -3.473,24.147 -4.1,23.49 -4.44,22.603 -4.412,21.695 L -3.845,3.27 c 0,-0.03 0.005,-0.059 0.007,-0.088 C -3.835,3.124 -3.831,3.066 -3.825,3.009 -3.818,2.951 -3.81,2.893 -3.801,2.835 -3.793,2.788 -3.785,2.741 -3.775,2.695 -3.762,2.629 -3.747,2.564 -3.73,2.5 -3.72,2.462 -3.709,2.424 -3.697,2.385 -3.677,2.318 -3.654,2.251 -3.63,2.186 -3.617,2.149 -3.603,2.114 -3.588,2.078 -3.562,2.015 -3.534,1.952 -3.504,1.891 -3.485,1.852 -3.466,1.814 -3.445,1.776 -3.416,1.721 -3.385,1.667 -3.353,1.613 -3.327,1.57 -3.3,1.528 -3.272,1.486 -3.242,1.44 -3.21,1.396 -3.177,1.352 -3.144,1.306 -3.109,1.262 -3.074,1.218 -3.042,1.179 -3.009,1.141 -2.975,1.104 -2.936,1.06 -2.896,1.017 -2.854,0.975 -2.818,0.938 -2.779,0.903 -2.741,0.868 -2.7,0.831 -2.66,0.794 -2.616,0.758 -2.569,0.719 -2.521,0.683 -2.472,0.646 -2.434,0.618 -2.397,0.591 -2.359,0.564 -2.295,0.521 -2.229,0.481 -2.163,0.442 -2.141,0.429 -2.122,0.415 -2.1,0.402 -2.094,0.399 -2.088,0.397 -2.082,0.394 -1.962,0.328 -1.838,0.268 -1.709,0.216 -1.693,0.21 -1.677,0.206 -1.661,0.199 -1.556,0.159 -1.449,0.124 -1.339,0.094 -1.301,0.083 -1.262,0.074 -1.224,0.065 -1.134,0.044 -1.043,0.027 -0.951,0.013 -0.91,0.007 -0.87,0 -0.829,-0.005 c 0.114,-0.013 0.229,-0.02 0.346,-0.022 0.012,0 0.024,-0.002 0.036,-0.002 0.002,0 0.006,0.001 0.008,0.001 0.033,0 0.065,0 0.099,0.001 0.108,0.003 0.214,0.013 0.319,0.026 0.007,0 0.014,0 0.021,0.001"
                    />
                  </g>
                  <g transform="translate(52.1836,26.5674)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="m 0,0 v -2.582 -19.661 c 0,-2.349 1.904,-4.252 4.252,-4.252 2.348,0 4.252,1.903 4.252,4.252 v 18.904 2.552 C 5.238,-0.747 2.4,-0.435 0,0"
                    />
                  </g>
                  <g transform="translate(68.9971,13.8906)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="m 0,0 -3.118,0.283 4.73,2.813 V 3.437 6.121 C 0.539,6.61 -0.21,7.674 -0.241,8.939 c -0.015,0.639 -0.021,1.252 -0.021,1.848 0,0.54 0.008,1.069 0.019,1.593 -1.97,-0.276 -4.189,-0.46 -6.649,-0.49 V 9.338 -9.566 c 0,-2.349 1.903,-4.252 4.252,-4.252 2.347,0 4.252,1.903 4.252,4.252 v 6.827 L 1.559,-2.835 Z"
                    />
                  </g>
                  <g transform="translate(52.4951,89.8154)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="M 0,0 C 1.145,4.916 6.059,7.974 10.975,6.829 15.89,5.684 18.947,0.771 17.803,-4.146 16.657,-9.062 11.744,-12.119 6.828,-10.974 1.912,-9.83 -1.145,-4.916 0,0"
                    />
                  </g>
                  <g transform="translate(75.2295,28.5693)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="M 0,0 V 0.055 C -0.001,0.037 -0.002,0.018 -0.003,-0.001 -0.002,0 -0.001,0 0,0"
                    />
                  </g>
                  <g transform="translate(72.002,20.5713)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="M 0,0 C 1.291,0.031 2.313,1.105 2.28,2.396 2.266,2.98 2.259,3.55 2.259,4.106 2.258,10.527 3.118,14.625 4.077,17.179 V 6.986 L 5.711,7.421 7.412,9.122 V 6.43 L 4.077,4.066 v -21.142 c 0,-1.878 1.524,-3.402 3.402,-3.402 1.878,0 3.402,1.524 3.402,3.402 v 14.383 h 1.276 v -14.383 c 0,-1.878 1.524,-3.402 3.402,-3.402 1.878,0 3.401,1.524 3.401,3.402 v 7.65 L 17.333,-7.319 18.96,-7.4 V 17.179 C 19.919,14.627 20.778,10.522 20.776,4.105 20.776,3.552 20.77,2.979 20.758,2.389 20.729,1.099 21.753,0.028 23.044,0 h 0.052 c 1.268,0 2.309,1.013 2.338,2.287 0.013,0.623 0.02,1.229 0.02,1.818 -0.003,8.944 -1.547,14.186 -3.325,17.337 -0.23,0.411 -0.465,0.783 -0.7,1.12 l -1.97,-0.684 0.452,2.441 c -0.993,0.915 -1.824,1.277 -2.106,1.359 -0.104,0.034 -0.208,0.058 -0.312,0.078 -0.208,0.067 -0.428,0.114 -0.659,0.114 h -0.917 c -1.276,-0.804 -2.782,-1.276 -4.398,-1.276 -1.618,0 -3.123,0.472 -4.4,1.276 H 6.204 C 5.971,25.87 5.752,25.823 5.542,25.754 5.438,25.735 5.336,25.712 5.233,25.678 H 5.232 C 4.75,25.538 2.675,24.598 0.908,21.443 -0.872,18.292 -2.415,13.05 -2.418,4.106 -2.418,3.518 -2.412,2.91 -2.396,2.28 -2.365,1.009 -1.325,-0.001 -0.06,-0.001 -0.039,-0.001 -0.02,0 0,0"
                    />
                  </g>
                  <g transform="translate(83.5215,60.8979)">
                    <path
                      fill={color}
                      className="path-thingy"
                      d="m 0,0 c 4.109,0 7.44,-3.332 7.44,-7.441 0,-4.11 -3.331,-7.441 -7.44,-7.441 -4.109,0 -7.441,3.331 -7.441,7.441 C -7.441,-3.332 -4.109,0 0,0"
                    />
                  </g>
                </g>
              </g>
            </g>
          ))}
        </>
      )}
    </PeopleIcon>
  );
}
