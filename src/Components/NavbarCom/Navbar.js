import React from 'react';
import photo from "../../images/site-logo.png";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <div>
            <Nav>
                <div className="container">
                    <div className="navbar">
                        <div className="grade1">
                            <img src={photo} alt="site-logo"/>

                            <ul>
                                <li><Link to="/">O’ZBEKISTON</Link></li> <br/>
                                <li><Link to="/">JAHON</Link></li> <br/>
                                <li><Link to="/">IQTISODIYOT</Link></li> <br/>
                                <li><Link to="/">JAMIYAT</Link></li> <br/>
                                <li><Link to="/">TEXNOLOGIYA</Link></li> <br/>
                                <li><Link to="/">SPORT</Link></li>
                            </ul>
                        </div>
                        <div className="grade2">
                            <select>
                                <option value="Uzbek">Uz</option>
                                <option value="Russian">Ru</option>
                                <option value="English">En</option>
                            </select>
                            <i className="fas fa-bars menu-icon"/>
                            <i className="fas fa-search search-icon"/>
                        </div>
                    </div>
                </div>
            </Nav>

        </div>
    );
};

const Nav = styled.div`
  width: 100%;

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

        select {
          padding: 5px;
          border-radius: 10px;

          option {
            padding: 5px 100px;
            border: none;
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