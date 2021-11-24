import React from 'react';
import styled from "styled-components";
import aboutImg1 from "../../images/about-img1.png"
import aboutImg2 from "../../images/about-img2.png"


const About = () => {
    return (
        <div>

            <AboutWrapper>

                <div className="container">
                    <div className="mini-container">

                    </div>
                    <div className="about-page-top-section">

                        <div className="about-page-top-header">Sayt haqida</div>
                        <hr className="about-top-line"/>
                        <img src={aboutImg1} alt="image"/>

                    </div>
                </div>

            </AboutWrapper>

        </div>
    );
};

const AboutWrapper = styled.div`
  
    .container {
      max-width: 1336px;
      margin: 0 auto;
    }



`

export default About;