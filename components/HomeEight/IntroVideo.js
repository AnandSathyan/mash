import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const IntroVideo = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />
      
      <div 
        className="video-section"
        style={{
          backgroundImage: `url(/images/video-bg.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="video-content">
              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
              >
                <i className="flaticon-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
