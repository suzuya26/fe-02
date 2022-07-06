import * as React from "react";
import { useState , useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
        Secondhand
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

async function doLogin ({ email, password }) {
  const response = await axios.post("https://secondhand-kelompok2.herokuapp.com/api/v1/login", {
    email: email,
    password: password,
  });
  const data = await response.data
  return data.token;
};
export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
    .then((token) => localStorage.setItem("token", token))
    .catch((err) => console.log(err.message))
    .finally(() => setIsLoading(false));
  };

  return (
    <React.Fragment>
      {!isLoggedIn?(
            <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                  backgroundImage: "url(https://source.unsplash.com/random)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
      
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Masuk
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      color="secondary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      color="secondary"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ py: 1, mt: 3, mb: 2, borderRadius: "12px" }}
                      color="secondary"
                    >
                      {isLoading ? "Loading" : "Masuk"}
                    </Button>
                    <Grid container spacing={2} direction="column"
                      justifyContent="center"
                      alignItems="center">
                      <Grid item xs>
                        <Typography variant="body2">
                          Lupa Password? <Link href="#" variant="body2" color="secondary">
                            Klik Di sini
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          Belum punya akun? <Link href="register" variant="body2" color="secondary">
                            {" Daftar Disini"}
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
      ):(
        <Navigate to="/"/>
      )}
    </React.Fragment>
  );
}
