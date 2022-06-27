import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { bgcolor } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  
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

export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [message, setMsg] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/login", {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid container xs={12} sm={8} md={12} component={Paper} elevation={6} square sx={{display:"flex", justifyContent:"center"}}>
          <Grid container xs={1} sm={2} md={3} square mt={6} justifyContent="flex-end">
          <Grid item>
          <Button sx={{ color: 'text.primary', m:4 }}>
            <ArrowBackIcon/>
          </Button>
          </Grid>
        </Grid>
          <Grid container xs={9} m={1} sm={10} md={8} square>
          <Box
            sx={{
              my: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
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
                    name="Harga"
                    label="Harga Produk"
                    type="number"
                    currencySymbol="Rp."
                    color="secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField fullWidth label="Deskripsi*" color="secondary" multiline rows={4}/>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                sx={{my: 2 , mr: 2, p: 1, borderRadius: "10px"}}
              >
               Preview
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{my: 2 ,ml: 2, p: 1,borderRadius: "10px"}}
              >
               Terbitkan
              </Button>
              </Box>
            </Box>
            <Copyright sx={{ bottom: 0}} />
          </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}