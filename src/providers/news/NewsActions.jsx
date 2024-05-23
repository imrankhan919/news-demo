export const fetchNews = async (topic) => {
  const todaysDate = new Date().toLocaleDateString("en-IN").split("/");

  const day = todaysDate[0];
  const month = todaysDate[1] - 1;
  const year = todaysDate[2];

  const formattedDate = `${year}-${month}-${day}`;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=${formattedDate}&sortBy=publishedAt&apiKey=557a4679cd2c4e6d9ce3dde8a909928c`
  );
  const data = await response.json();
  return data.articles;
};
