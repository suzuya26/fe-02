import * as React from "react";
import { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
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
import Stack from "@mui/material/Stack";

const categories = [
  {
    value: "Elektronik",
    label: "Elektronik",
  },
  {
    value: "Kesehatan",
    label: "Kesehatan",
  },
  {
    value: "Kendaraan",
    label: "Kendaraan",
  },
  {
    value: "Hobi",
    label: "Hobi",
  },
];

const Input = styled("input")({
  display: "none",
});

export default function FullWidthTextField() {
  const [category, setCategory] = React.useState("Elektronik");
  const [namaproduk, setNamaproduk] = React.useState("");
  const [hargaproduk, setHargaproduk] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");

  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const [filesatu, setFilesatu] = useState(null);
  const [filedua, setFiledua] = useState(null);
  const [filetiga, setFiletiga] = useState(null);
  const [fileempat, setFileempat] = useState(null);

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const idpenjual = decoded.id;

  async function handleUploadSatu(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("picture", filesatu);

    try {
      const response = await axios.post(
        "https://secondhand-kelompok2.herokuapp.com/api/v1/fotoproduksatu",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Kalo di upload langsung di-server
      console.log(response.data.url);
      console.log(response.data.namafile);
      setUploadedFileName(response.data.namafile);
      setUploadedFileURL(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  async function handleReUploadSatu(e) {
    e.preventDefault();

    const form = new FormData();

    form.append("picture", filesatu);
    form.append("namafilebaru", uploadedFileName);

    try {
      console.log(uploadedFileName);
      const response = await axios({
        method: "post",
        url: "https://secondhand-kelompok2.herokuapp.com/api/v1/refotoproduksatu",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Kalo di upload langsung di-server
      console.log(response.data.url);
      setUploadedFileURL(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  async function handleSubmit(e) {
    console.log("submit data");
    e.preventDefault();
    try {
      await axios.post(
        `https://secondhand-kelompok2.herokuapp.com/api/v1/refotoproduksatu`,
        {
          namaproduk: namaproduk,
          hargaproduk: hargaproduk,
          kategori: category,
          idseller: idpenjual,
          deskripsi: deskripsi,
          foto1: uploadedFileURL,
          namafoto1: uploadedFileName,
          foto2: uploadedFileURL,
          namafoto2: uploadedFileName,
          foto3: uploadedFileURL,
          namafoto3: uploadedFileName,
          foto4: uploadedFileURL,
          namafoto4: uploadedFileName,
        }
      );
      //nanti disini pakai alert untuk logoutnya
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }

  const handleChange = (event) => {
    setCategory(event.target.value);
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
                    <TextField
                      autoComplete="given-name"
                      name="nama"
                      required
                      fullWidth
                      id="userNama"
                      label="Nama Produk"
                      autoFocus
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Harga Produk"
                      name="email"
                      autoComplete="email"
                      type="number"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id=""
                      select
                      label="Pilih Kategory*"
                      value={category}
                      onChange={handleChange}
                      sx={{ textAlign: "left" }}
                      color="secondary"
                    >
                      {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Deskripsi"
                      multiline
                      rows={4}
                      type="string"
                      id="password"
                      color="secondary"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} my={2}>
                    <Box 
                    component="form"
                    onSubmit={handleUploadSatu}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                    <Grid>
                      <Grid item>
                      <Box
                        sx={{
                          ...commonStyles,
                          border: "3px dashed lightgrey",
                          borderRadius: 4,
                          opacity: [0.7, 0.2, 1],
                          "&:hover": {
                            bgcolor: "text.primary",
                            color: "background.paper",
                            opacity: [0.9, 0.8, 0.2],
                          },
                        }}
                      >
                        <label htmlFor="icon-button-file">
                          <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            onChange={(e) => setFilesatu(e.target.files[0])}
                          />
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            sx={{ m: 2 }}
                          >
                            <AddIcon
                              sx={{
                                color: "text.disabled",
                                "&:hover": {
                                  color: "background.paper",
                                },
                              }}
                            />
                          </IconButton>
                        </label>
                      </Box>
                      </Grid>
                      <Grid item>
                      <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            color: "primary",
                            bgcolor: "text.disabled",
                            "&:hover": {
                              bgcolor: "secondary.main",
                            },
                          }}
                        >
                          Upload
                        </Button>
                      </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item display="flex" justifyContent="space-between">
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    sx={{ mr: 2, my: 2, py: 1, borderRadius: "12px" }}
                  >
                    Preview
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={{handleSubmit}}
                    sx={{ ml: 2, my: 2, py: 1, borderRadius: "12px" }}
                  >
                    Terbitkan
                  </Button>
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
