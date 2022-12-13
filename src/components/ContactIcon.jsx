import PropTypes from "prop-types";
import React from "react";

const ContactIcon = (props) => {
  return (
    <div className="contact__icon">
      <div className="contact__icon__item">
        <a href="https://www.facebook.com/isleminhtri/">
          <i className={`${props.facebook}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="https://www.instagram.com/">
          <i className={`${props.instagram}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="https://www.facebook.com/isleminhtri/">
          <i className={`${props.twitter}`}></i>
        </a>
      </div>
    </div>
  );
};

ContactIcon.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  twitter: PropTypes.string,
};

export default ContactIcon;
