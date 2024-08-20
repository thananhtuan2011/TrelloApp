import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import DarkLight from '../DarkLightSelect/DarkLight';
import theme_ from './theme';
function broads(props) {
    return (
        <>
        <CssBaseline /><Container maxWidth="false">
            <Box className='flex items-center' style={{ height: theme_.trello.header }}>
                <DarkLight></DarkLight>
            </Box>
            <Box>
                <div style={{ color: 'red' }}>
                    Boorad bard
                </div>
            </Box>
            <Box>
                Contntn
            </Box>
        </Container>
        </>
    );
}

export default broads;