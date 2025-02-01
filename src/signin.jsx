import React from "react";

import styled from "styled-components";
import "./styles.css";
import logoPNG from "./logo2.png";
import MySVG from "./signin.png";

const Wrapper = styled.div`
  font-family: "Actay";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  .divvvv
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    width: 90vw;
    max-width:400px;
    padding: 0;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
  }
  .logo {
    transform: scale(1)
    width: 50vw;
    max-width: 250px;
    margin-bottom: 40px;
    margin-top: 40px;

  }
  .title {
    color: #222;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .hover-opacity {
    opacity: 1;
    width: 90vw;
    max-width: 400px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    
  }
  .hover-opacity:hover {
    opacity: 0.7;
    cursor: pointer; /* Change to the desired opacity value */
    transition: 200ms;
  }
 
  h1 {
    color: #bbb;
  }
  .ql-editor {
    padding: 50px 0;
  }
`;
const Signin = () => {
  const newUrl = `${window.location.origin}${window.location.pathname}`;
  const currentURL = window.location.href;
  const modifiedURL = currentURL.replace(
    "https://studently.fun/signin",
    "https://accounts.google.com/o/oauth2/auth"
  );
  window.history.replaceState(null, "", newUrl);
  const divStyle = {
    backgroundColor: "#E3ECF5"
  };

  return (
    <Wrapper style={divStyle}>
      <div className="divvvv">
        <img src={logoPNG} alt="Logo" className="logo" />
      </div>
      <div className="divvvv">
        <p
          style={{
            color: "#aaa",
            padding: "15px",
            maxWidth: "400px",
            fontFamily: "ActayR",
            bottom: "0px",
            margin: "0px",
            fontSize: "10px"
          }}
        >
          Студентлі зможе читати та пересилати листи з Gmail у під'єднаний
          груповий чат. Листи не зберігаються, не обробляються, а також не
          доступні для перегляду за межами вашого групового чату. Використовуйте
          тільки акаунти Google, які були створені для вашої навчальної групи.
          <br /> <br /> Використання і передача інформації у Студентлі, отримана
          від Google API до будь-якого іншого додатка, відповідає&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
          >
            Політиці щодо даних користувачів служб Google API
          </a>
          , включаючи вимоги щодо обмеженого використання.
        </p>
      </div>
      <a href={modifiedURL}>
        <img className="hover-opacity" src={MySVG} alt="Logo" />
      </a>
    </Wrapper>
  );
};

export default Signin;
