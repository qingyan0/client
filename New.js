import React from 'react';
import { Box, TextField,Typography,Button } from '@mui/material';


export default function New() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="product-name"
          label="outlined"
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="product description"
          label="product description"
          placeholder="maximum charactor is 300"
          multiline
          rows={6}
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="amount"
          label="amount"
          value={value.amount}
          onChange={handleChange}
          variant="filled"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          defaultValue="50"
        />
        <TextField
          id="quantity"
          label="quantity"
          value={value.amount}
          onChange={handleChange}
          variant="filled"
          defaultValue="100"
        />
        <div>
        <TextField
          id="link"
          label="link"
          value={value}
          onChange={handleChange}
          variant="filled"
          defaultValue="http://"
        />
        <Button variant="contained" color="primary">Preview</Button>
        open review
        </div>
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </Box>
  );
}