import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import Styles from "./Cards.module.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Deal from "../DealOffer/Deal";
import ProductRating from "../ProductRating/ProductRating";

const Cards = ({ item, handleAddToCart }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteProduct = () => {
    setIsFavorite((prev) => !prev);
    // if(isFavorite){
    //   setFavoriteProducts((prevFavorite)=>{
    //     return prevFavorite.find((product)=>product.id === item.id);
    //   })
    // }else{
    //   const remove =  favoriteProducts.find((prevFavorite)=> prevFavorite.id === item.id);
    //   console.log("Remove",remove)
    // }
  };
  console.log("Incard", item);
  // console.log("Fav", favoriteProducts);
  return (
    <Card className={Styles.card} sx={{ backgroundColor: "background.main" }}>
      <Box component="div" className={Styles.offerBox}>
        <Typography color="icon.main" sx={{ fontWeight: 600 }}>
          {Math.round(item.discountPercentage) > 0
            ? `${Math.round(item.discountPercentage)}% Off`
            : null}
        </Typography>
        <IconButton onClick={handleFavoriteProduct} className={Styles.favBtn}>
          {isFavorite ? (
            <FavoriteIcon color="error" fontSize="0.9rem" id={item.id} />
          ) : (
            <FavoriteBorderIcon color="error" fontSize="0.9rem" id={item.id} />
          )}
        </IconButton>
      </Box>
      <img className={Styles.cardImg} src={item.thumbnail} alt={item.title} />
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "text.dark", fontWeight: 600, fontSize: "0.8rem" }}
        >
          Price ${item.price}
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: "0.9rem", fontWeight: 500, color: "text.dark" }}
        >
          {item.title.length > 15
            ? `${item.title.slice(0, 15)}...`
            : item.title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Deal item={item} />
        <ProductRating item={item} />
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleAddToCart}
        sx={{ backgroundColor: "background.dark", color: "text.main" }}
        startIcon={
          <ShoppingCartCheckoutIcon size="large" sx={{ color: "icon.main" }} />
        }
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Cards;
