import React, {useState} from 'react';
import photo from "../../images/site-logo.png";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FaBars, FaTimes} from "react-icons/all";

const Navbar = () => {

    const [click, setClick] = useState( false);

    const handleClick = () => {
        setClick(!click)
    }


    return (
        <div>
            <Nav>
                <div className="container">
                    <div className="navbar">
                        <div className="grade1">
                            <Link to="/">
                                <img src={photo} alt="site-logo"/>
                            </Link>

                            <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                                <li><Link to="NotFound">O’ZBEKISTON</Link></li>
                                <br/>
                                <li><Link to="NotFound">JAHON</Link></li>
                                <br/>
                                <li><Link to="NotFound">IQTISODIYOT</Link></li>
                                <br/>
                                <li><Link to="NotFound">JAMIYAT</Link></li>
                                <br/>
                                <li><Link to="NotFound">TEXNOLOGIYA</Link></li>
                                <br/>
                                <li><Link to="NotFound">SPORT</Link></li>
                            </ul>
                        </div>
                        <div className="grade2">
                            <input className="nav-input" type="text" placeholder="Search..."/>
                            <div className="menu-icon" onClick={handleClick}>
                                {click ? <FaTimes/> : <FaBars/>}
                            </div>
                            <i id="searchIcon" className="fas fa-search search-icon"/>
                        </div>
                    </div>
                </div>
            </Nav>

        </div>
    );
};

const Nav = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  .container {
    max-width: 1336px;
    margin: 0 auto;

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;

      .grade1 {
        display: flex;
        align-items: center;

        ul {
          display: flex;
          list-style: none;
          padding-left: 50px;

          a {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            text-decoration: none;
            margin: 0 20px;
            transition: 0.5s ease-in-out;
            cursor: pointer;

            &:hover {
              color: rgba(4, 4, 183, 0.81);
            }
          }
        }
      }

      .grade2 {

        .nav-input {
          display: none;
          padding: 10px 5px;
          border-radius: 20px;
          border: none;

          &::placeholder {
            font-size: 15px;
          }
        }

        .search-icon {
          margin-left: 15px;
          font-size: 20px;
          border-radius: 50%;
          background: #E5E5E5;
          padding: 10px;
          transition: 0.5s ease-in-out;
          cursor: pointer;

          &:hover {
            color: #0C2F75;
          }
        }

        .menu-icon {
          display: none;
        }
      }
    }
  }


  //MEDIA QUERIES

  @media (max-width: 1050px) {
    .container {
      max-width: 900px;
      margin: auto;

      .navbar {

        .grade1 {

          ul {

            padding-left: 0;

            a {
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 900px){
    .container {
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      
      .navbar {
        
        .grade1 {
          
          .nav-menu {
            display: none;
            position: absolute;
            top: 0;
            left: -100%;
            z-index: 99 !important;
          }
          
          .nav-menu-active {
            width: 100%;
            height: 100vh;
            z-index: 99 !important;
            position: absolute;
            top: 64px;
            background: rgba(0, 0, 0, 0.7);
            align-items: center;  
            justify-content: center;
            flex-direction: column;
            transform: translateX(0);
            transition: 5s ease-in-out ;
            
            li {
              width: 100%;
              text-align: center;
              
              &:hover {
                background: #fff;
                
                a {
                  color: #000;
                }
              }
              
              a {
                font-size: 30px;
                color: #fff;
                margin: 30px 0;
                cursor: pointer;
                transition: 0.5s ease-in-out;
                
              }
              
            }
          }
        }
        
        .grade2 {
          
          .search-icon {
            display: none;
          }
          
          .menu-icon {
            display: block;
          }
        }
        
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 700px;
      margin: auto;

      .navbar {

        .grade1 {

          ul {
            padding-left: 10px;

            a {
              margin: 0 5px;
              font-size: 11px;
            }
          }
        }

        .grade2 {
          select, .search-icon {
            display: none;
          }

          .icons {
            display: none;
          }

          .menu-icon {
            font-size: 16px;
            display: block;
          }
        }
      }
    }
  }

  @media (max-width: 544px) {
    .container {
      max-width: 500px;
      margin: 0 20px;

      .navbar {
        .grade1 {
          ul {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 376px) {
    .container {
      max-width: 300px;
      margin: auto 2%;

      .navbar {

        .grade1 {

          ul {
            display: none;

          }
        }

        .grade2 {
          .search-icon {
            display: none;
          }

          .menu-icon {
            padding-left: 100px;
          }
        }

      }

    }

  }


`

export default Navbar;