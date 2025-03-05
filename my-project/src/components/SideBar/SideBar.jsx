import Styles from "./SideBar.module.css";
import Logo from "../Logo/Logo";
import { Box } from "@mui/material";
import CloseButton from "../CloseButton/CloseButton";
import NavLinks from "../NavLinks/NavLinks";
import SocalMedia from "../SocalMediaIcon/SocalMedia";
import SideBarIconBox from "../SideBarIconBox/SideBarIconBox";

const SideBar = () => {
  return (
    <Box component="div" className={Styles.sidebar}>
      <Box component='div' sx={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
        <Logo />
        <CloseButton/>
      </Box>
      <Box>
        <SideBarIconBox/>
      </Box>
      <Box component='div' sx={{ mt:7,}}>
        <NavLinks linkType='footer'/>
      </Box>
      <Box component='div' sx={{ mt:5}}>
        <SocalMedia/>
      </Box>
    </Box>
  );
};

export default SideBar;
 