import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "LMG",
    label: "Lamongan"
  },
  {
    value: "MJK",
    label: "Mojokerto"
  },
  {
    value: "SBY",
    label: "Surabaya"
  },
  {
    value: "MDR",
    label: "Madura"
  }
];

export default function FullWidthTextField() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Stack
      component="form"
      sx={{
        width: "100%",
        maxWidth: "100%"
      }}
      spacing={2}
    >
      <TextField fullWidth label="Nama*" />
      <TextField
        id="outlined-select-currency"
        select
        label="Kota*"
        value={currency}
        onChange={handleChange}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField fullWidth label="Alamat*" />
      <TextField fullWidth label="No Handphone*" />
      <Button variant="contained" sx={{ width: "20%" }} centered>
        Simpan
      </Button>
    </Stack>
  );
}
