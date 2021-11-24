import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import notAllowedIcon from "../../images/18+.png";

const Footer = () => {
    return (
        <div>
            <FooterWrapper>
                <section className="footer">
                    <div className="footer-top-part ">
                        <div className="footer-top-info container">
                            <ul>
                                <li><Link to="/about">Sayt haqida</Link></li>
                                <li><Link to="/">RSS</Link></li>
                                <li><Link to="/contact">Aloqa</Link></li>
                                <li><Link to="/">Reklama</Link></li>
                                <li><Link to="/">Kun mavzulari</Link></li>
                                <li><Link to="/">Kun.uz jamoasi</Link></li>
                            </ul>

                            <a href="$">
                                <img className="notAllowedImg" src={notAllowedIcon} alt="18+"/>
                            </a>

                        </div>
                    </div>
                    <div className="footer-bottom-part">
                        <div className="footer-bottom-part-info container">
                            <div className="footer-cards">
                                <p className="footer-bt-text">“KUN.UZ” saytida eʼlon qilingan materiallardan nusxa
                                    koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma
                                    roziligi
                                    bilan amalgaoshirilishi mumkin.
                                    Guvohnoma: №0987. Berilgan sanasi: 22.06.2015-yil. Muassis: “WEB EXPERT” MCHJ.
                                    Tahririyat manzili: 100043, Toshkent shahri, K. Yormatov koʻchasi, 12-uy. Elektron
                                    manzil: info@kun.uz.
                                    Saytda eʼlon qilinayotgan mualliflik maqolalarida keltirilgan fikrlar muallifga
                                    tegishli
                                    va ular Kun.uz tahririyati nuqtai nazarini ifoda etmasligi mumkin.
                                </p>
                            </div>
                            <div className="footer-cards">
                                <div className="footer-icons">
                                    <a href="#">
                                        <i className="fab fa-instagram instagram-icon"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-facebook facebook-icon"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-telegram telegram-icon"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-youtube youtube-icon"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-github github-icon"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </FooterWrapper>
        </div>
    );
};

const FooterWrapper = styled.div `

  .footer {
    margin-top: 50px;

    .footer-top-part {
      width: 100%;
      height: 54px;
      display: flex;
      align-items: center;
      background: #1C2680;

      .container {
        max-width: 1336px;
        margin: 0 auto;
      }
      
      .footer-top-info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
          display: flex;
          list-style-type: none;

          li {

            a {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: bold;
              font-size: 15px;
              color: #FFFFFF;
              text-decoration: none;
              padding: 18px;
              margin: 0 25px;
              cursor: pointer;
              transition: 1s ease-in-out;


              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .container {
      max-width: 1336px;
      margin: 0 auto;
    }
    
    .footer-bottom-part {
      width: 100%;
      background: #17206A;

      .footer-bottom-part-info {
        display: flex;
        align-items: center;

        .footer-cards {
          width: 100%;
          margin: 20px 0;
          padding: 0 20px;

          .footer-icons {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;

            i {
              font-size: 30px;
              color: #fff;
              margin: 0 14px;
            }

            .instagram-icon, .facebook-icon, .telegram-icon, .youtube-icon, .github-icon {
              cursor: pointer;
              transition: 0.5s ease-in-out;

              &:hover {
                transform: scale(0.9);
              }
            }
          }

          .footer-bt-text {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            letter-spacing: -0.005em;
            color: #FFFFFF;
            line-height: 20px;
          }
        }

      }
    }
  }


`

export default Footer;