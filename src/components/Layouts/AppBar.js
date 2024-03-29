import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import jwtDecode from "jwt-decode";
import Notif from "./Notif";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentNotif } from "../../actions/totalnotifAction";
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "secondary",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Nav() {
  const { listTotalNotifResult, listTotalNotifLoading, listTotalNotifError } =
    useSelector((state) => state.totalnotifReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1. use effect component did mount");
    dispatch(getCurrentNotif());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleWebMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = (e) => {
    console.log("kliked");
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload();
  };

  // //nganu token
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><PermIdentityIcon />{decoded.nama}</MenuItem>
      <Link to={'/daftar-jual/' + decoded.id} style={{ color: 'inherit', textDecoration: 'none' }}>
        <MenuItem ><StorefrontIcon />Jualanku</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}><LogoutIcon />Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          {listTotalNotifResult ? (
            <Badge badgeContent={listTotalNotifResult.total} color="error">
              <Notif />
            </Badge>
          ) : listTotalNotifLoading ? (
            <Badge badgeContent={0} color="error">
            </Badge>
          ) : (
            <Badge badgeContent={0} color="error">
              <Notif />
            </Badge>
          )}
        </IconButton>
        <p>Notifications</p>
        <Box width="20px"/>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
      <Box width="10px"/>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Box width="7px"/>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, boxShadow: 2 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link to="/">
            <Box
              sx={{
                width: 50,
                height: 20,
                backgroundColor: "secondary.main",
              }}
            />
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              {listTotalNotifResult ? (
                <Badge badgeContent={listTotalNotifResult.total} color="error">
                  <Notif />
                </Badge>
              ) : listTotalNotifLoading ? (
                <Badge badgeContent={0} color="error">
                </Badge>
              ) : (
                <Badge badgeContent={0} color="error">
                  <Notif />
                </Badge>
              )}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
