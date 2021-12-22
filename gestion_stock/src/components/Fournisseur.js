import React, { useEffect } from "react";
import { Button,Form,Table } from 'react-bootstrap';
import "../styles/Message.css";
import $ from 'jquery';

function Fournisseur() {
    const isOpen = true;
    // useEffect(() => {
        
    // })
  return (

    <div className="modalBackground commande">
    <Form>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                $('.commande').hide().css({
                    'visibility': 'hidden',
                    'cursor':'pointer'
                });
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Commande</h1>
        </div>
        <div className="body row">
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Le mail du fournisseur(exemple: monfournisseur@gmail.com)" />
            </Form.Group>
            <Form.Select aria-label="Default select example" className="mt-3 pl-3">
                <option>Selectionner l'article</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
                <Form.Control type="number"  min={10} placeholder="Quantité " />
            </Form.Group>
            <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
           
        </div>
        <div className="footer">
          <button
            onClick={() => {
              $('.commande').hide().css({
                'visibility': 'hidden'
            });
            }}
            id="cancelBtn"
          >
            Annuler
          </button>
          <button type="submit">Envoyer</button>

        </div>
      </div>
      </Form>
    </div>
  );
}

export default Fournisseur;