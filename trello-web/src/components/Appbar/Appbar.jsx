import React, { useEffect } from 'react';
import DarkLight from '../DarkLightSelect/DarkLight';
import { Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Popover, Tooltip, useColorScheme } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import vi_icon from '../../assets/image/vietnam.png'
import en_icon from '../../assets/image/england.png'
import { useTranslation } from 'react-i18next';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import Notify from './Notify';
import Search from './Search/Search';
import HelpIcon from '@mui/icons-material/Help';
import User_profile from './User/User_profile';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { fectGetAllBoard } from '../../apis/board.api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import theme_ from '../../theme';
const _renderListDraw = (props) => {
    const navigate = useNavigate();
    const { onToggleDrawer, data } = props
    const toggleDrawer = (event,_id) => () => {

        onToggleDrawer(event)
        navigate(`/${_id}`)
    }
    return (
        <Box>
            <span style={{fontSize:21}} className='flex text-center w-full justify-center font-[600] p-2'>List Board</span>
            <Divider />
            <Box sx={{ width: 250 }} role="presentation">
                {/* <button onClick={toggleDrawer(false)}> AAAA </button> */}
                <Box sx={{ width: 250 }} role="presentation" >
                    <List>
                        {data.map((text, index) => (
                            <ListItem key={text} disablePadding onClick={toggleDrawer(false,text._id)}>
                                <ListItemButton>
                                    <ArrowRightIcon>
                                    </ArrowRightIcon>
                                    <ListItemText primary={text.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />

                </Box>
            </Box>
        </Box>
    )
}
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
    const { mode, setMode } = useColorScheme();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open_dra, setOpen] = React.useState(false);
    const [listBoards, setlistBoards] = React.useState([]);

    const toggleDrawer = (newOpen) => () => {

        setOpen(newOpen);
    };
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);



    };
    const fetchListBoard = () => {
        fectGetAllBoard().then(res => {
            if (res) {
                setlistBoards(res);

            }

        }
        )

    }
    useEffect(() => {
       
        fetchListBoard()
    }, [])
    const handleClose = () => {

        setAnchorEl(null);
    };
    const handleonToggleDrawer = (value) => {
        setOpen(value);
    }

    return (
        <Box className='flex items-center' style={{
            height: theme_.trello.header, backgroundColor:
            mode=== 'dark' ? '#34495e' : '#1976d2'
        }}>
            <Container maxWidth="false">
        <Box className=" w-full flex items-center justify-between">
            <Box className='flex items-center' sx={{ display: { xs: 'none', md: 'flex' } }}>
                <AppsIcon
                    onClick={toggleDrawer(true)}
                    className='cursor-pointer color_light ' style={{ color: 'primary.main' }}></AppsIcon>
                <Drawer open={open_dra} onClose={toggleDrawer(false)}>
                    <_renderListDraw data={listBoards} onToggleDrawer={handleonToggleDrawer} title="anh trai say hi "></_renderListDraw>
                </Drawer>
                {/* <Menu
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
                </Menu> */}
                <div className='flex items-center' >
                    <PivotTableChartIcon className='ml-1.5 color_light'></PivotTableChartIcon>
                    <Link to='/'>
                    <span className='font-bold text-base ml-1 color_light cursor-pointer'>Trello</span>
                    </Link>
                 
                </div>
            </Box>
            <Box className='flex items-center justify-end w-full'>
                <Search mode={mode}></Search>
                <DarkLight title={`ok lala`}></DarkLight>
                <Translate></Translate>
                <Notify></Notify>
                <Tooltip title="Help">
                    <HelpIcon className='text-white ml-3'></HelpIcon>
                </Tooltip>
                <User_profile></User_profile>

            </Box>
        </Box>
        </Container>
    </Box>
    );
}

export default Appbar;