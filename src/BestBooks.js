import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {

  constructor(props,email){
    super(props)
    this.emailOfUser = email;
  }

  componentDidMount =async () =>{

    const emailOfUser = this.props.auth0.user.email;
    console.log(emailOfUser);
   const getBestBooks = await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${emailOfUser}`);
   
      // this.setState({
      //   books : getBestBooks.data.books,
      // })
      // return <h1>hi</h1>

  }
  

  
  render(){
    
    return(
      
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books 
        </p>
        
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
