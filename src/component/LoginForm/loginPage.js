import React, { useState } from "react";
import "./loginPage.css";
import Amazon_Icon from "../../Assests/amazon.jpg";
import background_rectangle from "../../Assests/Rectangle 4@2x.png";
import cancel_Icon from "../../Assests/Group 2.png";
import google from "../../Assests/Group 9.png";
import facebook from "../../Assests/Rectangle 17.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div
      className="wrapper"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <form action="" onSubmit={handleSubmit} className="main_form">
        <div className="header">
          <img style={{ width: "111px" }} src={Amazon_Icon} alt="" />
        </div>
        <h2>Login</h2>
        <div className="rectangle_img">
          <img style={{ width: "100%" }} src={background_rectangle} alt="" />
          <div className="input-box">
            <input
              type="text"
              placeholder="Emain"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="alert_message">
            {submitted && !email && (
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img src={cancel_Icon} alt="" />
                <p style={{ marginLeft: "4px" }}>The Email Field is required</p>
              </label>
            )}
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="alert_message">
            {submitted && !password && (
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img src={cancel_Icon} alt="" />
                <p style={{ marginLeft: "4px" }}>
                  The Password Field is required
                </p>
              </label>
            )}
          </div>
          <button className="submit_button" type="submit">
            Submit
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <p style={{ color: "#000000", fontFamily: "Josefin Sans" }}>
              Forgot Password?
            </p>
            <p style={{ color: "#D9185F", fontFamily: "Josefin Sans" }}>
              New User? Sign Up
            </p>
          </div>
          <p
            style={{
              alignItems: "center",
              textAlign: "center",
              color: "#000000",
            }}
          >
            or
          </p>

          <div className="google_button">
            <img src={google} alt="" />
            <p style={{ fontFamily: "Josefin Sans", marginLeft: "30px" }}>
              CONTINUE WITH GOOGLE
            </p>
          </div>
          <div className="google_button " style={{ marginBottom: "24px" }}>
            <img src={facebook} alt="" />
            <p style={{ fontFamily: "Josefin Sans", marginLeft: "30px" }}>
              CONTINUE WITH FACEBOOK
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
