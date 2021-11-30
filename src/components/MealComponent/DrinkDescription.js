import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HaveDrinkDescription from "./haveDrinkDescription";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const DrinkDescription = () => {
  const params = useParams();
  const mealId = params.id;

  const [drinkDescription, setDrinkDescription] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    try {
      const response = await fetch(`${url}${mealId}`);
      const data = await response.json();
      setDrinkDescription(data);
      console.log(data);
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

  const DrinkDescription = () => {
    return (
      <>
        {drinkDescription.drinks ? (
          <HaveDrinkDescription drinkDescription={drinkDescription} />
        ) : (
          <NoDrinkDescription />
        )}
      </>
    );
  };

  const NoDrinkDescription = () => {
    return (
      <div className="container my-3">
        <h1 className="text-center">NO Drinks Available</h1>
      </div>
    );
  };

  return <>{loading ? <Loading /> : <DrinkDescription />}</>;
};

export default DrinkDescription;
