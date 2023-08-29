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
            <h4 className='title-ingredientes'>Ingredientes</h4>
            <div className='card-icons'>
            <div className='card-icon'>
                {props.icons.map((iconUrl, index) => (
                <img src={iconUrl} alt={`Icon ${index + 1}`} key={index} />
                ))}
            </div>             
            </div>
        </div>
    );
}

export default Card;