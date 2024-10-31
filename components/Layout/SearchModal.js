import React from "react";

const SearchModal = ({ active, onClick }) => {
  const closeModal = () => {
    onClick(false);
  };

  return (
    <>
      <div className={`sidebar-modal ${active}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-contact-feed">
            <h2>Search</h2>

            <div className="sidebar-search-form">
              <form>
                <input
                  className="form-control"
                  name="search"
                  placeholder="Search"
                  type="text"
                />
                <button className="search-button" type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Close Modal */}
          <span
            onClick={closeModal}
            className="close-btn sidebar-modal-close-btn"
          >
            <i className="flaticon-cancel"></i>
          </span>
        </div>

        <span onClick={closeModal} className="close-modal"></span>
      </div>
    </>
  );
};

export default SearchModal;
