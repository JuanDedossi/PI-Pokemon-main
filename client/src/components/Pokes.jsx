import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import getIcon from '../helper/getIcon';
import './Pokes.css'
import left from '../img/izq.png';
import right from '../img/der.png'


export default function Pokes(){

    const allpokes = useSelector(state => state.loads);
    const [pokes,setpokes] = useState(allpokes.slice(0,12));
    const [cant,setcant] = useState(0)
    const [page,setpage] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        document.querySelector('body').style.backgroundImage = 'url()';  
    },[])
    useEffect(() => {
    setpokes(allpokes.slice(0,12))
    setcant(Math.ceil(allpokes.length/12))
    setpage(0);
    },[allpokes])

    
    useEffect(() =>{
        setpokes(allpokes.slice(12*page,12*(page+1)))
    },[page])
    
    const changePokes =(e) => {
            if(e.target.attributes.value.value === 'NEXT' && page < cant-1){
                 setpage(prev => prev + 1);
            }
            if(page > 0 && e.target.attributes.value.value === 'PREV'){setpage(prev => prev - 1);}
        
    }
    function details(e){
        dispatch({
            type:'DETAILS',
            poke:allpokes.find(j => j.name===e.target.alt)
        });
    }
    return (
        <>
      {pokes.length?<div className='contPage'>
          <button className='prev' value='PREV' onClick={(e) => changePokes(e)} ><img value='PREV' src={left} alt='Prev'/></button>
          <input className='numpage' type='Text' disabled='disabled' value={page}/>
          <button className='prev' onClick={(e) => changePokes(e)} ><img value='NEXT' src={right} alt='Next'/></button>
          </div>:null}
        <div id='all'>
            {pokes.length? pokes.map(e => (
                <div key={e.id} className='pokes'>
                    <p>{e.name}</p>
                    <Link to='/details' onClick={details} id='link'>
                    <img className='pokefoto' src={e.img} alt={e.name}></img>
                    </Link>
                        <article>
                    {e.types?.map(j => {
                        if(j === 'shadow'){
                            return (
                                <span id='shadow'>SHADOW</span>
                            )
                        }
                        return <img className='poketype'  src={getIcon(j)} alt={j}/>
                    }
                          )
                          }
                          </article>
                </div>
            )):<div id='contLoad'>
            <img id='loading' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs' alt='Loading'></img>
            <p>Catching pokemons</p>
            </div>}
        </div>
        {pokes.length?<div className='contPage'>
          <button className='prev' value='PREV' onClick={(e) => changePokes(e)} ><img value='PREV' src={left} alt='Prev'/></button>
          <input className='numpage' type='Text' disabled='disabled' value={page}/>
          <button className='prev' onClick={(e) => changePokes(e)} ><img value='NEXT' src={right} alt='Next'/></button>
          </div>:null}
        </>
    )
}
