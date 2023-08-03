import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Card from './card';
import imgps from './imgps2.jpg';
import imggn from './imggn.jpg';
import imgmm from './imgmm.jpg';
import imgmv from './imgmv.jpg';
import imgvs from './imgvs.jfif';
import imgpt from './imgpt.webp';

function App() {
  const [movieDetails, setMovieDetails] = useState({
    name: '',
    img: '',
    dic: '',
    actor: '',
    actress: '',
    rating: '',
  });
  return (
    <div className="App">
      <div className="topic">
       
        <ul className='sidemenu'>
        <h1 className='top'>Movie List</h1>
        <li className='ps' onClick={f1}>Ponniyan Selvan 2</li>
        <li className='gn' onClick={f2}>Good Night</li>
        <li className='mm' onClick={f3}>Maamannan</li>
        <li className='vs' onClick={f4}>Varisu</li>
        <li className='mv' onClick={f5}>Maaveeran</li>
        <li className='pt' onClick={f6}>Pathu Thala</li>
        </ul>
      </div>

      <div className='display'>
        
        
          <Card 
            name={movieDetails.name}
            img={movieDetails.img}
            dic={movieDetails.dic}
            actor={movieDetails.actor}
            actress={movieDetails.actress}
            rating={movieDetails.rating}
          />


      </div>
      
    </div>
    
  );
  function f1() {
    setMovieDetails({
      name: "Ponniyan Selvan 2",
      img: imgps,
      dic: "Mani Ratnam",
      actor: "Jayam Ravi, Vikram, Karthi",
      actress: "Trisha, Aishwarya Rai",
      rating: "4.5",
    });
  }

  function f2() {
    setMovieDetails({
      name: "Good Night",
      img: imggn,
      dic: "Vinayak Chandrasekaran",
      actor: "K.Manikandan",
      actress: "Meetha Raghunath",
      rating: "3.5",
    });
  }

  function f3() {
    setMovieDetails({
      name: "Maamannan",
      img: imgmm,
      dic: "Mari Selvaraj",
      actor: "Udhayanidhi Stalin",
      actress: "Keerthy Suresh",
      rating: "4.1",
    });
  }

  function f4() {
    setMovieDetails({
      name: "Varisu",
      img: imgvs,
      dic: "Vamshi Paidipally",
      actor: "Vijay",
      actress: "Rasmika Mandanna",
      rating: "4.5",
    });
  }

  function f5() {
    setMovieDetails({
      name: "Maaveeran",
      img: imgmv,
      dic: "Madonne Ashwin",
      actor: "Sivakarthikeyan",
      actress: "Aditi Shankar",
      rating: "3.5",
    });
  }

  function f6() {
    setMovieDetails({
      name: "Pathu Thala",
      img: imgpt,
      dic: "Krishna",
      actor: "Silambarasan , Gautham Karthik",
      actress: "Priya Bhavani Shankar",
      rating: "4.5",
    });
  }
}



export default App;
