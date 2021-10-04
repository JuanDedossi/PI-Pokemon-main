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
        if(detapoke.types[0]){
        getImage(detapoke.types[0])}}
        ,[detapoke])
    return(
        <div id='divDeta'>{poke?
            <>
        <h2>{poke.name} - {poke.id}</h2>
        <article id='img-types'>
            <img src={poke.img} alt={poke.name} />
            <ul id='ultypes'>
                    {poke.types?.map(e => <li>{e==='shadow'? <span id='shadow'>SHADOW</span>: <img className='poketype'  src={getIcon(e)} alt={e}/> }</li>)}
                </ul>
        </article>
        <div id='atributes'>
            <ul>
                <li><span>hp</span>❤️{poke.hp}</li>
                <li>strength💪{poke.strength}</li>
                <li>defense🛡️{poke.defense}</li>
                <li>speed👟{poke.speed}</li>
                <li>heigth📏{poke.height}</li>
                <li>weigth⚖️{poke.weight}</li>
            </ul>
        </div>
            </>        
       :null }
        </div>
    )
}