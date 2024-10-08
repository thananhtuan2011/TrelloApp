import { Box, Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material';
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


function Broads(props) {
  
     const { id } = useParams();
    const { mode, setMode } = useColorScheme();
    const { t, i18n } = useTranslation();
  
    const handleDragEnd = (event) => {
        console.log("handleDragEnd", event);

    }
    const sampleData = {
        columns: [{ id: 1, title: "Column 1" }, { id: 2, title: "Column 2" }]
      };
    const [board, setBoardLayout] = React.useState({});
    const fetchData = async () => {
        try {
          const res = await fectGetAllColumnsBoard("66f0f42fe0b2996f0ab3b3f4");
          console.log("API response:", res);
          console.log("Before setting state, board:", board); // Check the state before setting
          setBoardLayout(res);  // Set the state
          console.log("After setting state, board:", board); 
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      };
    
  
    useEffect(() => {
        fetchData() 
        // Fetch data when component mounts
        // fectGetAllColumnsBoard("66f0f42fe0b2996f0ab3b3f4").then(res => {
        //   console.log("API response:", res);
        //   setBoardLayout({ ...res });  // This triggers a re-render
        // });
      }, []);  // Empty dependency array, runs only once when the component mounts
      
      // Log updated `board` after it changes
    
        
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

                <Container maxWidth='false' >
                    {/* <DndContext onDragEnd={handleDragEnd}> */}
                    <Box className='flex overflow-x-auto body_board '>
                        {
                            <Board_Card item_={board?.CloumnInBoard}
                            ></Board_Card>
                        }

                        <Button style={{ minWidth: '160px' }} size='medium' className='!text-white  h-9 !border-none !bg-sky-400 hover:!bg-sky-700 !ml-3'>

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