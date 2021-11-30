import React, { useState } from "react";
import FoodCategory from "./Foodcategory";
import DrinkCategory from "./Drinkcategory";
import { BsArrowUpCircleFill } from "react-icons/bs";
import "../style.css";

const MealPage = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="container-fluid bg p-2">
      <div className="alert alert-dark text-center m-2" role="alert">
        <h2>
          <img
            src="https://media3.giphy.com/media/KfxPgR9Xb6lRvlFa8x/source.gif"
            alt="food category gif"
            width="50"
            className="mx-2"
            id="mealList"
          />
          Meal List{" "}
        </h2>
      </div>
      <FoodCategory />
      <div className="alert alert-dark text-center m-2" role="alert">
        <h2>
          <img
            src="https://media2.giphy.com/media/kgDAvxZ6mZa9VrIqXY/giphy.gif?cid=6c09b952cf609d5e6a5d24a355b15ac46c2dcdde3ac7126b&rid=giphy.gif&ct=s"
            alt="food category gif"
            width="50"
            className="mx-2"
          />
          Drink List{" "}
        </h2>
      </div>
      <DrinkCategory />
      <div
        className="top-mark fixed-bottom text-end m-3 "
        style={{ fontSize: "40px", cursor: "pointer" }}
      >
        <button
          className="shadow-none border-0 bg-transparent"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        >
          <BsArrowUpCircleFill />
        </button>
      </div>
    </div>
  );
};

export default MealPage;
