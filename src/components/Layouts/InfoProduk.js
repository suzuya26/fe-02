import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons() {
  return (
    <Stack>
        <TextField fullWidth label="Nama*" />
      <TextField
        id=""
        select
        label="Kategori*"
        value={category}
        onChange={handleChange}
      >
        {citys.map((option) => (
          <MenuItem key={option.value} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField fullWidth label="Alamat*" multiline rows={4}/>
      <TextField fullWidth label="No Handphone*" />
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Preview
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
       Terbitkan
      </Button>
    </Stack>
    </Stack>
  );
}
