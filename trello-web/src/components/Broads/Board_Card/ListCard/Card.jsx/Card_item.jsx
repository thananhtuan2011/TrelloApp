import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import '../../../../../assets/sass/board_card.scss'


function Card_Iteam(props) {
    
    const [ItemCard,setItemCard]=React.useState([])
    useEffect(()=>
    {
        setItemCard(props.item_card)
    },[props])
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
      } = useSortable({id: props.item_card._id,
        data:{...props.item_card}
      });
    const stylesdnd_card = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : null,
      };
    return (
        <Box className="item_card"  ref={setNodeRef} style={stylesdnd_card} {...attributes} {...listeners} >
                               <Card sx={{ maxWidth: 345 }}>
                                {/* <Img_Card img={item_.cover}></Img_Card> */}
                                 <CardContent>
                                     <Typography gutterBottom variant="h5" component="div">
                                       {ItemCard.title}
                                     </Typography>
                                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                       {ItemCard.description}
                                     </Typography>
                                 </CardContent>
                                 <CardActions className='card_action'>
                                     <Button size="small" startIcon={<GroupIcon></GroupIcon>}>
                                     {
                                         ItemCard.memberIds?ItemCard.memberIds.length:null
                                     }

                                     </Button>
                                     <Button size="small" startIcon={<ModeCommentIcon></ModeCommentIcon>}> 

                                     {
                                          ItemCard.comments?ItemCard.comments.length:null

                                     }</Button>
                                 </CardActions>
                             </Card> 
        </Box>
    );
}

export default Card_Iteam;