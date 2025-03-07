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
import Styles from "./RegisterPage.module.css";
import registerImg from "../../assest/register.png";
import { Link, useNavigate } from "react-router-dom";
import RegisterLoginInputs from "../../components/RegisterLoginInputs/RegisterLoginInputs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      component="section"
      className={Styles.registerPage}
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
                src={registerImg}
                alt="login images"
                className={Styles.registerImg}
              />
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                padding: "0px 10px",
                color: "text.light",
                textAlign: "center",
              }}
              gutterBottom
            >
              Sign up for a MiniKart account to access exclusive shopping
              benefits. Enter your details to get started. Already have an
              account? Log in to continue!
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.dark"
              textAlign="center"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              Already have an account?
              <Button
                component={Link}
                to="/login"
                variant="text"
                sx={{
                  color: "icon.main",
                  textTransform: "capitalize",
                  fontWeight: 800,
                }}
              >
                Login
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
                Register
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
              Create your MiniKart account to start shopping. Fill in your
              details to register and enjoy a seamless shopping experience!
            </Typography>
            <RegisterLoginInputs pageType="register" />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default RegisterPage;
