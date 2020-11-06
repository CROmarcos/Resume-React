import React from 'react';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import CroatiaFlag from '../../Assets/Images/croatia_flag.JPG';
import UsFlag from '../../Assets/Images/us_flag.JPG';
import './Header.scss';
import Navigation from '../Navigation/Navigation';

const Header=()=>{
    return(
        <header className="Header">
            <div className="Header-Inner">
                <div className="Header-Navi">
                    <Navigation/>
                </div>
                <div className="LanguageSelector">
                    <ul className="LanguageSelector-List">
                        <li className="LanguageSelector-List-Item">
                            <input className="LanguageSelector-Choose" type="radio" id="croatian" name="language" value="true" checked/>
                            <LanguageIcon for="croatian" icon={CroatiaFlag} description="Croatian"/>
                        </li>
                        <li className="LanguageSelector-List-Item">
                            <input className="LanguageSelector-Choose" type="radio" id="english" name="language" value="false"/>
                            <LanguageIcon for="english" icon={UsFlag} description="English (US)"/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;