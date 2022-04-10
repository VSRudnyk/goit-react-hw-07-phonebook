import { Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ photoCards }) => {
  return photoCards.map(({ id, webformatURL, tags }) => (
    <Item key={id} className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </Item>
  ));
};
