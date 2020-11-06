import React from 'react';
import FormalEducation from '../Components/FormalEducation/FormalEducation';
import InformalEducation from '../Components/InformalEducation/InformalEducation';
import PageTitle from '../Components/PageTitle/PageTitle';

const Education=()=>{
    return(
        <main>
            <PageTitle title="Obrazovanje"/>
            <FormalEducation/>
            <InformalEducation/>
        </main>
    );
}

export default Education;