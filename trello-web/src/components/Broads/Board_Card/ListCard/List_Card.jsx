import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import _ from 'lodash'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import '../../../../assets/sass/board_card.scss'
import Card_Iteam from './Card.jsx/Card_item';
import { DndContext } from '@dnd-kit/core';



function Img_Card(props) {

    if (!_.isEmpty(props.img)) {
        return (
            <CardMedia
                sx={{ height: 140 }}
                image={props.img}
                title="green iguana"
            />
        );
    }
    return null;
}

function List_Card(props) {
    
    const [ItemCard, setItemCard] = React.useState([])

    useEffect(() => {
        setItemCard(props.item_card)
    }, [props])
    return (
        <Box className='overflow-y-auto  content_card '>
            <SortableContext
                items={ItemCard?.map(x => x._id)}
                strategy={verticalListSortingStrategy}
            >
                {
                    ItemCard.map(item_ => {
                        return (
                            <Card_Iteam key={item_.id} item_card={item_}   ></Card_Iteam>

                        )
                    }
                    )
                }
            </SortableContext>
        </Box>
    );
}

export default List_Card;