import React from 'react'
import {NavLink} from 'react-router-dom'
import './card.css'

export default function Card(props){
    return (
        <div className='card'>
            <h4 className='card-title'>{props.title}</h4>
            {props.desc ? <p className='card-desc'>{props.desc}</p>:""}
            <NavLink 
                to={`/download/${props.title}`}
                    
                state={{title: props.title, url: props.url, fromCard: true}}                
                className='download-link'
            >Download</NavLink>
        </div>
    )
}