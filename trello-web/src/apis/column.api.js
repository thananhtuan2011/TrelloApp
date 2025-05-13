import axios from 'axios';
import { API_ROOT } from '../utils/constant';

 export  const  fectCreateColumn= async (payload)=>
 {
    const request= await axios.post(API_ROOT+`/v1/column/createdColumn`,payload)
    return request.data;
 }
 
