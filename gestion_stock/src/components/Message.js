import React, { useEffect } from "react";
import {Table } from 'react-bootstrap';
import {BrowserRouter as Router,Link} from "react-router-dom";
import "../styles/Message.css";
import $ from 'jquery';

function Message({ mode }) {
    const isOpen = true;
    const id=10
    // useEffect(() => {
        
    // })
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
                    <tr className={isOpen ? 'openMessage' : 'noOpen'}>
                        <td colSpan={3} >Mark</td>
                        <td><ion-icon name="mail-open"></ion-icon></td>
                        <td><ion-icon name="close"></ion-icon></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Ciscom</td>
                        <td>
                          <Link to={`showMessage/${id}`} >
                               <ion-icon name="mail-open"></ion-icon>
                          </Link>
                          </td>
                        <td><ion-icon name="close"></ion-icon></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Sara</td>
                        <td><ion-icon name="mail-open"></ion-icon></td>
                        <td><ion-icon name="close"></ion-icon></td>
                    </tr>
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

export default Message;