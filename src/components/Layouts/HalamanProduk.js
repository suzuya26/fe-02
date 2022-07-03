import * as React from "react";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardMedia from '@mui/material/CardMedia';

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'Justify',
    color: theme.palette.text.secondary,
}));


export default function HalamanProduk() {

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Grid container rowSpacing={2} columnSpacing={5} columns={{ xs: 4, sm: 12, md: 12 }} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid item xs={8}>
                        <Box sx={{ borderRadius: '16px', borderColor: "grey.500", boxShadow: 3 }}>
                            <Item>img</Item>
                            <Item> <Typography variant="body2" gutterBottom>


                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis sollicitudin ullamcorper. Donec vitae dignissim nulla. Suspendisse potenti. Suspendisse ac erat est. Morbi mattis, magna at euismod eleifend, mauris nisl consectetur eros, at eleifend nisl tortor at felis. Donec sem orci, efficitur vitae ligula eu, vulputate ullamcorper libero. Aenean eget laoreet sem. Suspendisse euismod risus tellus, et congue arcu fermentum vel. Nunc interdum pharetra malesuada. Suspendisse potenti. Fusce tincidunt porta ex, ac pellentesque augue ullamcorper ullamcorper. Nam vestibulum nec libero ut condimentum. Nunc elementum erat a consequat volutpat. Maecenas sit amet pharetra arcu, ac blandit est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim sem. Duis porttitor ex erat, vel rutrum nulla aliquam quis. Phasellus vel eros nulla. Donec enim lectus, placerat a sem ac, gravida bibendum metus. Fusce et erat purus. Fusce ac feugiat nibh. Quisque facilisis nisi efficitur, lobortis enim luctus, dignissim urna. Vestibulum accumsan pretium rhoncus. Integer tristique nibh urna, vel pharetra eros cursus sit amet. Nam est neque, pretium a tincidunt ac, vulputate dignissim turpis. Nullam sed pulvinar libero. Aliquam erat volutpat.

                                Curabitur nibh ipsum, rhoncus auctor vestibulum non, semper vel justo. Nullam pulvinar aliquam sem vel hendrerit. Morbi lectus mi, fringilla nec commodo sit amet, porttitor id ex. Aenean vitae convallis leo. Cras sed auctor metus. Morbi sed libero vitae ex tincidunt tempor. Nam ut euismod eros, aliquam ullamcorper turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                                Aenean ultrices varius maximus. Sed at massa justo. Nulla non enim neque. Aenean est mi, scelerisque sed tortor et, pretium dapibus dolor. Curabitur sodales sagittis blandit. In ornare neque quis magna dapibus facilisis. Curabitur facilisis odio vitae massa tristique, a consequat enim eleifend. Pellentesque rhoncus aliquet quam. Quisque eget enim nibh. Donec luctus sem eu augue maximus, at porttitor nisl rhoncus. Duis eu consectetur sem. Ut pulvinar pretium nisi nec consequat. Morbi fermentum commodo massa, ac placerat nisi viverra eu. Sed consequat finibus sem nec molestie. Ut nibh odio, hendrerit eget pulvinar eu, congue facilisis leo.

                                Maecenas consequat, turpis tristique vestibulum convallis, velit magna condimentum mi, sit amet convallis urna orci ac nisi. Vestibulum non faucibus enim. Donec malesuada est mauris, nec pharetra libero suscipit a. Pellentesque est risus, dignissim nec massa ac, pulvinar tincidunt sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque bibendum sodales. Donec id sem elementum, suscipit nisl non, finibus elit. Nullam ut elementum odio, dapibus iaculis elit. Maecenas et est malesuada ipsum fermentum vulputate. Duis eu nisi scelerisque, lobortis elit sed, suscipit mi. Sed scelerisque odio non nisl consequat, vitae gravida mi sollicitudin. Nunc aliquet et nisi at interdum. Duis lacus augue, bibendum eget ipsum id, porta ultrices sem. Etiam tempus sapien non massa lobortis, sit amet tincidunt est pretium. Curabitur quis metus tempus, viverra odio nec, sagittis leo.
                            </Typography></Item>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography variant="h6">Jam Tangan Casio</Typography>
                            <Typography variant="example">Aksesoris</Typography>
                            <Typography variant="body1" fontWeight="bold">Rp.250.000</Typography>
                            <Button fullWidth variant="contained" color="secondary">Terbitkan</Button>
                            <Button fullWidth variant="outlined" color="secondary">Edit</Button>
                        </Item>
                        <Item mt={5}>
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
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}