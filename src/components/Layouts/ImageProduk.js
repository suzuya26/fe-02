import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import autoBind from "auto-bind";
import '../../App.css';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button
} from "@mui/material/";

function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: "Macbook Pro",
    Image: "https://source.unsplash.com/featured/?macbook",
    Items: [
      {

        Name: "Pizza begin",
    Image: "https://source.unsplash.com/featured/?macbook"
      },
      {
        Name: "iPhone",
        Image: "https://source.unsplash.com/featured/?iphone"
      }
    ]
  },
  {
    Name: "Home Appliances",
    Caption: "Say no to manual home labour!",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: "https://source.unsplash.com/featured/?washingmachine"
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
      }
    ]
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "https://images.unsplash.com/photo-1616679063640-603332e632cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      },
      {
        Name: "Floral Vase",
        Image: "https://images.unsplash.com/photo-1616680450981-fc471a4b681c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      }
    ]
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      },
      {
        Name: "Floral Vase",
        Image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      }
    ]
  }
];

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators
    });
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
    });
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
    });
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value
    });
  }

  render() {
    return (
      <div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">
</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item 
>
<img
className="first slide"
style={{ height: 436 }}
src="https://picsum.photos/500/300?img=1"
alt="First slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="second slide"
style={{ height: 436 }}
src="https://picsum.photos/500/300?img=2"
alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="third slide"
style={{ height: 436 }}
src="https://picsum.photos/500/300?img=3"
alt="Third slide"
/>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
    );
  }
}

export default BannerExample;
