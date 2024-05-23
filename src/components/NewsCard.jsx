import React, { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={
        dark
          ? "card rounded-0 p-3 mb-3 bg-secondary text-light"
          : "card rounded-0 p-3 mb-3"
      }
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            style={{ height: "250px", objectFit: "cover" }}
            src={
              news.urlToImage
                ? news.urlToImage
                : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"
            }
            class="img-fluid rounded-0"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{news.title}</h5>
            <p class="card-text">{news.description}</p>
            <p class="card-text">
              <small class="text-body-secondary">{news.author}</small>
              <br />
              <small class="text-body-secondary">
                {new Date(news.publishedAt).toDateString("en-US")}
              </small>
            </p>
            <a
              href={news.url}
              target="_blank"
              className={
                dark
                  ? "btn btn-sm btn-dark rounded-0 float-end"
                  : "btn btn-sm btn-success rounded-0 float-end"
              }
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
