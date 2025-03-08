import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordIcon = ({ isVisible }) => {
  return isVisible ? <RemoveRedEyeIcon sx={{ color: 'icon.main' }} /> : <VisibilityOffIcon sx={{ color: 'icon.main' }} />;
};

export default PasswordIcon;
