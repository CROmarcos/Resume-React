import React from 'react';
import ProfileIcon from '../../Assets/Images/profile.jpg';
import './Intro.scss';

const Intro=()=>{
    return(
        <main className="Intro">
            <div className="PictureContainer">
                <img className="ProfileIcon" src={ProfileIcon} alt="Profile" />
            </div>
            <div className="Intro-Description">
                <h1 className="Intro-Description__Title">MARKO PAVLOVIĆ</h1>
                <p className="Intro-Description__ShortText">Varaždin, 26<br/>front-end developer<br/>FOI</p>
                <a href="https://www.linkedin.com/in/marko-pavlovi%C4%87-a1280b126/">linkedin profil</a>
            </div>
        </main>
    );
}

export default Intro;