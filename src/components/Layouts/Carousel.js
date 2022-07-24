import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://res.cloudinary.com/drakr4vtu/image/upload/v1658673684/secondhand/products/Gambar%20Produk%201658673684885.png',
  },
  {
    imgPath:
    'https://res.cloudinary.com/drakr4vtu/image/upload/v1658673689/secondhand/products/Gambar%20Produk%201658673689449.png',
  },
  {
    imgPath:
    'https://res.cloudinary.com/drakr4vtu/image/upload/v1658673696/secondhand/products/Gambar%20Produk%201658673696185.png',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box my={2} sx={{ maxWidth: "auto", flexGrow: 1 ,borderRadius: "16px" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 288,
                      maxWidth: "auto",
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={step.imgPath}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Container>
    </ThemeProvider>


  );
}

export default SwipeableTextMobileStepper;