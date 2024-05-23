import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import WeatherContext from "../providers/weather/WeatherContext";
import { fetchWeather } from "../providers/weather/WeatherActions";

const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);
  const { weatherData, dispatch } = useContext(WeatherContext);

  const [city, setCity] = useState("");

  const getWeather = async (city) => {
    const data = await fetchWeather(city);
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };

  useEffect(() => {
    getWeather("Indore");
  }, []);

  if (!weatherData) {
    return (
      <div
        className={
          dark
            ? "card rounded-0 p-3 bg-secondary text-light"
            : "card rounded-0 p-3"
        }
      >
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div
      className={
        dark
          ? "card rounded-0 p-3 bg-secondary text-light"
          : "card rounded-0 p-3"
      }
    >
      <h4>Today's Weather</h4>

      <form className="my-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Enter City Name"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className={
            dark
              ? "btn btn-dark rounded-0 my-2 float-end"
              : "btn btn-success rounded-0 my-2 float-end"
          }
        >
          Search Weather
        </button>
      </form>

      <div className="d-flex align-items-center justify-content-between">
        <span>
          <h1>{weatherData?.current.temp_c} C</h1>
          <h2>{weatherData?.location.name}</h2>
        </span>
        <span className="text-center">
          <img src={weatherData?.current.condition.icon} alt="" />
          <p>{weatherData?.current.condition.text}</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
