import React from 'react';
import'./LanguageIcon.scss';

const LanguageIcon=(props)=>{
    return(
        <div className="Container">
            <img className="LanguageIcon" src={props.icon} alt={props.description} />
        </div>
    );
}

export default LanguageIcon;