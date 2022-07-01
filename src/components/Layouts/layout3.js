import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

const Input = styled("input")({
    display: "none"
});


export default function FullWidthTextField() {
    const [category, setCategory] = React.useState("E");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',
    };


    function Copyright(props) {
        return (
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                {...props}
            >
                {"Copyright © "}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh", flexDirection: { xs: "column-reverse", md: "row" } }}>
                <CssBaseline />
                <Grid container sx={{ display: "flex", justifyContent: "center" }} xs={12} sm={12} md={12} component={Paper}>
                    <Grid className="G1" item xs={12} md={3} square></Grid>
                    <Grid className="G2" item xs={12} md={6} square>
                        <Box mt={2}>
                            <Button sx={{ color: 'text.primary' }}>
                                <ArrowBackIcon />
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                my: 6,
                                mx: 2,
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Box noValidate sx={{ mt: 1 }}>
                                            <Grid sx={{ maxWidth: 472 }}>
                                                <Box sx={{ borderBottom: 2, borderColor: 'grey.500', borderRadius: "7px" }}>
                                                    <Grid container sx={{ Width: "800px" }} display="Flex" justifyContent="Space-between">
                                                        <Grid item display="Flex" justifyContent="Space-between">
                                                            <Box my={3} mx={2}>
                                                                <Avatar variant="rounded">
                                                                    <CardMedia
                                                                        component="img"
                                                                        width="60"
                                                                        height="60"
                                                                        image="url(https://source.unsplash.com/random)"
                                                                        alt="green iguana"
                                                                    />
                                                                </Avatar>
                                                            </Box>
                                                            <Box my={2}>
                                                                <Typography variant="caption" color="text.secondary">
                                                                    Penawaran Produk
                                                                </Typography>
                                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                                    Jam tangan Casio
                                                                </Typography>
                                                                <Typography gutterBottom variant="subtitle2" component="div">
                                                                    Rp.250.000
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardContent>
                                                                <Typography gutterBottom variant="caption" component="div">
                                                                    20 April, 01:12
                                                                </Typography>
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    </Box>
                                </Grid>
                                <Grid item display="flex" justifyContent="space-between">
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className="G3" item xs={12} md={3} square></Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
