import React from 'react'
import {Link} from 'react-router-dom'

export default function PokeHome(){
    return(
        <div id='divpokehome'>
            <Link to={'/home'}>
             <img id='pokemonHome' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} alt='Pokemon'/>
            </Link>
        </div>
    )
}