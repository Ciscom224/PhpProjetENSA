import React from 'react';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accuiel'
import Fournisseur from './components/Fournisseur';
import Caisse from './components/Caisse';
import Message from './components/Message';
import AddFour from './pages/AddFour';
import ListCategorie from './components/ListCategorie';
import ShowCategorie from './pages/ShowCategorie';
import Login from './pages/Login';

function App() {
  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>} />
        <Route exact path="/accueil" element={<Accueil/>} />
        <Route exact path="/commander" element={<Fournisseur/>} />
        <Route exact path="/caisses" element={<Caisse/>} />
        <Route exact path="/messages" element={<Message/>} />
        <Route exact path="/addFournisseur" element={<AddFour/>} />
        <Route exact path="/accueil/showCategorie/:id" element={<ShowCategorie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
