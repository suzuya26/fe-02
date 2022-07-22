import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import axios from "axios";
import jwtDecode from "jwt-decode";

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifikasi, setNotifikasi] = React.useState(null);
  const [notifikasibuyer, setNotifikasibuyer] = React.useState(null);
  const [singbeli, setSingbeli] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const idcurrent = decoded.id;

    function getSellerNotifikasi() {
      axios
        .get(
          `https://secondhand-kelompok2.herokuapp.com/api/v1/getsemuapenawaran/${idcurrent}`
        )
        .then((response) => {
          const notiff = response.data;
          console.log(notiff);
          setNotifikasi(notiff);
        })
        .catch((error) => console.log(error));
    }
    function getBuyerNotifikasi() {
      axios
        .get(
          `https://secondhand-kelompok2.herokuapp.com/api/v1/getpenawaranpembeli/${idcurrent}`
        )
        .then((response) => {
          const notifb = response.data;
          console.log(notifb);
          setNotifikasibuyer(notifb);
        })
        .catch((error) => console.log(error));
    }
    getSellerNotifikasi();
    getBuyerNotifikasi();
  }, []);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <NotificationsIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "50ch",
          },
        }}
      >
        <MenuItem onClick={handleClose} disabled>
          Sebagai Seller
        </MenuItem>
        {notifikasi ? (
          notifikasi.map((nott) => {
            return (
              <MenuItem key={nott.index} onClick={handleClose}>
                Ada Yang nawar {nott.namaproduk}, dengan harga :
                {nott.hargatawar}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem onClick={handleClose}>Tidak ada penawaran</MenuItem>
        )}
        <MenuItem onClick={handleClose} disabled>
          Sebagai Buyer
        </MenuItem>
        {notifikasibuyer ? (
          notifikasibuyer.map((nottb) => {
            return (
              <MenuItem key={nottb.index} onClick={handleClose}>
                {
                  nottb.statustawar === 'menawar' ?(
                    <p>
                      Kamu sedang menawar {nottb.namaproduk}, dengan harga :
                      {nottb.hargatawar}
                    </p>
                  ) : nottb.statustawar === 'ditolak' ? (
                    <p>
                      Tawaran kamu untuk {nottb.namaproduk} ditolak
                    </p>
                  ) : nottb.statustawar === 'diterima' ? (
                    <p>

                      Selamat tawararan kamu untuk {nottb.namaproduk} diterima dengan harga :
                      {nottb.hargatawar}
                    </p>
                  ) : (
                    <p>error nich</p>
                  )
                }
              </MenuItem>
            );
          })
        ) : (
          <MenuItem onClick={handleClose}>Tidak ada penawaran</MenuItem>
        )}
      </Menu>
    </div>
  );
}
