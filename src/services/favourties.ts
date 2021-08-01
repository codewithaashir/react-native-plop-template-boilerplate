import Axios from 'axios'; 

const FavourtiesPut = (params:any) => {
    return Axios.put(baseUrl, params);
} 
export default FavourtiesPut;
