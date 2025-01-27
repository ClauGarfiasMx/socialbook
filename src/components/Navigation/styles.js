import styled, { css } from "styled-components";
import device from "../../css";

const FlexSpan = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > {
    margin: 0.5rem;
  }
`;

const MainMenu = styled.nav`
  align-items: flex-start;
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  position: fixed;
  width: 100%;

  z-index: 1000;
  span {
    margin: 0.5rem 0;
  }
  a {
    color: #283033;
    text-decoration: none;
  }
  p {
    font-size: 1.85rem;
    margin: 0 0 0 5rem;
    @media ${device.tablet} {
      margin-left: 0.5rem;
    }
  }
  div:last-child {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 5rem;
  }
  form {
    align-items: center;
    display: flex;
    max-height: 2rem;
    label {
      font-family: "Thasadith", sans-serif;
      display: none;
    }
    p {
      margin: 0;
      font-family: "Thasadith", sans-serif;
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: 600;
      margin-right: 0.5rem;
    }
    input {
      font-family: "Thasadith", sans-serif;
      font-size: 1.1rem;
      line-height: 0.85rem;
      margin-right: 0.5rem;
      padding: 0.25rem;
      max-width: 8rem;
      border: #dcd6cc 1px solid;
      ::placeholder {
        font-size: 0.75rem;
        text-transform: uppercase;
      }
    }
    button {
      padding: 0.3rem;
      font-family: "Thasadith", sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      width: 5rem !important;
      background-color: #283033;
      color: #ffff;
      border: none;
      cursor: pointer;
      :hover {
        background-color: #20aefa;
      }
    }
    button:disabled,
    button[disabled] {
      background-color: #28303330;
      color: #2830337d;
      cursor: default;
    }
  }
`;
const AuthNavSpan = styled.span`
  * {
    margin-right: 0.5rem !important;
  }
  button {
    padding: 0.25rem 1rem;
    font-family: "Thasadith", sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #283033;
    color: #ffff;
    border: none;
    margin-top: 0.75rem !important;
    cursor: pointer;
    :hover {
      background-color: #cc0404;
    }
  }
`;

export { FlexSpan, MainMenu, AuthNavSpan };
