import React from 'react';
import styled from "styled-components";
import aboutImg1 from "../../images/about-img1.png"
import aboutImg2 from "../../images/about-img2.png"


const About = () => {
    return (
        <div>

            <AboutWrapper>

                <div className="container">

                    <div className="about-page-top-section">

                        <div className="about-page-top-header">Sayt haqida</div>
                        <hr className="about-top-line"/>
                        <img src={aboutImg1} alt="image"/>

                    </div>

                    <div className="about-page-bt-texts">
                        <p className="about-page-bt-text">«KUN.UZ» - Oʼzbekistondagi eng faol onlayn nashrlardan
                            biri. Sayt oʼz oldiga Oʼzbekiston va jahonda roʼy berayotgan eng muhim voqea-hodisalar
                            haqida tezkor, aniq va xolis axborot berishni maqsad qilib qoʼygan.</p>
                        <p className="about-page-bt-text"> Google Analytics maʼlumotlariga koʼra, saytga har kuni
                            350 ming kishi tashrif buyuradi.</p>
                        <p className="about-page-bt-text"> Saytdan foydalanish mutlaqo bepul boʼlib, faqatgina
                            internet traffik sarflanadi. Saytning yengil va tez ishlaydigan mobil versiyasi -
                            <a className="about-page-bt-text-link" target="_blank"
                               href="https://kun.uz/uz">m.kun.uz</a>
                        </p>
                    </div>

                    <div className="about-page-md-section">
                        <img className="aboutImg2" src={aboutImg2} alt="image"/>
                        <div className="about-md-texts">
                            <p className="about-md-text"><a target="_blank" href="https://ru-ru.facebook.com/">Facebook</a>, <a
                                target="_blank" href="https://twitter.com/?lang=ru">Twitter</a>, <a target="_blank"
                                                                                                    href="https://www.instagram.com/?hl=uz">Instagram</a> ,
                                <a target="_blank" href="https://ok.ru/">Odnoklassniki</a> ijtimoiy tarmoqlarida
                                sahifalar, Telegram messenjerida esa <a
                                    href="https://kun.uz/uz">@KunUzOfficial</a> nomli
                                kanal faoliyat yuritadi.</p>
                            <p className="about-md-text text2">
                                Android va iOS qurilmalari uchun mo‘ljallangan mobil dasturlari ham mavjud. Ularni
                                Google Play va App Store’dan yuklab olish mumkin.
                            </p>
                        </div>

                        <div className="download-links">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=uz.kun.app">

                                <div className="play-market">
                                    <i className="fab fa-google-play"></i>
                                    <div className="play-market-texts">
                                        <p>Get it on</p>
                                        <h1>Google Play</h1>
                                    </div>
                                </div>

                            </a>

                            <a target="_blank" href="https://apps.apple.com/us/app/kun-uz/id1042740093">

                                <div className="app-store">
                                    <i className="fab fa-app-store-ios"></i>
                                    <div className="app-store-texts">
                                        <p>Download from the</p>
                                        <h1>App Store</h1>
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>

                    <div className="about-page-bottom-infos">

                        <p className="about-page-bt-all-texts">Loyiha 2012 yilning yanvarida faoliyatini boshlagan. OAV
                            sifatida 0987 raqami bilan davlat ro‘yxatidan o‘tgan. Loyiha muassisi «WEB EXPERT» MChJ
                            hisoblanadi.</p>

                        <p className="about-page-bt-all-texts">Sayt O‘zbekiston Respublikasi hududida faoliyat olib
                            boruvchi davlat va jamoat tashkilotlari bilan qonunda belgilangan tartibda hamkorlik
                            o‘rnatgan holda ish olib boradi.</p>

                        <p className="about-page-bt-all-texts">«KUN.UZ» sayti materiallaridan foydalanish shartlari
                            boradi.</p>

                        <p className="about-page-bt-all-texts">«KUN.UZ» sayti tahririyati mavjud qonunchilikka ko‘ra
                            saytda nashr etilgan, qoidalar asosida ko‘chirib bosilgan ma’lumotlar asosliligi uchun
                            (manbasi ko‘rsatib yozilganligi evaziga) javobgarlikni o‘z zimmasiga olmaydi.</p>

                        <p className="about-page-bt-all-texts">Saytda nashr qilingan maqola yuzasidan, uning muallifi va
                            sayt tahririyatining fikri bir xil bo‘lmasligi mumkin.</p>

                        <p className="about-page-bt-all-texts">Shuningdek, sayt tahririyati o‘quvchilarining yuborgan
                            xatlarining har biriga alohida javob yozish majburiyatini olmaydi.</p>

                        <p className="about-page-bt-all-texts">Sayt materiallaridan boshqa saytlar yoki OAV foydalanishi
                            shartlari:</p>

                        <p className="about-page-bt-all-texts">Sayt O‘zbekiston Respublikasi hududida, mintaqa va chet
                            ellarda faoliyat yuritayotgan internet saytlari, nashrlar bilan o‘zaro ma’lumot, maqolalar
                            almashishni yo‘lga qo‘yadi.</p>

                        <p className="about-page-bt-all-texts">Saytdagi ma’lumotlardan faqat tahririyatdan yozma
                            ravishda ruxsat olingandagina foydalanish talab etiladi.</p>

                        <p className="about-page-bt-all-texts">Materiallardan foydalanishda, sayt nomini (muallifini)
                            berilayotgan materialning birinchi yoki uchinchi qatorigacha bo‘lgan hududda taqdim etish
                            so‘raladi.</p>

                        <p className="about-page-bt-all-texts">Masalan, «Bu haqda KUN.UZ sayti xabar berdi».</p>

                        <p className="about-page-bt-all-texts">Bu o‘rinda nashr nomi — «KUN.UZ» so‘ziga havola qo‘yilib,
                            bu havola http://kun.uz/ sahifasiga yo‘naltirilgan bo‘lishi, qolaversa, «xabar beradi» so‘z
                            birikmasiga havola qo‘yilib, bu havola «KUN.UZ» saytidan olingan xabarga yo‘naltirilgan
                            bo‘lishi kerak.</p>

                        <p className="about-page-bt-all-texts">Boshqa nashrlar bilan hamkorlikda ishlashdan doim mamnun
                            bo‘lamiz.</p>

                        <p className="about-page-bt-all-texts"> Murojaat uchun: tel: +998 55 500 11 99 (Qo‘ng‘iroqlar
                            haftaning dushanbadan juma kuniga qadar soat 10:00 dan 17:00 gacha qabul qilinadi) pochta:
                            info@kun.uz</p>

                        <p className="about-page-bt-all-texts">Reklama bo‘limi: tel: +998 55 500 11 22 (Qo‘ng‘iroqlar
                            soat 09:00 dan 18:00 gacha qabul qilinadi) pochta: reklama@kun.uz</p>

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
    padding: 0 50px;

    .about-page-top-section {

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;

      .about-page-top-header {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: #0C2F75;
        margin-bottom: 15px;
        margin-top: 60px;
      }

      hr {
        width: 100%;
        opacity: 0.3;
        border: 1px solid #000000;
        margin-bottom: 10px;
      }
    }

    .about-page-bt-texts {
      margin-top: 20px;

      .about-page-bt-text {
        margin: 30px 0;

        .about-page-bt-text-link {
          color: #0C2F75;
        }
      }
    }

    .about-page-md-section {

      .aboutImg2 {
        margin-top: 20px;
      }

      .about-md-texts {

        .text2 {
          margin-top: 20px;
        }

        .about-md-text {
          margin: 10px 0;

          a {
            color: #0C2F75;
          }

        }

      }

      .download-links {
        display: flex;
        align-items: center;
        margin-top: 20px;

        a {
          text-decoration: none;
        }

        .play-market {
          width: auto;
          height: 50px;
          display: flex;
          align-items: center;
          flex-direction: row;
          background: #0C2F75;
          padding: 10px 15px;
          border: 2px solid #0C2F75;
          cursor: pointer;
          transition: 0.5s ease-in-out;


          &:hover {
            background: #fff;

            .play-market-texts, i {
              color: #0C2F75;
            }
          }

          .play-market-texts {
            font-family: Gilroy;
            font-style: normal;
            font-weight: normal;
            font-size: 8px;
            color: #FFFFFF;

            p {
              font-size: 13px;
            }

            h1 {
              font-size: 20px;
            }
          }

          i {
            color: #fff;
            font-size: 25px;
            margin-right: 10px;
          }
        }

        a {
          text-decoration: none;
        }

        .app-store {
          width: auto;
          height: 50px;
          display: flex;
          align-items: center;
          flex-direction: row;
          background: #0C2F75;
          margin-left: 20px;
          padding: 10px 15px;
          border: 2px solid #0C2F75;
          cursor: pointer;
          transition: 0.5s ease-in-out;

          &:hover {
            background: #fff;

            .app-store-texts, i {
              color: #0C2F75;
            }
          }

          .app-store-texts {
            font-family: Gilroy;
            font-style: normal;
            font-weight: normal;
            font-size: 8px;
            color: #FFFFFF;


          }

          i {
            color: #fff;
            font-size: 30px;
            margin-right: 10px;
          }

          p {
            font-size: 11px;
          }

          h1 {
            font-size: 20px;
          }
        }
      }

    }

    .about-page-bottom-infos {

      .about-page-bt-all-texts {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        margin: 20px 0;
        cursor: pointer;
        transition: 0.5s ease-in-out;

        &:hover {
          color: #0C2F75;
        }
      }
    }
  }


  @media (max-width: 1000px) {
    .container {
      width: 100%;
      margin: 0 auto;
      
      .about-page-top-section {
        img {
          width: 100%;
        }
      }
      
      .about-page-md-section {
        img {
          width: 100%;
        }
      }
    }
    
  }

  @media (max-width: 500px) {
    .container {
      width: 100%;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
      
      
      .about-page-md-section {
        
        .download-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .play-market, .app-store {
            
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            
            .play-market-texts, .app-store-texts {
              p {
                font-size: 10px;
              }
              
              h1 {
                font-size: 15px;
              }
            }
          }
          
        }
      }
    }
  }
  
`

export default About;