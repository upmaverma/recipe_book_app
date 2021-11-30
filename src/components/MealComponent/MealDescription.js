import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HaveMealDescription from "./haveMealDescription";
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const MealDescription = () => {
  const params = useParams();
  const mealId = params.id;

  const [mealDescription, setMealDescription] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    try {
      const response = await fetch(`${url}${mealId}`);
      const data = await response.json();
      setMealDescription(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Loading = () => {
    return (
      <div className="container-fluid text-center w-100">
        <img
          src="https://i.pinimg.com/originals/8a/69/8f/8a698f09c9c4982662767b1dc116e385.gif"
          alt="loader"
          width="100%"
        />
      </div>
    );
  };

  const MealDescription = () => {
    return (
      <>
        {mealDescription.meals ? (
          <HaveMealDescription mealDescription={mealDescription} />
        ) : (
          <NoMealDescription />
        )}
      </>
    );
  };

  const NoMealDescription = () => {
    return (
      <div className="container my-3">
        <h1 className="text-center">NO Meal Available</h1>
      </div>
    );
  };
  return <div>{loading ? <Loading /> : <MealDescription />}</div>;
};

export default MealDescription;
