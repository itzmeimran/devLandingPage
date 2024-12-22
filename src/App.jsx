import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaForumbee } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function App() {
  const buttons = [
    { icon: <FaApple style={{ fontSize: "24px" }} />, text: "Apple" },
    { icon: <FaGoogle style={{ fontSize: "24px" }} />, text: "Google" },
    { icon: <FaForumbee style={{ fontSize: "24px" }} />, text: "Forem" },
    { icon: <FaXTwitter style={{ fontSize: "24px" }} />, text: "Twitter ( X )" },
    { icon: <ImGithub style={{ fontSize: "24px" }} />, text: "GitHub" },
    {
      icon: <RiFacebookBoxFill style={{ fontSize: "24px" }} />,
      text: "Facebook",
    },
  ];
  return (
    <>
      <div>
        <img
          src={
            "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          }
          alt="image"
        />
        <h2 style={{ marginBottom: "0px" }}>Join the DEV Community</h2>
        <p style={{ marginTop: "0px" }}>
          DEV Community is a community of 2,574,482 amazing developers
        </p>
        <div className="btn-container">
          {buttons.map((item, index) => (
            <div className="btn" key={index}>
              <span style={{ width: "30px" }}>{item.icon}</span>{" "}
              <p>Continue with {item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
