import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import "../style.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HaveMealDescription = ({ mealDescription }) => {
  return (
    <>
      <div className="container my-3">
        <div
          className="card shadow mb-5 bg-body rounded"
          style={{ backgroundColor: "gray" }}
        >
          <img
            src={mealDescription.meals[0].strMealThumb}
            className="card-img-top mealDrink-img"
            alt={mealDescription.meals[0].strMeal}
          />
          <div className="card-body bg p-2 px-5 text-dark">
            <h5 className="card-title mt-3">
              Recipe Name : {mealDescription.meals[0].strMeal}
            </h5>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Item>Category : {mealDescription.meals[0].strCategory}</Item>
              <Item>Area : {mealDescription.meals[0].strArea}</Item>
            </Stack>
            <h5 className="mt-4 mb-4">Ingredients</h5>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient1}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure1}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient2}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure2}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient3}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure3}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient4}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure4}</Item>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient5}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure5}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient6}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure6}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient7}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure7}</Item>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient8}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure8}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient9}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure9}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient10}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure10}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient11}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure11}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient12}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure12}</Item>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient13}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure13}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient14}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure14}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient15}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure15}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient16}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure16}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient17}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure17}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient18}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure18}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strIngredient19}</Item>
              </Grid>
              <Grid item xs>
                <Item> {mealDescription.meals[0].strMeasure19}</Item>
              </Grid>
            </Grid>

            <h5 className="mt-3">Instructions</h5>
            <p className="ml-5"> {mealDescription.meals[0].strInstructions}</p>
            <h5 className="mt-5"> Youtube Link </h5>
            <p>
              Link :{" "}
              <a
                href={mealDescription.meals[0].strYoutube}
                target="_blank"
                rel="noreferrer"
              >
                {mealDescription.meals[0].strYoutube}
              </a>
            </p>
            <ReactPlayer
              url={mealDescription.meals[0].strYoutube}
              className="d-none d-lg-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HaveMealDescription;
