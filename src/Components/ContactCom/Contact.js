import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div>

            <ContactWrapper>

                <div className="container">

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

                                <div className="visit-card-groups mobile-apps">
                                    <h1>Mobil ilovalarimiz:</h1>
                                    <a target="_blank"
                                       href="https://play.google.com/store/apps/details?id=uz.kun.app">
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

            </ContactWrapper>

        </div>
    );
};

const ContactWrapper = styled.div`

  .container {
    max-width: 1336px;
    margin: 0 auto;
    padding: 0 50px;


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
      margin-bottom: 200px;

      .contact-boxes {
        display: flex;
        align-items: center;
        flex-direction: column;

        form {
          
        .myInput {
          width: 100%;
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

          .visit-card-groups {
            display: flex;
            align-items: center;
            flex-direction: row;
          }

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

            .mobile-apps {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;
            }

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


  @media (max-width: 1350px) {
    .container {
      width: 1300px;
      margin: 0 2%;


      .contact-box-wrapper {
        grid-template-columns: repeat(1, 1fr);

        .contact-boxes {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;

          .visit-card-wrapper {
            display: none;
          }


          .bottom-inputs {
            .message-input {
              padding-bottom: 10px;
            }
          }

          .visit-card-wrapper {
            transform: translateY(0px);

          }
        }

      }

    }
  }

  @media (max-width: 1320px) {
    .container {
      width: 1000px;
      margin: 0 3%;


      .contact-top-header {

        .top-header {
          text-align: center;
        }
      }

      .contact-box-wrapper {


        .contact-boxes {
          width: auto;
          
          form {
            
            width: 60%;
            
            .myInput {
              
            }
          }

        }
      }

    }
  }

  @media (max-width: 1025px) {
    .container {
      width: 1000px;
      margin: 0 auto;
      padding: 0;
      
      .contact-top-header {

        .top-header {
          text-align: center;
        }
      }

      .contact-box-wrapper {

        .contact-boxes {

          form {

            .myInput {
              margin: 10px;
              width: 50%;
            }
          }
        }
      }


    }
  }
  
  @media (max-width: 995px) {
    .container {
      width: 900px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 897px) {
    .container {
      width: 800px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 800px) {
    .container {
      width: 700px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      width: 700px;
      margin: 0 auto;
      
      .contact-box-wrapper {
          
        .contact-boxes {
        }
      }
    }
  }

  @media (max-width: 696px) {
    .container {
      width: 600px;
      margin: 0 auto;
      
      
    }
  }

  @media (max-width: 590px) {
    .container {
      width: 450px;
      margin: 0 auto;
    }
  }

  @media (max-width: 448px) {
    .container {
      width: 350px;
      margin: 0 auto;
    }
  }

  @media (max-width: 355px) {
    .container {
      width: 250px;
      margin: 0 auto;
    }
  }

  @media (max-width: 256px) {
    .container {
      width: 150px;
      margin: 0 auto;
    }
  }
`

export default Contact;