import { Avatar, Menu, MenuItem } from '@mui/material';
import React from 'react';
import avatar from '../../../assets/image/avatar.png'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function User_profile(props) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout=()=>
    {
      Cookies.remove("accessToken")
      Cookies.remove("refreshToken")
      navigate('/login')
    }
    return (
        <div className='ml-2'>
               <Avatar className='cursor-pointer'   id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}alt="Remy Sharp" src={avatar} />
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
        </div>
    );
}

export default User_profile;