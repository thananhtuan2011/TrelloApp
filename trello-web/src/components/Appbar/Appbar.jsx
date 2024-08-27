import React from 'react';
import DarkLight from '../DarkLightSelect/DarkLight';
import { Box, Menu, MenuItem, Popover, Tooltip } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import vi_icon from '../../assets/image/vietnam.png'
import en_icon from '../../assets/image/england.png'
import { useTranslation } from 'react-i18next';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import Notify from './Notify';
import Search from './Search/Search';
import HelpIcon from '@mui/icons-material/Help';
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
                    className='cursor-pointer color_light ' style={{ color: 'primary.main' }}></AppsIcon>
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
                    <PivotTableChartIcon className='ml-1.5 color_light'></PivotTableChartIcon>
                    <span className='font-bold text-base ml-1 color_light'>Trello</span>
                </div>
            </Box>
            <Box className='flex items-center'>
                <Search mode={props.mode}></Search>
                <DarkLight title={`ok lala`}></DarkLight>
                <Translate></Translate>
                <Notify></Notify>
                <Tooltip title="Help">
                <HelpIcon className='text-white ml-1'></HelpIcon>
                </Tooltip>

            </Box>
        </Box>
    );
}

export default Appbar;