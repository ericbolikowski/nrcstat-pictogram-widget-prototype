import React from "react";
import { DataColor } from "./config";
import { Camp, Education, Food, Legal, Shelter, WASH } from "./icons/index.js";

const widget = {
  title: "EDUCATION GENDER INEQUALITY IN YEMEN",
  subtitle:
    "Ongoing crisis further increases the gender gap. This is a subtitle that extends across two lines",
  source: "Source: Norwegian Refugee Council, May, 2020",
  sections: [
    {
      title: "ENROLLED IN PRIMARY EDUCATION",
      dataColor: DataColor.Orange,
      icons: [
        { icon: "food", data: 0.5 },
        { icon: "camp", data: 0.7 }
      ]
    },
    {
      title: "ENROLLED IN PRIMARY EDUCATION",
      dataColor: DataColor.Blue,
      icons: [
        { icon: "legal", data: 0.25 },
        { icon: "shelter", data: 0.3 }
      ]
    }
  ]
};

export function Widget() {
  return (
    <>
      <Camp horizontalFill={0.2} />
      <Education horizontalFill={0.8} />
      <Food horizontalFill={0.3} />
      <Legal horizontalFill={0.9} />
      <Shelter horizontalFill={0.1} />
      <WASH horizontalFill={0.6} />
    </>
  );
}
