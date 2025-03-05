import CloseIcon from "@mui/icons-material/Close";
import { ThemeContexts } from "../../App";
import { useContext } from "react";

const CloseButton = () => {
  const { setIsSideBar } = useContext(ThemeContexts);
  return (
    <>
      <CloseIcon
        sx={{ fontSize: "1.5rem",color:'accent.primary' }}
        onClick={() => setIsSideBar(false)}
      />
    </>
  );
};

export default CloseButton;
