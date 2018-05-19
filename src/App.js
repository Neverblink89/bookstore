import React, { Component } from 'react';
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import Cart from './components/Cart'
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container fluid>
          <Row>
         <Col>
           <BookList />
         </Col>
         <Col>
           <Cart />
         </Col>
       </Row>
        </Container>
      </div>
    );
  }
}

export default App;
