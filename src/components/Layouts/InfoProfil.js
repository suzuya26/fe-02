import * as React from "react";
import { useState, Fragment } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
      console.log(response.data.url)
      setUploadedFileURL(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  async function handleSubmit(e) {
    console.log("submit data")
    e.preventDefault();
    try {
      console.log(nama,kota,alamat,nohp,uploadedFileURL)
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

  return (
  <Container sx={{ display: 'flex', justifyContent: 'center'}}>
    <Stack>
       <Stack>
         <Button sx={{ color: 'text.primary', m:4 }}>
          <ArrowBackIcon/>
          </Button>
        </Stack>
    </Stack>
    <Stack
      sx={{
        width: "50%",
        maxWidth: "100%",
        mt:4
      }}
    >
      <Box>
        {!uploadedFileURL?(      
        <Box
        component="form"
        onSubmit={handleUpload}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack>
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
        <Button type="submit" variant="contained" sx={{  borderRadius: "12px",color:"primary",bgcolor: "text.disabled","&:hover": {
         bgcolor: 'secondary.main'
        } }}>
          upload
        </Button>
        </Stack>
      </Box>):(<img src={uploadedFileURL} alt="Uploaded URL" />)}
      </Box>

      <Stack component="form" spacing={3} mt={2} onSubmit={handleSubmit} >
        <TextField
          fullWidth
          label="Nama*"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <TextField
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
        <TextField
          fullWidth
          label="Alamat*"
          multiline
          rows={4}
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <TextField
          fullWidth
          label="No Handphone*"
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              p: 1,
              borderRadius: "12px",
              color: "background.paper",
              "&:hover": {
                color: "secondary.main",
                bgcolor: "text.primary",
              },
            }}
            color="secondary"
          >
            Simpan
          </Button>
        </Box>
      </Stack>
    </Stack>
    </Container>
  );
}
