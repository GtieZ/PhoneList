import axios from 'axios';
import { global } from './Global';


async function apiRequest() {
    const url = global.url;
    const endpoint = url + "/api/phones/"
    let response = await axios.get(endpoint);

    if(response.status == 200){
        return response.data;
    }
    else{
        alert('Back-end response error!');
    }
      
}


export default apiRequest;