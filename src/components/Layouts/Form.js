import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const citys = [
  {
    value: "LMG",
    label: "Lamongan"
  },
  {
    value: "MJK",
    label: "Mojokerto"
  },
  {
    value: "SBY",
    label: "Surabaya"
  },
  {
    value: "MDR",
    label: "Madura"
  }
];

const Input = styled("input")({
    display: "none"
  });

export default function FullWidthTextField() {
  const [city, setCity] = React.useState("SBY");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Stack
      component="form"
      sx={{
        width: "50%",
        maxWidth: "100%"
      }}
      spacing={2}
    >
      <Typography textAlign="center" variant="h5" gutterBottom component="div">
        Lengkapi Info Akun
      </Typography>
      <Stack>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
      <TextField fullWidth label="Nama*" />
      <TextField
        id=""
        select
        label="Kota*"
        value={city}
        onChange={handleChange}
      >
        {citys.map((option) => (
          <MenuItem key={option.value} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField fullWidth label="Alamat*"/>
      <TextField fullWidth label="No Handphone*" />
      <Box textAlign="center">
        <Button 
        variant="contained"
        sx={{
        width: "100%",
        borderRadius: "16px"
      }}>
          Simpan
        </Button>
      </Box>
    </Stack>
  );
}
