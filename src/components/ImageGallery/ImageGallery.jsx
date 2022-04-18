import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ photoCards, openModal }) => {
  return (
    <div className="gallery">
      <List>
        <ImageGalleryItem photoCards={photoCards} openModal={openModal} />
      </List>
    </div>
  );
};

ImageGallery.propTypes = {
  photoCards: PropTypes.array.isRequired,
};
