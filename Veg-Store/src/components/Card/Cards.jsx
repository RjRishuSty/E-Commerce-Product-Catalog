import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Styles from "./Cards.module.css";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Cards = ({ item }) => {
  console.log("Incard", item);
  return (
    <Card className={Styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={item.thumbnail}
          alt={item.title}
        />
        <CardContent>
          <Typography>{item.title}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" fullWidth startIcon={<ShoppingCartCheckoutIcon/>} >Book Now</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
