import { Box, Button, FormControl, InputLabel, Menu, MenuItem, Popover, Select, Typography, useColorScheme } from '@mui/material';
import React from 'react';
import vi_icon from '../../assets/image/vietnam.png'
import en_icon from '../../assets/image/england.png'
import { useTranslation } from 'react-i18next';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect } from 'react';
function Translate(props) {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeTranslate = (state) => {
    console.log("state", state);
    i18n.changeLanguage(state)
    setAnchorEl(null);
  };
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>

      {i18n.language == 'vi' ? <img src={vi_icon} className='w-6' aria-describedby={id} variant="contained" onClick={handleClick}></img> : <img src={en_icon} className='w-6' aria-describedby={id} variant="contained" onClick={handleClick} ></img>}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='p-3'>
          <img src={vi_icon} className='w-6 mb-2 cursor-pointer' aria-describedby={id} variant="contained" onClick={() => handleChangeTranslate('vi')}></img>
          <img src={en_icon} className='w-6 cursor-pointer' aria-describedby={id} variant="contained" onClick={() => handleChangeTranslate('en')}></img>
        </div>
      </Popover>
    </div>
  )



}
function DarkLight(props) {

  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  useEffect(() => {
    console.log("props",props);
  }, []);
  return (
    <>
      <Box className='flex items-center'>

        <div className='mr-5'>
          <FormControl className='w-50 mt-5' size="small">
            <InputLabel id="demo-simple-select-label">
            {mode=='light'?  <LightModeIcon></LightModeIcon>:  <ModeNightIcon></ModeNightIcon>}
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
        <Translate></Translate>
      </Box>


    </>
  );
}

export default DarkLight;