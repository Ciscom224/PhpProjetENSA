
import React,{Component} from "react";
import { Button,Form,Row,Col} from 'react-bootstrap';
import axios from "axios";
import "../styles/Modal.css";

class AddFour extends Component {
    state={
        mail:'',
        nom:'',
        tel:''
      }
    handleInput=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    AjoutFournis= async (e)=>{
        e.preventDefault()
  
        const res= await axios.post('http://127.0.0.1:8001/api/fournis/add',this.state)
        console.log(res.data.message);
        this.setState({
            mail:'',
            nom:'',
            tel:''
        })
    }
    render(){

    return (
        <Form onSubmit={this.AjoutFournis}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Nom</Form.Label>
            <Form.Control placeholder="Nom du fournisseur" name="nom"
                 onChange={this.handleInput} 
                    value={this.state.nom}
            />
        </Form.Group>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  name="mail"
                 onChange={this.handleInput} 
                 value={this.state.mail}
            />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="number" placeholder="Telephone" min={0} name="tel"
                onChange={this.handleInput} 
                value={this.state.tel}
            />
            </Form.Group>
        </Row>

        <Button variant="danger" type="submit" >
            Créer
        </Button>
        </Form>
    );
  }
}

export default AddFour;