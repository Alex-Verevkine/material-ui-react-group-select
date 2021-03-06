import React from "react";
import GroupSelect from "./lib";
import { Box } from "@mui/material";
import options from "./mockData.json";

const App = () => {
  const handleOnChange = (selected) => console.log('selected options', selected);

  return <Box width="100%" height="400px" display="flex" justifyContent="center" alignItems="center">
    <GroupSelect label="Select Things you Love" options={options} onChange={handleOnChange} placeholder="aaa" />
  </Box>;
}


export default App;
