import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../actions/carsAction";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Item = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

function ListCars() {
  const { listCarsResult, listCarsLoading, listCarsError } = useSelector(
    (state) => state.carReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // get action list cars
    console.log("1. use effect component did mount");
    dispatch(getListCars());
  }, [dispatch]);

  return (
    <Item>
      <div>
        <h1 style={{ textAlign: "center" }}>List Cars</h1>
        <Container sx={{ p: 3 }}>
          <Grid container>
            {listCarsResult ? (
              listCarsResult.map((car) => {
                return (
                  <Grid Item xs={12} md={4} lg={3} sx={{ p: 1 }}>
                    <Item>
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: 300,
                          height: "100%",
                        }}
                        key={car.id}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            objectFit="cover"
                            objectPosition="Center"
                            height="200"
                            width="250"
                            image={car.image}
                            alt={car.plate}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {car.manufacture} - {car.model}
                            </Typography>
                            <List>
                              <ListItem>
                                <ListItemIcon>
                                  <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText primary={car.rentPerDay} />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <GroupIcon />
                                </ListItemIcon>
                                <ListItemText primary={car.capacity} />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <SettingsSuggestIcon />
                                </ListItemIcon>
                                <ListItemText primary={car.transmission} />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <InsertInvitationIcon />
                                </ListItemIcon>
                                <ListItemText primary={car.year} />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <DirectionsCarIcon />
                                </ListItemIcon>
                                <ListItemText primary={car.type} />
                              </ListItem>
                            </List>
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{ marginTop: "auto" }}>
                          <Button size="small">Rent</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                );
              })
            ) : listCarsLoading ? (
              <p>Loading . . . </p>
            ) : (
              <p>{listCarsError ? listCarsError : "Data Kosong"}</p>
            )}
          </Grid>
        </Container>
      </div>
    </Item>
  );
}

export default ListCars;
