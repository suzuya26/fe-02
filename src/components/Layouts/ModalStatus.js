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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

    return (
        <React.Fragment>
            <Button variant="contained" fullWidth color="secondary" sx={{ px: 5, ml: 0.5, my: 1, borderRadius: "20px" }} onClick={handleClickOpen}>
                Terima
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                borderRadius={50}
            > <DialogActions>
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
                <DialogContent>
                    <DialogContentText fontWeight="bold" variant="Button" textAlign="center">
                        Perbarui Status Penjualan Produkmu
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "fit-content",
                            borderRadius:"20px"
                        }}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio color="secondary" />} label="Berhasil Terjual"/>
                                <Typography variant="caption">Kamu telah sepakat menjual produk ini kepada pembeli</Typography>
                                <FormControlLabel value="male" control={<Radio color="secondary"/>} label="Batalkan Transaksi" />
                                <Typography variant="caption">Kamu membatalkan transaksi produk ini dengan pembeli</Typography>
                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" color="secondary" sx={{ borderRadius: "15px", p: 1, mt: 2 }} >Kirim</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
