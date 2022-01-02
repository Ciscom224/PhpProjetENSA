import { CardGroup} from 'react-bootstrap';
import React, { Component, useEffect } from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Article from './Article';
import axios from "axios";
class ListCategorie extends Component {

    state={
        listcat:[],
        message_id:''
    }
    async componentDidMount(){
        const  res=axios.get(`http://127.0.0.1:8001/api/produit/listCat`)
        console.log(res.data);
            this.setState({
                listcat:res.date.catelist,
                message_id:2
            })
            
      }
    render(){
    const plantList = {
        1:'Alimentation',
        2:'Laitiere',
        3:'Patisserie',
        4:'Autres',
    }
    const qt=10
    return (
        <CardGroup>


               <Link to={`showCategorie/${1}`} style={{textDecoration:'none' }}>
                    <Article md={5} nomCategorie='Alimentation' quantity={100}/>
                </Link>
                <Link to={`showCategorie/${2}`} style={{textDecoration:'none' }}>
                    <Article  nomCategorie='Laitiere' quantity={100}/>
                </Link>
                <Link to={`showCategorie/${3}`} style={{textDecoration:'none' }}>
                    <Article  nomCategorie='Patisserie' quantity={100}/>
                </Link>
                <Link to={`showCategorie/${4}`} style={{textDecoration:'none' }}>
                    <Article  nomCategorie='Autres' quantity={100}/>
                </Link>
                    
        </CardGroup>
    )
    }
}
export default ListCategorie;