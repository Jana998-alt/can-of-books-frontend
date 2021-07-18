import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export class BookUpdateModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showUpdateModal} onHide={this.props.closing}>
                    <Modal.Header closeButton onClick={this.props.closing}>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Book Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control defaultValue={this.props.thisBook.name} type="text" placeholder="Name" name="bName" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                Description
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Description" name="bDescription" defaultValue={this.props.thisBook.description} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Book Img
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control defaultValue={this.props.thisBook.img} type="text" placeholder="The URL of Img" name="bImg" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Book Status
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as='select' name="bStatus" defaultValue={this.props.thisBook.status}>
                                        <option value='FAVORITE FIVE'>FAVORITE FIVE</option>
                                        <option value='RECOMMENDED TO ME'>RECOMMENDED TO ME</option>
                                        <option value='WANT TO READ'>WANT TO READ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Button variant="outline-primary" type="submit">
                                UPDATE BOOK INFO
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closing}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default BookUpdateModal;

