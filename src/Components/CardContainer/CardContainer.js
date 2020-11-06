import React from 'react';
import Card from '../Card/Card';
import './CardContainer.scss';

let personal=<p className="CardDescription">Varaždin<br/>26 godina<br/>prvostupnik informatike</p>
let education=<p className="CardDescription">opća gimnazija<br/>studij informatike<br/>dodatni tečajevi</p>
let experience=<p className="CardDescription">HTML, CSS, JS<br/>MsSQL, PostgreSQL<br/>MS Dynamics NAV</p>

const CardContainer=()=>{
    return(
        <div className="CardContainer">
            <Card title="Osobni podaci" description={personal} page="/personal"/>
            <Card title="Obrazovanje" description={education} page="/education"/>
            <Card title="Radno iskustvo i vještine" description={experience} page="/experience"/>
        </div>
    );
}

export default CardContainer;