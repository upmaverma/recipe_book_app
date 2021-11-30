import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navabr from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Homepage from "./components/Home/homepage";
import MealPage from "./components/MealComponent/mealPage";
import CategoriesBasedItems from "./components/MealComponent/categoriesBasedItems";
import MealDescription from "./components/MealComponent/MealDescription";
import DrinkDescription from "./components/MealComponent/DrinkDescription";
import AddOwnReceipe from "./components/ownReceipe/OwnReceipe";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navabr />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/mealpage" element={<MealPage />} />
        <Route path="/mealList/:name" element={<CategoriesBasedItems />} />
        <Route path="/mealdescription/:id" element={<MealDescription />} />
        <Route path="/drinkdescription/:id" element={<DrinkDescription />} />
        <Route path="/add_own_receipe" element={<AddOwnReceipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
