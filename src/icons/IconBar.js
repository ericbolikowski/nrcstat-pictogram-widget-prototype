import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "../Widget.scss";

const ICON_COUNT = 5;

export const IconBar = (Icon) => ({ data }) => {
  const iconFillDegrees = useMemo(
    () =>
      Array(ICON_COUNT)
        .fill()
        .map((_, key) => {
          const rangeLowerEnd = key * (1 / ICON_COUNT);
          const rangeUpperEnd = (key + 1) * (1 / ICON_COUNT);
          if (data <= rangeLowerEnd) return 0;
          if (data >= rangeUpperEnd) return 1;

          // return data normalized to the range. See for more about how to do this:
          // https://stats.stackexchange.com/questions/70801/how-to-normalize-data-to-0-1-range
          return (data - rangeLowerEnd) / (rangeUpperEnd - rangeLowerEnd);
        }),
    [data]
  );

  return (
    <div className="icon-bar">
      {iconFillDegrees.map((fillDegree, key) => (
        <Icon horizontalFill={fillDegree} key={key} />
      ))}
    </div>
  );
};
