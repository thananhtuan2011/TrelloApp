import { Box, Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, TextField, useColorScheme } from '@mui/material';
import React from 'react';
import theme_ from '../../theme';
import Appbar from '../Appbar/Appbar';
import { useTranslation } from 'react-i18next';
import Board_bar from './board_bar';
import Board_Card from './Board_Card/Board_Card';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import '../../assets/sass/board_card.scss'
import { DndContext } from '@dnd-kit/core';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fectGetAllColumnsBoard } from '../../apis/board.api';
import CloseIcon from '@mui/icons-material/Close';
import { fectCreateColumn } from '../../apis/column.api';

function Broads(props) {
    const [board, setBoardLayout] = React.useState({});
    const [test, setTest] = React.useState(null);
    const [isnewCol, setIsnewCol] = React.useState(false);
    const [newCol, setnewCol] = React.useState(null);
    const { id } = useParams();
    const { mode, setMode } = useColorScheme();
    const { t, i18n } = useTranslation();

    const handleDragEnd = (event) => {
        console.log("handleDragEnd", event);

    }
    const fetchData = async () => {
        try {
            const res = await fectGetAllColumnsBoard(id);
            setBoardLayout(res);  // Set the state
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    const newColum = () => {
        setIsnewCol(true)
    }
    const testFuntion = (value) => () => {
        alert(value)
    }
    const close_clomun = () => {
        setIsnewCol(false)
    }
    const _handleKeyDown = () => {
        let payload = {
            title: newCol,
            boardId: id,
            cardOrderIds: []
        }
        fectCreateColumn(payload).then(res => {
            if(res)
            {
                fetchData()
                setIsnewCol(false)
            }


        }
        ).catch()
        {

        }

    }

    useEffect(() => {
        fetchData()

    }, [id]);

    return (
        <>
            <CssBaseline />

            {/* 
            <Box className='flex items-center' style={{
                height: theme_.trello.header, backgroundColor:
                    mode === 'dark' ? '#34495e' : '#1976d2'
            }}>
                <Container maxWidth="false"> */}
            <Appbar mode={mode}></Appbar>
            {/* </Container>
            </Box> */}


            <Box className='flex items-center w-full overflow-x-auto' style={{
                height: theme_.trello.board_bar, backgroundColor:
                    mode === 'dark' ? 'rgb(70 87 105)' : 'rgb(70 152 233)'
            }}>
                <Container maxWidth='false'>
                    <Board_bar _id={id}></Board_bar>
                </Container>
            </Box>
            {/* load broad */}

            <Box style={{
                height: theme_.trello.body_content, backgroundColor:
                    mode === 'dark' ? 'rgb(70 87 105)' : 'rgb(70 152 233)'
            }} >
                {/*  condition check  same ngIf */}
                {test &&
                    <h2>
                        You have
                    </h2>
                }
                <Container maxWidth='false' >
                    {/* <DndContext onDragEnd={handleDragEnd}> */}
                    <Box className='flex overflow-x-auto body_board '>
                        {
                            <Board_Card testFuntion={testFuntion} item_={board?.CloumnInBoard}
                            ></Board_Card>
                        }
                        {
                            isnewCol ?
                                <div>
                                    <TextField onChange={(e) => setnewCol(e.target.value)} onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            _handleKeyDown()
                                        }
                                    }} style={{ marginTop: 2 }} id="outlined-basic" placeholder='New Column' variant="outlined" />
                                    <CloseIcon onClick={close_clomun}></CloseIcon>
                                </div>

                                : null
                        }

                        <Button onClick={newColum} style={{ minWidth: '160px' }} size='medium' className='!text-white  h-9 !border-none !bg-sky-400 hover:!bg-sky-700 !ml-3'>

                            <span style={{ minWidth: '140px' }} className='flex items-center'>
                                <ControlPointIcon className='mr-1'></ControlPointIcon>
                                Add new column
                            </span>
                        </Button>

                    </Box>
                    {/* </DndContext> */}
                </Container>
            </Box>



        </>
    );
}

export default Broads;