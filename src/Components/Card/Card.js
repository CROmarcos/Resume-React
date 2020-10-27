import React from 'react';
import './Card.scss';
import {Link} from 'react-router-dom';

const buttonText="Saznaj više >>";

const Card=(props)=>{
    return(
        <div className="Card">
            <h2 className="Card-Title">{props.title}</h2>
            <div className="Card-Description">{props.description}</div>
            <div className="Card-Footer">
                <button className="Internal"><Link className="InternalLink" to={props.page}>{buttonText}</Link></button>
            </div>
        </div>
    );
}

export default Card;