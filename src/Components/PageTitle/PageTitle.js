import React from 'react';
import './PageTitle.scss';

const PageTitle=(props)=>{
    return(
        <div className="TitleSection">
            <h1 className="Title">{props.title}</h1>
        </div>
    );
}

export default PageTitle;