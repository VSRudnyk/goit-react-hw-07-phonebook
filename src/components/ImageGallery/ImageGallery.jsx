import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ photoCards }) => {
  return (
    <div className="gallery">
      <List>
        <ImageGalleryItem photoCards={photoCards} />
      </List>
    </div>
  );
};

ImageGallery.propTypes = {
  photoCards: PropTypes.array.isRequired,
};
