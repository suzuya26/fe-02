import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Electronic</Button>
      <Button variant="tex">Fashion</Button>
      <Button variant="text">Productivity</Button>
      <Button variant="text">Sport</Button>
      <Button variant="text">Home</Button>
    </Stack>
  );
}