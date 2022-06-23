import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const categories = [
  {
    value: "E",
    label: "Elektronik"
  },
  {
    value: "H",
    label: "Kesehatan"
  },
  {
    value: "T",
    label: "Kendaraan"
  },
  {
    value: "H",
    label: "Hobi"
  }
];

const Input = styled("input")({
    display: "none"
  });

export default function FullWidthTextField() {
  const [category, setCategory] = React.useState("E");

  const handleChange = (event) => {
    setCategory(event.target.value);
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
    <Container sx={{ display: 'flex', justifyContent: 'center'}}>
    <Stack>
    <Button sx={{ color: 'text.primary', m:4 }}>
      <ArrowBackIcon/>
    </Button>
    </Stack>
    <Stack
      component="form"
      sx={{
        width: "50%",
        maxWidth: "100%",
        mt:4
      }}
      spacing={3}
    >
      
      <TextField fullWidth label="Nama Produk*" />
      <TextField fullWidth label="Harga Produk*" type="number" />
      <TextField
        id=""
        select
        label="Pilih Kategory*"
        value={category}
        onChange={handleChange}
        sx={{textAlign: "left"}}
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField fullWidth label="Deskripsi*" multiline rows={4}/>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{ ...commonStyles, border: '3px dashed lightgrey' , borderRadius: 4, opacity: [0.7, 0.2, 1],
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
          sx={{ m: 2.5 }}
        >
          <AddIcon sx={{color: 'text.disabled',"&:hover": {
         color: "background.paper"
        }}}/>
        </IconButton>
      </label>
        </Box>
      
    </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <Button 
        textAlign="center"
        sx={{
        width: "20em",
        borderRadius: "10px"
      }}
      variant="outlined"
      color="secondary">
          Preview
        </Button>
        <Button 
        textAlign="center"
        variant="contained"
        sx={{
        width: "20em",
        p:1,
        borderRadius: "10px", color: 'background.paper',"&:hover": {
          color:"secondary.main", bgcolor : "text.primary"
        }
      }}
      color="secondary">
          Terbitkan
        </Button>
      </Box>
    </Stack>
    </Container>
  );
}
