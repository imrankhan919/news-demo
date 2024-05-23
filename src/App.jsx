import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ThemeBtn from "./components/ThemeBtn";
import { NewsProvider } from "./providers/news/NewsContext";
import { WeatherProvider } from "./providers/weather/WeatherContext";

const App = () => {
  return (
    <NewsProvider>
      <WeatherProvider>
        <Navbar />
        <HomePage />
        <ThemeBtn />
      </WeatherProvider>
    </NewsProvider>
  );
};

export default App;
