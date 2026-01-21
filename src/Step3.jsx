import { useState } from "react";
import "./App.css";
import Input from "./input";
import ProfileImage from "./icons/ProfileImage";
import PineconeLogo from "./icons/PineconeLogo";
import DeleteIcon from "./icons/DeleteIcon";
import IconLeft from "./icons/IconLeft";
import IconRight from "./icons/IconRight";
export function Page3({ increaseStep, reduceStep }) {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [image, setImage] = useState("");

  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [profileImageError, setProfileImageError] = useState("");

  const handleStepThreeContinueButton = (e) => {
    const name = e.target.name;

    console.log(name);
    if (name === "dateOfBirth") {
      const value = e.target.value;
      setDateOfBirth(value);
    } else if (name === "profileImage") {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }
      setProfileImage(file);
    }
  };

  const handleErrors = () => {
    const errors = {};
    if (!dateOfBirth) {
      errors.dateOfBirth = "Please select a date.";
    }
    if (!profileImage) {
      errors.profileImage = "Image cannot be blank";
    }

    setDateOfBirthError(errors.dateOfBirth || "");
    setProfileImageError(errors.profileImage || "");
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
                <h5>Date of birth</h5> <span className="tseg">*</span>{" "}
              </div>
              <Input
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                className={dateOfBirthError ? "input-error" : "first"}
                onChange={handleStepThreeContinueButton}
              />
              {dateOfBirthError && (
                <div className="error-message">{dateOfBirthError} </div>
              )}
              <div className="od">
                {" "}
                <h5>Profile image</h5> <span className="tseg">*</span>{" "}
              </div>
              {!image && (
                <>
                  <label htmlFor="fileUpload" className="customUploadButton">
                    {" "}
                    <ProfileImage />
                    Add image
                  </label>

                  <input
                    id="fileUpload"
                    className="hiddenFileInput"
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    onChange={handleStepThreeContinueButton}
                  />
                </>
              )}
              {image && (
                <div className="img" style={{ position: "relative" }}>
                  <img src={image} />{" "}
                  <DeleteIcon
                    style={{ position: "absolute", right: 13, top: 10 }}
                    onClick={() => setImage(null)}
                  />
                </div>
              )}
              {profileImageError && (
                <div className="error-message">{profileImageError} </div>
              )}
            </div>
          </div>
          <div className="bigbutton">
            <button onClick={reduceStep} className="back">
              <IconLeft />
              <p>Back</p>
            </button>
            <button onClick={handleSubmitButton} className="continue">
              <p className="con">Submit 3/3</p>
              <IconRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
