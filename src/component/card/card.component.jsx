import React from 'react';
import './card.style.css'

export const Card = (props) => (
    <div className='card-container'>
        <img className='monsterImg' alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h2> {props.monster.name} </h2>
        <p className='fontSize'> {props.monster.email} </p>
    </div>
)