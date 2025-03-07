// import ReactSt from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContexts } from "../../App";

const SocalMedia = ({ componentType }) => {
  const { loginWithRedirect } = useContext(ThemeContexts);
  switch (componentType) {
    case "footer":
      return (
        <>
          <FacebookOutlinedIcon
            sx={{ mr: 5, cursor: "pointer", color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          />
          <InstagramIcon
            sx={{ mr: 5, cursor: "pointer", color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          />
          <GitHubIcon
            sx={{ mr: 5, cursor: "pointer", color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          />
          <XIcon
            sx={{ mr: 5, cursor: "pointer", color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "#ffc307")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          />
        </>
      );
    case "login":
      return (
          <Button
            onClick={(e) => loginWithRedirect()}
            startIcon={<GoogleIcon size="large" sx={{color: "icon.main" }} />}
            variant="text"
            sx={{textTransform:'capitalize',letterSpacing:'0.5px', color: "text.dark", cursor:'pointer'}}
            size="large"
          >
              Login with google
          </Button>
      );

    default:
      <></>;
  }
  return;
};

export default SocalMedia;
