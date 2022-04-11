import { Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ photoCards }) => {
  return photoCards.map(({ id, webformatURL, largeImageURL, tags }) => (
    <Item key={id}>
      <a href={largeImageURL}>
        <img src={webformatURL} alt={tags} loading="lazy" />
      </a>
    </Item>
  ));
};
