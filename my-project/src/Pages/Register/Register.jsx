import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import Styles from "./Register.module.css";
import registerImg from "../../assest/register.png";
import { Link } from "react-router-dom";
import SocalMedia from "../../components/SocalMediaIcon/SocalMedia";

const Register = () => {
 
  return (
    <Stack
      component="section"
      className={Styles.registerPage}
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
                src={registerImg}
                alt="login images"
                className={Styles.registerImg}
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
              Sign Up
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
            <Box component='form' sx={{width:'100%'}}>
            <TextField
                fullWidth
                variant="outlined"
                label="Fullname"
                id="fullname"
                sx={{ m: 1,width:{md:'45%',sm:'45%',xs:'100%'} }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="E-mail"
                id="email"
                sx={{ m: 1,width:{md:'45%',sm:'45%',xs:'100%'} }} 
              />
               <TextField
                fullWidth
                variant="outlined"
                label="Password"
                id="password"
                sx={{ m: 1,width:{md:'45%',sm:'45%',xs:'100%'} }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Confirm-Password"
                id="conPassword"
                sx={{ m: 1,width:{md:'45%',sm:'45%',xs:'100%'} }}
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Register;
