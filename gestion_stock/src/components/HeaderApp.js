import { useState } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useEffect } from 'react'
import '../styles/HeaderApp.css'
import Modal from './Modal';
import Message from './Message';
import Parametre from './Parametre'
import App from '../App'
import $ from 'jquery';
import Fournisseur from './Fournisseur';
import Caisse from './Caisse';
function HeaderApp() {
    const [modalOpen,setModalOpen] = useState(false);
    let statMessage;
    
    useEffect(() => {
        const list=document.querySelectorAll('.list');
        function activeLink() {
            list.forEach((item)=>
                item.classList.remove('active'))
            this.classList.add('active');
            if ($(this).hasClass('openModalBtn')) {
                setModalOpen(true);
            }
            else if($(this).hasClass('messageModal')){
                    $('#message').show(100).css({
                        'visibility': 'visible'
                    })
                    $('.message').show().css({
                        'visibility': 'visible'
                    })
                
            }
            else if ($(this).hasClass('fournisseur')) {
                $('#commande').show(100).css({
                    'visibility': 'visible'
                })
                $('.commande').show().css({
                    'visibility': 'visible'
                })
            }
            else if($(this).hasClass('caisses')){
                $('#caisse').show(100).css({
                    'visibility': 'visible'
                })
                $('.caisse').show().css({
                    'visibility': 'visible'
                })
            }
            else if($(this).hasClass('parame')){
                $('#parametre').show(100).css({
                    'visibility': 'visible'
                })
                $('.parametre').show().css({
                    'visibility': 'visible'
                })
            }
        }
        list.forEach((item)=>
            item.addEventListener('click',activeLink))
 


        
    })
    return (
        <Navbar className='navigate nav'>
            <h1>Gestion de Stock</h1>
           <ul>
               <li className='list active'>
                    <a href='#'>
                        <span className='icon'>
                            <ion-icon name="home"></ion-icon>
                        </span>
                        <span className='text'>Accueil</span>
                    </a>
               </li>
               <li className='list caisses'>
                   <Nav.Link>
                   <a href='#'>
                        <span className='icon'>
                            <ion-icon name="cart"></ion-icon>
                        </span>
                        <span className='text'>Caisse</span>
                    </a>
                   </Nav.Link>
                   
               </li>
               <li className='list fournisseur'>
                    <a href='#'>
                        <span className='icon'>
                            <ion-icon name="contacts"></ion-icon>
                        </span>
                        <span className='text'>Commande</span>
                    </a>
               </li>
               <li className='list messageModal'>
                    <a href='#'>
                        <span className='icon' id='openM'>
                            <ion-icon name="alert"></ion-icon>
                        </span>
                        <span className='text'>Message</span>
                    </a>
               </li>
               <li className='list openModalBtn'>
                    <a href='#'>
                        <span className='icon'>
                            <ion-icon name="person-add"></ion-icon>
                        </span>
                        <span className='text'>Ajout</span>
                    </a>
               </li>

               <li className='list parame'>
                    <a href='#'>
                        <span className='icon'>
                            <ion-icon name="settings"></ion-icon>
                        </span>
                        <span className='text'>Paramètre</span>
                    </a>
               </li>
               <div className='indicator'></div>
           </ul>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <div id='message' >
                <Message />
            </div >
            <div id='commande'>
                <Fournisseur/>
            </div>
            <div id='caisse'>
                <Caisse/>
            </div>
           <div id='parametre'>
                <Parametre />
           </div>
        </Navbar>
    )

   

}

export default HeaderApp