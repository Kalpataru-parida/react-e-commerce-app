import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import AuthContext from "../../Context/Auth.context";
import { useNavigate } from "react-router-dom";

const style = {
  color: "white",
  //     backgroundColor: 'white',
  //     '&:hover': {
  //       backgroundColor: '#1976D2',
  //       color: 'white',
  // }
};

function Header() {
  const { isLogin } = useContext(AuthContext);
  const { logIn } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ShopiKart
            <IconButton
            size="large"
            edge="start"
            color="#F5E70D"
            sx={{ mr: 2, left: "90%" }}
          >
            <ShoppingBagIcon/>
          </IconButton>
          </Typography>

          {/* {!isLogin && <Stack spacing={2} direction="row">
      <Button onClick={logIn} variant="outlined" sx={style}>Sign In</Button>
    </Stack>}
    {isLogin && <Stack spacing={2} direction="row">
      <Button onClick={logOut} variant="outlined" sx={style}>Sign Out</Button>
    </Stack>} */}
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </Box>
  );
}

export default Header;
