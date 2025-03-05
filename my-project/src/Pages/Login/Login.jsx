import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import Styles from "./Login.module.css";
import loginImg from "../../assest/login.svg";
import { Link } from "react-router-dom";
import SocalMedia from "../../components/SocalMediaIcon/SocalMedia";
import { enqueueSnackbar } from "notistack";

const Login = () => {
  const [loginData,setLoginData] =useState({email:'',password:''})
  console.log(loginData)
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(handleValidate){
      console.log(loginData)
      enqueueSnackbar('login successfully',{variant:'success'});
    }

  }
  const handleChange = (e)=>{
    setLoginData((prev)=>({...prev, [e.target.id]:e.target.value}))
  }
  const handleValidate = ()=>{
    if(loginData.email === ''){
       enqueueSnackbar('E-mail field is required!', {variant:'error'});
       return false;
    }
    if(!loginData.email.includes('@')){
       enqueueSnackbar('Ivalid E-mail!', {variant:'error'});
       return false;
    }
    if(loginData.password === ''){
       enqueueSnackbar('Password field is required!', {variant:'error'});
       return false;
    }
    if(loginData.password.length <6){
       enqueueSnackbar('Password must be greater then 6 digits!', {variant:'error'});
       return false;
    }
    return true
  }
  return (
    <Stack
      component="section"
      className={Styles.loginPage}
      sx={{ backgroundColor: "primary.light" }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            md={6}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <Box className={Styles.Imgbox}>
              <img
                src={loginImg}
                alt="login images"
                className={Styles.loginImg}
              />
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "text.primary",
                mt: 2,
                textAlign: "center",
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "text.secondary", textAlign: "center" }}
              gutterBottom
            >
              To stay connected with us
              <br /> please login with your personal info.
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              textAlign="center"
              gutterBottom
            >
              Don't have an account?{" "}
              <Button component={Link} to="/sign-up" variant="text" color="red">
                Sign up
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={Styles.formGrid}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700, letterSpacing: 1 }}
            >
              Login
            </Typography>
            <Typography
              variant="title2"
              color="text.secondary"
              gutterBottom
              mb={3}
              textAlign='center'
            >
              Welcome to your e-commerces miniKart Account.{" "}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                label="E-mail"
                id="email"
                sx={{ mb: 2 }}
                
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                id="password"
                sx={{ mb: 2 }}
                
                onChange={handleChange}
              />
             <Box component='div' sx={{mt:2,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
             <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                  letterSpacing: "0.5px",
                }}
                size="large"
                startIcon={<LoginIcon size="large" />}
              >
                Login
              </Button>
              <SocalMedia componentType="login" />
             </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Login;
