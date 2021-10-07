import React from 'react'
import { Filter } from './filter'
import Pokes from './Pokes'
import { Search } from './search'
import './Home.css'
import {Link} from 'react-router-dom'
import Create from '../img/Nuevo Pokemon.png'



export function Home(){
 return (
     <>
     <div id='nav'>
         <Search/>
         <Filter/>
         <Link id='linkBot' to={'/create'}>
      <button id='boton'><img src={Create} alt='New Pokemon!'/></button>
      </Link>
     </div>
     <div id='divPokes'>
         <Pokes/>
     </div>
     </>
 )
}