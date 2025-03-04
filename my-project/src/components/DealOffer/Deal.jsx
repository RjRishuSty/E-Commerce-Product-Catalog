import { Typography } from "@mui/material";
import React from "react";

const Deal = ({ item }) => {
  return (
    <>
      {!item ? (
        ""
      ) : (
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.8rem",
            fontWeight: 600,
          }}
          
          color={item.availabilityStatus === "In Stock" ? "#216101" : "#910442"}
        >
          {item.availabilityStatus === "In Stock"
            ? "Hot Deal"
            : "Only few left"}
        </Typography>
      )}
    </>
  );
};

export default Deal;
