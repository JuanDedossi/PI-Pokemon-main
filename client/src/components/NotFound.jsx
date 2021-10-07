import React from 'react'
import Sad from '../img/Gastly_Sad.png'
import './NotFound.css'


export function NotFound(){
    return(
        <div id='divNot'>
            <img id='imgNot' src={Sad} alt='Not Found' />
            <span>Not Found</span>
        </div>
    )
}