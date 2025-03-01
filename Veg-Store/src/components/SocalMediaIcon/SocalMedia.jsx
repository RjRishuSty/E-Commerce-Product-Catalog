// import ReactSt from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
const SocalMedia = () => {
  return (
    <>
      <FacebookOutlinedIcon
        color="inherit"
        sx={{ mr: 5, color: "white", cursor: "pointer" }}
        onMouseEnter={(e)=>e.target.style.color="#ffc307"}
        onMouseLeave={(e)=>e.target.style.color="white"}
      />
      <InstagramIcon
        color="inherit"
        sx={{ mr: 5, color: "white", cursor: "pointer" }}
        onMouseEnter={(e)=>e.target.style.color="#ffc307"}
        onMouseLeave={(e)=>e.target.style.color="white"}
      />
      <GitHubIcon
        color="inherit"
        sx={{ mr: 5, color: "white", cursor: "pointer" }}
        onMouseEnter={(e)=>e.target.style.color="#ffc307"}
        onMouseLeave={(e)=>e.target.style.color="white"}
      />
      <XIcon
        color="inherit"
        sx={{ mr: 5, color: "white", cursor: "pointer" }}
        onMouseEnter={(e)=>e.target.style.color="#ffc307"}
        onMouseLeave={(e)=>e.target.style.color="white"}
      />
    </>
  );
};

export default SocalMedia;
