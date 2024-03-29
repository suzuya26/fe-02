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
import { Link } from "react-router-dom";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Input = styled("input")({
  display: "none",
});

export default function DetailTawaran() {
  const [produk, setProduk] = useState([]);
  const [penawaran, setPenawaran] = useState([]);
  const [sipenawar, setSipenawar] = useState([]);
  const [notifterima, setNotifterima] = useState(false);
  const [notiftolak, setNotiftolak] = useState(false);

  let navigate = useNavigate();

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

  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("xs");

  const handleClickOpen = () => {
    const penawaran_id = penawaran.id;
    axios.post(
      `https://secondhand-kelompok2.herokuapp.com/api/v1/updatepenawaran/${penawaran_id}`,
      {
        statustawar: "diterima",
        idbuyer: sipenawar.id,
        idproduk: produk.id,
      }
    );
    setOpen(true);
  };

  const handleClose = () => {
    navigate("/info-penawar/" + produk.id);
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

  async function handleTolakPenawaran(e) {
    e.preventDefault();
    try {
      const penawaran_id = penawaran.id;
      await axios.post(
        `https://secondhand-kelompok2.herokuapp.com/api/v1/updatepenawaran/${penawaran_id}`,
        {
          statustawar: "ditolak",
          idbuyer: sipenawar.id,
          idproduk: produk.id,
        }
      );
      navigate("/info-penawar/" + produk.id);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }

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
                        ditolak,
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
                        <Button
                          variant="contained"
                          fullWidth
                          color="secondary"
                          sx={{ px: 5, ml: 0.5, my: 1, borderRadius: "20px" }}
                          onClick={handleClickOpen}
                        >
                          Yakin dan Terima
                        </Button>
                        <Dialog
                          fullWidth={fullWidth}
                          maxWidth={maxWidth}
                          open={open}
                          disableBackdropClick
                          borderRadius={50}
                        >
                          <DialogContent>
                            <Typography fontWeight="bold">
                              yeay kamu berhasil mendapatkan harga yang sesuai.
                            </Typography>
                            <DialogContentText variant="caption">
                              Segera hubungi pembeli melalui whatsapp untuk
                              transaksi selanjutnya
                            </DialogContentText>
                            <Box
                              noValidate
                              component="form"
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                m: "auto",
                                width: "fit-content",
                              }}
                            >
                              <Box
                                my={2}
                                sx={{
                                  width: 300,
                                  height: "fit-content",
                                  borderRadius: "10px",
                                  backgroundColor: "grey.300",
                                }}
                              >
                                <Typography mx={11} my={1} fontWeight="bold">
                                  Product Match
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                  <Box my={3} mx={2}>
                                    <Avatar variant="rounded">
                                      <CardMedia
                                        component="img"
                                        width="60"
                                        height="60"
                                        src={sipenawar.profilimg}
                                        alt={sipenawar.namaprofilimg}
                                      />
                                    </Avatar>
                                  </Box>
                                  <Box my={2}>
                                    <Typography
                                      variant="body1"
                                      fontWeight="bold"
                                      component="div"
                                    >
                                      {sipenawar.nama}
                                    </Typography>
                                    <Typography variant="caption">
                                      {sipenawar.kota}
                                    </Typography>
                                  </Box>
                                </Box>

                                <Grid item display="Flex">
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
                                      sx={{ textDecoration: "line-through" }}
                                    >
                                      Rp.{produk.hargaproduk}
                                    </Typography>
                                    <Typography
                                      gutterBottom
                                      variant="subtitle2"
                                      component="div"
                                    >
                                      Ditawar Rp.{penawaran.hargatawar}
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Box>
                              <a
                                href={"https://wa.me/" + sipenawar.nohp}
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  fullWidth
                                  variant="contained"
                                  color="secondary"
                                  sx={{ borderRadius: "15px", p: 1 }}
                                  startIcon={<WhatsAppIcon />}
                                >
                                  Hubungi Via Whatsapp
                                </Button>
                              </a>
                            </Box>
                          </DialogContent>
                          <DialogActions>
                            <IconButton
                              aria-label="close"
                              onClick={handleClose}
                              sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                              }}
                            >
                              <CloseIcon />
                            </IconButton>
                          </DialogActions>
                        </Dialog>
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <></>
                )}
                {notiftolak ? (
                  <Box>
                    <Grid item md>
                      Dengan menekan tombol yakin penawaran ini akan ditolak,{" "}
                      <br />
                      apa kamu yakin untuk melanjutkannya?
                    </Grid>
                    <Grid item md>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={handleNotiftolak}
                        sx={{ px: 5, mr: 0.5, my: 1, borderRadius: "20px" }}
                      >
                        Tidak
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleTolakPenawaran}
                        sx={{ px: 5, mr: 0.5, my: 1, borderRadius: "20px" }}
                      >
                        Yakin dan Tolak
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
