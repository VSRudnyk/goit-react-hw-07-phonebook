import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import photoAPI from '../Api/fetchPhoto';

export class FetchPhoto extends Component {
  state = {
    photoCards: [],
    page: 1,
    status: 'idle',
  };

  LoadMorePhoto = () => {
    console.log('Load more');
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const searchQuery = this.props.searchQuery;
    const { page } = this.state;
    if (prevProps.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: 'pending' });
      photoAPI
        .fetchPhoto(searchQuery, page)
        .then(photoCards => {
          console.log(photoCards.hits);
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
    console.log(photoCards);

    if (status === 'pending') {
      return;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery photoCards={photoCards} />
          <Button onClick={this.LoadMorePhoto} />
        </>
      );
    }

    if (status === 'rejected') {
      return;
    }
  }
}
