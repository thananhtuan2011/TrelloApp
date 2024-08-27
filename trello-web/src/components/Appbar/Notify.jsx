import { Box, Container, Popover, Tooltip } from '@mui/material';
import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Notify(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className='ml-2'>
            <Tooltip title="Notify">

            <Box className='cursor-pointer'>
                <NotificationsIcon aria-describedby={id} variant="contained" onClick={handleClick} className='text-white'></NotificationsIcon>

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
                   <Container>
                    Show notify
                   </Container>
                </Popover>
            </Box>
            </Tooltip>

        </div>
    );
}

export default Notify;