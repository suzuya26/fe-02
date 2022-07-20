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
import jwtDecode from "jwt-decode";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import TextField from "@mui/material/TextField";
import { autoPlay } from "react-swipeable-views-utils";

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "Justify",
  color: theme.palette.text.secondary,
}));

export default function HalamanProduk() {
  const [produk, setProduk] = useState([]);
  const [penjual, setPenjual] = useState([]);
  const [galery, setGalery] = useState([]);
  const [formtawar, setFormtawar] = useState(false);
  const [role, setRole] = useState("ngebeli");
  const [hargatawar, setHargatawar] = useState("");
  const [chektawar, setChektawar] = useState(false);

  const { id } = useParams();
  console.log(id);

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  useEffect(() => {
    const url = `https://secondhand-kelompok2.herokuapp.com/api/v1/getproduk/${id}`;
    function getProdukById() {
      //fetch some data
      axios
        .get(`${url}`)
        .then((response) => {
          const produkById = response.data;
          const si_penjual = response.data.user;
          setProduk(produkById);
          setPenjual(si_penjual);
        })
        .catch((error) => setProduk(null));
    }
    function chekRole() {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const idpenjual = decoded.id;
      if (produk.idseller === idpenjual) {
        return setRole(true);
      }
      setRole(false);
    }
    function chekTawar() {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const idpenawar = decoded.id;
      const kondisi = `${idpenawar}--${id}`;
      console.log(kondisi)

      axios
        .get(
          `https://secondhand-kelompok2.herokuapp.com/api/v1/cheksudahditawar/${kondisi}`
        )
        .then((response) => {
          if (response.data === "sudah ditawar") {
            setChektawar(true);
          }
        });
    }

    getProdukById();
    chekRole();
    chekTawar();
  }, [id, produk.id, produk.idseller]);

  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleFormtawar = (e) => {
    e.preventDefault();
    setFormtawar(!formtawar);
  };

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const idpenawar = decoded.id;

  async function handleSubmitTawar(e) {
    console.log("kirim tawar");
    e.preventDefault();
    try {
      await axios.post(
        `https://secondhand-kelompok2.herokuapp.com/api/v1/createpenawaran`,
        {
          idbuyer: idpenawar,
          idproduk: produk.id,
          namaproduk: produk.namaproduk,
          hargaproduk: produk.hargaproduk,
          idseller: produk.idseller,
          hargatawar: hargatawar,
          statustawar: "menawar",
        }
      );
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }

  if (produk === null && penjual === null) {
    return <p>produk tidak ditemukan euy</p>;
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
              <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "background.default",
                  }}
                ></Paper>
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            height: 255,
                            display: "block",
                            maxWidth: 400,
                            overflow: "hidden",
                            width: "100%",
                          }}
                          src={step.imgPath}
                          alt={step.label}
                        />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Box>
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
              {role ? (
                <Stack m={2} p={2} spacing={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: "14px" }}
                  >
                    Edit
                  </Button>
                </Stack>
              ) : (
                <Stack m={2} p={2} spacing={2}>
                  {!chektawar ? (
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      onClick={handleFormtawar}
                      sx={{ borderRadius: "14px" }}
                    >
                      Tawar
                    </Button>
                  ) : (
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      sx={{ borderRadius: "14px" }}
                      disabled
                    >
                      Sudah Ditawar
                    </Button>
                  )}
                  {formtawar ? (
                    <Box component="form" onSubmit={handleSubmitTawar}>
                      <TextField
                        fullWidth
                        label="Harga Tawar*"
                        name="hargatawar"
                        value={hargatawar}
                        onChange={(e) => setHargatawar(e.target.value)}
                      />
                      <Button
                        fullWidth
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        sx={{ borderRadius: "14px", mt: 2 }}
                      >
                        Kirim
                      </Button>
                    </Box>
                  ) : (
                    <></>
                  )}
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    sx={{ borderRadius: "14px" }}
                  >
                    Beli Langsung
                  </Button>
                </Stack>
              )}
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
                      {penjual.nama}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {penjual.kota}
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
