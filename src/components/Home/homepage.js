import React, { useState, useEffect } from "react";
import Banner from "./banner";
import CategoriesContainer from "./categories";
import "../style.css";

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  const Loading = () => {
    return (
      <div className="container-fluid text-center">
        <img
          src="https://i.pinimg.com/originals/8a/69/8f/8a698f09c9c4982662767b1dc116e385.gif"
          alt="loader"
        />
      </div>
    );
  };
  return (
    <>
      <Banner />
      {loading ? <Loading /> : <CategoriesContainer categories={categories} />}
    </>
  );
};

export default Homepage;
