import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardPro from './CardProduct';

const theme = createTheme();

export default function TelusuriKategori() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h6" fontWeight="bold">Tambah Katogeri</Typography>
                <Box sx={{ flexGrow: 1 }} my={3}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 8, sm: 12, md: 40 }}
                    >
                        {Array.from(Array(8)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Button variant="contained" sx={{ borderRadius: "10px" }} startIcon={<SearchIcon />} color="secondary" active>Semua</Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {Array.from(Array(18)).map((_, index) => (
                            <Grid item xs={2} sm={2} md={2} key={index}>
                                <CardPro />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <Box textAlign='center'>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} p={2} sx={{
                    borderRadius: "8px", position: "fixed",
                    bottom: 10,
                    zIndex: "modal"
                }} >Jual</Button>
            </Box>

        </ThemeProvider>
    );
}