import React, { useEffect } from "react";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Modal from "./Modal";
import { useParams } from "react-router-dom";

const Input = styled("input")({
  display: "none",
});

export default function DetailTawaran() {
  const [produk, setProduk] = useState([]);
  const [penawaran, setPenawaran] = useState([]);
  const [sipenawar, setSipenawar] = useState([]);
  const [notifterima, setNotifterima] = useState(false);
  const [notiftolak, setNotiftolak] = useState(false);

  const { zaparam } = useParams();
  const arrayzaparam = zaparam.split("--");
  const idproduk = arrayzaparam[0];
  const idtawaran = arrayzaparam[1];
  const today = Date.now();

  useEffect(() => {
    const url = `https://secondhand-kelompok2.herokuapp.com/api/v1/getproduk/${idproduk}`;
    function getProdukById() {
      //fetch some data
      axios
        .get(`${url}`)
        .then((response) => {
          const produkById = response.data;
          const si_penjual = response.data.user;
          setProduk(produkById);
        })
        .catch((error) => setProduk(null));
    }
    function getListPenawaran() {
      axios
        .get(
          `https://secondhand-kelompok2.herokuapp.com/api/v1/getpenawaranbyid/${idtawaran}`
        )
        .then((response) => {
          const listPenawaran = response.data;
          const listsipenawar = response.data.pembeli;
          console.log(listPenawaran);
          setPenawaran(listPenawaran);
          setSipenawar(listsipenawar);
        })
        .catch((error) => setPenawaran(null));
    }

    getProdukById();
    getListPenawaran();
  }, [idproduk]);

  const [category, setCategory] = React.useState("E");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNotifterima = (e) => {
    e.preventDefault();
    setNotifterima(!notifterima);
    setNotiftolak(false);
  };
  const handleNotiftolak = (e) => {
    e.preventDefault();
    setNotiftolak(!notiftolak);
    setNotifterima(false);
  };
  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
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
  let navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <CssBaseline />
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={12}
          md={12}
          component={Paper}
        >
          <Grid className="G1" item xs={12} md={3} square></Grid>
          <Grid className="G2" item xs={12} md={6} square>
            <Box mt={2}>
              <Button
                sx={{ color: "text.primary" }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon />
              </Button>
              <Typography variant="h4" textAlign="center">
                Tawaran untuk {produk.namaproduk}
              </Typography>
            </Box>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid container display="flex" justifyContent="center" xs={12}>
                <Box noValidate sx={{ width: 450, mt: 1 }}>
                  <Grid>
                    <Box sx={{ borderBottom: 2, borderColor: "grey.500" }}>
                      <Grid
                        container
                        sx={{ Width: "800px" }}
                        display="Flex"
                        justifyContent="Space-between"
                      >
                        <Grid
                          item
                          display="Flex"
                          justifyContent="Space-between"
                        >
                          <Box my={3} mx={2}>
                            <Avatar variant="rounded">
                              <CardMedia
                                component="img"
                                width="60"
                                height="60"
                                src={produk.foto1}
                                alt={produk.namafoto1}
                              />
                            </Avatar>
                          </Box>
                          <Box my={2}>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Penawaran Produk
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              component="div"
                            >
                              {produk.namaproduk}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="subtitle2"
                              component="div"
                            >
                              {produk.hargaproduk}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="caption"
                              component="div"
                            >
                              Update : {Date(produk.updatedAt)}
                            </Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </Grid>

              <Box noValidate sx={{ width: 450, my: 1 }}>
                <Card sx={{ borderRadius: "15px" }}>
                  <Grid container display="flex">
                    <Grid item m={3}>
                      <Avatar variant="rounded">
                        <CardMedia
                          component="img"
                          width="60"
                          height="60"
                          src={sipenawar.profilimg}
                          alt={sipenawar.namaprofilimg}
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
                          {sipenawar.nama}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {sipenawar.kota}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
                <Grid container>
                  <Grid item xs>
                    <Typography variant="body2" mt={3}>
                      Ditawar Rp {penawaran.hargatawar}
                    </Typography>
                  </Grid>
                  <Grid item ml={2}>
                    <Grid item display="flex" justifyContent="space-between">
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={handleNotiftolak}
                        sx={{ px: 5, mr: 0.5, my: 1, borderRadius: "20px" }}
                      >
                        Tolak
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleNotifterima}
                        sx={{ px: 5, mr: 0.5, my: 1, borderRadius: "20px" }}
                      >
                        Terima
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                {notifterima ? (
                  <Box>
                    <Grid>
                      <Grid item md>
                        Dengan menerima tawaran ini semua penawaran lain akan
                        dihapus,
                        <br />
                        apakah kamu yakin untuk melanjutkan?
                      </Grid>
                      <Grid item md>
                        <Button
                          fullWidth
                          variant="outlined"
                          color="secondary"
                          onClick={handleNotifterima}
                          sx={{ px: 5, mr: 0.5, my: 1, borderRadius: "20px" }}
                        >
                          Tidak
                        </Button>
                        <Modal />
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <></>
                )}
                {notiftolak ? (
                  <Box>
                    <Grid item md>
                      Dengan menekan menolak tawaran ini record mengenai
                      tawarannya akan dihapus <br />
                      apa kamu yakin untuk melanjutkannya?
                    </Grid>
                    <Grid item md>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={handleNotifterima}
                        sx={{ px: 5, mr: 0.5, my: 1, borderRadius: "20px" }}
                      >
                        Tidak
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleNotifterima}
                        sx={{ px: 5, mr: 0.5, my: 1, borderRadius: "20px" }}
                      >
                        Yakin
                      </Button>
                    </Grid>
                  </Box>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid className="G3" item xs={12} md={3} square></Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
