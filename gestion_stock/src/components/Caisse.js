import React, { useEffect } from "react";
import { Button,Form,Table } from 'react-bootstrap';
import "../styles/Message.css";
import $ from 'jquery';

function Caisse({ mode }) {
    const isOpen = true;
    // useEffect(() => {
        
    // })
  return (

    <div className="modalBackground caisse">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                $('.caisse').hide().css({
                    'visibility': 'hidden'
                });
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Les Caisses</h1>
        </div>
        <div className="body">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Numero De Caisse </th>
                    <th>Employé Connecté</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan={2}>
                        Aucune caisse n'est Connectée pour le moment ...
                      </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              $('.caisse').hide().css({
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

export default Caisse;