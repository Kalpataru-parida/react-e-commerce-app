import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, CardMedia, Grid, IconButton, Rating, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import IndivisualCard from "./IndivisualCard";
function ComponentCard({ id, title, rating, count, desc, img, price }) {
  const [isInWishlist, setIsInWishlist] = useState({});
  const [isTrue, setIsTrue] = useState(true);
  const handelOnClick = () => {
    setIsTrue(false);
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Link to={`/product/${id}`}>
          <Card
            sx={{
              minWidth: 70,
              maxHeight: "100%",
              zIndex: "10",
              backgroundColor: "#EAE9E3",
              boxShadow: "1px 2px 9px #8E8C85",
              borderRadius: "10px",
            }}
            onClick={handelOnClick}
          >
            <CardContent
              sx={{
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <IconButton sx={{ left: "93%" }}>
                <FavoriteBorderIcon />
              </IconButton>
              <CardMedia
                component="img"
                alt={title}
                image={img}
                title={title}
                sx={{
                  display: "block",
                  margin: "auto",
                  width: "180px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
              <Typography variant="h5" component="div">
                {title.substring(0, 22)}
              </Typography>
              <Typography
                sx={{ mb: 1.5, position: "center" }}
                color="text.secondary"
              >
                {desc.substring(0, 50)}
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Price: ${price}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  sx={{
                    color: rating < 3 ? "yellow" : "green",
                    marginRight: 1,
                  }}
                />
                {/* <Typography variant="body2" color="textSecondary">
              ({count} rating)
            </Typography> */}
              </Box>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ fontWeight: "bold"}}
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      {/* {isTrue?(
       <IndivisualCard/>
    ):null} */}
    </>
  );
}

export default ComponentCard;
