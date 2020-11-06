import React from 'react';
import ProfileIcon from '../../Assets/Images/profile.jpg';
import './Intro.scss';

const Intro=()=>{
    return(
        <div className="Intro">
            <div className="Intro-Inner">
                <div className="Intro-Icon">
                    <div className="PictureContainer">
                        <img className="ProfileIcon" src={ProfileIcon} alt="Profile" />
                    </div>
                </div>
                <div className="Intro-Description">
                    <h1 className="Intro-Description__Title">MARKO PAVLOVIĆ</h1>
                    <p className="Intro-Description__ShortText">Životopis</p>
                </div>
                <div className="Intro-Links">
                    <button className="External"><a className="ExternalLink" href="https://www.linkedin.com/in/marko-pavlovi%C4%87-a1280b126/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
                    <button className="External"><a className="ExternalLink" href="https://github.com/CROmarcos" target="_blank" rel="noopener noreferrer">GitHub</a></button>
                </div>
            </div>
        </div>
    );
}

export default Intro;