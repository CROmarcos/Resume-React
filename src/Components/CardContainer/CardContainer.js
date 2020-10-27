import React from 'react';
import Card from '../Card/Card';
import './CardContainer.scss';

let personal=<p className="CardDescription">Varaždin<br/>26 godina<br/>prvostupnik informatike</p>
let education=<p className="CardDescription">opća gimnazija<br/>studij informatike<br/>dodatni tečajevi</p>

const CardContainer=()=>{
    return(
        <div className="CardContainer">
            <Card title="Osobni podaci" description={personal} page="/personal"/>
            <Card title="Obrazovanje" description={education} page="/education"/>
            <Card title="Radno iskustvo" description="p" page="/experience"/>
        </div>
    );
}

export default CardContainer;