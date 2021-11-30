import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../style.css";

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const CategoriesBasedItems = () => {
  const params = useParams();
  const mealName = params.name;
  const [mealList, setMealList] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    try {
      let response = await fetch(`${url}${mealName}`);
      let data = await response.json();
      setMealList(data);
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
  const DisplayList = () => {
    return (
      <div className="container-fluid p-4 bg">
        <h1 className="p-2 text-center">List of {mealName} Category</h1>
        <div className="container d-flex flex-wrap justify-content-center">
          {mealList.meals.map((item, index) => {
            return (
              <Stack spacing={2} direction="row" key={index}>
                <Link
                  to={`/mealdescription/${item.idMeal}`}
                  className="text-decoration-none"
                >
                  <Button
                    variant="contained"
                    color="inherit"
                    className="fs-5 mx-2 my-3"
                  >
                    <img
                      src={item.strMealThumb}
                      alt=""
                      width="70"
                      className="rounded-circle mx-2 "
                    />
                    {item.strMeal}
                  </Button>
                </Link>
              </Stack>
            );
          })}
        </div>
      </div>
    );
  };

  return <>{loading ? <Loading /> : <DisplayList />}</>;
};

export default CategoriesBasedItems;
