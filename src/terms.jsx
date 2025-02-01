import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./styles.css";
const Wrapper = styled.div`
  font-family: "Montserrat";
  background: #e3ecf5;
  height: 100vh;
  width: 960px;
  max-width: 90vw;
  margin: auto;

  color: black;
  .links {
    padding-top: 20px;
    z-index: 9999;
  }
  .ql-editor {
    padding: 50px 0;
  }

  @media screen and (max-width: 960px) {
    padding: 20px;
  }
`;
const Terms = () => {
  return (
    <Wrapper>
      <div className="links">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Головна
        </Link>
        <Link
          to="/privacypolicy"
          style={{ textDecoration: "none", padding: "20px", color: "black" }}
        >
          Політика конфіденційності
        </Link>
        <Link
          to="/termsofservice"
          style={{ textDecoration: "none", color: "black" }}
        >
          Умови використання
        </Link>
      </div>
      <div class="ql-editor" contenteditable="false">
        <h1 dir="auto" data-placeholder="Title" data-label="Title">
          Studently Terms of Service
        </h1>
        <address
          dir="auto"
          data-placeholder="Your name"
          data-label="Author"
          class="empty"
        ></address>
        <p dir="auto">Last updated: September 4, 2023</p>
        <p dir="auto">
          Please read these Terms of Service carefully before using our
          services. By accessing or using our services, you agree to be bound by
          these terms. If you do not agree to these terms, please do not use our
          services.
        </p>
        <h3 dir="auto" id="1.-Acceptance-of-Terms">
          1. Acceptance of Terms
        </h3>
        <p dir="auto">
          These Terms of Service constitute a legally binding agreement between
          you and Studently (referred to as "we," "us," or "our"). You must be
          of legal age in your jurisdiction to use our services, and if you are
          accessing or using our services on behalf of a company or other legal
          entity, you represent that you have the authority to bind such entity
          to these terms.
        </p>
        <h3 dir="auto" id="2.-Changes-to-Terms">
          2. Changes to Terms
        </h3>
        <p dir="auto">
          We reserve the right to modify these Terms of Service at any time. Any
          changes will be effective immediately upon posting on our Channel or
          within our services. You are responsible for reviewing these terms
          periodically to stay informed of updates. Your continued use of our
          services after any changes constitute acceptance of those changes.
        </p>
        <h3 dir="auto" id="3.-Use-of-Services">
          3. Use of Services
        </h3>
        <p dir="auto">
          You agree to use our services in accordance with all applicable laws
          and regulations. You are solely responsible for any content you
          create, share, or upload using our services. You must not use our
          services for any illegal or unauthorized purpose, including but not
          limited to:
        </p>
        <ul dir="auto">
          <li>Harassing or harming others</li>
          <li>Impersonating someone else</li>
          <li>Engaging in any form of unlawful activity</li>
        </ul>
        <h3 dir="auto" id="4.-User-Accounts">
          4. User Accounts
        </h3>
        <p dir="auto">
          The app is used via Telegram. You are responsible for maintaining the
          security of your Telegram account credentials and ensuring the
          accuracy of the information you provide. You are also responsible for
          all activities that occur under your account. If you suspect
          unauthorized access to your account, you must notify us immediately.
        </p>
        <h3 dir="auto" id="5.-Privacy">
          5. Privacy
        </h3>
        <p dir="auto">
          Your use of our services is subject to our Privacy Policy, which
          outlines how we collect, use, and protect your personal information.
          By using our services, you consent to the practices described in our
          Privacy Policy.
        </p>
        <h3 dir="auto" id="6.-Termination">
          6. Termination
        </h3>
        <p dir="auto">
          We reserve the right to terminate or suspend your access to our
          services at our sole discretion, without prior notice, for any reason,
          including but not limited to a violation of these Terms of Service.
        </p>
        <h3 dir="auto" id="7.-Contact-Us">
          7. Contact Us
        </h3>
        <p dir="auto">
          If you have any questions or concerns about this Terms of Service,
          your personal information, or the collection of Gmail emails through
          your app, please use contact information below
        </p>
        <p dir="auto">
          By using our services, including granting access to your Gmail emails
          through your app, you agree to the terms of this Privacy Policy.
        </p>
        <p dir="auto"></p>
        <p dir="auto">Studently</p>
        <p dir="auto">Ukraine, Kyiv, Peremohy Ave, 37, 03056</p>
        <p dir="auto">Contact: https://t.me/volbo</p>
        <p dir="auto">Email: riabchun.andrii@gmail.com</p>
        <p dir="auto"></p>
        <p dir="auto"></p>
        <p dir="auto"></p>
      </div>
    </Wrapper>
  );
};

export default Terms;
