import React from "react";
import { DataColor } from "./config";
import { Camp, Education, Food, Legal, Shelter, WASH } from "./icons/index.js";
import "./Widget.scss";

const WidgetIconMap = {
  Camp,
  Education,
  Food,
  Legal,
  Shelter,
  WASH
};

export function Widget({ title, subtitle, source, sections }) {
  console.log(title);
  return (
    <div className="container">
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
      {sections.map((section) => (
        <div className="section">
          <span className="section-title">{section.title}</span>
          {section.icons.map((icon) => {
            const Icon = WidgetIconMap[icon.icon];
            return <Icon data={icon.data} />;
          })}
        </div>
      ))}
    </div>
  );
}

export function _Widget() {
  return (
    <>
      <Camp data={0.55} />
      <Education data={0.5} />
      <Food data={0.5} />
      <Legal data={0.5} />
      <Shelter data={0.5} />
      <WASH data={0.5} />
    </>
  );
}
