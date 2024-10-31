import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  bgImage,
}) => {
  return (
    <>
      <div
        className="page-title-area pt-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>{pageTitle}</h2>
                <ul>
                  <li>
                    <Link href={homePageUrl}>{homePageText}</Link>
                  </li>
                  <li>{activePageText}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
