import React from "react";
import { Button,Form } from 'react-bootstrap';
import "../styles/Modal.css";

function Modal({ setOpenModal}) {
    // alert(optionModal)
  return (
    <Form>
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
        </div>
        <div className="body row">
        
                <Form.Control type="text" placeholder="Enter le nom" className="mr-2 col-md-12" />
                <Form.Control type="prenom" placeholder="Entrer le Prénom" className="mb-0 col-md-12"/>
                <Form.Control type="password" placeholder="Entrer le mot Passe" className="mb-0 col-md-12"/>
           
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

export default Modal;