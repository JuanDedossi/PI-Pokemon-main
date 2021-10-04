import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { create } from '../actions/actions'
import './Create.css'

export default function Create(){
    const [inputs,setinputs] = useState({name:'',hp:0,strength:0,defense:0,speed:0,weight:0,height:0,img:'https://i.ibb.co/RjVZRh1/pixlr-bg-result.png',types:[],type1:[],type2:[]})
    const types = useSelector(state => state.types);
    const dispatch = useDispatch();
    let history = useHistory();



    const inputChange = function (e){
        if(e.target.name === 'types'){
            setinputs(prev => {
                const [num,value] = e.target.value.split(' ');
                if(num === 'type1'){
                    let aux;
                    if(value === 'none'){
                        aux = [];
                    }
                    else{aux = [value];}
                    let aux2 = [...aux,...prev.type2];
                   return prev = {...prev,type1:aux,types:aux2}
                }
                else{
                    let aux;
                    if(value === 'none'){
                        aux = [];
                    }
                    else{aux = [value];}
                    let aux2 = [...prev.type1,...aux];
                   return prev = {...prev,type2:aux,types:aux2}
                }
            })
        }
        else{
            if(e.target.name === 'img' && !e.target.value){
                return setinputs(prev => prev ={...prev,[e.target.name]:'https://i.ibb.co/RjVZRh1/pixlr-bg-result.png'}) 
            }
            else if(e.target.name !== 'name' && !e.target.value){
                return setinputs(prev => prev ={...prev,[e.target.name]:0})  
            }
            return setinputs(prev => prev ={...prev,[e.target.name]:e.target.value}) 
        }
    }

    const add = async function (e){
        e.preventDefault();
        if(inputs.name){
        let poke =await create(inputs);
        dispatch({type:'CHARGE',poke});
        setTimeout(() =>  history.push('/home'),100);
    }
    else alert('Name required')
    }

    return (
        <div id='form'>
            <form id='formCreate' onSubmit={add}>
                <label>Name: 
                <input name='name' type='text' placeholder='Name' onChange={inputChange} ></input>
                </label>
                <label>HP:
                <input name='hp' type='number' placeholder='0' min='0' max='150' onChange={inputChange} ></input>
                </label>
                <label>strength:
                <input name='strength' type='number' min='0' max='150' placeholder='0' onChange={inputChange} ></input>
                </label>
                <label>defense:
                <input name='defense' type='number' placeholder='0' min='0' max='150' onChange={inputChange} ></input>
                </label>
                <label>speed:
                <input name='speed' type='number' placeholder='0' min='0' max='150' onChange={inputChange} ></input>
                </label>
                <label>height:
                <input name='height' type='number' placeholder='0' min='0' max='30' onChange={inputChange} ></input>
                </label>
                <label>weight:
                <input name='weight' type='number' placeholder='0' min='0' max='1500' onChange={inputChange} ></input>
                </label>
                <div id='createImg'>
                <label>img:
                <input name='img' type='url' placeholder='image' onChange={inputChange} ></input>
                </label>
                <input id='imagenCreate' type='image' src={inputs.img} alt='image' disabled/>
                </div>
                <label name='types'>Type1: 
                <select name='types' onChange={inputChange}>
                    <option name='types' value='type1 none'>none</option>
                    {types.map(e => (
                        <option name='types' value={'type1 ' + e.name}>{e.name}</option>
                    ))}
                </select>
                </label>
                <label name='types'>Type2: 
                <select name='types' onChange={inputChange}>
                  <option name='types' value='type2 none'>none</option>
                    {types.map(e => (
                        <option name='types' value={'type2 ' + e.name}>{e.name}</option>
                    ))}
                </select>
                </label>
                <input type='submit'/>
            </form>
        </div>
    )
}