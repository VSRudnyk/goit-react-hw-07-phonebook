import { useState, useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Spinner } from 'components/Spinner/Spinner';
import { Button } from 'components/Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import photoAPI from './Api/fetchPhoto';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [photoCards, setPhotoCards] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const loadMorePhoto = () => {
    setPage(s => s + 1);
  };

  const handleFormSubmit = searchQuery => {
    setPhotoCards([]);
    setSearchQuery(searchQuery);
    setPage(1);
  };

  const simpleLightbox = () => {
    var lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
  };

  useEffect(() => {
    simpleLightbox();
    if (searchQuery === '') {
      return;
    }
    setStatus('pending');

    photoAPI
      .fetchPhoto(searchQuery, page)
      .then(photoCards => {
        setPhotoCards(s => [...s, ...photoCards.hits]);
        setStatus('resolved');
      })
      .catch(error => setStatus('rejected'));
  }, [page, searchQuery]);

  if (status === 'idle') {
    return <Searchbar onSubmit={handleFormSubmit} />;
  }

  if (status === 'pending') {
    return <Spinner />;
  }

  if (status === 'resolved') {
    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery photoCards={photoCards} />
        <Button onClick={loadMorePhoto} />
      </>
    );
  }

  if (status === 'rejected') {
    return;
  }
};

// import React, { Component } from 'react';
// import { Spinner } from 'components/Spinner/Spinner';
// import { Button } from 'components/Button/Button';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import photoAPI from './Api/fetchPhoto';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// export class App extends Component {
//   state = {
//     searchQuery: '',
//     photoCards: [],
//     page: 1,
//     status: 'idle',
//   };

//   LoadMorePhoto = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   handleFormSubmit = searchQuery => {
//     this.setState({ searchQuery, page: 1 });
//   };

//   simpleLightbox = () => {
//     var lightbox = new SimpleLightbox('.gallery a', {});
//     lightbox.refresh();
//   };

//   componentDidUpdate(prevProps, prevState) {
//     this.simpleLightbox();
//     const { page, searchQuery } = this.state;

//     if (prevState.searchQuery !== searchQuery) {
//       this.setState({ photoCards: [] });
//     }
//     if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
//       this.setState({ status: 'pending' });
//       photoAPI
//         .fetchPhoto(searchQuery, page)
//         .then(photoCards => {
//           this.setState(prevState => ({
//             photoCards: [...prevState.photoCards, ...photoCards.hits],
//             status: 'resolved',
//           }));
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }

//   render() {
//     const { status, photoCards } = this.state;

//     if (status === 'idle') {
//       return <Searchbar onSubmit={this.handleFormSubmit} />;
//     }

//     if (status === 'pending') {
//       return <Spinner />;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <Searchbar onSubmit={this.handleFormSubmit} />
//           <ImageGallery photoCards={photoCards} />
//           <Button onClick={this.LoadMorePhoto} />
//         </>
//       );
//     }

//     if (status === 'rejected') {
//       return;
//     }
//   }
// }
