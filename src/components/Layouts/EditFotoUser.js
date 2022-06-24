import * as React from "react";
import { useState, Fragment } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Input = styled("input")({
  display: "none",
});

export default function FullWidthTextField() {
  const [file, setFile] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  async function handleUpload(e) {
    e.preventDefault();

    const form = new FormData();

    form.append("picture", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/updatefotouser",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Kalo di upload langsung di-server
      console.log(response.data.url)
      setUploadedFileURL(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Typography variant="h6" gutterBottom component="div" mt={4}>
        Edit Foto Profil
      </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
    <Stack>
       <Stack>
         <Button sx={{ color: 'text.primary', m:4 }}>
          <ArrowBackIcon/>
          </Button>
        </Stack>
    </Stack>
    <Stack
      sx={{
        width: "50%",
        maxWidth: "100%",
        mt:4
      }}
    >
      <Box>
        {!uploadedFileURL?(      
        <Box
        component="form"
        onSubmit={handleUpload}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack>
        <Box
          sx={{
            ...commonStyles,
            borderRadius: 4,
            width: 300,
            height: 300,
            ml:-15,
            backgroundColor: "secondary.main",
            opacity: [0.7, 0.2, 1],
            "&:hover": {
              bgcolor: "text.primary",
              color: "background.paper",
              opacity: [0.9, 0.8, 0.2],
            },
          }}
        >
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              sx={{ m: 3 }}
            >
              <PhotoCamera
                sx={{
                  width: 240,
                  height: 240,
                  color: "background.paper",
                  "&:hover": {
                    color: "dark",
                    bgcolor: "text.primary",
                  },
                }}
              />
            </IconButton>
          </label>
        </Box>
        <Button type="submit" variant="contained" sx={{ ml:-16, borderRadius: "12px",color:"primary",bgcolor: "text.disabled","&:hover": {
         bgcolor: 'secondary.main'
        } }}>
          upload
        </Button>
        </Stack>
      </Box>):(<img src={uploadedFileURL} alt="Uploaded URL" />)}
      </Box>
    </Stack>
    </Box>
    </Container>
  );
}
