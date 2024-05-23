export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=0e6df51b3a704852a3671949240905%20&q=${city}&aqi=yes`
  );
  const data = await response.json();
  return data;
};
