import React from "react";
import "./App.css";

const ContactButton = () => {
  const copyEmail = () => {
    const emailAddress = "annarosewain9@gmail.com";

    const tempInput = document.createElement("input");
    tempInput.value = emailAddress;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    const button = document.getElementById("copyEmailButton");
    if (button) {
      button.innerHTML = `Copied ${emailAddress} to clipboard`;
    }
  };

  return (
    <button className="contact" id="copyEmailButton" onClick={copyEmail}>
      <a href="mailto:annarosewain9@gmail.com">CONTACT ME</a>
    </button>
  );
};

export default ContactButton;
