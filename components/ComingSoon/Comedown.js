import React, { useState, useEffect } from "react";

const Comedown = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2025 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="coming-soon-area"
      style={{
        backgroundImage: `url(/images/page-title/page-title-bg.jpg)`,
      }}
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="coming-soon-content">
              <h1>Coming Soon</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>

              <form onSubmit={onSubmit}>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter email address"
                  name="email"
                  required
                />

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>

              <div id="timer">
                <div id="days">
                  {days} <span>Days</span>
                </div>
                <div id="hours">
                  {hours} <span>Hours</span>
                </div>
                <div id="minutes">
                  {minutes} <span>Minutes</span>
                </div>
                <div id="seconds">
                  {seconds} <span>Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="social-list">
        <li className="list-heading">Follow us for update:</li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Comedown;
