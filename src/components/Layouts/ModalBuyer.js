import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState("xs");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <React.Fragment>
            <Button variant="contained" fullWidth color="secondary" py={5} sx={{ px: 5, ml: 0.5, my: 1, borderRadius: "20px" }} onClick={handleClickOpen}>
                Saya tertarik dan ingin nego
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <Typography fontWeight="bold">
                        Masukkan harga tawaranmu
                    </Typography>
                    <DialogContentText variant="caption" alignText="justify">
                    Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "fit-content"
                        }}>
                        <Box
                            my={2}
                            sx={{
                                width: 300,
                                height: "fit-content",
                                borderRadius: "10px",
                                backgroundColor: "grey.300",
                            }}
                        >
                            <Grid item display="Flex">
                                <Box my={3} mx={2}>
                                    <Avatar variant="rounded">
                                        <CardMedia
                                            component="img"
                                            width="60"
                                            height="60"
                                            src="https://source.unsplash.com/random"
                                            alt="green iguana"
                                        />
                                    </Avatar>
                                </Box>
                                <Box my={2}>
                                    <Typography gutterBottom variant="subtitle1" component="div" fontWeight="bold">
                                        Jam tangan Casio
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle2" component="div">
                                        Rp.250.000
                                    </Typography>
                                </Box>

                            </Grid>


                        </Box>
                        <Box my={2}>
                            <FormControl fullWidth >
                                <InputLabel htmlFor="outlined-adornment-amount">Harga tawar</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={values.amount}
                                    onChange={handleChange('amount')}
                                    startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
                                    label="Harga Tawar"
                                    sx={{borderRadius: "18px", boxShadow: 3}}
                                />
                            </FormControl>
                        </Box>
                        <Button variant="contained" color="secondary" sx={{ borderRadius: "15px", p: 1 }}>Kirim </Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500]
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
