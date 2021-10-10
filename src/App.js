import GroupSelect from "./lib/components";
import { Box } from "@mui/material";
import options from "./mockData.json";

const App = () => {
  const handleOnChange = (selected) => console.log('selected options', selected);

  return <Box width="100%" height="400px" display="flex" justifyContent="center" alignItems="center">
    <GroupSelect label="Select Things you Love" options={options} onChange={handleOnChange} />
  </Box>;
}


export default App;
