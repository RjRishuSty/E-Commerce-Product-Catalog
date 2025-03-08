import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext, useState } from "react";
import {ThemeContexts} from '../../App';


const Search = () => {
  const {isMobile} = useContext(ThemeContexts)
  const [search, setSearch] = useState("");
  const handleClear = () => {
    setSearch("");
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        id="search"
        value={search}
        placeholder="Search Products.."
        variant="outlined"
        onChange={handleSearch}
        size={isMobile ? "medium" : "small"}
        sx={{
          width: { md: "50%", sm: "100%", xs: "100%" },
          backgroundColor: "background.main",
          my: { md: 0, sm: 2, xs: 2 },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!search ? (
                <SearchIcon sx={{ color: "icon.main" }} size="large" />
              ) : (
                <IconButton onClick={handleClear}>
                  <ClearIcon sx={{ color: "icon.main" }} size="large" />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Search;
