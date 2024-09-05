import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import _Card from './Card/_Card';
function List_Card(props) {
    return (
        <Box>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image="https://img.pikbest.com/ai/illus_our/20230418/64e0e89c52dec903ce07bb1821b4bcc8.jpg!w700wp"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions className='card_action'>
            <Button size="small" startIcon={<GroupIcon></GroupIcon>}>
                20
            </Button>
            <Button size="small" startIcon={<ModeCommentIcon></ModeCommentIcon>}>10</Button>
        </CardActions>
    </Card>
    {/*  load card */}
        <_Card></_Card>
    </Box>
    );
}

export default List_Card;