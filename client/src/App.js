import './App.css';
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {Route,Link} from 'react-router-dom'
import {Home} from './components/home'
import {load, loadTypes} from './actions/actions'
import { Details } from './components/details';
import Create from './components/create';
import Arceus from './img/Arceus.png'
import Mew from './img/Mew.png'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      load().then(data => {
          dispatch(data);
      })
      loadTypes().then(data =>{
          dispatch(data);
      })    
  },[dispatch]);

  return (
    <div className="App">
      <Route exact path={'/'}>
      <Link to={'/home'}>
      <input type='image' id='landing' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} alt='Pokemon'/>
      </Link>
      </Route>
      <Route path={'/home'}>
        <div id='divpokehome'>
      <Link to={'/home'}>
      <img id='pokemonHome' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} alt='Pokemon'/>
      </Link>
      </div>
        <Home />
      </Route>
      <Route path={'/details'}>
      <div id='divpokehome'>
        <Link to={'/home'}>
          <img id='pokemonHome' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} alt='Pokemon'/>
        </Link>
      </div>
      <div className='details'>
        <Details />
      </div>
      </Route>
      <Route path={'/create'}>
        <div id='divpokehome'>
          <Link to={'/home'}>
          <img id='pokemonHome' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} alt='Pokemon'/>
          </Link>
        </div>
        <div id='divCreate'>
          <img id='Arceus' src={Arceus} alt='Arceus'/>
          <Create />
          <img id='Mew' src={Mew} alt='Mew'/>
        </div>
      </Route>
    </div>
  );
}

export default App;
