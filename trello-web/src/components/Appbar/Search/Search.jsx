import { Box } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../../../assets/sass/search.scss'
function Search(props) {
    return (
        <>
            <Box className='mr-2 body_search'>
            <SearchIcon style={{color:'#FFFF',position:'absolute', margin:"5px"}}></SearchIcon>
            <input style={{backgroundColor:  props.mode === 'dark' ? '#34495e' : '#1976d2' ,paddingLeft:"30px"}} placeholder='Tìm kiếm' type="text" id="default-input" className="outline-none border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-white block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            </Box>
        </>

    );
}

export default  Search;