import React, {Component } from 'react';
import {Button, Card} from 'react-bootstrap';
import {BrowserRouter as Router,Link} from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import "../styles/Message.css";

class ShowMessage extends Component{
    state = {
        message:{'message_id':2,'titre':"titre1",'contenu':"tout va bien"},
        message_id:1
      }
      async componentDidMount(){
        const  res=axios.get(`http://127.0.0.1:8001/api/message/2`)
        console.log(res);
            this.setState({
                message:res.date.message,
                message_id:2
            })
            
      }
     
    
    render(){
        console.log(this.props);
        return (

            <div className="modalBackground caisse">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <Button>
                        <Link to={`/accueil`}>
                            <ion-icon name="arrow-round-back"></ion-icon>
                        </Link>
                     </Button>
                    </div>
                    <div className="title">
                    <h1>Message:{this.state.message_id}</h1>
                    </div>
                    <div className="body row">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.state.message.titre}</Card.Title>
                            <Card.Text>
                                {this.state.message.contenu}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="footer">
                    
                    </div>
                </div>
            </div>
        );
        }
}

export default ShowMessage;