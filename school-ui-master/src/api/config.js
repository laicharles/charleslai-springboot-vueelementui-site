import axios from 'axios';

let BaseURL;
/*if (process.env === 'development') {
	BaseURL = 'http://172.28.170.169:8080/api';
}else{
  BaseURL = 'http://172.28.170.169:8080/api';
};*/
BaseURL = 'http://172.28.170.169:8080/api';

axios.defaults.headers.common['accessToken'] = 123;
axios.defaults.headers.common['projId'] = 213;

export {BaseURL,axios};
