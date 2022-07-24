import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getListKategori } from "../../actions/kategoriAction";
import {Link} from "react-router-dom";

export default function ListHomeKategori() {
  const { listKategoriResult, listKategoriLoading, listKategoriError } =useSelector((state) => state.kategoriReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. use effect component did mount")
    dispatch(getListKategori());
}, [dispatch])

  return (
    <div>
      <Grid item xs={2} sm={4} md={4}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
      <Button
                variant="contained"
                sx={{ borderRadius: "10px", m: 1 }}
                startIcon={<SearchIcon />}
                color="secondary"
              >
                Semua
              </Button>
      </Link>
        {listKategoriResult ? (
          listKategoriResult.map((kategori) => {
            return (
              <Link to={'/per/'+kategori.kategori} style={{ textDecoration: 'none' }}>
             <Button
                key={kategori.id}
                variant="outlined"
                sx={{ borderRadius: "10px", m: 1 }}
                startIcon={<SearchIcon />}
                color="secondary"
                active
              >
                {kategori.kategori}
              </Button>
              </Link>
            );
          })
        ) : listKategoriLoading ? (
          <p>Kategori loading...</p>
        ) : (
          <p>{listKategoriError ? listKategoriError : "Data Kosong"}</p>
        )}
      </Grid>
    </div>
  );
}
