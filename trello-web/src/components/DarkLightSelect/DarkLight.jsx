import { Box, Button, FormControl, InputLabel, Menu, MenuItem, Popover, Select, Typography, useColorScheme } from '@mui/material';
import React from 'react';
import '../../assets/sass/variables.scss'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect } from 'react';
import theme_ from '../../theme';
function DarkLight(props) {

  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
      console.log(" theme_.palette", mode);
    setMode(event.target.value);
  };
  // useEffect(() => {
  //   console.log("props",props);
  // }, []);
  return (
    <>
      <Box className='flex items-center'>
        <div className='mr-5 thembody'>
          <FormControl className='w-50 mt-5' size="small">
            <InputLabel id="demo-simple-select-label">
            {mode=='light'?  <LightModeIcon className='color_light'></LightModeIcon>:  <ModeNightIcon className='color_light'></ModeNightIcon>}
            </InputLabel>
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
        </div>
      </Box>


    </>
  );
}

export default DarkLight;