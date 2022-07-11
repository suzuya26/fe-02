/*import * as React from 'react';
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
    <Box sx={{ flexGrow: 1 }} my={3}>
    <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 8, sm: 12, md: 40 }}
    >
        {listProductResult ? (
            listProductResult.map((product) => {
                return (
                    <Grid item xs={2} sm={4} md={4} >
                        <Button variant="contained" sx={{ borderRadius: "10px" }} startIcon={<SearchIcon />} color="secondary" active>{product.kategori}</Button>
                    </Grid>
                );
            })
        ) : listProductLoading ? (
            <p>Loading . . . </p>
        ) : (
            <p>{listProductError ? listProductError : "Data Kosong"}</p>
        )}
    </Grid>
</Box>s
  );
}

*/