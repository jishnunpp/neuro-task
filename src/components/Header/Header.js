import React from "react";
import "./Header.css";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";

const Header = () => {
  return (
    <div className="header">
       <div className="heading-section">
        <div className="banner-heading">
          <p className="banner-heading-p">Spotlight Works </p>

        </div>
        <div className="banner-sub-heading">
          <p className="banner-sub-heading-p">Lorem ipsum dolor sit amet consectetur. In cursus volutpat convallis nec leo pellentesque sit ut.  </p>

        </div>
        <div className="banner-heading-btn">
          <button>more projects</button>

        </div>

      </div>
      
    </div>
  );
};

export default Header;
