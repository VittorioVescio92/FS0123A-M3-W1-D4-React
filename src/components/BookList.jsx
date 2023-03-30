import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form, Button } from "react-bootstrap";

class BookList extends Component {
  //  state ={}

  render() {
    return (
      <Container className="container-fluid mb-4">
        <Form onSubmit={this.searchBook}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Libro</Form.Label>
            <Form.Control type="password" placeholder="Inserisci il nome del libro che cerchi" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
          <Button variant="primary" type="submit">
            Cerca libro
          </Button>
        </Form>
        <Row className="justify-content-center">
          {this.props.selectedBooks.map(selectedBook => (
            <SingleBook
              cover={selectedBook.img}
              title={selectedBook.title}
              category={selectedBook.category}
              price={selectedBook.price}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
