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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import jwtDecode from "jwt-decode";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from 'react-router-dom';

const Input = styled("input")({
  display: "none",
});



export default function FullWidthTextField() {
  const [category, setCategory] = React.useState('');
  const [namaproduk, setNamaproduk] = React.useState("");
  const [hargaproduk, setHargaproduk] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(()=>{
    function getKategori() {
      axios.get(`https://secondhand-kelompok2.herokuapp.com/api/v1/getkategori`)
      .then((response)=>{
        const kategorih = response.data
        console.log(kategorih)
        setCategories(kategorih)
      })
      .catch((error)=>setCategories(null))
    }
    getKategori()
  },[])

  const [uploadedFileURLsatu, setUploadedFileURLsatu] = useState(null);
  const [uploadedFileNamesatu, setUploadedFileNamesatu] = useState(null);
  const [uploadedFileURLdua, setUploadedFileURLdua] = useState(null);
  const [uploadedFileURLtiga, setUploadedFileURLtiga] = useState(null);
  const [uploadedFileURLempat, setUploadedFileURLempat] = useState(null);
  const [uploadedFileNamedua, setUploadedFileNamedua] = useState(null);
  const [uploadedFileNametiga, setUploadedFileNametiga] = useState(null);
  const [uploadedFileNameempat, setUploadedFileNameempat] = useState(null);

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
      setUploadedFileNamesatu(response.data.namafile);
      setUploadedFileURLsatu(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  async function handleReUploadSatu(e) {
    e.preventDefault();

    const form = new FormData();

    form.append("picture", filesatu);
    form.append("namafilebaru", uploadedFileNamesatu);

    try {
      console.log(uploadedFileNamesatu);
      const response = await axios({
        method: "post",
        url: "https://secondhand-kelompok2.herokuapp.com/api/v1/refotoproduksatu",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Kalo di upload langsung di-server
      console.log(response.data.url);
      setUploadedFileURLsatu(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  async function handleUploadDua(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("picture", filedua);

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
      setUploadedFileNamedua(response.data.namafile);
      setUploadedFileURLdua(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }
  async function handleUploadtiga(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("picture", filetiga);

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
      setUploadedFileNametiga(response.data.namafile);
      setUploadedFileURLtiga(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }
  async function handleUploadempat(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("picture", fileempat);

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
      setUploadedFileNameempat(response.data.namafile);
      setUploadedFileURLempat(response.data.url);
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
        `https://secondhand-kelompok2.herokuapp.com/api/v1/createproduk`,
        {
          namaproduk: namaproduk,
          hargaproduk: hargaproduk,
          kategori: category,
          idseller: idpenjual,
          deskripsi: deskripsi,
          foto1: uploadedFileURLsatu,
          namafoto1: uploadedFileNamesatu,
          foto2: uploadedFileURLdua,
          namafoto2: uploadedFileNamedua,
          foto3: uploadedFileURLtiga,
          namafoto3: uploadedFileNametiga,
          foto4: uploadedFileURLempat,
          namafoto4: uploadedFileNameempat,
        }
      );
      navigate('/');
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
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        <Stack>
          <Button sx={{ color: "text.primary", m: 4 }}>
            <ArrowBackIcon />
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "50%",
          maxWidth: "100%",
          mt: 4,
        }}
      >
        <Stack component="form" spacing={3} mt={2} onSubmit={handleSubmit}>
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
          <TextField
            id=""
            select
            label="Kategori*"
            value={category}
            onChange={handleChange}
            sx={{ textAlign: "left" }}
          >
            {categories.map((option) => (
              <MenuItem key={option.id} value={option.namakategori}>
                {option.namakategori}
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
          <Box display="flex" justifyContent="space-between">
            {uploadedFileURLsatu ? (
            <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              p: 1,
              ml: 1,
              borderRadius: "12px",
            }}
            color="secondary"
          >
            Terbitkan
          </Button>
            ):(
              <></>
            )}
          </Box>
        </Stack>
        <p sx={{my:1}}>Upload Gambar disini :</p>
        <Grid container justifyContent="space-around">
          
          {!uploadedFileURLsatu ? (
            <Grid item xs={12} md={6} lg={3}>
              <Box component="form" onSubmit={handleUploadSatu}>
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
                {filesatu ? (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "50%",
                      p: 1,
                      ml: 1,
                      borderRadius: "12px",
                    }}
                    color="secondary"
                  >
                    Upload
                  </Button>
                ) : (
                  <></>
                )}
              </Box>
            </Grid>
          ) : (
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt="Uploaded User Pic"
                  image={uploadedFileURLsatu}
                  width="140"
                ></CardMedia>
              </Card>
            </Grid>
          )}
          {uploadedFileNamesatu ? (
            !uploadedFileNamedua ? (
              <Grid item xs={12} md={6} lg={3}>
              <Box component="form" onSubmit={handleUploadDua}>
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
                      onChange={(e) => setFiledua(e.target.files[0])}
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
                {filedua ? (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "50%",
                      p: 1,
                      ml: 1,
                      borderRadius: "12px",
                    }}
                    color="secondary"
                  >
                    Upload
                  </Button>
                ) : (
                  <></>
                )}
              </Box>
            </Grid>
            ) : (
              <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt="Uploaded User Pic"
                  image={uploadedFileURLdua}
                  width="140"
                ></CardMedia>
              </Card>
            </Grid>
            )

          ) : (
            <></>
          )}
          {uploadedFileNamedua ? (
            !uploadedFileNametiga ? (
              <Grid item xs={12} md={6} lg={3}>
              <Box component="form" onSubmit={handleUploadtiga}>
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
                      onChange={(e) => setFiletiga(e.target.files[0])}
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
                {filetiga ? (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "50%",
                      p: 1,
                      ml: 1,
                      borderRadius: "12px",
                    }}
                    color="secondary"
                  >
                    Upload
                  </Button>
                ) : (
                  <></>
                )}
              </Box>
            </Grid>
            ) : (
              <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt="Uploaded User Pic"
                  image={uploadedFileURLtiga}
                  width="140"
                ></CardMedia>
              </Card>
            </Grid>
            )

          ) : (
            <></>
          )}
          {uploadedFileNametiga ? (
            !uploadedFileNameempat ? (
              <Grid item xs={12} md={6} lg={3}>
              <Box component="form" onSubmit={handleUploadempat}>
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
                      onChange={(e) => setFileempat(e.target.files[0])}
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
                {fileempat ? (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "50%",
                      p: 1,
                      ml: 1,
                      borderRadius: "12px",
                    }}
                    color="secondary"
                  >
                    Upload
                  </Button>
                ) : (
                  <></>
                )}
              </Box>
            </Grid>
            ) : (
              <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt="Uploaded User Pic"
                  image={uploadedFileURLempat}
                  width="140"
                ></CardMedia>
              </Card>
            </Grid>
            )

          ) : (
            <></>
          )}
        </Grid>
      </Stack>
    </Container>
  );
}
