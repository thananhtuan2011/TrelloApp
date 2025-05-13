import axios from 'axios';
import { API_ROOT } from '../utils/constant';
export const fetchLoginAPI = async (payload) => {

   const request = await axios.post(API_ROOT + `/v1/user/login`, payload)
   return request.data;
}
