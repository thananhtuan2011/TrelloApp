import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import theme_ from '../../../../theme'
import { Box, Menu, MenuItem, useColorScheme } from '@mui/material';
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from '@dnd-kit/sortable';
function ListColumn(props) {
    const { mode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id:  props.data._id,
      });
    const {data}=props

    const stylesdnd = {
        transform: CSS.Translate.toString(transform),
        transition,
        backgroundColor: mode == 'dark' ? 'rgb(110 123 137) ' : 'rgb(223 223 223 / 95%)'
      };
    return (
        <div>
               <Box     key={data._id} ref={setNodeRef} style={stylesdnd} {...attributes} {...listeners} className='board_card  mr-5 '>
                        <Box style={{ height: theme_.trello.board_bar }} className='flex justify-between items-center pr-4 pl-4 '>
                            <div className='font-bold'>
                                {data.title}
                            </div>
                            <MoreHorizIcon id="basic-more"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}></MoreHorizIcon>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-more',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Box>
                        <Box className='overflow-y-auto  content_card ' >
                            {/* {
                                item_?.cards.map((item, index) => {
                                    return (
                                        <List_Card item_={item}></List_Card>
                                    )
                                }
                                )
        
        
        
                            } */}
        
        
        
                        </Box>
                        <Box style={{ height: theme_.trello.col_foodter }} className='flex justify-between items-center pr-4 pl-4'>
                            <div className='flex items-center cursor-pointer '>
                                <AddCardIcon style={{
                                    color:
                                        mode == 'dark' ? '#FFFFF' : 'rgb(70 152 233)'
                                }}></AddCardIcon>
                                <span style={{
                                    color:
                                        mode == 'dark' ? '#FFFFF' : 'rgb(70 152 233)'
                                }} className='font-bold text-sm pl-3'>
                                    Add new card
                                </span>
                            </div>
                            <div>
                                <DragHandleIcon></DragHandleIcon>
                            </div>
                        </Box>
                    </Box>
        </div>
    );
}

export default ListColumn;