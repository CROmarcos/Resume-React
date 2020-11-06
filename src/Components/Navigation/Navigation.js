import React from 'react';
import './Navigation.scss';
import {Link} from 'react-router-dom';

const Navigation=()=>{
    return(
        <ul className="Navigation">
            <li className="Navigation__Item">
                <Link className="Navigation__Link" to="/">Početna</Link>
            </li>
            <li className="Navigation__Item">
                <Link className="Navigation__Link" to="/personal">Osobni podaci</Link>
            </li>
            <li className="Navigation__Item">
                <Link className="Navigation__Link" to="/education">Obrazovanje</Link>
            </li>
            <li className="Navigation__Item">
                <Link className="Navigation__Link" to="/experience">Radno iskustvo</Link>
            </li>
        </ul>
    );
}

export default Navigation;