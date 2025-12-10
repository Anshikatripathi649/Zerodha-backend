import React from "react";

function Education() {
  return (
    <div className="container p-4">
      <div className="row p-4 education">
        <div className="col p-4 education-img">
          <img src="media/images/education.svg"></img>
        </div>
        <div className="col p-4 education-text" style={{ textAlign: "left" }}>
          <h1 className="fs-2 mb-5 ">Free and open market education</h1>
          <p className="fs-5 mb-4 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="fs-5" href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right-long"></i>{" "}
          </a>
          <p className="fs-5 mt-4 mb-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="fs-5" href="" style={{ textDecoration: "none" }}>
            TrandingQ&A<i class="fa-solid fa-arrow-right-long"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
