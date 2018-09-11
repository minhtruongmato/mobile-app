import axios from 'axios';
import * as config from './constants/Config';

export default (endpoint, method = 'GET', data) => {
	return 	axios({
	    		method: method,
	    		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	    		url: `${config.API_URL}/${endpoint}`,
	    		data: data,
	    	}).catch(function (error) {
	    		console.log('aaa');
	  		});
}