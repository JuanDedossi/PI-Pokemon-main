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
        catch(e){
            alert('Pokemon no existente');
        }}
    }
    return (
        <div>
            <form id='search'>
                <input type="search" placeholder="Pokemon..." onChange={change} ></input>
                <button type="submit" onClick={look}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaanbAag6ePjDzg6NFH1WYcsalAmfJTEhIHihdIMyU81BEVQFJdbjKasgAB5hinAoO7bw&usqp=CAU" alt='pokebola'/></button>
            </form>
        </div>
    )
}