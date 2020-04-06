import { vehicles_data } from '../action_Types/index';

const Reducer = (state, action)=>{
    switch(action.type){
        case vehicles_data: 
        return action.data;
    }
}


export default Reducer;