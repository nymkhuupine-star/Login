import { useState } from "react";
import "./App.css";
import Input from "./input";
export function Page1({ increaseStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const nameRegex = /^[a-zA-Z]+$/;
  const handleStepOneContinueButton = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else {
      setUserName(value);
    }
  };
  const handleErrors = () => {
    const errors = {};
    if (!nameRegex.test(firstName) || firstName.length === 0) {
      errors.firstName =
        "First name cannot contain special characters or numbers. ";
    }
    if (!nameRegex.test(lastName) || lastName.length === 0) {
      errors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (!nameRegex.test(userName) || userName.length === 0) {
      errors.userName =
        "This username is already taken. Please choose another one.";
    }

    setFirstNameError(errors.firstName || "");
    setLastNameError(errors.lastName || "");
    setUserNameError(errors.userName || "");
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
            <div className="photo"></div>
            <p className="Join">Join Us! 😎</p>
            <p className="please">
              Please provide all current information accurately.
            </p>
            <div className="bigfirst">
              <div className="od">
                {" "}
                <h5>First name</h5> <span className="tseg">*</span>{" "}
              </div>
              <Input
                type="text"
                value={firstName}
                name="firstName"
                placeholder="placeholder"
                onChange={handleStepOneContinueButton}
              />
              {firstNameError && (
                <div className="error-message">{firstNameError}</div>
              )}
              <div className="od">
                {" "}
                <h5>Last name</h5> <span className="tseg">*</span>{" "}
              </div>
              <Input
                type="text"
                value={lastName}
                name="lastName"
                placeholder="placeholder"
                onChange={handleStepOneContinueButton}
              />
              {lastNameError && (
                <div className="error-message">{lastNameError}</div>
              )}

              <div className="od">
                {" "}
                <h5>User name</h5> <span className="tseg">*</span>{" "}
              </div>
              <Input
                type="text"
                value={userName}
                name="userName"
                placeholder="placeholder"
                onChange={handleStepOneContinueButton}
              />
              {userNameError && (
                <div className="error-message">{userNameError}</div>
              )}
            </div>
          </div>
          <button onClick={handleSubmitButton} className="button">
            <p className="con">Continue 1/3</p>
          </button>
        </div>
      </div>
    </>
  );
}
