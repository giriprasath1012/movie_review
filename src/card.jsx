import App from "./App";


function card(props)
{
   
  return( 
  <div>
    <h1 className="head">Movie Name : {props.name}</h1>
    <img  className="imgm" src={props.img}></img>
    <h2>Director : {props.dic}</h2>
    <h2>Actor : {props.actor}</h2>
    <h2>Actress : {props.actress}</h2>
    <h2>Rating : {props.rating} / 5</h2>
   
   </div>
   
  );
    

}

export default card;