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
import Styles from "./Login.module.css";
import loginImg from "../../assest/login.svg";
import { Link } from "react-router-dom";
import SocalMedia from "../../components/SocalMediaIcon/SocalMedia";

const Login = () => {
  return (
    <Stack
      component="section"
      className={Styles.loginPage}
      sx={{backgroundColor:'primary.light'}}
    >
      <Container sx={{ border: "2px solid yellow" }}>
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
            <Typography variant="body2" color="text.primary" textAlign='center' gutterBottom>
              Don't have an account? <Button component={Link} to='/sign-up' variant="text" color="red">Sign up</Button>
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={Styles.formGrid}>
            <Typography variant="h3" color="text.primary" sx={{ fontWeight: 700, letterSpacing: 1 }}>
              Login
            </Typography>
            <Typography variant="title2" color="text.secondary" gutterBottom mb={3}>
              Welcome to your e-commerces miniKart Account.{" "}
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="E-mail"
              id="email"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              id="password"
              sx={{ mb: 2 }}
            />
            {/* <Typography variant="body1" color="text.secondary" textAlign='start'>Forget Password ?</Typography> */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                mb: 3,
                textTransform: "capitalize",
                letterSpacing: "0.5px",
              }}
              size="large"
              endIcon={<LoginIcon size="large"/>}
            >
              Login
            </Button>
            <Typography  color="text.secondary">------------------------------or-----------------------------</Typography>
            <SocalMedia/>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Login;
