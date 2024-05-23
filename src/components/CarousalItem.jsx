import React from "react";

const CarousalItem = ({ news, active }) => {
  return (
    <div class={active === 0 ? "carousel-item active" : "carousel-item"}>
      <img
        style={{ height: "50vh", objectFit: "cover" }}
        src={
          news.urlToImage
            ? news.urlToImage
            : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"
        }
        class="d-block w-100"
        alt="..."
      />
    </div>
  );
};

export default CarousalItem;
