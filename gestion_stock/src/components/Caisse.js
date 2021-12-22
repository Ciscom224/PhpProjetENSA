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
        <div className="body row">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Numero </th>
                    <th>Operation</th>
                    <th>Employé</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
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