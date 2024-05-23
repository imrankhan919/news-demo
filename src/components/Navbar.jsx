import React, { useContext, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import NewsContext from "../providers/news/NewsContext";
import { fetchNews } from "../providers/news/NewsActions";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);
  const { dispatch } = useContext(NewsContext);

  const [text, setText] = useState("");

  const getNews = async (text) => {
    const allNews = await fetchNews(text);
    dispatch({
      type: "GET_NEWS",
      payload: allNews,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getNews(text);
    setText("");
  };

  return (
    <nav
      class={
        dark
          ? "navbar navbar-expand-lg bg-dark shadow"
          : "navbar navbar-expand-lg bg-light shadow"
      }
    >
      <div class="container-fluid">
        <a class={dark ? "navbar-brand text-light" : "navbar-brand"} href="#">
          Taaza-Khabar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class={dark ? "nav-link active text-light" : "nav-link active"}
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Sports")}
              >
                Sports
              </a>
            </li>
            <li class="nav-item">
              <a
                class={dark ? "nav-link active text-light" : "nav-link active"}
                aria-current="page"
                href="#"
                onClick={() => getNews("BollyWood")}
              >
                Entertainment
              </a>
            </li>
            <li class="nav-item">
              <a
                class={dark ? "nav-link active text-light" : "nav-link active"}
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Politics")}
              >
                Politics
              </a>
            </li>
            <li class="nav-item">
              <a
                class={dark ? "nav-link active text-light" : "nav-link active"}
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Geopolitics")}
              >
                International
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              class="form-control me-2 rounded-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button class="btn btn-success rounded-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
