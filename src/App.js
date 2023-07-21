import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import {Login} from './auth/Login';
import { Logout} from './auth/Logout';
import { Link,Route,Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import "./index.css";


function App() {
  const {isAuthenticated} =useAuth0();
  return (
    <div className="App">
      <header className="App-header">
         {isAuthenticated ? (
          <>
          
          <nav> 
          <div className='btn-encabezado'><Link to='/favorites' > Favoritos</Link> </div>
          <div className='btn-encabezado'><Link to='/home' > Home </Link></div>
          <div className='btn-encabezado'><Link to='/logout' > Logout  </Link></div>
          </nav>
          
          </>
         ): (
          <Login/>
         )}  
      </header>
      <body className='menu-item'>
      <img src='https://cdn.pixabay.com/photo/2013/10/04/21/13/woman-190897_1280.jpg' alt='opacity: 90;'/>
      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<SearchBar />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      </body>
    </div>
  );
}

export default App;