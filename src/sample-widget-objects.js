import { DataColor, BackgroundColorKey, Icon } from "./config";

export const samplePictogramWidgetObjects = [
  /* MULTIPLE SECTIONS (PAGE 2 OF SPEC) */
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN Hei Lars",
    subtitle: "Ongoing crisis further increases the gender gap.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          {
            icon: Icon.PeopleSchoolGirl,
            data: 0.8,
            dataColor: DataColor.Blue
          },
          { icon: Icon.PeopleSchoolBoy, data: 0.8, dataColor: DataColor.Orange, }
        ]
      },
      {
        title: "ENROLLED IN HIGHER EDUCATION",
        icons: [
          { icon: Icon.PeopleFemale, data: 0.05, dataColor: DataColor.Orange, },
          { icon: Icon.PeopleMale, data: 0.3, dataColor: DataColor.Orange, }
        ]
      }
    ]
  },
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: Icon.PeopleSchoolGirl, data: 0.5, dataColor: DataColor.Orange, },
          { icon: Icon.PeopleSchoolBoy, data: 0.8, dataColor: DataColor.Orange, }
        ]
      },
      {
        title: "ENROLLED IN HIGHER EDUCATION",
        icons: [
          { icon: Icon.PeopleFemale, data: 0.05, dataColor: DataColor.Blue, },
          { icon: Icon.PeopleMale, data: 0.3, dataColor: DataColor.Blue, }
        ]
      }
    ]
  },
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.White,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: Icon.PeopleSchoolGirl, data: 0.5, dataColor: DataColor.Orange, },
          { icon: Icon.PeopleSchoolBoy, data: 0.8, dataColor: DataColor.Orange, }
        ]
      },
      {
        title: "ENROLLED IN HIGHER EDUCATION",
        icons: [
          { icon: Icon.PeopleFemale, data: 0.05, dataColor: DataColor.Blue, },
          { icon: Icon.PeopleMale, data: 0.3, dataColor: DataColor.Blue, }
        ]
      }
    ]
  },

  /* ONE SECTION (PAGE 3 IN SPEC) */
  {
    title: "AVAILABLE RESOURCES IN XYZ",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        icons: [
          { icon: Icon.Food, data: 0.9, dataColor: DataColor.Yellow, },
          { icon: Icon.WASH, data: 0.6, dataColor: DataColor.Yellow, },
          { icon: Icon.Shelter, data: 0.8, dataColor: DataColor.Yellow, }
        ]
      }
    ]
  },
  {
    title: "AVAILABLE RESOURCES IN XYZ",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        icons: [
          { icon: Icon.Food, data: 0.9, dataColor: DataColor.Yellow, },
          { icon: Icon.WASH, data: 0.6, dataColor: DataColor.Yellow, },
          { icon: Icon.Shelter, data: 0.8, dataColor: DataColor.Yellow, }
        ]
      }
    ]
  },
  {
    title: "AVAILABLE RESOURCES IN XYZ",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.White,
    sections: [
      {
        icons: [
          { icon: Icon.Food, data: 0.9, dataColor: DataColor.Yellow, },
          { icon: Icon.WASH, data: 0.2, dataColor: DataColor.Red, dataColor: DataColor.Yellow, },
          { icon: Icon.Shelter, data: 0.8, dataColor: DataColor.Yellow, }
        ]
      }
    ]
  },

  /* SINGLE ROW EXAMPLES (PAGE 3 IN SPEC) */
  {
    title: "REUNITED SYRIAN FAMILIES",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        icons: [{ icon: Icon.PeopleRefugeeFamily, data: 0.3, dataColor: DataColor.Orange, }]
      }
    ]
  },
  {
    title: "REUNITED SYRIAN FAMILIES",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        icons: [{ icon: Icon.PeopleRefugeeFamily, data: 0.3, dataColor: DataColor.Orange, }]
      }
    ]
  },
  {
    title: "REUNITED SYRIAN FAMILIES",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.White,
    sections: [
      {
        dataColor: DataColor.Orange,
        icons: [{ icon: Icon.PeopleRefugeeFamily, data: 0.3 }]
      }
    ]
  },

  /* CRAZY WIDGETS TESTING MANY MANY ICONS AT THE SAME TIME */
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that extends across two lines",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: "PeopleRefugeesRunning", data: 0.7, dataColor: DataColor.Blue, },
          {
            icon: "PeopleRefugeeFamilyAlt",
            data: 0.05,
            dataColor: DataColor.Yellow
          },
          {
            icon: "PeopleRefugeeFamily",
            data: 0.15,
            dataColor: DataColor.Red
          },
          { icon: "PeopleChildren", data: 0.25, dataColor: DataColor.Blue, },
          { icon: "PeopleSchoolBoy", data: 0.35, dataColor: DataColor.Blue, },
          { icon: "PeopleSchoolGirl", data: 0.45, dataColor: DataColor.Blue, },
          { icon: "PeopleLittleGirl", data: 0.55, dataColor: DataColor.Blue, },
          { icon: "PeopleLittleBoy", data: 0.65, dataColor: DataColor.Blue, },
          { icon: "PeopleFemale", data: 0.75, dataColor: DataColor.Blue, },
          { icon: "PeopleMale", data: 0.85, dataColor: DataColor.Blue, },
          { icon: "Camp", data: 0.95, dataColor: DataColor.Blue, }
        ]
      },
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: "Legal", data: 0.25, dataColor: DataColor.Blue, },
          { icon: "Shelter", data: 0.35, dataColor: DataColor.Blue, }
        ]
      }
    ]
  },
  {
    title: "EDUCATION GENDER INEQUALITY IN NORWAY",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that extends across two lines. This is a subtitle that extends across two lines. This is a subtitle that extends across two lines.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: "Food", data: 0.21, dataColor: DataColor.Orange, },
          { icon: "Camp", data: 0.3, dataColor: DataColor.Orange, }
        ]
      },
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: "Legal", data: 0.25, dataColor: DataColor.Blue, },
          { icon: "Shelter", data: 0.3, dataColor: DataColor.Blue, }
        ]
      },

      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: "Food", data: 0.5, dataColor: DataColor.Yellow, },
          { icon: "Camp", data: 0.7, dataColor: DataColor.Yellow, }
        ]
      },
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        icons: [
          { icon: "Legal", data: 0.25, dataColor: DataColor.Red, },
          { icon: "Shelter", data: 0.3, dataColor: DataColor.Red, }
        ]
      }
    ]
  }
];

console.log(JSON.stringify(samplePictogramWidgetObjects, 0, 2));
