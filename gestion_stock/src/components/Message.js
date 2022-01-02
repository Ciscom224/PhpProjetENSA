import React, { Component } from 'react'
import {Table } from 'react-bootstrap';
import {BrowserRouter as Router,Link} from "react-router-dom";
import "../styles/Message.css";
import $, { get } from 'jquery';
import axios from "axios";

class Message extends Component {
  state={
    'messages':[],
    'loading':true
  }
  async componentDidMount(){
    const res= await axios.get('http://127.0.0.1:8001/api/message/list')
    console.log(res.data);
    this.setState({
      'messages':res.data.messages,
      'loading':false
    })
  }
  render(){

    var VAR_HTMLTABLE=""
 
      if (this.state.loading) {
        VAR_HTMLTABLE=<tr><td colSpan={5}><h2>Loading...</h2></td></tr>
      } else {
        VAR_HTMLTABLE=
        this.state.messages.map((item)=>{
          return(
          
            <tr key={item.message_id}>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.titre}</td>
                <td>
                  <Link to={`showMessage/${item.message_id}`} >
                    <ion-icon name="mail-open"></ion-icon>
                  </Link>
                </td>
                <td>
                  <Link to={`delMessage/${item.message_id}`} >
                    <ion-icon name="close"></ion-icon>
                  </Link>
                </td>
            </tr>
          )
        })
      }

    
    const isOpen = true;
    const id=10
  return (

    <div className="modalBackground message">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                $('.message').hide().css({
                    'visibility': 'hidden'
                });
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Messages Récus</h1>
        </div>
        <div className="body row">
            <Table striped bordered hover variant="">
                <tbody>
                  {VAR_HTMLTABLE}
                </tbody>
            </Table>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              $('.message').hide().css({
                'visibility': 'hidden'
            });
            }}
            id="cancelBtn"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
          }
}

export default Message;