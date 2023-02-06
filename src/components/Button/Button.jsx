import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClickButton, buttonText }) => {
  return (
    <button
      onClick={() => {
        onClickButton();
      }}
      className={css.button}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
