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

const DaftarJualTerjual = () => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const idseller = decoded.id;

  const [selectedIndex, setSelectedIndex] = React.useState(2);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={5}
          columns={{ xs: 4, sm: 12, md: 12 }}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={4}>
            <Box
              sx={{
                borderRadius: "16px",
                borderColor: "grey.500",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <List>
                  <Typography fontWeight="bold" mx={3}>
                    Kategory
                  </Typography>
                  <Link
                    to={"/daftar-jual/"+idseller}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <ListItemButton
                      selected={selectedIndex === 0}
                      onClick={(event) => handleListItemClick(event, 0)}
                    >
                      <IconButton aria-label="category">
                        <CheckBoxOutlineBlankIcon />
                      </IconButton>
                      <ListItemText primary="Semua Produk" />
                      <IconButton edge="end" aria-label="arrow">
                        {" "}
                        <ArrowForwardIosIcon />{" "}
                      </IconButton>
                    </ListItemButton>
                  </Link>

                  <Divider component="li" />
                  <Link
                    to={"/daftar-jual/favorit/"+idseller}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <ListItemButton
                      selected={selectedIndex === 1}
                      onClick={(event) => handleListItemClick(event, 1)}
                    >
                      <IconButton aria-label="favorite">
                        <FavoriteBorderOutlinedIcon />
                      </IconButton>
                      <ListItemText primary="Diminati" />
                      <IconButton edge="end" aria-label="arrow">
                        {" "}
                        <ArrowForwardIosIcon />{" "}
                      </IconButton>
                    </ListItemButton>
                  </Link>

                  <Divider component="li" />
                  <Link
                    to={"/daftar-jual/terjual/"+idseller}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <ListItemButton
                      selected={selectedIndex === 2}
                      onClick={(event) => handleListItemClick(event, 2)}
                    >
                      <IconButton aria-label="money">
                        <AttachMoneyOutlinedIcon />
                      </IconButton>
                      <ListItemText primary="Terjual" />
                      <IconButton edge="end" aria-label="arrow">
                        {" "}
                        <ArrowForwardIosIcon />{" "}
                      </IconButton>
                    </ListItemButton>
                  </Link>
                </List>
              </CardContent>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={4}>
                  <Link
                    to={"/jual-produk"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Box
                      component="form"
                      display="flex"
                      justifyContent="center"
                      sx={{
                        borderRadius: "14px",
                        border: "3px dashed lightgrey",
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          sx={{ p: 14.5 }}
                        >
                          <AddIcon
                            fontSize="large"
                            sx={{
                              color: "text.disabled",
                              "&:hover": {
                                color: "background.paper",
                              },
                            }}
                          />
                        </IconButton>
                      </label>
                    </Box>
                  </Link>
                </Grid>
                {Array.from(Array(8)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ boxShadow: 3, maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          src="https://source.unsplash.com/random"
                          alt="Produk"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Jam Tangan Casio
                          </Typography>
                          <Typography variant="caption">Aksesoris</Typography>
                          <Typography variant="h6" fontWeight="bold">
                            Rp.250.000
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default DaftarJualTerjual;
