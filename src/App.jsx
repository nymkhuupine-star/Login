import { useState } from "react";
import "./App.css";
import { Page1 } from "./Step1";
import { Page2 } from "./Step2";
import { Page3 } from "./Step3";
import { Page4 } from "./Step4";

export default function App() {
  const [step, setStep] = useState(1);
  function increaseStep() {
    setStep(step + 1);
  }
  function reduceStep() {
    setStep(step - 1);
  }

  return (
    <>
      {step === 1 && <Page1 increaseStep={increaseStep} />}
      {step === 2 && (
        <Page2 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
      {step === 3 && (
        <Page3 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
      {step === 4 && <Page4 />}
    </>
  );
}
