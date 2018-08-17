import {BaseURL, axios} from './config';

//-----------------------------------日志列表---------------------------------------------
export const getSystemLogList = params => { return axios.get(`${BaseURL}/systemLog/list`, { params: params })};
//export const getSystemLogList = params => { return axios.put(`${BaseURL}/systemLog/list`, { params: params })};

