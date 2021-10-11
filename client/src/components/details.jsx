import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux';
import getIcon from '../helper/getIcon';
import getImage from '../helper/getImage';
import './Details.css'

export function Details(){
    const [poke,setpoke] = useState(0);
    const detapoke = useSelector(state => state.details);
    useEffect(() =>{
        setpoke(detapoke)
        if(detapoke.types[0]){ //Se puede modificar
        getImage(detapoke.types[0])}
    else getImage()}
        ,[detapoke])
    return(
        <div id='divDeta'>{poke?
            <>
        <h2>{poke.name} - {poke.id}</h2>
        <article id='img-types'>
            <img src={poke.img} alt={poke.name} />
            <ul id='ultypes'>
                    {poke.types?.map(e => <li>{e==='shadow'? <span key={e} id='shadow'>🌙SHADOW</span>: <img key={e} className='poketype'  src={getIcon(e)} alt={e}/> }</li>)}
                </ul>
        </article>
        <div id='atributes'>
            <ul>
                <li>HP❤️{poke.hp}</li>
                <progress className='progress hp' id='hp' max='150' value={poke.hp}/>
                <li>Strength💪{poke.strength}</li>
                <progress className='progress st' max='150' value={poke.strength}/>
                <li>Defense🛡️{poke.defense}</li>
                <progress className='progress def' max='150' value={poke.defense}/>
                <li>Speed👟{poke.speed}</li>
                <progress className='progress sp' max='150' value={poke.speed}/>
                <li>Heigth📏{poke.height}</li>
                <li>Weigth⚖️{poke.weight}</li>
            </ul>
        </div>
            </>        
       :null }
        </div>
    )
}