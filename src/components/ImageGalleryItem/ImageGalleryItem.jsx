import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, showBigImg, largeImageURL }) => {
  return (
    <li
      onClick={() => {
        showBigImg({ largeImageURL, alt });
      }}
      className={css.imageGalleryItem}
    >
      <img className={css.imageGalleryItemImage} src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showBigImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
