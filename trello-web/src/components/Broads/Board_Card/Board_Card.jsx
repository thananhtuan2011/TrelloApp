import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Menu, MenuItem, Typography, useColorScheme } from '@mui/material';
import React from 'react';
import '../../../assets/sass/board_card.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import theme_ from '../../../theme'
import { useEffect } from 'react';
import List_Card from './ListCard/List_Card';

import {
    closestCenter,
    pointerWithin,
    rectIntersection,
    DndContext,
    DragOverlay,
    getFirstCollision,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useDroppable,
    useSensors,
    useSensor,
    MeasuringStrategy,
    defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
    SortableContext,
    useSortable,
    arrayMove,
    verticalListSortingStrategy,
    horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
const PLACEHOLDER_ID = 'placeholder';
function Board_Card(props) {
    const { mode, setMode } = useColorScheme();
    const { item_ } = props
    console.log("item_",item_);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // useEffect(()=>
    // {
    //     setTheme(props.them);
    //     console.log("them_them_",them_);

    // },[])

    return (
        <SortableContext
            items={item_}
            strategy={horizontalListSortingStrategy}

        >
            {
                item_.map(data=>
                {
                    return (
                        <Box style={{ backgroundColor: mode == 'dark' ? 'rgb(110 123 137) ' : 'rgb(223 223 223 / 95%)' }} className='board_card  mr-5 '>
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
                    )
                }
                )
          
            }

       </SortableContext>

    );
}

export default Board_Card;