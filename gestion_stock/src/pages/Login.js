
import React,{Component} from "react";
import { Button,Form } from 'react-bootstrap';
import axios from "axios";
import "../styles/Modal.css";

class Login extends Component {
    state={
      mat:'',
      pass:''
    }
    handleInput=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    AjoutEmploye= async (e)=>{
      e.preventDefault()

      const res= await axios.post('http://127.0.0.1:8001/api/employe/login',this.state)
      console.log(res.data.message);
      this.setState({
        nom:'',
        prenom:'',
        pass:''
      })

    }
    render(){
      const setOpenModal = this.props.setOpenModal

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
            <h1>Connexion</h1>
          </div>
          <div className="body row">
          
                  <Form.Control type="mat" name='mat' placeholder="Matricle" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.prenom}
                  />
                  <Form.Control type="password" name='pass' placeholder="Entrer le mot Passe" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.pass}
                  />
                   <Form.Control type="number" name='caisse_id' placeholder="Numero de caisse" className="mb-0 col-md-12"
                    onChange={this.handleInput} 
                    value={this.state.pass}
                  />
            
          </div>
          <div className="footer">
            <button type="submit">Connexion</button>
          </div>
        </div>
      </div>
      </Form>
    );
  }
}

export default Login;