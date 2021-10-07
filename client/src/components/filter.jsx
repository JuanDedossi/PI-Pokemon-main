import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import './Filter.css'
import {filter, filterType,filterCreate} from '../actions/actions';

export function Filter(){
    const alltypes = useSelector(state => state.types);
    const dispatch = useDispatch()

    const changeOrder = e => {
        if(e.target.value.split(' ')[1] === 'cre' || e.target.value.split(' ')[1] === 'ncre'){
            dispatch(filterCreate(e.target.value))
        }
        else{
            dispatch(filter(e.target.value))
        }
    }
    const changeOrderType = e => {
        dispatch(filterType(e.target.value))
    }


return(
    <div>
        <label name='name'>Order for : 
        <select id='filter' name='name' onChange={changeOrder}>
            <option >Order</option>
            <option value='ASC name'>A-Z</option>
            <option value='DESC name'>Z-A</option>
            <option value='DESC strength'>Strength: High to Low</option>
            <option value='ASC strength'>Strength: Low to High</option>
            <option value='ASC cre'>Created</option>
            <option value='DESC ncre'>Api</option>
        </select>
        </label>
        <label name='name'>Only this type: 
        <select name='name' onChange={changeOrderType}>
            <option value='all'>all</option>
            {alltypes.map(e => (
                <option key={e.name} value={e.name}>{e.name}</option>
            ))}
        </select>
        </label>
    </div>
)
}