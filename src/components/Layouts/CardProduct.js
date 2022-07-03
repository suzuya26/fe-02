import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://source.unsplash.com/random"
          alt="Produk"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jam Tangan Casio
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Aksesoris
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Rp.250.000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
