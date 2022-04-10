import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ photoCards }) => {
  const { hits } = photoCards;
  return (
    <List>
      <ImageGalleryItem hits={hits} />
    </List>
  );
};
