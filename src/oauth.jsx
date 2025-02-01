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

  const queryParams = new URLSearchParams(location.search);
  const codeParam = queryParams.get("code");
  const [isCopied, setIsCopied] = useState(false);
  const newUrl = `${window.location.origin}${window.location.pathname}`;
  window.history.replaceState(null, "", newUrl);
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(codeParam)
      .then(() => {
        setIsCopied(true);

        // Change the text to "COPIED" on successful copy
        setTimeout(() => {
          window.open("tg://resolve?domain=StudentlyUA_bot");
          setIsCopied(false); // Reset copied state after 1.5 seconds
          // Change the text back to "СКОПІЮВАТИ" after resetting the copied state
        }, 500);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  return (
    <Wrapper>
      <div className="ql-editor" contenteditable="false">
        <h1 dir="auto" data-placeholder="Title" data-label="Title">
          Скопіюйте цей код і вставте у Студентлі
        </h1>

        <br />

        <h4 dir="auto" data-placeholder="Title" data-label="Title">
          <p color="black">{codeParam}</p>
        </h4>
        <br />
      </div>
      <div class="wrapper wrapper3">
        <div className="button" onClick={handleCopyClick}>
          <span>{isCopied ? "СКОПІЙОВАНО ✅" : "Скопіювати "}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Oauth;
