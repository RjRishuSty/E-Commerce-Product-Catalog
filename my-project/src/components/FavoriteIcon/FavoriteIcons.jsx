import { useContext, useEffect, useState } from "react";
import { ThemeContexts } from "../../App";
import { enqueueSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavoriteIcons = ({ useIn, itemId }) => {
  const { isFavorite, handleFavoriteProducts } =
    useContext(ThemeContexts);

  return (
    <IconButton
      onClick={useIn === "card" ? handleFavoriteProducts : undefined}
      id={itemId}
    >
      {useIn === "card" ? (
        isFavorite ? (
          <FavoriteIcon color="error" size="large" value={itemId} />
        ) : (
          <FavoriteBorderIcon color="error" size="large" value={itemId} />
        )
      ) : (
        <FavoriteIcon sx={{ color: "icon.main" }} size="large" />
      )}
    </IconButton>
  );
};

export default FavoriteIcons;
