import * as React from "react";
import { styled } from "@mui/material/styles";
import { withStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import MuiListItem from "@material-ui/core/ListItem";
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';


const ListItem = withStyles({
  root: {
    "&$selected": {
      color: "purple",
      "& .MuiListItemIcon-root": {
        color: "purple"
      }
    },
    "&$selected:hover": {
      color: "purple",
      "& .MuiListItemIcon-root": {
        color: "purple"
      }
    },
    "&:hover": {
      color: "purple",
      "& .MuiListItemIcon-root": {
        color: "purple"
      }
    }
  },
  selected: {}
})(MuiListItem);


const DaftarJual = () => {


const [selectedIndex, setSelectedIndex] = React.useState(1);


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


return (
<Box mt={8} mb={8} ml={4} mr={4}>
<Typography style={{ textAlign: "left" }} variant="h5" mb={3}>
Daftar Jual Saya
</Typography>


<Box mb={4}>
<Card sx={{ border:1, borderColor: 'black' }}>
<CardContent>
  
<Grid container>
<Grid item xs={3} md={3}>
<img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnb196wEaHsmxgXza9UgmXVXbd3a8S0NkIUQ&usqp=CAU"
alt="photoprofile"
style={{
height: "54px",
width: "54px",
marginLeft: "16px",
marginTop: "16px"
}}
/>
</Grid>


<Grid item xs={6} md={6}>
<Typography
style={{ textAlign: "left" }}
variant="body1"
mb={1}
mt={2}
>
Nama Penjual
</Typography>
<Typography
sx={{ textAlign: "left" }}
variant="body2"
mb={2}
>
Kota
</Typography>
</Grid>


<Grid item xs={3} md={3}>
<Box textAlign="right" sx={{ mx: "auto", mt: 4, mr: 2 }}>
<Button
size="medium"
variant="outlined"
sx={{ border:1, color:'black' }}
>
Edit
</Button>
</Box>
</Grid>
</Grid>
</CardContent>
</Card>
</Box>


<Grid container>
<Grid item xs={4} md={4}>
<Card sx={{ border:1, borderColor: 'black' }}>
<CardContent>
<List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
      subheader={<ListSubheader>Kategori</ListSubheader>}
    >
      <ListItem button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
<IconButton aria-label="category">
            <CategoryOutlinedIcon />
          </IconButton>
        <ListItemText primary="Semua Produk"/>
<IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
        <IconButton aria-label="favorite">
            <FavoriteBorderOutlinedIcon />
</IconButton>
        <ListItemText primary="Diminati"/>
<IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
        <IconButton aria-label="money">
            <AttachMoneyOutlinedIcon />
          </IconButton>
        <ListItemText primary="Terjual"/>
<IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton>
      </ListItem>
    </List>
</CardContent>
</Card>
</Grid>


<Grid item xs={8} md={8}></Grid>
</Grid>
</Box>
);
};


export default DaftarJual;