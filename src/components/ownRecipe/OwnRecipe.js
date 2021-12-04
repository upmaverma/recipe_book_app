import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import "../style.css";

const OwnRecipe = () => {
  const [open, setOpen] = useState(false);
  const [recipeOwn, setRecipeOwn] = useState({
    recipename: "",
    category: "",
    area: "",
    ingredients: "",
    instructions: "",
  });

  const [recipes, setRecipes] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setRecipeOwn({
      recipename: "",
      category: "",
      ingredients: "",
      area: "",
      instructions: "",
    });
    setOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRecipeOwn({ ...recipeOwn, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (recipeOwn.recipename && recipeOwn.category) {
      const recipeList = {
        ...recipeOwn,
        id: new Date().getTime().toString(),
      };

      setRecipes([...recipes, recipeList]);
    }
    setRecipeOwn({
      recipename: "",
      category: "",
      ingredients: "",
      area: "",
      instructions: "",
    });

    setOpen(false);
  };

  const handleRemove = (id) => {
    let filter = recipes.filter((item) => {
      return item.id !== id;
    });
    setRecipes(filter);
  };

  return (
    <div className="container-fluid p-3  bg" style={{ minHeight: "95vh" }}>
      <Button
        variant="contained"
        color="success"
        className="d-block mx-auto my-0"
        onClick={handleClickOpen}
      >
        Add Recipe
      </Button>
      <form>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Your Own Recipe</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="recipename"
              name="recipename"
              value={recipeOwn.recipename}
              label="Recipe Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="category"
              name="category"
              value={recipeOwn.category}
              label="Category Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="area"
              name="area"
              value={recipeOwn.area}
              label="Area Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="instructions"
              name="ingredients"
              value={recipeOwn.ingredients}
              label="Ingredients Name"
              type="text"
              fullWidth
              multiline
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="instructions"
              name="instructions"
              value={recipeOwn.instructions}
              label="Instructions Name"
              type="text"
              fullWidth
              multiline
              variant="standard"
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="success">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </form>
      <div className="conatiner p-2">
        <h3>
          Your Own Recipe Here...
          <img
            src="https://cdn.edu.buncee.com/assets/864ea935940063b8b3b7501e4b6599d1/animation-writing-062819.gif?timestamp=1561751636"
            alt="write gif"
            width="40"
          />
        </h3>
        {recipes.map((item) => {
          return (
            <div className="card mx-2 my-3" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">Recipe Name :{item.recipename}</h5>
                <p className="card-text">Category Name :{item.category}</p>
                <p className="card-text">Area Name :{item.area}</p>
                <p className="card-text">Ingredients: {item.ingredients}</p>
                <p className="card-text">Instructions : {item.instructions}</p>

                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OwnRecipe;
