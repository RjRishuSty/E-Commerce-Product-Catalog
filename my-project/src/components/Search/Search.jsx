import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React, {  useState } from "react";

const Search = () => {  
  const [search, setSearch] = useState("");
  const handleClear = () => {
    setSearch('');
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TextField
        fullWidth
        id="search"
        value={search}
        placeholder="Search Products.."
        variant="outlined"
        onChange={handleSearch}
        className={Styles.search}
        sx={{border:'2px solid primary'}}
        InputProps={{ 
          endAdornment: (
            <InputAdornment position="end">
              {!search ? (
                <SearchIcon color="primary" size="large" />
              ) : (
                <IconButton onClick={handleClear}>
                  <ClearIcon color="primary" size="large" />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
