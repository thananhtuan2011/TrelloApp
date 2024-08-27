import { Box, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material';
import React from 'react';
import theme_ from '../../theme';
import Appbar from '../Appbar/Appbar';
import { useTranslation } from 'react-i18next';
function Broads(props) {
    const { mode, setMode } = useColorScheme();
    const { t, i18n } = useTranslation();
    return (
        <>
            <CssBaseline />


            <Box className='flex items-center' style={{
                height: theme_.trello.header, backgroundColor:
                    mode === 'dark' ? '#34495e' : '#1976d2'
            }}>
                <Container maxWidth="false">
                    <Appbar mode={mode}></Appbar>
                </Container>
            </Box>


            <Box style={{
                height: theme_.trello.board_bar, backgroundColor:
                    mode === 'dark' ? '#34495e' : 'rgb(70 152 233)'
            }}>
                <Container maxWidth='false'>
                    <div>
                        {t('welcome')}
                    </div>
                </Container>

            </Box>
            <Box style={{
                height: theme_.trello.body_content, backgroundColor:
                    mode === 'dark' ? '#34495e' : 'rgb(70 152 233)'
            }} >
                <Container maxWidth='false'>
                    <div className='mr-5'>

                    </div>
                </Container>

            </Box>



        </>
    );
}

export default Broads;