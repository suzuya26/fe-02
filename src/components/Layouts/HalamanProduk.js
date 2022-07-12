import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageProduk from "./ImageProduk";
import { useParams } from "react-router-dom";

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "Justify",
  color: theme.palette.text.secondary,
}));

export default function HalamanProduk() {
  const { id } = useParams();
  const url = `https://secondhand-kelompok2.herokuapp.com/api/v1/getproduk/${id}`;

  const [produk, setProduk] = useState([]);
  const getProdukById = () => {
    //fetch some data
    axios
      .get(`${url}`)
      .then((response) => {
        const produkById = response.data;
        setProduk(produkById);
      })
      .catch((error) => setProduk(null));
  };
  useEffect(()=> getProdukById(),[])
  console.log(produk)
  if(produk === null){
    return (
        <p>produk tidak ditemukan euy</p>
    )
  }   
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
      <Grid
          container
          mt={3}
          rowSpacing={2}
          columnSpacing={5}
          columns={{ xs: 4, sm: 12, md: 12 }}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={8}>
            <Box
              sx={{
                borderRadius: "16px",
                borderColor: "grey.500",
                boxShadow: 3,
              }}
            >
              <ImageProduk />
            </Box>
            <Box
              sx={{
                borderRadius: "16px",
                borderColor: "grey.500",
                boxShadow: 3,
                my: 2,
                px: 5,
                pb: 3,
              }}
            >
              <Typography variant="body1" fontWeight="bold" py={2}>
                {" "}
                Deskripsi
              </Typography>
              <Typography variant="body2" gutterBottom textAlign="justify">
                {produk.deskripsi}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box boxShadow={3} borderRadius="12px">
              <Stack px={4} pt={2}>
                <Typography variant="h6">{produk.namaproduk}</Typography>
                <Typography variant="example">{produk.kategori}</Typography>
                <Typography variant="body1" fontWeight="bold">
                  {produk.hargaproduk}
                </Typography>
              </Stack>
              <Stack m={2} p={2} spacing={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: "14px" }}
                >
                  Terbitkan
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  sx={{ borderRadius: "14px" }}
                >
                  Edit
                </Button>
              </Stack>
            </Box>
            <Box my={2} boxShadow={2} borderRadius="14px">
              <Grid container display="flex">
                <Grid item my={3} ml={2}>
                  <Avatar variant="rounded">
                    <CardMedia
                      component="img"
                      width="60"
                      height="60"
                      src="https://source.unsplash.com/random"
                      alt="green iguana"
                    />
                  </Avatar>
                </Grid>
                <Grid item>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                      Lizard Ranchu
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Lamongan
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );

}
