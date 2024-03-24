import DummyImage from "../assets/appImages/bcalc.png";
import TodoLogo from "../assets/appIcons/todo.png";
import WeatherLogo from "../assets/appIcons/weather.png";
import MoneyTrackerLogo from "../assets/appIcons/expense.png";

export const appList = [
  {
    name: "To Do",
    details: "A minimal todo app",
    logo: TodoLogo,
    coverImage: DummyImage,
    downloadCount: 1,
    downloadLink: "download link",
    features: [
      "Dark and light theme",
      "Task completion filter",
      "Task editable",
    ],
  },
  {
    name: "Weather",
    details: "A minimal weather app",
    logo: WeatherLogo,
    coverImage: DummyImage,
    downloadCount: 0,
    downloadLink: "download link",
    features: [
      "Dark and light theme",
      "Current weather and condition",
      "Location based on city and country",
      "No location tracking or location permission needed",
    ],
  },
  {
    name: "Money Tracker",
    details: "A minimal expense tracking app",
    logo: MoneyTrackerLogo,
    coverImage: DummyImage,
    downloadCount: 2,
    downloadLink: "download link",
    features: [
      "Dark and light theme",
      "Progress bar and tracking",
      "Add and remove expense",
      "Set daily limit",
      "History",
    ],
  },
];
