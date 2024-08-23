import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import theme_ from '../../theme';
import Appbar from '../Appbar/Appbar';
import { useTranslation } from 'react-i18next';
function Broads(props) {
    const { t, i18n } = useTranslation();
    return (
        <>
        <CssBaseline />
        

            <Box className='flex items-center' style={{ height: theme_.trello.header }}>
                <Appbar></Appbar>
            </Box>
            <Box>
                <div style={{ color: 'red' }}>
                {t('welcome')}
                </div>
            </Box>
            <Box >
                Contntn
            </Box>

        </>
    );
}

export default Broads;