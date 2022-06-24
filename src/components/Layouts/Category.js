import * as React from 'react';
import '../../App.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#80d8ff',
    },
    secondary: {
      main: '#ea80fc',
    },
  },
});

export default function BasicButtons() {
  return (
    <Box>
    <Stack spacing={4} direction="row">
      <Button variant="contained" sx={{borderRadius: "10px"}} startIcon={<SearchIcon />} color="secondary">Semua</Button>
      <Button variant="outlined" sx={{borderRadius: "10px"}} startIcon={<SearchIcon />} color="secondary">Hobi</Button>
      <Button variant="outlined" sx={{borderRadius: "10px"}} startIcon={<SearchIcon />} color="secondary">Productivity</Button>
      <Button variant="outlined" sx={{borderRadius: "10px"}} startIcon={<SearchIcon />} color="secondary">Electronic</Button>
      <Button variant="outlined" sx={{borderRadius: "10px"}} startIcon={<SearchIcon />} color="secondary">Transportation</Button>
    </Stack>
    </Box>
  );
}