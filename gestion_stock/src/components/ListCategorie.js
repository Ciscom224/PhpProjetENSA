import { CardGroup} from 'react-bootstrap';
import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Article from './Article';
function ListCategorie() {
    const plantList = [
        'monstera',
        'ficus lyrata',
        'pothos argenté',
        'yucca',
        'palmier'
    ]
    const qt=10
    return (
        <CardGroup>


            {plantList.map((plant) => (
               <Link to={`showCategorie/${qt}`} style={{
                   textDecoration:'none'
               }}>
                    <Article 
                    nomCategorie={plant} 
                    quantity={qt+11}
                    
                
                />
                </Link>
                    
                    )) }
        </CardGroup>
    )
}
export default ListCategorie;