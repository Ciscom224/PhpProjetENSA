import React from "react";
import Article from "../components/Article";
import HeaderApp from "../components/HeaderApp";
import ListCategorie from "../components/ListCategorie";
import $ from 'jquery';
import {useEffect } from 'react'
function Accueil() {
    return(
        <div>
        <HeaderApp/>
        <ListCategorie/>

        </div>
    )
}
export default Accueil