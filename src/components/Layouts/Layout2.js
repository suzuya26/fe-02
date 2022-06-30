import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const kotas = [
    {
      value: "LMG",
      label: "Lamongan",
    },
    {
      value: "MJK",
      label: "Mojokerto",
    },
    {
      value: "SBY",
      label: "Surabaya",
    },
    {
      value: "MDR",
      label: "Madura",
    },
  ];
  
  const Input = styled("input")({
    display: "none",
  });
  
  export default function FullWidthTextField() {
    const [kota, setKota] = React.useState("SBY");
    const [file, setFile] = useState(null);
    const [uploadedFileURL, setUploadedFileURL] = useState(null);
    const [uploadedFileName, setUploadedFileName] = useState(null);
  
    const [nama, setNama] = useState("");
    // const [kota, setKota] = useState("");
    const [alamat, setAlamat] = useState("");
    const [nohp, setNohp] = useState("");
  
    async function handleUpload(e) {
      e.preventDefault();
  
      const form = new FormData();
  
      form.append("picture", file);
  
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/updatefotouser",
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
        setUploadedFileName(response.data.namafile)
        setUploadedFileURL(response.data.url);
      } catch (err) {
        console.log(err);
        console.log(err?.responses?.data);
      }
    }
    async function handleReUpload(e) {
      e.preventDefault();
  
      const form = new FormData();
  
      form.append("picture", file);
      form.append("namafilebaru", uploadedFileName);
  
      try {
        console.log(uploadedFileName)
        // const response = await axios.post(
        //   "http://localhost:8000/api/v1/reupdatefotouser",
        //   form,
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   },
        // );
        const response = await axios({
          method: "post",
          url :"http://localhost:8000/api/v1/reupdatefotouser",
          data : form,
          headers: { "Content-Type": "multipart/form-data" },
        })
  
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
        console.log(nama, kota, alamat, nohp, uploadedFileURL);
        await axios.post("http://localhost:8000/api/v1/updateinfo/1", {
          nama: nama,
          kota: kota,
          alamat: alamat,
          nohp: nohp,
          profilimg: uploadedFileURL,
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      }
    }
  
    const handleChange = (event) => {
      setKota(event.target.value);
    };
  
    const commonStyles = {
      bgcolor: "background.paper",
      borderColor: "text.primary",
      m: 1,
      border: 1,
      width: "5rem",
      height: "5rem",
    };

const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh", flexDirection: { xs: "column-reverse", md: "row"}}}>
        <CssBaseline />
        <Grid container sx={{display: "flex", justifyContent: "center"}} xs={12} sm={12} md={12} component={Paper}>
        <Grid className="G1" item xs={12} md={3} square></Grid>
        <Grid  className="G2" item xs={12} md={6} square>
        <Box mt={2}>
            <Button sx={{ color: 'text.primary' }}>
              <ArrowBackIcon/>
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
             <Box
            sx={{
            ...commonStyles,
            borderRadius: 4,
            backgroundColor: "secondary.main",
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
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      sx={{ m: 2.5 }}
                    >
                      <PhotoCamera
                        sx={{
                          color: "background.paper",
                          "&:hover": {
                            color: "dark",
                            bgcolor: "text.primary",
                          },
                        }}
                      />
                    </IconButton>
                  </label>
                </Box>
                <Box>
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
                </Box>
            <Box component="form" noValidate sx={{ mt: 3 }}  onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nama*"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    autoFocus
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                fullWidth
                id=""
                select
                label="Kota*"
                kota="kota"
                value={kota}
                onChange={handleChange}
                sx={{ textAlign: "left" }}
            >
            {kotas.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
                </Grid>
                <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Alamat*"
                  multiline
                  rows={4}
                  value={alamat}
                  color="secondary"
                  onChange={(e) => setAlamat(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="No Handphone*"
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                    color="secondary"
                  />
                </Grid>
              </Grid>
              <Grid item display="flex" justifyContent="space-between">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                p: 1,
                mt: 3,
                borderRadius: "12px",
                }}
            >
              Simpan
            </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid  className="G3" item xs={12} md={3} square></Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
