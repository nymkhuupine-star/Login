import { useState } from "react";
import "./App.css";
import PineconeLogo from "./icons/PineconeLogo";
export function Page4() {
  // const [all, setAll] = useState("");
  // const [profile, setProfile] = useState("");

  return (
    <>
      <div className="section">
        <div className="box">
          <PineconeLogo />
          <p className="you">You're All Set 🔥</p>
          <p className="we">We have received your submission. Thank you!</p>
        </div>
      </div>
    </>
  );
}
