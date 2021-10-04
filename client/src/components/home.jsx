import React from 'react'
import { Filter } from './filter'
import Pokes from './Pokes'
import { Search } from './search'
import './Home.css'
import {Link} from 'react-router-dom'



export function Home(){
 return (
     <>
     <div id='nav'>
         <Search/>
         <Filter/>
         <Link to={'/create'}>
      <button id='boton'>New Pokémon !</button>
      </Link>
     </div>
         <Pokes/>
         <div id='footer'>
         </div>
     </>
 )
}