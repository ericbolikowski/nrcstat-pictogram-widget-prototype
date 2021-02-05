import React from "react";
import "./styles.css";
import { Widget } from "./Widget";
import { DataColor } from "./config";

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
        { icon: "PeopleRefugeesRunning", data: 0.7 },
        {
          icon: "PeopleRefugeeFamilyAlt",
          data: 0.7,
          overrideDataColor: DataColor.Yellow
        },
        { icon: "PeopleRefugeeFamily", data: 0.6 },
        { icon: "PeopleChildren", data: 0.5 },
        { icon: "PeopleSchoolBoy", data: 0.4 },
        { icon: "PeopleSchoolGirl", data: 0.3 },
        { icon: "PeopleLittleGirl", data: 0.2 },
        { icon: "PeopleLittleBoy", data: 0.1 },
        { icon: "PeopleFemale", data: 0.7 },
        { icon: "PeopleMale", data: 0.7 },
        { icon: "Camp", data: 0.7 }
      ]
    },
    {
      title: "ENROLLED IN PRIMARY EDUCATION",
      dataColor: DataColor.Blue,
      icons: [
        { icon: "Legal", data: 0.25 },
        { icon: "Shelter", data: 0.3 }
      ]
    }
  ]
};

const widget2 = {
  title: "EDUCATION GENDER INEQUALITY IN YEMEN",
  subtitle:
    "Ongoing crisis further increases the gender gap. This is a subtitle that extends across two lines",
  source: "Source: Norwegian Refugee Council, May, 2020",
  sections: [
    {
      title: "ENROLLED IN PRIMARY EDUCATION",
      dataColor: DataColor.Orange,
      icons: [
        { icon: "Food", data: 0.5 },
        { icon: "Camp", data: 0.7 }
      ]
    },
    {
      title: "ENROLLED IN PRIMARY EDUCATION",
      dataColor: DataColor.Blue,
      icons: [
        { icon: "Legal", data: 0.25 },
        { icon: "Shelter", data: 0.3 }
      ]
    },

    {
      title: "ENROLLED IN PRIMARY EDUCATION",
      dataColor: DataColor.Yellow,
      icons: [
        { icon: "Food", data: 0.5 },
        { icon: "Camp", data: 0.7 }
      ]
    },
    {
      title: "ENROLLED IN PRIMARY EDUCATION",
      dataColor: DataColor.Red,
      icons: [
        { icon: "Legal", data: 0.25 },
        { icon: "Shelter", data: 0.3 }
      ]
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <Widget {...widget} />
      <div style={{ height: "500px" }} />
      <Widget {...widget2} />
    </div>
  );
}
