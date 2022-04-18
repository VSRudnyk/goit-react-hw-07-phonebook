import { Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ photoCards, openModal }) => {
  return photoCards.map(({ id, webformatURL, largeImageURL, tags }) => (
    <Item key={id} onClick={() => openModal(largeImageURL)}>
      {/* <a href={largeImageURL}> */}
      <img src={webformatURL} alt={tags} loading="lazy" />
      {/* </a> */}
    </Item>
  ));
};

ImageGalleryItem.propTypes = {
  photoCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
