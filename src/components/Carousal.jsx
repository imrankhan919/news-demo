import React, { useContext } from "react";
import NewsContext from "../providers/news/NewsContext";
import CarousalItem from "./CarousalItem";

const Carousal = () => {
  const { allNews } = useContext(NewsContext);

  if (!allNews || allNews.length === 0) {
    return (
      <div className="container p-5">
        <h1 className="display-1 text-center my-3 text-secondary">
          Something Went Wrong...
        </h1>
      </div>
    );
  }

  return (
    <div id="carouselExample" class="carousel slide mb-2">
      <div class="carousel-inner">
        {allNews.map((news, index) => (
          <CarousalItem key={index} news={news} active={index} />
        ))}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
