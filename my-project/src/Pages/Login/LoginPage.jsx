import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Styles from "./LoginPage.module.css";
import loginImg from "../../assest/login.svg";
import { Link, useNavigate } from "react-router-dom";
import RegisterLoginInputs from "../../components/RegisterLoginInputs/RegisterLoginInputs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      component="section"
      className={Styles.loginPage}
      sx={{ backgroundColor: "primary.main" }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{ order: { md: 1, sm: 2, xs: 2 } }}
          >
            <Box className={Styles.Imgbox}>
              <img
                src={loginImg}
                alt="login images"
                className={Styles.loginImg}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: "text.dark",
                textAlign: "center",
                fontWeight: 800,
              }}
              gutterBottom
            >
              Welcome Back
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                padding: "0px 10px",
                color: "text.light",
                textAlign: "center",
              }}
              gutterBottom
            >
              Log in to your account securely using your email and password to
              access personalized features. Manage your activities effortlessly
              and stay connected with a seamless user experience.
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.dark"
              textAlign="center"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              Don't have an account?
              <Button
                component={Link}
                to="/register"
                variant="text"
                sx={{
                  color: "icon.main",
                  textTransform: "capitalize",
                  fontWeight: 800,
                }}
              >
                Register
              </Button>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              order: { md: 2, sm: 1, xs: 1 },
              padding: "3rem 1rem",
              mb: { sm: 2, xs: 2 },
            }}
          >
            <Box
              component="div"
              mb={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" color="text.dark" fontWeight="700">
                Login
              </Typography>
              <IconButton
                onClick={() => navigate(-1)}
                variant="contained"
                sx={{ backgroundColor: "primary.dark", borderRadius: "50%" }}
              >
                <ArrowBackIcon sx={{ color: "icon.main" }} size="large" />
              </IconButton>
            </Box>
            <Typography
              gutterBottom
              mb={3}
              variant="subtitle2"
              color="text.light"
              sx={{
                padding: "0px 15px",
                textAlign: "center",
                letterSpacing: "0.7px",
              }}
            >
              Log in to access your account and continue shopping effortlessly.
              Enter your email and password to sign in securely.
            </Typography>
            <RegisterLoginInputs pageType="login" />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default LoginPage;
