import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import elipse from "../../images/elipse.png"
import part_one_img1 from "../../images/part1-img1.png"
import part_one_img2 from "../../images/part1-img2.png"
import part_one_img3 from "../../images/part1-img3.png"
import part_one_img4 from "../../images/part1-img4.png"
import part_one_img5 from "../../images/part1-img5.png"
import part_one_img6 from "../../images/part1-img6.png"
import more_icon from "../../images/more-icon.png"
import part_tow_all_images from "../../images/part-two-all-img.png"
import notAllowedIcon from "../../images/18+.png"

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

                        <div className="part-one-wrapper flexed-part-one">

                            <div className="part-one-cards">
                                <img className="part_one_img1 part-one-images" src={part_one_img1} alt="image"/>
                                <a href="#" className="part-one-cards-btn">O’zbekiston</a>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas.
                                    Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar
                                    beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul
                                    Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni
                                    «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas
                                    pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi
                                    mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1 part-one-images" src={part_one_img2} alt="image"/>
                                <a href="#" className="part-one-cards-btn">O’zbekiston</a>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas.
                                    Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar
                                    beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul
                                    Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni
                                    «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas
                                    pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi
                                    mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1 part-one-images" src={part_one_img3} alt="image"/>
                                <a href="#" className="part-one-cards-btn">O’zbekiston</a>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas.
                                    Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar
                                    beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul
                                    Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni
                                    «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas
                                    pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi
                                    mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1 part-one-images" src={part_one_img4} alt="image"/>
                                <a href="#" className="part-one-cards-btn">O’zbekiston</a>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas.
                                    Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar
                                    beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul
                                    Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni
                                    «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas
                                    pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi
                                    mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1 part-one-images" src={part_one_img5} alt="image"/>
                                <a href="#" className="part-one-cards-btn">O’zbekiston</a>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas.
                                    Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar
                                    beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul
                                    Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni
                                    «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas
                                    pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi
                                    mumkin ekan.</p>
                            </div>

                            <div className="part-one-cards">
                                <img className="part_one_img1 part-one-images" src={part_one_img6} alt="image"/>
                                <a href="#" className="part-one-cards-btn">O’zbekiston</a>
                                <h1 className="part-one-cards-header">Saylovchilar faqat haydovchilar emas.
                                    Kusherbayevning haqoratli posti, uning o‘chirilishi va qoidabuzarlikdan xabar
                                    beruvchilar haqida</h1>
                                <p className="part-one-cards-text">Oliy Majlis Qonunchilik palatasi deputati Rasul
                                    Kusherbayev yo‘llardagi qoidabuzarlikni rasmga olib pul ishlashga oid tartibni
                                    «kozyollar» jamiyatini yaratish, deb baholadi. Deputatning so‘zlariga ko‘ra, arzimas
                                    pulga birovlarning qoidabuzarligini sotgan odam, kattaroq pulga Vatanni ham sotishi
                                    mumkin ekan.</p>
                            </div>

                        </div>

                        <div className="part-one-bottom-section-wrapper">
                            <div className="part-one-bottom-section">
                                <a href="#">Ko’proq yangiliklar</a>
                                <img src={more_icon} alt="icon"/>
                            </div>
                        </div>
                    </section>

                    <section className="part-two">

                        <div className="part-two-top-section">
                            <img src={elipse} alt="elipse"/>
                            <h1 className="part-two-top-section-header">Kun Yangiliklari</h1>
                        </div>

                        <div className="part-two-wrapper">

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>

                            <div className="part-two-cards">
                                <img src={part_tow_all_images} alt="image"/>
                                <div className="uploaded-dates">
                                    <i className="far fa-calendar-alt calendar-icon"></i>
                                    <h1 className="date">20:41 / 15.03.2021</h1>
                                </div>
                                <h1 className="part-two-cards-title">Rivojlanishi qishloq xo‘jaligidan boshlangan Xitoy:
                                    uning tajribasi biz uchun nega muhim?</h1>
                            </div>


                        </div>
                    </section>

                </div>

            </HomeWrapper>

        </div>
    );
};

const HomeWrapper = styled.div`

  .container {
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

      .flexed-part-one {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .part-one-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 20px;
        margin-top: 20px;

        .part-one-cards {
          width: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: pointer;
          transition: 0.5s ease-in-out;

          &:hover {
          }

          .part-one-images {
            width: 100%;
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
            transform: translateY(-30px) translateX(-146px);
            cursor: pointer;
            transition: 0.5s ease-in-out;
            border-radius: 1px;
            text-decoration: none;

            &:hover {
              background: #fff;
              color: blue;
              font-weight: 500;
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


      .part-one-bottom-section-wrapper {

        display: flex;
        align-items: center;
        justify-content: center;

        .part-one-bottom-section {
          width: 500px;
          padding: 14px 15px;
          background: #17206A;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 30px;
          border: 2px solid #17206A;
          cursor: pointer;
          transition: 0.5s ease-in-out;

          &:hover {
            transform: translateY(20px);
          }

          a {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: bold;
            font-size: 11px;
            letter-spacing: 1px;
            color: #FFFFFF;
            text-decoration: none;

          }

        }
      }

    }

    .part-two {

      margin-top: 80px;

      .part-two-top-section {
        display: flex;
        align-items: center;


        .part-two-top-section-header {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          color: #000000;
          padding-left: 10px;
        }
      }

      .part-two-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        margin-top: 30px;

        .part-two-cards {
          width: 320px;


          .uploaded-dates {
            display: flex;
            align-items: center;
            margin-top: 10px;

            .calendar-icon {
              color: #200E32;
            }

            .date {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              color: #000000;
              margin-left: 10px;
              margin-top: 3px;
            }
          }

          .part-two-cards-title {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            margin-top: 10px;
            cursor: pointer;
            transition: 0.5s ease-in-out;

            &:hover {
              color: blue;
            }
          }
        }
      }

    }
  }

  //MEDIA QUERIES

  @media (max-width: 1025px) {
    .container {
      .part-one {
        .part-one-wrapper {
          grid-template-columns: repeat(2, 1fr);

        }
      }
    }
  }

`


export default Home;