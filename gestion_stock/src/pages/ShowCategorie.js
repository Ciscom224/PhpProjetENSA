import axios from 'axios';
import React,{Component} from 'react';
import { Link, useParams } from 'react-router-dom';


function ShowCategorie() {
    
    const { id } = useParams()
   const  res=axios.get(`http://127.0.0.1:8001/api/categorie/${id}`)
    console.log(id);
 
    
       return(
           <h1>afficher les information sur le categorie dont id est {id}</h1>
       )
   
}
export default ShowCategorie