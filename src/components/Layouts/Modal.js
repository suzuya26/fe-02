import * as React from "react";
import { useState } from "react";
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
            <Button variant="contained"  fullWidth color="secondary" sx={{ px: 5, ml: 0.5, my: 1, borderRadius: "20px" }} onClick={handleClickOpen}>
                Terima
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                disableBackdropClick
                borderRadius={50}
            >
                <DialogContent>
                    <Typography fontWeight="bold">
                        yeay kamu berhasil mendapatkan harga yang sesuai.
                    </Typography>
                    <DialogContentText variant="caption">
                        Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
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
                            <Typography mx={11} my={1} fontWeight="bold">Product Match</Typography>
                            <Box sx={{ display: "flex" }}>
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
                                    <Typography variant="body1" fontWeight="bold" component="div">
                                        Lizard Ranchu
                                    </Typography>
                                    <Typography variant="caption">
                                        Lamongan
                                    </Typography>
                                </Box>
                            </Box>

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
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Jam tangan Casio
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle2" component="div" sx={{textDecoration: "line-through"}}>
                                        Rp.250.000
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle2" component="div">
                                        Ditawar Rp.250.000
                                    </Typography>
                                </Box>
                            </Grid>

                        </Box>
                        <Button variant="contained" color="secondary" sx={{borderRadius: "15px", p: 1}} href="https://wa.me/087815584637" startIcon={<WhatsAppIcon/>}>Hubungi Via Whatsapp </Button>
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
