import React, { useEffect, useState } from "react";
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
import ListperKategori from './ListPerKategori'
import { useParams } from "react-router-dom";
import axios from "axios";

const theme = createTheme();

function ProdukPerkategori() {
    const [prokat,setProkat] = useState([])
    

    const { category } = useParams();

    useEffect(() => {

        function getProdukPerKategori(){
            axios.get(`https://secondhand-kelompok2.herokuapp.com/api/v1/getprodukbykategori/${category}`).then((response)=>{
                const produkPerKategori = response.data
                setProkat(produkPerKategori)
            }).catch((error) => setProkat(null))
        }
        getProdukPerKategori()
    }, [category])



    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h6" fontWeight="bold">Telusuri Kategori</Typography>
                <ListperKategori/>
                <Box sx={{ flexGrow: 1 , my : 2}}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {
                            prokat.map((product) => {
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
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Container>
            <Box textAlign='center'>
                <Button variant="contained" color="secondary" href="jual-produk" startIcon={<AddIcon />} p={2} sx={{
                    borderRadius: "8px", position: "fixed",
                    bottom: 10,
                    zIndex: "modal"
                }} >Jual</Button>
            </Box>

        </ThemeProvider>
    );
}
export default ProdukPerkategori;