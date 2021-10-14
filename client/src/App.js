import './App.css';
import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux';
import {Route,Link} from 'react-router-dom'
import {Home} from './components/home'
import {load, loadTypes} from './actions/actions'
import { Details } from './components/details';
import Create from './components/create';
import Arceus from './img/Arceus.png'
import Mew from './img/Mew.png'
import PokeHome from './components/PokeHome';
import Error from './img/500-error.jpg'


function App() {

  const dispatch = useDispatch()
  const [error,seterror] = useState(false);

  useEffect(() => {
      load().then(data => {
          dispatch(data);
      }).catch(() => seterror(true))
      loadTypes().then(data =>{
          dispatch(data);
      }).catch(() => seterror(true))
  },[dispatch]);

  const clickLanding = () => {
    document.querySelector('body').style.backgroundImage = 'url()';  
  }
  return (
    <div className="App">
      <Route exact path={'/'}>
      <Link to={'/home'} onClick={clickLanding}>
      <input type='image' id='landing' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} alt='Pokemon'/>
      </Link>
      </Route>
      <Route path={'/home'}>
       <PokeHome/>
        {!error?<Home/>:<img id='error' src={Error} alt='Error 500'/>}
      </Route>
      <Route path={'/details'}>
      <PokeHome/>
      <div className='details'>
        <Details />
      </div>
      </Route>
      <Route path={'/create'}>
      <PokeHome/>
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
