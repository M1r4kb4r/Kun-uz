import React from 'react';
import notFoundImg from "../../images/notFoundimg.png"
import styled from "styled-components";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <NotFoundWrapper>
                <img src={notFoundImg} alt="image"/>
                <h1 className="error-header">Xatolik yuz berdi. Sahifa topilmadi :(</h1>

                <Link to="/">
                    <div className="not-found-link">
                        <i className="fas fa-home"></i>
                        <h1 className="notFound-header">Bosh sahifaga qaytish</h1>
                    </div>

                </Link>
            </NotFoundWrapper>
        </div>
    );
};

const NotFoundWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 40.5vh;
    margin-top: 90px;
  }
  
  .error-header {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #000000;  
    margin: 40px 0;
  }
  
  a {
    text-decoration: none;
    margin-top: 10px;
    
    .not-found-link {

      display: flex;
      align-items: center;
      border: 2px solid #1C2680;
      padding: 5px 30px;
      transition: 0.5s ease-in-out;
      cursor: pointer;

      &:hover {
        background: #1C2680;
        
        i, h1 {
          color: #fff;
        }
          
      }

      

      i {
        color: #1C2680;
        font-size: 23px;
      }

      .notFound-header {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #1C2680;
        margin-left: 15px;
      }

    }
    
    
  }
  
`

export default NotFound;