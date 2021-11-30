import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import "../style.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HaveDrinkDescription = ({ drinkDescription }) => {
  return (
    <>
      <div className="container my-4">
        <div
          className="card shadow mb-5 bg-body rounded"
          style={{ backgroundColor: "gray" }}
        >
          <img
            src={drinkDescription.drinks[0].strDrinkThumb}
            className="card-img-top mealDrink-img"
            alt="..."
          />
          <div className="card-body  p-4 px-5 text-dark bg">
            <h5 className="card-title">
              Cocktail : {drinkDescription.drinks[0].strDrink}
            </h5>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Item>Category : {drinkDescription.drinks[0].strCategory}</Item>
              <Item>Alcoholic : {drinkDescription.drinks[0].strAlcoholic}</Item>
            </Stack>
            <h5 className="mt-3">Indegrients</h5>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strIngredient1}</Item>
              </Grid>

              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strMeasure1}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strIngredient2}</Item>
              </Grid>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strMeasure2}</Item>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strIngredient3}</Item>
              </Grid>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strMeasure3}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strIngredient4}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure4}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strIngredient5}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure5}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strIngredient6}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure6}</Item>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strIngredient7}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure7}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strIngredient8}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure8}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strIngredient9}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure9}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strIngredient10}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure10}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strIngredient11}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure11}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item>{drinkDescription.drinks[0].strIngredient12}</Item>
              </Grid>
              <Grid item xs>
                <Item> {drinkDescription.drinks[0].strMeasure12}</Item>
              </Grid>
            </Grid>

            <h5 className="mt-3">Instructions</h5>
            <p className="card-text  text-capitalize ml-5">
              {" "}
              {drinkDescription.drinks[0].strInstructions}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HaveDrinkDescription;
