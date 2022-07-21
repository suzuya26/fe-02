import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ListCard from "./CardProduct";
import AddIcon from "@mui/icons-material/Add";
import { CardActionArea } from "@mui/material";
import Produk from "./save/InfoProduk";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../actions/userAction";
import DaftarJualSemua from "./DaftarJualSemua";

const theme = createTheme();

const Input = styled("input")({
  display: "none",
});

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

const DaftarJual = () => {
  const { listUserResult, listUserLoading, listUserError } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. use effect component did mount");
    dispatch(getCurrentUser());
  }, [dispatch]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Typography variant="h4" fontWeight="Bold" my={3}>
          Daftar Jual
        </Typography>
        <Grid Container spacing={2} my={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "16px",
              boxShadow: 2,
            }}
          >
            {listUserResult ? (
              <Box sx={{ display: "flex" }}>
                <Box my={3} mx={2}>
                  <Avatar variant="rounded">
                    <CardMedia
                      component="img"
                      width="60"
                      height="60"
                      src={listUserResult.profilimg}
                      alt="green iguana"
                    />
                  </Avatar>
                </Box>
                <Box my={2}>
                  <Typography variant="body1" fontWeight="bold" component="div">
                    {listUserResult.nama}
                  </Typography>
                  <Typography variant="caption">
                    {listUserResult.kota}
                  </Typography>
                </Box>
              </Box>
            ) : listUserLoading ? (
              <Box sx={{ display: "flex" }}>
                <Box my={3} mx={2}>
                  <Avatar variant="rounded">
                    <CardMedia
                      component="img"
                      width="60"
                      height="60"
                      src="https://source.unsplash.com/random"
                      alt="green iguana"
                    />
                  </Avatar>
                </Box>
                <Box my={2}>
                  <Typography variant="body1" fontWeight="bold" component="div">
                    Loading...
                  </Typography>
                  <Typography variant="caption">Loading...</Typography>
                </Box>
              </Box>
            ) : listUserError ? (
              <Box sx={{ display: "flex" }}>
                <Box my={3} mx={2}>
                  <Avatar variant="rounded">
                    <CardMedia
                      component="img"
                      width="60"
                      height="60"
                      src="https://source.unsplash.com/random"
                      alt="green iguana"
                    />
                  </Avatar>
                </Box>
                <Box my={2}>
                  <Typography variant="body1" fontWeight="bold" component="div">
                    Error...
                  </Typography>
                  <Typography variant="caption">Error...</Typography>
                </Box>
              </Box>
            ) : (
              <p>ntahla</p>
            )}
            <Box m={3}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "8px" }}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default DaftarJual;
