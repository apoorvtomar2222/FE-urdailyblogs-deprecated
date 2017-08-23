import {FETCH_ARTICLE} from '../actions/index';
const INITIAL_STATE ={all:[],article:null};

export default function(state=INITIAL_STATE,action){
    console.log("Action type in reducer_article",action.type);
  
        console.log(action.payload,"Action type in reducer_article");
  
    
    switch(action.type){ 
        
        case FETCH_ARTICLE:
            return{ ...state,all:action.payload.data};
        default:
        return state;
    }
} 

