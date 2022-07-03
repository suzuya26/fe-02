import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardMedia from '@mui/material/CardMedia';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const theme = createTheme();

const DaftarJual = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Typography variant="h4" fontWeight="Bold" my={2}>Daftar Jual</Typography>
                <Grid Container spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', border: 2, borderRadius: '16px', borderColor: "grey.500"}}>
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
                                    Lizard Ranchu
                                </Typography>
                                <Typography variant="caption">
                                    Lamongan
                                </Typography>
                            </Box>
                        </Box>
                        <Box m={3}>
                            <Button variant="outlined" color="secondary" sx={{ borderRadius: '8px' }}>Edit</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid Container mt={2}>
                    <Grid item xs={4} sm={12} sx={{border: 2, borderRadius: '16px', borderColor: "grey.500" }}>
                        <Box >
                            <CardContent>
                                <List>
                                    <Typography fontWeight="bold" mx={3}>Kategory</Typography>
                                    <ListItemButton
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}
                                    >
                                        <IconButton aria-label="category">
                                            < CheckBoxOutlineBlankIcon/>
                                        </IconButton>
                                        <ListItemText primary="Semua Produk" />
                                        <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton>
                                    </ListItemButton>
                                    <Divider component="li" />
                                    <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} >
                                        <IconButton aria-label="favorite">
                                            <FavoriteBorderOutlinedIcon />
                                        </IconButton>
                                        <ListItemText primary="Diminati" />
                                        <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton>
                                    </ListItemButton>
                                    <Divider component="li" />
                                    <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} >
                                        <IconButton aria-label="money">
                                            <AttachMoneyOutlinedIcon />
                                        </IconButton>
                                        <ListItemText primary="Terjual" />
                                        <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton>
                                    </ListItemButton>
                                </List>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={12} sx={{ maxWidth: 800, border: 2, borderRadius: '16px', color: "grey.500" }}>
                        <Box ></Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default DaftarJual;