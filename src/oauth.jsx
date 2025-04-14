import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "./styles.css";

const Wrapper = styled.div`
  font-family: "Actay";

  height: 100vh;
  width: 960px;
  max-width: 90vw;
  margin: auto;

  color: black;
  h1 {
    color: #000;
  }
  .ql-editor {
    padding: 50px 0;
  }

  @media screen and (max-width: 960px) {
    padding: 20px;
  }
`;
const Oauth = () => {
  const location = useLocation();
  const bot_link = "StudentlyUA_bot";
  const queryParams = new URLSearchParams(location.search);
  let codeParam = queryParams.get("code");
  console.log("Authorization code:", codeParam);
  console.log("Query params:", queryParams.toString());
  if (codeParam) {
    codeParam = codeParam.slice(9); // Crop first 9 characters
    window.open("tg://resolve?domain=" + bot_link + "&start=" + codeParam);
  }

  const newUrl = `${window.location.origin}${window.location.pathname}`;

  window.history.replaceState(null, "", newUrl);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(codeParam)
      .then(() => {
        window.open("tg://resolve?domain=" + bot_link + "&start=" + codeParam);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  return (
    <Wrapper>
      <div className="ql-editor" contenteditable="false">
        <h1 dir="auto" data-placeholder="Title" data-label="Title">
          Перейдіть до Студентлі викорисовуючи цю кнопку
        </h1>
      </div>
      <div class="wrapper wrapper3">
        <div className="button" onClick={handleCopyClick}>
          <span>Перейти</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Oauth;
