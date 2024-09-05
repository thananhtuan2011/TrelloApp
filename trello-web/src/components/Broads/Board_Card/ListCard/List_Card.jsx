import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
function List_Card(props) {
    const {item_card}=props
    console.log("item_card",item_card);
    
    return (
        <Box className='mb-3'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image="https://img.pikbest.com/ai/illus_our/20230418/64e0e89c52dec903ce07bb1821b4bcc8.jpg!w700wp"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item_card.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item_card.description}
            </Typography>
        </CardContent>
        <CardActions className='card_action'>
            <Button size="small" startIcon={<GroupIcon></GroupIcon>}>
            {
                item_card.memberIds?item_card.memberIds.length:null
            }
                
            </Button>
            <Button size="small" startIcon={<ModeCommentIcon></ModeCommentIcon>}> 
            
            {
                 item_card.comments?item_card.comments.length:null
            
            }</Button>
        </CardActions>
    </Card>
    </Box>
    );
}

export default List_Card;