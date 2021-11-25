import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div>

            <ContactWrapper>

                <div className="container">
                    <div className="mini-container">

                        <div className="contact-top-header">
                            <h1 className="top-header">Muojaat yo’llang</h1>
                        </div>

                        <div className="contact-box-wrapper">
                            <div className="contact-boxes">
                                <form action="" method="POST">
                                    <input className="myInput" type="text" placeholder="Name" required/>
                                    <input className="myInput" type="text" placeholder="Email" required/>
                                    <input className="myInput" type="text" placeholder="Phone Number" required/>
                                    <input className="myInput" type="text" placeholder="Theme" required/>
                                    <div className="bottom-inputs">
                                        <input className="myInput message-input" type="text" placeholder="Message"
                                               required/>
                                        <input className="submit-btn" type="submit" value="Yuborish"/>
                                    </div>
                                </form>
                            </div>
                            <div className="contact-boxes">
                                <div className="visit-card-wrapper">
                                    <h1 className="visit-card-header">Telefon: +998 55 500 11 99</h1>
                                    <p className="visit-card-text">(Qo‘ng‘iroqlar haftaning dushanbadan juma kuniga
                                        qadar soat 10:00 dan 17:00 gacha qabul qilinadi)</p>

                                    <div className="visit-card-groups">
                                        <h1>Email</h1>
                                        <a href="https://kun.uz/uz">info@kun.uz</a>
                                    </div>

                                    <div className="visit-card-groups">
                                        <h1>Ijtimoiy tarmoqlar:</h1>
                                        <div className="visit-card-groups-icons">
                                            <i className="fab fa-instagram"></i>
                                            <i className="fab fa-facebook"></i>
                                            <i className="fab fa-telegram"></i>
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                    </div>

                                    <div className="visit-card-groups">
                                        <h1>Mobil ilovalarimiz:</h1>
                                        <a target="_blank" href="https://play.google.com/store/apps/details?id=uz.kun.app">
                                            <div className="play-market markets">
                                                <i className="fab fa-google-play"></i>
                                                <div className="play-market-texts">
                                                    <p className="market-texts">Get it on</p>
                                                    <h1 className="market-header">Google Play</h1>
                                                </div>
                                            </div>
                                        </a>

                                        <a target="_blank" href="https://apps.apple.com/us/app/kun-uz/id1042740093">
                                            <div className="app-store markets">
                                                <i className="fab fa-app-store-ios"></i>
                                                <div className="app-store-texts">
                                                    <p className="market-texts">Download from the</p>
                                                    <h1 className="market-header">App Store</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </ContactWrapper>

        </div>
    );
};

const ContactWrapper = styled.div`

  .container {
    max-width: 1336px;
    margin: 0 auto;

    .mini-container {
      max-width: 1200px;
      margin: 0 auto;

      .contact-top-header {

        .top-header {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          color: #0C2F75;
          margin-top: 60px;
        }
      }

      .contact-box-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        margin-top: 50px;
        height: 51vh;

        .contact-boxes {
          display: flex;
          align-items: flex-start;
          flex-direction: column;

          .myInput {
            width: 70%;
            padding: 10px;
            border: none;
            border-bottom: 2px solid #000;
            margin: 17px 0;
            cursor: pointer;
            transition: 0.5s ease-in-out;

            &:hover {
              border-bottom: 2px solid blue;

            }
          }

          .bottom-inputs {
            display: flex;
            flex-direction: column;
            
          }
          .message-input {
            padding-bottom: 120px;
          }

          .myInput::placeholder {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: #000000;
            opacity: 0.5;
          }

          .submit-btn {
            width: 150px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: #FFFFFF;
            background: #17206A;
            border-radius: 5px;
            border: 2px solid #17206A;
            padding: 11px 43px;
            cursor: pointer;
            transition: 0.5s ease-in-out;

            &:hover {
              background: #fff;
              color: #17206A;
            }
          }


          .visit-card-wrapper {
            border: 2px solid silver;
            padding: 35px;
            transform: translateY(120px);

            .visit-card-header {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              color: #000000;
            }

            .visit-card-text {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              color: #0C2F75;
              margin-top: 15px;
              padding-bottom: 30px;
              border-bottom: 2px solid silver;
            }

            .visit-card-groups {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 2px solid silver;
              padding: 20px 0;

              .markets {
                display: flex;
                align-items: center;
                border: 2px solid #0C2F75;
                padding: 5px 8px;
                cursor: pointer;
                transition: 0.5s ease-in-out;

                &:hover {
                  background: #0C2F75;

                  .market-texts, .market-header, i {
                    color: #fff;
                  }
                }

                .market-texts {
                  font-family: 'Montserrat';
                  font-style: normal;
                  font-weight: normal;
                  font-size: 8px;
                  color: #0C2F75;
                }

                .market-header {
                  font-family: 'Montserrat';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 15px;
                  color: #0C2F75;
                }

                i {
                  font-size: 25px;
                  padding-right: 10px;
                }
              }

              .visit-card-groups-icons {

                i {
                  font-size: 26px;
                  margin: 0 8px;
                  cursor: pointer;
                  transition: 0.5s ease-in-out;

                  &:hover {
                    color: blue;
                  }

                }
              }

              h1 {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                color: #000000;
              }

              a {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                color: #17206A;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }



`

export default Contact;