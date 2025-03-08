import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import SocalMedia from "../SocalMediaIcon/SocalMedia";
import { enqueueSnackbar } from "notistack";
import PasswordIcon from "../PasswordIcon/PasswordIcon";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

const RegisterLoginInputs = ({ pageType }) => {
  const navigate = useNavigate(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const inputFields = [
    { id: "fullname", label: "Full Name", type: "text" },
    { id: "email", label: "E-mail", type: "email" },
    { id: "password", label: "Password", type: "password" },
    { id: "confirmPassword", label: "Confirm Password", type: "password" },
  ];
  useEffect(() => {
    const newUser = localStorage.getItem("newUser");
    if (!newUser) {
      localStorage.setItem("newUser", JSON.stringify(null));
    }
  }, []);
  const filterInputFields =
    pageType === "login"
      ? inputFields.filter(
          (field) => field.id === "email" || field.id === "password"
        )
      : inputFields;
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleValidation = (validUser) => {
    if (pageType === "register") {
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
      if (formData.confirmPassword !== formData.password) {
        enqueueSnackbar("Password does not match!", { variant: "error" });
        return false;
      }
    } else if (pageType === "login") {
      if (formData.email === "" || formData.password === "") {
        enqueueSnackbar("Email and Password are required!", {
          variant: "error",
        });
        return false;
      }
      if (validUser && formData.password !== validUser.password) {
        enqueueSnackbar("Incorrect password!", { variant: "error" });
        return false;
      }
      if (validUser && formData.email !== validUser.email) {
        enqueueSnackbar("Incorrect E-mail!", { variant: "error" });
        return false;
      }
    }

    if (!formData.email.includes("@")) {
      enqueueSnackbar("Invalid e-mail!", { variant: "error" });
      return false;
    }

    if (formData.password.length < 6) {
      enqueueSnackbar(
        "Password is very weak. Password must be more than 6 characters!",
        { variant: "error" }
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let saveUser = JSON.parse(localStorage.getItem("newUser"));
    if (handleValidation()) {
      if (saveUser === null || saveUser) {
        localStorage.setItem("newUser", JSON.stringify(formData));
        navigate('/login')
        return enqueueSnackbar("Registration Successfully!", {
          variant: "success",
        });
      } else {
        return enqueueSnackbar("Somethings went wrong!", { variant: "error" });
      }
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = JSON.parse(localStorage.getItem("newUser"));
    if (handleValidation(validUser)) {
      localStorage.setItem('login',JSON.stringify(true));
      navigate('/')
      return enqueueSnackbar("Login Successfully!", { variant: "success" });
    }
  };
  console.log(formData);

  return (
    <Box
      component="form"
      sx={{ width: "100%" }}
      onSubmit={pageType === "login" ? handleLogin : handleSubmit}
    >
      {filterInputFields.map((item) => (
        <TextField
          fullWidth
          variant="outlined"
          label={item.label}
          id={item.id}
          key={item.id}
          type={
            item.id === "password"
              ? showPassword
                ? "text"
                : "password"
              : item.id === "confirmPassword"
              ? showConfirmPassword
                ? "text"
                : "password"
              : item.type
          }
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
          InputProps={{
            endAdornment:
              item.id === "password" ||
              item.id === "confirmPassword" ||
              item.id === "fullname" ||
              item.id === "email" ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      item.id === "password"
                        ? setShowPassword(!showPassword)
                        : setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {item.id === "password" || item.id === "confirmPassword" ? (
                      <PasswordIcon
                        isVisible={
                          item.id === "password"
                            ? showPassword
                            : showConfirmPassword
                        }
                      />
                    ) : null}
                    {item.id === "fullname" && (
                      <PersonOutlineIcon
                        sx={{ color: "icon.main" }}
                        size="large"
                      />
                    )}
                    {item.id === "email" && (
                      <EmailIcon sx={{ color: "icon.main" }} size="large" />
                    )}
                  </IconButton>
                </InputAdornment>
              ) : null,
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
          {pageType === "login" ? "Login" : "Register"}
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
