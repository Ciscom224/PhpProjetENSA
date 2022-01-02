
import React,{Component} from "react";
import { Button,Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import axios from "axios";
import "../styles/Modal.css";

class Login extends Component {
    state={
      mat:'',
      pass:'',
      caisse_id:''
    }
    handleInput=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    connexion= async (e)=>{
        console.log(this.state);
      e.preventDefault()

      const  res= await axios.get('http://127.0.0.1:8001/api/employe/login',this.state)
      console.log(res.data.message);
      this.setState({
        mat:'',
        pass:'',
        caisse_id:''
      })

    }
    render(){
      const setOpenModal = this.props.setOpenModal

    return (
      <Form onSubmit={this.connexion} >
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
            <h1>Connexion</h1>
       
            
          </div>
          <div className="body row">
          
                  <Form.Control type="mat" name='mat' placeholder="Matricle" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.mat}
                  />
                  <Form.Control type="password" name='pass' placeholder="Entrer le mot Passe" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.pass}
                  />
                   <Form.Control type="number" name='caisse_id' placeholder="Numero de caisse" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.caisse_id}
                  />
            
          </div>
          <div className="footer">
              <Button type="submit">
                  <Link to={`/accueil`} style={{textDecoration:'none' }}>
                    Connexion
                  </Link>
              </Button>
          </div>
        </div>
      </div>
      </Form>
    );
  }
}

export default Login;