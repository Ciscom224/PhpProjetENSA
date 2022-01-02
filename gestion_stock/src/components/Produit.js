import React,{Component} from "react";
import { Button,Form,Alert,Row,Col,InputGroup } from 'react-bootstrap';
import "../styles/Message.css";
import $ from 'jquery';
import axios from "axios";
class Produit extends Component {
    state={
      design:'',
      ref:'',
      qt:'',
      cat:'',
      prix:''
    }
    handleInput=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    AjoutProduit= async (e)=>{
      e.preventDefault()
        const produit={
          ref:this.state.ref,
          design:this.state.design,
          categ:this.state.cat,
          prixU:this.state.prix,
          qte:this.state.qt
        }
      const res= await axios.get(`http://127.0.0.1:8001/api/produit/store?ref=${this.state.ref}&design=${this.state.design}&qt=${this.state.qt}&prix=${this.state.prix}&cat=${this.state.cat}`).then(()=>{
      
      })
    this.setState({
            design:'',
            ref:'',
            qt:'',
            cat:'',
            prix:''
          })
      
      $('.info').text(res.data.message).hide(10).show(70).css({
        'visibility': 'visible'
      })

    }
    render(){
    return (
      <Form onSubmit={this.AjoutProduit} >
      <div className="modalBackground commande">
        <div className="modalContainer">
          <div className="titleCloseBtn">
          <button
            onClick={() => {
                $('.commande').hide().css({
                    'visibility': 'hidden'
                });
            }}
          >
            <ion-icon name="close"></ion-icon>
          </button>
          </div>
          <div className="title">
            <h1>Ajout de Produit</h1>
                <Alert key={0} variant='info'  className="info">
                    
                </Alert>
          </div>
          <div className="body row">
          
                  <Form.Control type="text"  name='design' placeholder=" Designation du Produit" className="mr-2 col-md-12"  
                    onChange={this.handleInput} 
                    value={this.state.design}
                    />
                  <Form.Control type="text" name='ref' placeholder="Reference du Produit" className="mb-0 col-md-12" 
                    onChange={this.handleInput} 
                    value={this.state.ref}
                  />
                  
                 
                  <Row >
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Control type="number" name='qt' placeholder="La quantité" className="mb-0 col-md-6"  min={2}
                          onChange={this.handleInput} 
                          value={this.state.qt}
                          />
                    </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom01">
                          <Form.Control type="number" name='prix' placeholder="Prix unitaire en DHS"  min={10}
                          onChange={this.handleInput} 
                          value={this.state.prix}
                          />
                      </Form.Group>
                     
                        
                  </Row> 
                 <Form.Select aria-label="Default select example" name="cat"
                   onChange={this.handleInput} 
                   value={this.state.cat}
                 >
                    <option>Ouvrir pour selectionner une catégorie</option>
                    <option value="1">Alimentation General</option>
                    <option value="2">Patiserie</option>
                    <option value="3">Autres</option>
                  </Form.Select>
            
          </div>
          <div className="footer">
          <button
            onClick={() => {
              $('.commande').hide().css({
                'visibility': 'hidden'
            });
            }}
            id="cancelBtn"
          >
            Annuler
          </button>
            <button type="submit">Créer</button>
          </div>
        </div>
      </div>
      </Form>
    );
  }
}

export default Produit;