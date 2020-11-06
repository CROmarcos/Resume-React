import React from 'react';
import './FormalEducation.scss';
import Gimnazija from '../../Assets/Images/ng_gimnazija.JPG';
import Foi from '../../Assets/Images/foi.JPG';

const FormalEducation=()=>{
    return(
        <div className="Education">
            <div className="School">
                <section className="School-Description">
                    <p className="School__Title">Gimnazija Nova Gradiška</p>
                    <p className="School__Program">Opća gimnazija</p>
                    <p className="School__Attending">09/2009 - 06/2013</p>
                </section>
                <section className="Right">
                    <div className="School-Container">
                        <img className="School-Image" src={Gimnazija} alt="Gimnazija Nova Gradiška"/>
                    </div>
                </section>
            </div>
            <hr className="Line"/>
            <div className="School">
                <section className="Right">
                    <div className="School-Container">
                        <img className="School-Image" src={Foi} alt="FOI Varaždin"/>
                    </div>
                </section>
                <section className="School-Description">
                    <p className="School__Title">Fakultet organizacije i informatike</p>
                    <p className="School__Program">Poslovni sustavi</p>
                    <p className="School__Attending">09/2013 - 02/2018</p>
                    <p className="School__Program">Organizacija poslovnih sustava</p>
                    <p className="School__Attending">09/2018 -</p>
                </section>
            </div>
            <hr className="Line"/>
        </div>
    );
}

export default FormalEducation;