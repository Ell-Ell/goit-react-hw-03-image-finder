import React, { Component } from 'react';
import Container from './components/Container/Container';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Spiner from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import imagesAPI from './services/api-service';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    text: '',
    page: 1,
    images: [],
    loading: false,
    error: null,
    status: Status.IDLE,
    showModal: false,
    largeImageURL: '',
    webformatURL: '',
    id: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.text;
    const nextName = this.state.text;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ images: [], page: 1, status: Status.PENDING });
    }
    if (prevName !== nextName || prevPage !== nextPage) {
      this.fetchImages(nextName, nextPage);
    }
  }

  fetchImages(nextName, nextPage) {
    imagesAPI
      .fetchImages(nextName, nextPage)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          status: Status.RESOLVED,
        }));
        if (nextPage !== 1) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }
        if (images.total === 0) {
          return Promise.reject(new Error('WRONG!Try again;)'));
        }
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }

  handleFormSubmit = text => {
    this.setState({ text, page: 1 });
  };
  openModal = e => {
    this.setState({ largeImageURL: e.target.dataset.source });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  btnFetch = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, error, status, showModal, largeImageURL } = this.state;
    const resolvedImg = status === Status.RESOLVED && images.length > 11;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.IDLE && <h2>Введите запрос на поиск</h2>}
        {status === Status.REJECTED && <h1>{error.message}</h1>}
        {resolvedImg && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        {status === Status.PENDING && <Spiner />}
        {images.length !== 0 && <Button onClick={this.btnFetch} />}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </Container>
    );
  }
}

export default App;
