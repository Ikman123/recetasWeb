import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.imgUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{props.title}</h3>
                </div>
                <div className='card-descripcion'>
                    <p>{props.descripcion}</p>
                </div>
            </div>
            <div className='card-icons'>
                <h4>Ingredientes</h4>
                <div className='card-icon'>
                    <img src={props.icon1} alt='' />
                    <img src={props.icon2} alt='' />
                    <img src={props.icon3} alt='' />
                    <img src={props.icon4} alt='' />
                    <img src={props.icon5} alt='' />
                    <img src={props.icon6} alt='' />
                    <img src={props.icon7} alt='' />
                </div>
                
            </div>
        </div>
    );
}

export default Card;