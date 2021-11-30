import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import "../style.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

const Drinkcategory = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setDrinkList(data);

      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  const DisplayList = () => {
    return (
      <>
        <div className="container-fluid p-2 mx-auto my-2  rounded d-md-flex  flex-wrap justify-content-around">
          {drinkList.drinks.map((item, index) => {
            return (
              <div className="card m-3 bg-white drink-card" key={index}>
                <div className="card-body">
                  <img src={item.strDrinkThumb} alt="Drink pic" />
                </div>
                <Link
                  to={`/drinkdescription/${item.idDrink}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <button className=" bg-transparent text-white border-0 shadow-none">
                      {item.strDrink}
                    </button>
                    <FaInfoCircle />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  };

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

  return <>{loading ? <Loading /> : <DisplayList />}</>;
};

export default Drinkcategory;
