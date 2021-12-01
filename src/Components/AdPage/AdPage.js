import React from 'react';
import styled from "styled-components";

const AdPage = () => {
    return (
        <div>
            <AdWrapper>

                <div className="container">
                    <div className="ad-wrapper">
                        <h1 className="ad-header">Реклама</h1>
                        <p className="ad-text1">Қўнғироқ қилинг:</p>
                        <p className="phone-num">+998 55 500 11 22</p>
                        <p className="ad-bt-text">Реклама билан боғлиқ исталган саволларни reklama <a
                            href="https://kun.uz/uz">@kun.uz</a> электрон манзилига юборишингиз мумкин.</p>
                    </div>
                </div>
            </AdWrapper>
        </div>
    );
};

const AdWrapper = styled.div`

  .container {

    max-width: 1336px;
    margin: 0 auto;
    padding: 0 150px;

    .ad-wrapper {
      height: 62vh;
      margin-top: 100px;
    }

    .ad-header {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      color: #0C2F75;
      text-align: center;
      margin-top: 54px;
    }

    .ad-text1 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      color: #000000;
      margin-top: 20px;
    }

    .phone-num {
      font-size: 20px;
      color: blue;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      margin: 20px 0;

      &:hover {
        color: #000
      }
    }

    .ad-bt-text {

      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000000;

      a {
        color: #0C2F75;
        text-decoration: none;
      }
    }
  }

  
  @media(max-width: 800px) {
    .container {
      width: 100%;
      margin: 0 auto;
      padding: 0;
      
      .ad-wrapper{ 
        text-align: center;
      }
    }
  }
`

export default AdPage;