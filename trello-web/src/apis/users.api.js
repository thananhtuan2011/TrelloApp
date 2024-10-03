import axios from 'axios';
import { API_ROOT } from '../utils/constant';
import  Cookies from 'js-cookie';
 export  const  fetchLoginAPI= async (payload)=>
 {
    
    const request= await axios.post(API_ROOT+`/v1/user/login`,payload)
    console.log("Login",request.data);
    return request.data;
 }