import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { search } from '../actions/actions';
import {useHistory} from 'react-router-dom'
import './Search.css'

export function Search(){
    const [input,setinput] = useState({text:''});
    const dispatch = useDispatch();
    let history = useHistory();

    const change = function(e){
        setinput({text:e.target.value});
    }
   const look = async(e) =>{
        e.preventDefault();
        if(input.text){
        try{
            let busqueda = await search(input.text);
                dispatch(busqueda);
               setTimeout(() => history.push('/details'),100) 
        }
        catch{
            setinput({text:''})
            dispatch({type:'FILTER',order:'none'})
        }}
        else{
            dispatch({type:'FILTERTYPE',order:'all'})
        }
    }
    return (
        <div>
            <form id='search'>
                <input type="search" placeholder="Pokemon..." onChange={change} value={input.text}></input>
                <button type="submit" onClick={look}><img src="https://thumbs.gfycat.com/EachWellinformedAidi-size_restricted.gif" alt='pokebola'/></button>
            </form>
        </div>
    )
}