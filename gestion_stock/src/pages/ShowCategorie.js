import axios from 'axios';
import React,{Component, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Table} from 'react-bootstrap';

class ShowCategorie extends Component {
    state={
        produits:[],
        id:''

    }
    
    async componentDidMount(){
        const res=axios.post(`http://127.0.0.1:8001/api/categorie/${1}`)
        console.log(res.data);
        this.setState({
          'produits':res.data.messages,
          'loading':false
        })
      }
 
    render(){
    //     var VAR_HTMLTABLE=""
 
    //   if (this.state.loading) {
    //     VAR_HTMLTABLE=<tr><td colSpan={5}><h2>Loading...</h2></td></tr>
    //   } else {
    //     VAR_HTMLTABLE=
    //     this.state.messages.map((item)=>{
    //       return(
          
    //         <tr key={item.message_id}>
    //             <td>{item.nom}</td>
    //             <td>{item.prenom}</td>
    //             <td>{item.titre}</td>
    //             <td>
    //               <Link to={`showMessage/${item.message_id}`} >
    //                 <ion-icon name="mail-open"></ion-icon>
    //               </Link>
    //             </td>
    //             <td>
    //               <Link to={`delMessage/${item.message_id}`} >
    //                 <ion-icon name="close"></ion-icon>
    //               </Link>
    //             </td>
    //         </tr>
    //       )
    //     })
    //   }
       return(

        <div className='container'>
     <h2 style={{'textAlign':'center'}} >Alimentation General</h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Designation</th>
            <th>Quantité</th>
            <th>Prix Unitaire</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P_22_01</td>
            <td>Farine</td>
            <td>100</td>
            <td>10 Dhs</td>
          </tr>
          <tr>
            <td>P_22_21</td>
            <td>Couscous</td>
            <td>300</td>
            <td>12 Dhs</td>
          </tr>
        </tbody>
      </Table>
        <Button type="submit" className='btn btn-danger'>
            <Link to={`/accueil`} style={{textDecoration:'none' }}>
            <ion-icon name="arrow-round-back"></ion-icon>Retour
            </Link>
        </Button>
        </div>
      
       )
       }
}
export default ShowCategorie