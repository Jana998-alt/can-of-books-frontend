import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Books from './Books';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';
import Button from 'react-bootstrap/Button'
import BookUpdateModal from './BookUpdateModal';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showCards: false,
      showModal: false,
      showUpdateModal: false,
      thisBook: {},
      bookId: '',
    }
  }

  componentDidMount = async () => {

    const emailOfUser = this.props.auth0.user.email;
    const getBestBooks = await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${emailOfUser}`);


    await this.setState({
      books: getBestBooks.data,
      showCards: true,
    })

  }



  handleModalShowing = () => {
    this.setState({ showModal: true })

  }

  handleModalClosing = () => {
    this.setState({ showModal: false,
      showUpdateModal: false })
  }

  addBook = async (event) => {
    event.preventDefault();

    const bookFormData = {
      email: this.props.auth0.user.email,
      bookName: event.target.bName.value,
      bookDescription: event.target.bDescription.value,
      bookStatus: event.target.bStatus.value,
      bookImg: event.target.bImg.value,
    }

    try {
      const SERVER = process.env.REACT_APP_SERVER;

      const booksData = await axios.post(`${SERVER}/books`, bookFormData);

      this.setState({
        books: booksData.data
      })
    } catch (error) {
      console.error('error');
    }

  }

  deleteBook = async (id) => {

    try {
      const SERVER = process.env.REACT_APP_SERVER;

      const booksData = await axios.delete(`${SERVER}/books/${id}?email=${this.props.auth0.user.email}`);


      this.setState({
        books: booksData.data
      })
    } catch (error) {
      console.error('error2');
    }

  }

  updateModel = async(bookId)=>{
    await this.setState({
      showUpdateModal: true,
      thisBook: this.state.books.find(element => element._id === bookId ),
      bookId: bookId,
    })
  }

  updateBook = async (event) => {
    
    event.preventDefault();
    try{
    await this.setState({
      thisBook: {
        email: this.props.auth0.user.email,
        bookName: event.target.bName.value,
        bookDescription: event.target.bDescription.value,
        bookStatus: event.target.bStatus.value,
        bookImg: event.target.bImg.value,
      }
    })

    const booksData = await axios.put(`${process.env.REACT_APP_SERVER}/books/${this.state.bookId}`, this.state.thisBook)

    this.setState({
      books: booksData.data
    })
  }
  catch (error) {
    console.log('error in update book function');
  }

  }



  render() {

    return (

      <Jumbotron>

        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        <Button variant="outline-dark" onClick={this.handleModalShowing}>Add Book</Button>

        <BookUpdateModal thisBook={this.state.thisBook} updateBook={this.updateBook} showUpdateModal={this.state.showUpdateModal} closing={this.handleModalClosing} />

        <BookFormModal addBook={this.addBook} showModal={this.state.showModal} closing={this.handleModalClosing} />

        <Books updateModel={this.updateModel} books={this.state.books} showCards={this.state.showCards} deleteBook={this.deleteBook} />
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
