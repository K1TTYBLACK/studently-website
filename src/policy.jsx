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
const Policy = () => {
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
      <div className="ql-editor" contenteditable="false">
        <h1 dir="auto" data-placeholder="Title" data-label="Title">
          Studently Privacy Policy
        </h1>
        <address
          dir="auto"
          data-placeholder="Your name"
          data-label="Author"
          class="empty"
        ></address>
        <p dir="auto">Last updated: October 28, 2023</p>
        <p dir="auto">
          This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your personal information when you use our services or
          interact with our app (Telegram BOT Studently
          https://t.me/StudentlyUA_BOT). We are committed to protecting your
          privacy and ensuring the security of your personal data. By accessing
          or using our services, you consent to the practices described in this
          Privacy Policy.
        </p>
        <h3 dir="auto" id="1.-Information-We-Collect">
          1. Information We Collect
        </h3>
        <h3 dir="auto" id="1.1-Personal-Information">
          1.1 Personal Information
        </h3>
        <p dir="auto">
          We may collect personal information, including but not limited to:
        </p>
        <ul dir="auto">
          <li>Name and Surname</li>
          <li>Your Birthdate</li>
          <li>
            User-generated content like groups' information, homework, etc.
          </li>
        </ul>
        <h3 dir="auto" id="1.2-Gmail-Emails">
          1.2 Gmail Emails
        </h3>
        <p dir="auto">
          If you grant access to your group Gmail, we may use Gmail emails as
          part of our app's functionality. This data will only be forwarded to
          your Telegram group chat and not going to be saved
        </p>
        <h3 dir="auto" id="2.-How-We-Use-Your-Information">
          2. How We Use Your Information
        </h3>
        <p dir="auto">We use your information for the following purposes:</p>
        <ul dir="auto">
          <li>Providing our services</li>
          <li>Communicating with you</li>
          <li>Analyzing app usage</li>
        </ul>
        <h3 dir="auto" id="3.-Data-Sharing-and-Disclosure">
          3. Data Sharing and Disclosure
        </h3>
        <p dir="auto">
          This is how different types of user or user-created information are
          used: <br />
          <br />
          <h4>User:</h4>
          <ul dir="auto">
            {" "}
            <li>
              <b>Telegram ID:</b> Used to link any kind of actions in Telegram
              group chat to your account in our app.{" "}
              <u>We do not share this data.</u>
            </li>{" "}
            <li>
              <b>Name and Surname:</b> Used to recognize each other in a group.{" "}
              <u>
                We do not share this data. Visible only to your group members.
              </u>
            </li>{" "}
            <li>
              <b>Birthdate:</b> Used to congratulate a person on his birthday.{" "}
              <u>
                We do not share this data. Visible only to your group members.
              </u>
            </li>
          </ul>{" "}
          <h4>Group:</h4>
          <ul dir="auto">
            {" "}
            <li>
              <b>Telegram Group ID:</b> Used to link any kind of actions in
              Telegram group chat to chat in our app.{" "}
              <u>
                We do not share this data. Visible only to your group members.
              </u>
            </li>{" "}
            <li>
              <b>Group name:</b> Used to link any kind of actions in Telegram
              group chat to your account in our app.{" "}
              <u>
                We do not share this data. Visible only to your group members.
              </u>
            </li>{" "}
            <li>
              <b>Group members:</b> Used to see and manage list of group members
              by other members or admins.{" "}
              <u>
                We do not share this data. Visible only to your group members.
              </u>
            </li>{" "}
            <li>
              <b>Lessons:</b> Used to store information about lesson including
              name, teachers, online-classes' links, offline place , etc.{" "}
              <u>
                We do not share this data. Visible only to your group members.
                You may decide to use and share Lesson's name with OpenAI's
                "gpt-3.5-turbo" model to shorten Lesson's name.
              </u>
            </li>
            <li>
              <b>Timeschedule and Schedule:</b> Used send you notification when
              lesson has started and to be viewed by group members when needed.{" "}
              <u>
                We do not share this data. Visible only to your group members.
              </u>
            </li>
            <li>
              <b>User-created teacher profile:</b> If you create a teacher
              profile for your group it may be visible for everybody who uses
              our app and has active group{" "}
              <u>
                Visible for everybody. If you're a teacher yourself and you want
                profiles about you (inc. photos, description and contact
                information) to be deleted - please use contact information to
                submit a request
              </u>
            </li>
          </ul>{" "}
          <h4>Gmail and Google account:</h4>
          <ul dir="auto">
            {" "}
            <u>
              Studently will not share any data with the third-party AI Models
              or third-party services
            </u>
            <br />
            <br />
            <li>
              <b>Google's generated token:</b> Used to access your gmail account
              to read and forward emails to your linked group chat.{" "}
              <u>We do not share this data and keep it secure.</u>
            </li>{" "}
            <li>
              <b>Gmail Emails:</b> Used to be read by your group members without
              logging in to group Google account{" "}
              <u>
                We do not store this data. We do not share this data. Visible
                only to your group members.
              </u>
            </li>{" "}
          </ul>{" "}
          <br />
          <b>
            <u>
              Any data that we store may be deleted completely in the app
              without any resrictions.
            </u>
          </b>
        </p>
        <p dir="auto"></p>
        <h3 dir="auto" id="4.-Your-Choices">
          4. Your Choices
        </h3>
        <p dir="auto">You can:</p>
        <ul dir="auto">
          <li>Access, update, or delete your personal information</li>
          <li>Manage access to your Gmail emails within the app</li>
        </ul>
        <h3 dir="auto" id="5.-Security">
          5. Security
        </h3>
        <p dir="auto">
          We take reasonable steps to protect your information, including Gmail
          emails.
        </p>
        <h3 dir="auto" id="6.-Children's-Privacy">
          6. Children's Privacy
        </h3>
        <p dir="auto">
          Our services are not intended for children under the age of 13. We do
          not knowingly collect or maintain information from anyone under 13
          years of age.
        </p>
        <h3 dir="auto" id="8.-Changes-to-this-Privacy-Policy">
          7. Changes to this Privacy Policy
        </h3>
        <p dir="auto">
          We may update this Privacy Policy from time to time, especially
          regarding our use of Gmail emails through your app. Any changes will
          be posted on this page, and the date of the last update will be
          modified accordingly.
        </p>
        <h3 dir="auto" id="9.-Contact-Us">
          8. Contact Us
        </h3>
        <p dir="auto">
          If you have any questions or concerns about this Privacy Policy, your
          personal information, or the collection of Gmail emails through your
          app, please use contact information below
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
      </div>
    </Wrapper>
  );
};

export default Policy;
