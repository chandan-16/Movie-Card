import React from 'react';
import './CardDetail';
import './MainCard.css';

export default function MainCard(props) {
  return (
    <>
    <div className='container' style={{marginTop : '150px'}}>
  
    <div className='main-card'>

        <li><img src={props.image} className='card-image'/></li>
        <div className='cardDetail'> 

        <ul>
            <li><h2>{props.name}</h2></li>
            <li><p>{props.generes}</p></li>
            <li><h6>{props.summary}</h6></li>
            <li><h5>{props.detail}</h5></li>
            <li><i><h4>{props.crew}</h4></i></li> 
            <div className='twoButton'>
              <li><a href= {props.link}>Watch Trailer</a></li>
              <li><a1 href= {props.link2} className='bookTiket'>Book Ticket</a1></li>
            </div>
        </ul>
        </div>
    
    </div>    
    </div> 
    </>
  )
}
