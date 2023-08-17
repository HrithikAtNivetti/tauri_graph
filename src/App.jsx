import React from "react";
import "./App.css";
import { DisplayGraph } from "./components/sigma";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const App = () => {
  const [data, setData] = React.useState("");

  return (
    <div className="container-graph">
      <DisplayGraph />
      {/* <Box
      component="form"    
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > */}
      <TextField onChange={e => {setData(e.target.value)}} id="outlined-basic" label="Outlined" variant="outlined" />
    {/* </Box> */}
    <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={data} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
    </div>
  );
};

export default App;
