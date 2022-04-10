import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ photoCards }) => {
  return (
    <List>
      <ImageGalleryItem photoCards={photoCards} />
    </List>
  );
};
