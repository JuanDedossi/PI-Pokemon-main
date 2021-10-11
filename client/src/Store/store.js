import {createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { capitalize } from '../helper/capitalize';

const inicialState = {
    all: [], //todos pokes
    loads: [],// poke filtrados 
    types:[],
    details: {},
}

function rootReducer(state = inicialState,actions) {
    switch (actions.type){
        case 'LOAD': return{
            ...state,
            loads: [...actions.pokes].map(e => {return {...e,name:capitalize(e.name)}}),
            all:actions.pokes.map(e => {return {...e,name:capitalize(e.name)}})
        }
        case 'CHARGE':{
            if(!state.all.map(e => e.name).includes(capitalize(actions.poke.name))){
            return{
            ...state,
            all:[{...actions.poke,name:capitalize(actions.poke.name)},...state.all],
            loads:[{...actions.poke,name:capitalize(actions.poke.name)},...state.all]
        }}
        else{
            return {...state}
        }
    }
        case 'TYPES':return{
            ...state,
            types: actions.types
        }
        case 'DETAILS':return{
            ...state,
            details: actions.poke
        }
        case 'FILTER':{
                if(actions.order ==='none')return{
                    ...state,
                    loads:[]
            }
                if(actions.order === 'ASC'){
                    return{
                    ...state,
                    loads: [...state.loads].sort((a,b) => {if (a[actions.fil] > b[actions.fil]){
                        return 1;
                    }
                    if (a[actions.fil] < b[actions.fil]) {
                        return -1;
                    }
                    return 0;})
            }}
                else if(actions.order === 'DESC'){
                    return{
                        ...state,
                        loads: [...state.loads].sort((a,b) => {if (a[actions.fil] < b[actions.fil]) {
                            return 1;
                        }
                        if (a[actions.fil] > b[actions.fil]) {
                            return -1;
                        }
                        return 0;})
                }
            }
            return{
                ...state,
                loads: [...state.all]
            }
            }
            case 'FILTERTYPE':{
                    if(actions.order === 'all'){
                        return{
                            ...state,
                            loads:[...state.all]
                    }
                }
                    else{
                        return{
                            ...state,
                            loads:[...state.all].filter(e => e.types?.includes(actions.order)? {...e}:null)
                        }
                    }
            }
            case 'FILTERCREATE':{
                if(actions.fil === 'cre'){
                return{
                    ...state,
                    loads:[...state.all].filter(e => {
                        if(typeof e.id === 'string'){
                        return true;
                    }
                return false;})
            }}
            else if(actions.fil === 'ncre'){
                return{
                    ...state,
                    loads:[...state.all].filter(e => {
                        if(typeof e.id === 'number'){
                            return true;
                        }
                    return false;})
                }
            }
            break;
        }
        default: return state;  
    }
    
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;