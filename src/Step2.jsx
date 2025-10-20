import { useState } from "react";
import "./App.css";
import Input from "./input";
import IconLeft from "./icons/IconLeft";
import IconRight from "./icons/IconRight";
import PineconeLogo from "./icons/PineconeLogo";
export function Page2({ increaseStep, reduceStep }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const numberRegex = /^[0-9]*$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const allRegex = /^[A-Za-z0-9]+$/;

  const handleStepTwoContinueButton = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleErrors = () => {
    const errors = {};
    if (!emailRegex.test(email) || email.length === 0) {
      errors.email = "Please provide a valid email address.";
    }
    if (
      !numberRegex.test(phoneNumber) ||
      phoneNumber.length === 0 ||
      phoneNumber.length !== 8
    ) {
      errors.phoneNumber = "Please enter a valid phone number.";
    }
    if (!allRegex.test(password) || password.length !== 12) {
      errors.password = "Password must include letters and numbers.";
    }
    if (confirmPassword !== password || confirmPassword.length !== 12) {
      errors.confirmPassword = "Passwords do not match. Please try again.";
    }

    setEmailError(errors.email || "");
    setPhoneNumberError(errors.phoneNumber || "");
    setPasswordError(errors.password || "");
    setConfirmPasswordError(errors.confirmPassword || "");
    return errors;
  };
  const handleSubmitButton = () => {
    const errors = handleErrors();
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      increaseStep();
    }
  };

  return (
    <>
      <div className="section">
        <div className="box">
          <div className="navi">
            <PineconeLogo />
            <p className="Join">Join Us! 😎</p>
            <p className="please">
              Please provide all current information accurately.
            </p>
            <div className="bigfirst">
              <div className="od">
                {" "}
                <h5>Email</h5> <span className="tseg">*</span>{" "}
              </div>
              <Input
                type="text"
                value={email}
                name="email"
                className={emailError ? "input-error" : "first"}
                onChange={handleStepTwoContinueButton}
              />

              {emailError && <div className="error-message">{emailError}</div>}
              <div className="od">
                {" "}
                <h5>Phone number</h5> <span className="tseg">*</span>{" "}
              </div>
              <Input
                type="text"
                value={phoneNumber}
                name="phoneNumber"
                className={phoneNumberError ? "input-error" : "first"}
                onChange={handleStepTwoContinueButton}
              />

              {phoneNumberError && (
                <div className="error-message">{phoneNumberError}</div>
              )}
              <div className="od">
                {" "}
                <h5>Password</h5> <span className="tseg">*</span>{" "}
              </div>

              <Input
                type="password"
                value={password}
                name="password"
                className={passwordError ? "input-error" : "first"}
                placeholder=" at least 12 characters"
                onChange={handleStepTwoContinueButton}
              />

              {passwordError && (
                <div className="error-message">{passwordError}</div>
              )}
              <div className="od">
                {" "}
                <h5>Confirm password</h5> <span className="tseg">*</span>{" "}
              </div>
              <Input
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                className={confirmPasswordError ? "input-error" : "first"}
                placeholder=" at least 12 characters"
                onChange={handleStepTwoContinueButton}
              />
              {confirmPasswordError && (
                <div className="error-message">{confirmPasswordError}</div>
              )}
            </div>
          </div>
          <div className="bigbutton">
            <button onClick={reduceStep} className="back">
              <IconLeft />
              <p>Back</p>
            </button>
            <button onClick={handleSubmitButton} className="continue">
              <p className="con">Continue 2/3</p>
              <IconRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
