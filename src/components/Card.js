import React, { useEffect, useState } from "react";
import ayame from "../assets/ayame.jpg"
import elizabeth from "../assets/elizabeth.jpg"
import gintoki from "../assets/gintoki.jpg"
import hijikata from "../assets/Hijikata.jpg"
import kagura from "../assets/Kagura.jpg"
import katsura from "../assets/katsura.jpg"
import kondou from "../assets/kondou.jpg"
import kyu from "../assets/kyu.jpg"
import madao from "../assets/madao.jpg"
import otose from "../assets/otose.jpg"
import prince from "../assets/Prince.jpg"
import sadaharu from "../assets/sadaharu.jpg"
import shinpachi from "../assets/shinpachi.jpg"
import tae from "../assets/tae.jpg"

function Card (props) {
    let pickCards = []
    const card0 = {id: 0, image: ayame, name: "Ayame"}
    const card1 = {id: 1, image: elizabeth, name: "Elizabeth"}
    const card2 = {id: 2, image: gintoki, name: "Gintoki"}
    const card3 = {id: 3, image: hijikata, name: "Hijikata"}
    const card4 = {id: 4, image: kagura, name: "Kagura"}
    const card5 = {id: 5, image: katsura, name: "Katsura"}
    const card6 = {id: 6, image: kondou, name: "Kondou"}
    const card7 = {id: 7, image: kyu, name: "Kyu"}
    const card8 = {id: 8, image: madao, name: "Madao"}
    const card9 = {id: 9, image: otose, name: "Otose"}
    const card10 = {id: 10, image: prince, name: "Prince"}
    const card11 = {id: 11, image: sadaharu, name: "Sadaharu"}
    const card12 = {id: 12, image: shinpachi, name: "Shinpachi"}
    const card13 = {id: 13, image: tae, name: "Tae"}


    const pickRandom = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));    

     useEffect (()=>{
        console.log("useefect runs")
        pickCards = [pickRandom(8,14)] 
          
        console.log(pickCards)
    }) 

     return (
        <>
        
        </>
    ) 
}

export default Card