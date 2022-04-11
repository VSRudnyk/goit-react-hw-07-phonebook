import React, { Component } from 'react';
import { Spinner } from 'components/Spinner/Spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import photoAPI from '../Api/fetchPhoto';
import { List } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    photoCards: [],
    page: 1,
    status: 'idle',
  };

  LoadMorePhoto = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;
    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ photoCards: [] });
    }
    if (prevProps.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: 'pending' });
      photoAPI
        .fetchPhoto(searchQuery, page)
        .then(photoCards => {
          this.setState(prevState => ({
            photoCards: [...prevState.photoCards, ...photoCards.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { status, photoCards } = this.state;

    if (status === 'pending') {
      return <Spinner />;
    }

    if (status === 'resolved') {
      return (
        <>
          <List>
            <ImageGalleryItem photoCards={photoCards} />
          </List>
          <Button onClick={this.LoadMorePhoto} />
        </>
      );
    }

    if (status === 'rejected') {
      return;
    }
  }
}
