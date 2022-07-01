import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const theme = createTheme();
export default function DaftarPenawar() {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">
              Tawaran untuk "Nama.produk"
            </Typography>
            <Grid container display="flex" justifyContent="center" xs={12}>
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
            <Typography variant="body1" mt={5}>
              Daftar Penawar
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Card sx={{ maxWidth: 472 }}>
                <Grid container display="flex" >
                  <Grid item m={3}>
                    <Avatar variant="rounded">
                      <CardMedia
                        component="img"
                        width="60"
                        height="60"
                        image="url(https://source.unsplash.com/random)"
                        alt="green iguana"
                      />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <CardContent>
                      <Typography gutterBottom variant="subtitle2" component="div">
                        Lizard Ranchu
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Lamongan
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
              <Grid container>
                <Grid item xs>
                  <Typography variant="body2" mt={3}>
                    Ditawar Rp.200.000,00
                  </Typography>
                </Grid>
                <Grid item ml={2}>
                  <Grid item display="flex" justifyContent="space-between">
                    <Button
                      type="submit"
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      sx={{ px: 5, mr: 0.5, my: 2, borderRadius: "12px", }}
                    >
                      Tolak
                    </Button>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      sx={{ px: 5, ml: 0.5, my: 2, borderRadius: "12px", }}
                    >
                      Terima
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
