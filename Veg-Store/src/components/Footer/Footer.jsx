import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Styles from "./footer.module.css";
import NavLinks from "../NavLinks/NavLinks";

const Footer = () => {
  return (
    <Stack component="footer" className={Styles.footer}>
      <Container sx={{ border: "2px solid red" }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>Menu</Typography>
            <Box component="nav">
              <NavLinks linkType='footer'/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>Menu</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            AboutCompany
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
