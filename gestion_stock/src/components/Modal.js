import React,{Component} from "react";
import { Button,Form,Alert } from 'react-bootstrap';
import axios from "axios";
import "../styles/Modal.css";
import $ from 'jquery';
class Modal extends Component {
    state={
      nom:'',
      prenom:'',
      pass:''
    }
    handleInput=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    AjoutEmploye= async (e)=>{
      e.preventDefault()

      const res= await axios.post('http://127.0.0.1:8001/api/employe/store',this.state)
      console.log(res.data.message);
      this.setState({
        nom:'',
        prenom:'',
        pass:''
      })
      $('.info').text(res.data.message).hide(10).show(70).css({
        'visibility': 'visible'
      })

    }
    render(){
      const setOpenModal = this.props.setOpenModal
      const res=""

    return (
      <Form onSubmit={this.AjoutEmploye} >
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Ajout Employé</h1>
                <Alert key={0} variant='info'  className="info">
                    
                </Alert>
            
          </div>
          <div className="body row">
          
                  <Form.Control type="text"  name='nom' placeholder="Enter le nom" className="mr-2 col-md-12"  
                    onChange={this.handleInput} 
                    value={this.state.nom}
                    />
                  <Form.Control type="prenom" name='prenom' placeholder="Entrer le Prénom" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.prenom}
                  />
                  <Form.Control type="password" name='pass' placeholder="Entrer le mot Passe" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.pass}
                  />
            
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
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

export default Modal;