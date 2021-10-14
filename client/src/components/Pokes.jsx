import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import getIcon from '../helper/getIcon';
import './Pokes.css'
import left from '../img/izq.png';
import right from '../img/der.png'
import { NotFound } from './NotFound';
import { Loading } from './Loading';


export default function Pokes(){
    const allPokes = useSelector(state => state.all);
    const filterPokes = useSelector(state => state.loads);
    const [pokes,setpokes] = useState(filterPokes.slice(0,12));
    const [cant,setcant] = useState(0)
    const [page,setpage] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
    setpokes(filterPokes.slice(0,9))
    setcant(Math.ceil(filterPokes.length/9))
    setpage(0);
    },[filterPokes])

    
    useEffect(() =>{
        setpokes(filterPokes.slice(9*page,9*(page+1)))
    },[page,filterPokes])
    
    const changePokes =(e) => {
            if(e.target.attributes.value.value === 'NEXT' && page < cant-1){
                 setpage(prev => prev + 1);
            }
            if(page > 0 && e.target.attributes.value.value === 'PREV'){setpage(prev => prev - 1);}
        
    }
    function details(e){
        dispatch({
            type:'DETAILS',
            poke:filterPokes.find(j => j.name===e.target.alt)
        });
    }
    return (
        <>
      {filterPokes.length?
        <div className='contPage'>
          <button className='prev' value='PREV' onClick={(e) => changePokes(e)} ><img value='PREV' src={left} alt='Prev'/></button>
          <input className='numpage' type='Text' disabled='disabled' value={page}/>
          <button className='prev' onClick={(e) => changePokes(e)} ><img value='NEXT' src={right} alt='Next'/></button>
          </div>:null}
        <div id='all'>
            {allPokes.length? pokes.length? pokes.map(e => (
                <div key={e.id} className='pokes'>
                    <p>{e.name}</p>
                    <Link to='/details' onClick={details} id='link'>
                    <img className='pokefoto' src={e.img} alt={e.name}></img>
                    </Link>
                        <article>
                    {e.types?.map(j => {
                        if(j === 'shadow'){
                            return (
                                <span disabled key={j} id='shadow'>🌙SHADOW</span>
                            )
                        }
                        return <img className='poketype' key={j}  src={getIcon(j)} alt={j}/>
                    }
                          )
                          }
                          </article>
                </div>
            )):<NotFound/>:<Loading/>}
        </div>
        {filterPokes.length?<div className='contPage fix'>
          <button className='prev' value='PREV' onClick={(e) => changePokes(e)} ><img value='PREV' src={left} alt='Prev'/></button>
          <input className='numpage' type='Text' disabled='disabled' value={page}/>
          <button className='prev' onClick={(e) => changePokes(e)} ><img value='NEXT' src={right} alt='Next'/></button>
          </div>:null}
        </>
    )
}
