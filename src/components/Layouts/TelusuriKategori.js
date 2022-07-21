import React, { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import { Link } from 'react-router-dom'
import ListHomeKategori from "./ListHomeKategori"

const theme = createTheme();

function TelusuriKategori() {
    const { listProductResult, listProductLoading, listProductError } = useSelector((state) => state.productReducer);
    
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("1. use effect component did mount")
        dispatch(getListProduct());
    }, [dispatch])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h6" fontWeight="bold">Telusuri Kategori</Typography>
                <ListHomeKategori/>
                <Box sx={{ flexGrow: 1 , my : 2}}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {listProductResult ? (
                            listProductResult.map((product) => {
                                return (
                                    <Grid item xs={2} sm={2} md={2}>
                                        <Link to={'/halaman-produk/'+product.id} style={{ textDecoration: 'none' }}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    src={product.foto1}
                                                    alt="Produk"

                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {product.namaproduk}
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        {product.kategori}
                                                    </Typography>
                                                    <Typography variant="h6" fontWeight="bold">
                                                        Rp. {product.hargaproduk}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        </Link>
                                    </Grid>
                                );
                            })
                        ) : listProductLoading ? (
                            <p>Loading . . . </p>
                        ) : (
                            <p>{listProductError ? listProductError : "Data Kosong"}</p>
                        )}
                    </Grid>
                </Box>
            </Container>
            <Box textAlign='center'>
            <Link to={'/jual-produk'} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary" startIcon={<AddIcon />} p={2} sx={{
                    borderRadius: "8px", position: "fixed",
                    bottom: 10,
                    zIndex: "modal"
                }} >Jual</Button>
            </Link>
            </Box>

        </ThemeProvider>
    );
}
export default TelusuriKategori;