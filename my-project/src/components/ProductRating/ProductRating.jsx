import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';

const ProductRating = ({item}) => {
  return (
    <Rating readOnly size='small' value={item.rating} icon={<StarIcon/>} emptyIcon={<StarBorderIcon/>}/>
  )
}

export default ProductRating