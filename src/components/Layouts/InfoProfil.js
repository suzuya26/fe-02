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

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ ...commonStyles, borderRadius: 4,backgroundColor: "secondary.main", opacity: [0.7, 0.2, 1],
        "&:hover": {
          bgcolor: 'text.primary', color: 'background.paper',
          opacity: [0.9, 0.8, 0.2]
        }}}>
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          sx={{ mt: 2 }}
        >
          <PhotoCamera sx={{ color: 'background.paper',"&:hover": {
         color:"dark",bgcolor: "text.primary"}}}/>
        </IconButton>
      </label>
        </Box>
      
    </Box>
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
      <TextField fullWidth label="Alamat*" multiline rows={4}/>
      <TextField fullWidth label="No Handphone*" />
      <Box textAlign="center">
        <Button 
        variant="contained"
        sx={{
        width: "100%",
        borderRadius: "10px", color: 'background.paper',"&:hover": {
          color:"secondary.main", bgcolor : "text.primary"
        }
      }}
      color="secondary">
          Simpan
        </Button>
      </Box>
    </Stack>
  );
}
