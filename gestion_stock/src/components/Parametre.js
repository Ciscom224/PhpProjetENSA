import {useEffect} from 'react'
import ProfilEdit from './ProfilEdit'
import logo from '../assets/cartePhoto.jpg'
import '../styles/Parametre.css'
import $ from 'jquery';
import { Button, InputGroup,Form} from 'react-bootstrap';


function Parametre() {
    let isEdit=false
    useEffect(() => {
      
        $('.profile').on('click',()=>{
            $('.choose').trigger('click')
            
        })
    })
    return(
                <div className="param parametre">
                    <div className="account-settings">
                        <div className="user-profile">
                            <div className="user-avatar">
                               
                            <Form.Control
                                    type="file" hidden className='choose'
                                />
                                    <img src={logo} alt='La maison jungle'  />
                                
                                <span className='editProfil profile'><ion-icon name="camera" ></ion-icon></span>
                            </div>
                            <h5 className="user-name">Prénom</h5>
                            <h6 className="user-email">Nom</h6>
                        </div>
                        <div className="body">
                           
                                {isEdit ? (
                                    <ProfilEdit/>
                                ): (
                                    <span>Ecliquer sur 'Edit' pour changer vos informations</span>
                                )}
                            
                        </div>
                    </div>
                    <div className='footer '>
                    <Button className='btn btn-danger'
                         onClick={() => {
                            $('.parametre').hide().css({
                              'visibility': 'hidden'
                          });
                          }}
                    >
                        Annuler
                    </Button>
                    <Button className='btn editBtn'>
                            Edit
                    </Button>
                    </div>
                </div>

    )
}

export default Parametre