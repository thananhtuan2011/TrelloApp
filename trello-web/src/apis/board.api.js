import axios from 'axios';
import { API_ROOT } from '../utils/constant';

 export  const  fetchGetBoard= async (_id)=>
 {
    const request= await axios.get(API_ROOT+`/v1/boards/getboardetail/${_id}`)
    return request.data;
 }