import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>        <Link to={''}  color="inherit" style={{ textDecoration: 'none' }}>Halaman Jual</Link></MenuItem>
        <MenuItem onClick={handleClose}>        <Link to={'/jual-produk'}  color="inherit" style={{ textDecoration: 'none' }}>Jual Produk</Link></MenuItem>
        <MenuItem onClick={handleClose}>        <Link to={''}  color="inherit" style={{ textDecoration: 'none' }}>Daftar Penawar</Link></MenuItem>
      </Menu>
    </div>
  );
}
export default BasicMenu;
