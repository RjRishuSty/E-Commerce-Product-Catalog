import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  return (
    <Stack
      component="section"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid red",
        backgroundColor: "primary.main",
      }}
    >
      <Container sx={{ border: "2px solid yellow", overflow: "hidden" }}>
        <Grid container>
          <Grid
            item
            md={6}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            fjdksa
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding:'20px 15px'
            }}
          >
          <Typography variant="h3" sx={{fontWeight:700, letterSpacing:1}}>Login</Typography>
          <Typography variant="caption" gutterBottom mb={3}>Welcome to your e-commerces miniKart Account. </Typography>
            <TextField fullWidth  variant="outlined" label="E-mail" id="email"  sx={{mb:2}}/>
            <TextField  fullWidth variant="outlined" label="Password" id="password"  sx={{mb:2}}/>
            <Button variant="contained" color="primary" sx={{mb:3, textTransform:'capitalize',letterSpacing:'0.5px'}} endIcon={<LoginIcon/>}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Login;
