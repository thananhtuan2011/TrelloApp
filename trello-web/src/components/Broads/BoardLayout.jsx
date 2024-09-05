import { Box, Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material';
import React from 'react';
import theme_ from '../../theme';
import Appbar from '../Appbar/Appbar';
import { useTranslation } from 'react-i18next';
import Board_bar from './board_bar';
import Board_Card from './Board_Card/Board_Card';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import '../../assets/sass/board_card.scss'
import { mockData } from '../../apis/mock-data';


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


            <Box className='flex items-center w-full overflow-x-auto' style={{
                height: theme_.trello.board_bar, backgroundColor:
                    mode === 'dark' ? 'rgb(70 87 105)' : 'rgb(70 152 233)'
            }}>
                <Container maxWidth='false'>
                    <Board_bar dtboard={mockData.board}></Board_bar>
                </Container>

            </Box>
            {/* load broad */}
            <Box style={{
                height: theme_.trello.body_content, backgroundColor:
                    mode === 'dark' ? 'rgb(70 87 105)' : 'rgb(70 152 233)'
            }} >
                <Container maxWidth='false' >
                    <Box className='flex overflow-x-auto body_board '>
                        {
                                        <Board_Card item_={mockData?.board.columns
                                        }></Board_Card>
                          
                        }



                        <Button style={{ minWidth: '160px' }} size='medium' className='!text-white  h-9 !border-none !bg-sky-400 hover:!bg-sky-700 !ml-3'>

                            <span style={{ minWidth: '140px' }} className='flex items-center'>
                                <ControlPointIcon className='mr-1'></ControlPointIcon>
                                Add new column
                            </span>
                        </Button>

                    </Box>

                </Container>

            </Box>



        </>
    );
}

export default Broads;