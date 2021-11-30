import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Categories = ({ categories }) => {
  const [readMore] = useState(false);

  return (
    <div className="container-fluid bg p-4">
      <h1 className="text-decoration-underline">List of Food Categories</h1>
      <main>
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {categories.categories.map((category) => {
              const {
                idCategory,
                strCategoryThumb,
                strCategory,
                strCategoryDescription,
              } = category;
              return (
                <Grid item key={idCategory} xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={strCategoryThumb}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {strCategory}
                      </Typography>
                      <Typography>
                        {readMore
                          ? strCategoryDescription
                          : `${strCategoryDescription.substring(0, 200)}.....`}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/mealList/${strCategory}`}>
                        <Button
                          size="small"
                          variant="contained"
                          className="mb-2 mx-2"
                        >
                          Click to View More
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Categories;
