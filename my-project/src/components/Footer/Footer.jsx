import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Styles from "./Footer.module.css";
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import SocalMedia from "../SocalMediaIcon/SocalMedia";

const Footer = () => {
  return (
    <Stack component="footer" sx={{backgroundColor:'primary.dark'}} className={Styles.footer}>
      <Container sx={{py:5}}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            flexDirection="column"
            display="flex"
            alignItems="start"
            sx={{mb:{xs:3,sm:3}}}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                color: "white",
                fontWeight: 700,
                textAlign: "start",
              }}
              gutterBottom
            >
              Menu
            </Typography>
            <Box component="nav">
              <NavLinks linkType="footer" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}  sx={{mb:{xs:3,sm:3}}}>
            <Typography
              sx={{
                fontSize: "2rem",
                color: "white",
                fontWeight: 700,
                textAlign: "start",
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
            sx={{mb:{xs:3,sm:3}}}
          >
            <Logo />
            <Typography
              variant="subtitle1"
              color="white"
              gutterBottom
              sx={{ mt:{md:'-1.5rem',sm:0,xs:0} }}
            >
              Welcome to our E-commerce minikart store. Our store provide lot of
              projects just like shirt,t-shirt,jeens, fruits etc....
            </Typography>
            <SocalMedia componentType='footer' sx={{mt:1}}/>
          </Grid>
        </Grid>
      </Container>
    </Stack> 
  );
};

export default Footer;
