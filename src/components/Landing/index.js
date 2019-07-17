import React from "react";
import { SignUpLink } from "../SignUp";
import { SignInLink, SignInForm } from "../SignIn";
import { PasswordForgetLink } from "../PasswordForget";
import { book, chairchat } from "../../assets";
import device from "../../css";
import styled from "styled-components";

const HeaderSection = styled.header`
  background-image: linear-gradient(
    to bottom,
    #f0e0ca,
    #fbe4ba,
    #ffeaa9,
    #fff299,
    #fffa89
  );
  height: 125vh;
  @media ${device.tablet} {
    height: 100vh;
  }
  div {
    position: -webkit-sticky;
    position: sticky;
    top: 30vh;
  }

  h1 {
    margin: 0 auto;
    font-size: 7rem;
    @media ${device.tablet} {
      font-size: 5rem;
    }

    @media ${device.mobileL} {
      font-size: 3rem;
    }
  }
  h2 {
    margin-top: 0;
    @media ${device.desktop} {
      font-size: 2.5rem;
    }
    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }
  img {
    margin: 28vh auto 0 auto;
    width: 40%;
    z-index: 1;
    position: relative;
    @media ${device.laptop} {
      width: 60%;
    }
    @media ${device.mobileL} {
      width: 80%;
    }
  }
`;

const IntroSection = styled.section`
  background-image: linear-gradient(
    to bottom,
    #fffa89,
    #ffef94,
    #ffe6a1,
    #ffdfaf,
    #ffdabd
  );
  display: flex;
  flex-direction: column;
  height: 100vh;

  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;
  }
  button {
    margin-top: 1rem !important;
    padding: 0.5rem;
  }
  p {
    font-size: 1.25rem;
    max-width: 50%;
    margin: auto;
    @media ${device.laptop} {
      max-width: 80%;
    }
  }
`;

const FooterSection = styled.footer`
  background-image: linear-gradient(
    to bottom,
    #ffdabd,
    #ffceb4,
    #ffc2ae,
    #ffb6aa,
    #ffaaaa
  );
  display: flex;
  height: 50vh;
`;
const ParallaxBackground = styled.div`
  height: 60vh;
  background-image: url(${chairchat});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  a {
    color: #000;
  }
  div {
    background-color: #ffffffb5;
    height: 25rem;
    margin: 1rem;
    padding: 1rem;
  }
  button {
    padding: 0.5rem;
    font-family: "Thasadith", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    width: 15.65rem !important;
    background-color: #000;
    color: #ffff;
    border: none;
    margin-top: 0.75rem !important;
  }
  button:disabled,
  button[disabled] {
    background-color: #00000026;
    color: #0000002e;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form * {
    margin: 0rem auto 0.5rem auto;
    width: 15rem;
  }
  input {
    border: none;
    padding: 0.25rem;
    font-family: "Thasadith", sans-serif;
    font-size: 1.35rem;
    text-align: center;
  }
`;

const SignInSection = styled.section`
  height: 50vh;
  background-color: transparent;
`;

const Landing = () => (
  <div>
    <HeaderSection>
      <div>
        <h1>Socialbook</h1>
        <h2>Share {"&"} Read</h2>
      </div>
      <img src={book} />
    </HeaderSection>
    <IntroSection>
      <p>
        Socialbook is the site to share your reading picks.
        <br />
        Use our <a href={"#"}>explorer</a> to discover new exciting readings
        based on your taste.
        <br />
        Save your favorite readings, share them with friends and find out what
        they are reading.
      </p>
    </IntroSection>
    <ParallaxBackground id="signin-section">
      {" "}
      <div>
        <h2>Sign In</h2>
        <SignInForm />
        <p>
          <PasswordForgetLink />
        </p>
        <p>
          <SignUpLink />
        </p>
      </div>
    </ParallaxBackground>
    {/* <SignInSection>
      {" "}
      <div>
        <h2>Sign In</h2>
        <SignInForm />
        <div>
          <PasswordForgetLink />
        </div>
        <div>
          <SignUpLink />
        </div>
      </div>
    </SignInSection> */}
    <FooterSection>
      {/* <h2>
        Welcome to Socialbook, ¿Would you like to <SignUpLink />?
      </h2>
      <h2>
        Or <SignInLink />
      </h2> */}
    </FooterSection>
  </div>
);

export default Landing;
