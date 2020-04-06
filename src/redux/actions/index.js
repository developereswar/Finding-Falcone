import {vehicles_data} from '../action_Types/index';
import Axios from 'axios';

export const vehicles = () => {
    let url = "https://findfalcone.herokuapp.com/vehicles";

    Axios.get(url).then((result)=>{
        return {
            type : vehicles_data,
            data : result
        }
    }).catch((error)=>{
        console.log(error)
    })
}