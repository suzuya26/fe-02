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
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import jwtDecode from "jwt-decode";

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

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack>
        <Stack>
          <Button sx={{ color: 'text.primary', m: 4 }}>
            <ArrowBackIcon />
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "50%",
          maxWidth: "100%",
          mt: 4
        }}
      >

        <Stack component="form" spacing={3} mt={2} onSubmit={handleSubmit} >
          <TextField
            fullWidth
            label="Nama Produk*"
            name="nama"
            value={namaproduk}
            onChange={(e) => setNamaproduk(e.target.value)}
          />
          <TextField
            fullWidth
            label="Harga Produk*"
            value={hargaproduk}
            onChange={(e) => setHargaproduk(e.target.value)}
          />

          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              label="Amount"
              sx={{ borderRadius: "20px" }}
            />
          </FormControl>
          <TextField
            id=""
            select
            label="Kategori*"
            value={category}
            onChange={handleChange}
            sx={{ textAlign: "left"}}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Deskripsi*"
            multiline
            rows={4}
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
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
                sx={{ m: 2.5 }}
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
          <Box display="flex" justifyContent="space-between">
            <Button
              type="submit"
              variant="outlined"
              sx={{
                width: "100%",
                p: 1,
                mr: 1,
                borderRadius: "12px"
              }}
              color="secondary"
            >
              Preview
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                p: 1,
                ml: 1,
                borderRadius: "12px"
              }}
              color="secondary"
            >
              Terbitkan
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
