import  { useState } from 'react';
import Movies from './Movies';
const Users = () => {
    const [movie]= useState([
        {id:2,MovieName:"BLack Panther" ,poster:"   https://www.flushthefashion.com/wp-content/uploads/2017/12/Black-Panther-movie-2018.jpg",title:"Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life."},
        {id:3,MovieName:"Spider Man" ,poster:"https://w.forfun.com/fetch/a9/a9a393d4e7c077e2a9da7d3cb669e794.jpeg",title:"Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life."},
        {id:4,MovieName:"BLue Beetle" ,poster:"https://www.cinetorres.com.br/uploads/filmes/capa-filme-6955949.jpg",title:"Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life."},
        {id:5,MovieName:"MEG 2" ,poster:"https://www.fortressofsolitude.co.za/wp-content/uploads/2023/05/Meg-2-Round-Two-Between-Jason-Statham-and-the-Mega-Shark.jpg",title:"Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life."},
    ])
   
    return (
       <div>
        {movie.map( (u)=> <Movies key={u.id} {...u} />)}
       </div>
    );
}

export default Users;

