import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Box sx={{mx:"auto"}}>
    <Stack spacing={4} direction="row">
      <Button variant="contained">Electronic</Button>
      <Button variant="tex">Fashion</Button>
      <Button variant="text">Productivity</Button>
      <Button variant="text">Sport</Button>
      <Button variant="text">Home</Button>
    </Stack>
    </Box>
  );
}