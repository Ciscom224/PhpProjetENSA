import React from 'react';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accuiel'
import Fournisseur from './components/Fournisseur';
import Caisse from './components/Caisse';
import Message from './components/Message';
import AddFour from './pages/AddFour';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route exact path="/commander" element={<Fournisseur/>} />
        <Route exact path="/caisses" element={<Caisse/>} />
        <Route exact path="/messages" element={<Message/>} />
        <Route exact path="/addFournisseur" element={<AddFour/>} />
      </Routes>
    </Router>
  );
}

export default App;
