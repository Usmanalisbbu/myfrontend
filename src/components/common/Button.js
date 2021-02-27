import React from "react";
import PropTypes from "prop-types";

const Button = ({ styleClass, value, onClick }) => (
  <button
    className={styleClass}
    onClick={(event) => onClick(event)}
    type="button"
  >
    {value}
  </button>
);

Button.propTypes = {
  styleClass: PropTypes.string,
  /* value: PropTypes.string.isRequired,*/
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  styleClass: "btn btn-primary",
};

export default Button;
