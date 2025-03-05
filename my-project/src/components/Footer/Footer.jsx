import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Styles from "./Footer.module.css";
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import SocalMedia from "../SocalMediaIcon/SocalMedia";

const Footer = () => {
  return (
    <Stack component="footer" className={Styles.footer}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            flexDirection="column"
            display="flex"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: "2rem",
                color: "white",
                fontWeight: 700,
                textAlign: "center",
              }}
              gutterBottom
            >
              Menu
            </Typography>
            <Box component="nav">
              <NavLinks linkType="footer" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              sx={{
                fontSize: "2rem",
                color: "white",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Quick Links
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="start"
            alignItems="center"
          >
            <Logo />
            <Typography
              variant="subtitle1"
              color="white"
              gutterBottom
              sx={{ marginTop: "-0.5rem" }}
            >
              Welcome to our E-commerce minikart store. Our store provide lot of
              projects just like shirt,t-shirt,jeens, fruits etc....
            </Typography>
            <SocalMedia componentType='footer'/>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
