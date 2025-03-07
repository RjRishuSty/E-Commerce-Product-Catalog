import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import SocalMedia from "../SocalMediaIcon/SocalMedia";
import { enqueueSnackbar } from "notistack";

const RegisterLoginInputs = ({ pageType }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputFields = [
    { id: "fullname", label: "Full Name", type: "text" },
    { id: "email", label: "E-mail", type: "email" },
    { id: "password", label: "Password", type: "password" },
    { id: "confirmPassword", label: "Confirm Password", type: "password" },
  ];
  const filterInputFields =
    pageType === "login"
      ? inputFields.filter(
          (field) => field.id === "email" || field.id === "password"
        )
      : inputFields;
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleValidation = () => {
    if (
      formData.fullname === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      enqueueSnackbar("All fields are required!", { variant: "error" });
      return false;
    }
    if (formData.fullname.length < 3) {
      enqueueSnackbar("Invalid fullname!", { variant: "error" });
      return false;
    }

    if (!formData.email.includes("@")) {
      enqueueSnackbar("Invalid e-mail!", { variant: "error" });
      return false;
    }

    if (formData.password.length < 6) {
      enqueueSnackbar(
        "Password is very weak. Password must be more than 6 digits!",
        { variant: "error" }
      );
      return false;
    }
    if (formData.confirmPassword !== formData.password) {
      enqueueSnackbar("Password does not matches!", { variant: "error" });
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      enqueueSnackbar("Registration Successfully!", { variant: "success" });
    }
  };
  return (
    <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
      {filterInputFields.map((item) => (
        <TextField
          fullWidth
          variant="outlined"
          label={item.label}
          id={item.id}
          type={item.type}
          key={item.id}
          sx={{
            m: 1,
            width:
              pageType === "login"
                ? "100%"
                : { md: "45%", sm: "45%", xs: "100%" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "gray" }, // Default border color
              "&:hover fieldset": { borderColor: "icon.main" }, // Border color on hover
              "&.Mui-focused fieldset": { borderColor: "text.dark" }, // Border color when focused
            },
            "& .MuiInputLabel-root": { color: "gray" }, // Default label color
            "& .MuiInputLabel-root.Mui-focused": { color: "text.dark" },
          }}
          onChange={handleChange}
        />
      ))}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{
            color: "text.dark",
            backgroundColor: "background.main",
            textTransform: "capitalize",
            fontWeight: 700,
            letterSpacing: "0.8px",
          }}
          endIcon={<LoginIcon size="large" sx={{ color: "icon.main" }} />}
        >
          {pageType==='login'?'Login':'Register'}
        </Button>
      </Box>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          sx={{ textAlign: "center", color: "text.light" }}
        >
          ----or----
        </Typography>
        <SocalMedia componentType="login" />
      </Box>
    </Box>
  );
};

export default RegisterLoginInputs;
