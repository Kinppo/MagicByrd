import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Hero = ({ hero, title, subtitle }) => {
  return (
    <Container>
      <div className="wrp">
        <div className="content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
        <Img fluid={hero.childImageSharp.fluid} className="img" />
      </div>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  background: url(${require("../images/bg-home.png")});
  background-size: cover;
  padding-top: 90px;
  min-height: 700px;
  height: 85vh;
  margin-bottom: 7em;
  padding: 0 10px;
  .wrp {
    max-width: 1400px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .content {
    max-width: 600px;
    padding-top: 2em;
  }

  .img {
    width: 60vw;
  }
  .img {
    position: absolute !important;
    right: 10em;
    top: 15em;
    max-width: 800px;
  }
  h1 {
    line-height: 1.5em;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 0.7em;
    color: #0c0c3e;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #585858;
    line-height: 1.7em;
    letter-spacing: 1px;
    text-align: justify;
  }
  button {
    color: #fff;
    background: #625aff;
    border-radius: 100px;
    padding: 12px 32px 13px 32px;
    transition: all 0.5s;
    border: none;
    font-size: 18px;
    margin-top: 2em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    &:hover {
      background: #736fb7;
    }
  }
  @media only screen and (max-width: 1680px) {
    .img {
      right: 5em;
    }
  }
  @media only screen and (max-width: 1460px) {
    .img {
      right: 10px;
    }
  }
  @media only screen and (max-width: 1300px) {
    .img {
      width: 50vw;
    }
  }
  @media only screen and (max-width: 1200px) {
    h1 {
      font-size: 32px;
      letter-spacing: 1px;
    }
    p {
      font-size: 18px;
    }
    .content {
      max-width: 500px;
    }
  }
  @media only screen and (max-width: 960px) {
    .wrp {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .img {
      display: none;
    }
  }
`
