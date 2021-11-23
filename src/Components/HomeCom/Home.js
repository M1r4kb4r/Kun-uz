import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import elipse from "../../images/elipse.png"
import part_one_img1  from  "../../images/part1-img1.png"
import part_one_img2  from  "../../images/part1-img2.png"
import part_one_img3  from  "../../images/part1-img3.png"
import part_one_img4  from  "../../images/part1-img4.png"
import part_one_img5  from  "../../images/part1-img5.png"
import part_one_img6  from  "../../images/part1-img6.png"

const Home = () => {
    return (
        <div>

            <HomeWrapper>
                <div className="container">
                    <section className="part-one">

                        <div className="top-part">
                            <img src={elipse} alt="img"/>
                            <h1 className="top-header">Maqolalar</h1>
                        </div>

                        <div className="part-one-wrapper">

                            <div className="part-one-cards">
                                <img className="part_one_img1" src={part_one_img1} alt="image"/>
                                <button className="part-one-cards-btn">O’zbekiston</button>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas. Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1" src={part_one_img2} alt="image"/>
                                <button className="part-one-cards-btn">O’zbekiston</button>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas. Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1" src={part_one_img3} alt="image"/>
                                <button className="part-one-cards-btn">O’zbekiston</button>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas. Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1" src={part_one_img4} alt="image"/>
                                <button className="part-one-cards-btn">O’zbekiston</button>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas. Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1" src={part_one_img5} alt="image"/>
                                <button className="part-one-cards-btn">O’zbekiston</button>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas. Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1" src={part_one_img6} alt="image"/>
                                <button className="part-one-cards-btn">O’zbekiston</button>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas. Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi mumkin ekan.</p>
                            </div>




                        </div>
                    </section>
                </div>
            </HomeWrapper>

        </div>
    );
};

const HomeWrapper = styled.div `
    
    .container  {
      max-width: 1336px;
      margin: 0 auto;
      
      .part-one {
        
        margin-top: 50px;
        
        .top-part {
          display: flex;
          align-items: center;
          flex-direction: row;
          
          .top-header {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            color: #000000;
            padding-left: 10px;
          }
        }
        
        .part-one-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          grid-gap: 20px;
          margin-top: 20px;
          
          .part-one-cards {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            
            &:hover {
            }
            
            .part-one-cards-btn {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              color: #FFFFFF;
              padding: 6px 16px;
              background: #0C2F75;
              border: 2px solid #0C2F75;
              transform: translateY(-30px) translateX(-162px);
              cursor: pointer;
              transition: 0.5s ease-in-out;
              border-radius: 1px;
              
              &:hover {
                background: #fff;
                color: blue;
              }
            }
            
            .part-one-cards-header {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              color: #000000;
              margin-top: -20px;
              cursor: pointer;
              transition: 0.5s ease-in-out;
              
              &:hover {
                color: blue;
              }
            }
            
            .part-one-cards-text {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              color: #000000;
              margin-top: 10px;
            }
            
          }
          
        }
        
      }
      
      
    }

`


export default Home;