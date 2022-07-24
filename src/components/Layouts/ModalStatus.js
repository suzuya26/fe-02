import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState("xs");
    const [status, setStatus] = useState('berhasil')

    const navigate = useNavigate();

    const { id } = useParams();
    console.log("ini param dari modal cuyy :"+id);

    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const idseller = decoded.id

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        setStatus(e.target.value);
      }
    console.log('iki state e kini : '+status)

    async function handleUbahStatus (e){
        e.preventDefault()
        try {
            if (status == 'berhasil'){
                await axios.delete(`https://secondhand-kelompok2.herokuapp.com/api/v1/deleteproduk/${id}`)
                navigate('/daftar-jual/terjual/'+idseller);
            } else {
                await axios.post(`https://secondhand-kelompok2.herokuapp.com/api/v1/bataltransaksi/${id}`)
                navigate('/daftar-jual/'+idseller);
            }

        } catch (error) {
                  if (error.response) {
        console.log(error.response.data)
      }
        }
    }


    return (
        <React.Fragment>
            <Button variant="contained" fullWidth color="secondary" sx={{ px: 5, ml: 0.5, my: 1, borderRadius: "20px" }} onClick={handleClickOpen}>
                Edit Status
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
                                <FormControlLabel value="berhasil" onChange={handleChange} checked={status === 'berhasil'} control={<Radio color="secondary" />} label="Berhasil Terjual"/>
                                <Typography variant="caption">Kamu telah sepakat menjual produk ini kepada pembeli</Typography>
                                <FormControlLabel value="batal" onChange={handleChange} checked={status === 'batal'} control={<Radio color="secondary"/>} label="Batalkan Transaksi" />
                                <Typography variant="caption">Kamu membatalkan transaksi produk ini dengan pembeli</Typography>
                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" color="secondary" onClick={handleUbahStatus} sx={{ borderRadius: "15px", p: 1, mt: 2 }} >Kirim</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
