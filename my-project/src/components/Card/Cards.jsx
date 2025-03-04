import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import Styles from "./Cards.module.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Deal from "../DealOffer/Deal";
import ProductRating from "../ProductRating/ProductRating";
 
const Cards = ({ item }) => {
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
  // console.log("Incard", item);
  // console.log("Fav", favoriteProducts);
  return (
    <Card className={Styles.card}>
      <Box component="div" className={Styles.offerBox}>
        <Typography color="success" sx={{ fontWeight: 600 }}>
          {`${Math.round(item.discountPercentage)}% Off`}
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
          variant="caption"
          sx={{ fontSize: "1rem", fontWeight: 500, color: "#8e8e8e" }}
        >
          {item.title.length > 15
            ? `${item.title.slice(0, 15)}...`
            : item.title}
        </Typography>
      </Box>
      <Box sx={{width:'100%', display:'flex',justifyContent:'space-between',alignItems:'center', mb:1}}>
        <Deal item={item} />
        <ProductRating item={item} />
      </Box>
      <Button
        variant="contained"
        fullWidth
        startIcon={<ShoppingCartCheckoutIcon sx={{ fontSize: "2rem" }} />}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Cards;
