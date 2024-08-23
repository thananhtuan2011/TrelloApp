import React from 'react';
import DarkLight from '../DarkLightSelect/DarkLight';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
function Appbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("event", event.currentTarget);


    };
    const handleClose = () => {
        console.log("hh");
        
        setAnchorEl(null);
    };
    return (
        <Box className=" w-full flex items-center justify-between">
            <Box className='flex items-center'>
                <AppsIcon
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className='cursor-pointer' style={{ color: 'primary.main' }}></AppsIcon>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <div >
                    <PivotTableChartIcon className='ml-1.5'></PivotTableChartIcon>
                    <span className='font-bold text-base ml-1'>Trello</span>
                </div>
            </Box>
            <Box>
                <DarkLight title={`ok lala`}></DarkLight>

            </Box>
        </Box>
    );
}

export default Appbar;