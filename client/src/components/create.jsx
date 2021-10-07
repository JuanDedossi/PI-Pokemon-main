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
    const [error,seterror] = useState('')



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
            if(e.target.name === 'name' && !e.target.value){
                seterror('danger');
            }else if(e.target.name === 'name' && e.target.value){
                seterror('');
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
    else {
        seterror('danger');
    }
    }

    return (
        <div id='form'>
            <h1>CREATE A NEW POKEMON!</h1>
            <form id='formCreate' onSubmit={add}>
                <label>Name: 
                <input name='name' id={error || 'name'} type='text' placeholder='Name' onChange={inputChange} ></input>
                </label>
                {error? <span id='error'>Name required</span>:null}
                <div id='createImg'>
                <label>img:
                <input name='img' id='inpImg' type='url' placeholder='image' onChange={inputChange} ></input>
                </label>
                <input id='imagenCreate' type='image' src={inputs.img} alt='image' disabled/>
                </div>
                <h3>Atributes</h3>
                <div id='divAtri'>
                    <div id='divAtri1'>
                        <label>HP:
                        <input name='hp' className='atri' type='number' placeholder='0' min='0' max='150' onChange={inputChange} ></input>
                        </label>
                        <label>strength:
                        <input name='strength' className='atri' type='number' min='0' max='150' placeholder='0' onChange={inputChange} ></input>
                        </label>
                        <label>defense:
                        <input name='defense' className='atri' type='number' placeholder='0' min='0' max='150' onChange={inputChange} ></input>
                        </label>
                    </div>
                    <div id='divAtri2'>
                        <label>speed:
                        <input name='speed' className='atri' type='number' placeholder='0' min='0' max='150' onChange={inputChange} ></input>
                        </label>
                        <label>height:
                        <input name='height' className='atri' type='number' placeholder='0' min='0' max='30' onChange={inputChange} ></input>
                        </label>
                        <label>weight:
                        <input name='weight' className='atri' type='number' placeholder='0' min='0' max='1500' onChange={inputChange} ></input>
                        </label>
                    </div>
                </div>
                <h3>Types</h3>
                <div id='divSelects'>
                    <label name='types'>Type1: 
                        <select name='types' onChange={inputChange}>
                            <option name='types' value='type1 none'>none</option>
                            {types.map(e => (
                                <option key={e.name} name='types' value={'type1 ' + e.name}>{e.name}</option>
                            ))}
                        </select>
                    </label>
                    <label name='types'>Type2: 
                        <select name='types' onChange={inputChange}>
                            <option name='types' value='type2 none'>none</option>
                                {types.map(e => (
                                    <option key={e.name + 2} name='types' value={'type2 ' + e.name}>{e.name}</option>
                                ))}
                        </select>
                    </label>
                </div>
                <input id='submit' type='submit' value='Create'/>
            </form>
        </div>
    )
}