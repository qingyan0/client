
import { React, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Price: Low to High',
  'Price: High to Low',
  'Top Rate',
  'Best Seller',
];

export default function Splitbutton() {
  const [sortOrder, setsortOrder] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setsortOrder(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <Typography> Sort By: </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          labelId="multiple-list"
          id="multiple-checkbox"
          multiple
          value={sortOrder}
          onChange={handleChange}
          input={<OutlinedInput label="Featured Items" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {order.map((order) => (
            <MenuItem key={order} value={order}>
              <Checkbox checked={sortOrder.indexOf(sortOrder) > -1} />
              <ListItemText primary={order} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
