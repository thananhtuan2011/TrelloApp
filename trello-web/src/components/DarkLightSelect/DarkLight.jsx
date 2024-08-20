import { Button, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material';
import React from 'react';

function DarkLight(props) {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        setMode(event.target.value);
      };
    return (
    //     <Button
    //     onClick={() => { 
    //       setMode(mode === 'light' ? 'dark' : 'light');
    //     }}
    //   >
    //     {mode === 'light' ? 'Turn dark' : 'Turn light'}
    //   </Button>
    <FormControl className='w-50 mt-5' size="small">
  <InputLabel id="demo-simple-select-label">Mode</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Mode"
    value={mode}
    onChange={handleChange}
  >
    <MenuItem value={'light'}>Light</MenuItem>
    <MenuItem value={'dark'}>Dark</MenuItem>
  </Select>
</FormControl>
    );
}

export default DarkLight;