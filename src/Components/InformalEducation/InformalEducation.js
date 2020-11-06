import React from 'react';
import './InformalEducation.scss';
import Speck from '../../Assets/Images/Speck.jpg';
import Transcript from '../../Assets/Images/transcript.JPG';

const InformalEducation=()=>{
    return(
        <div className="Education Informal">
            <div className="Course">
                <h1 className="Course__Title">Speck front-end akademija</h1>
                <p className="Course-Description"></p>
                <div className="Course-Container Vertical">
                    <img className="Course-Picture" src={Speck} alt="Speck diploma"/>
                </div>
            </div>
            <div className="Course">
                <h1 className="Course__Title">Microsoft Virtual Academy</h1>
                <p className="Course-Description"></p>
                <div className="Course-Container Horizontal">
                    <img className="Course-Picture" src={Transcript} alt="MVA diploma"/>
                </div>
            </div>
        </div>
    );
}

export default InformalEducation;