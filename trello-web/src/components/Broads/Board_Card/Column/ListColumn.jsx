import React, { useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import theme_ from '../../../../theme'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Menu, MenuItem, useColorScheme } from '@mui/material';
import { CSS } from "@dnd-kit/utilities";
import {  SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import List_Card from '../ListCard/List_Card';
function ListColumn(props) {
    const [_open, setOpen] = React.useState(false);
    const { mode, setMode } = useColorScheme();
    const [dataCard, setdataCard] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClosePopup = () => {
        setOpen(false);
      };
    
   
    useEffect(() => {
        setdataCard(props.data?.cards);
        
    }, [props.data?.cards])

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: props.data._id,
        data: { ...props.data }
    });
    const { data } = props

    const stylesdnd = {
        transform: CSS.Translate.toString(transform),
        transition,
        height:'100%',
        opacity: isDragging ? 0.5 : null,
    };
    return (
        <div  ref={setNodeRef} style={stylesdnd} {...attributes}  className='mr-5 ' >
            <Box {...listeners} className='board_card'  style={{  backgroundColor: mode == 'dark' ? 'rgb(110 123 137) ' : 'rgb(223 223 223 / 95%)'}}>
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
                    <List_Card  key={data._id}    item_card={dataCard} mode_={mode}></List_Card>

                <Box onClick={handleClickOpen} style={{ height: theme_.trello.col_foodter }} className='flex justify-between items-center pr-4 pl-4'>
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
            <Dialog
        open={_open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add new card"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>

    );
}

export default ListColumn;