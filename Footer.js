import React from "react";
import {Box, Tabs, Tab, AppBar} from '@mui/material';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Footer () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position = "sticky" color="inherit">
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Youtube" href="#" />
        <LinkTab label="Twitter" href="#" />
        <LinkTab label="Facebook" href="#" />
      </Tabs>
    </Box>
    </AppBar>
  );
}



