import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export class Books extends Component {
    
    
    render() {
        return (
            <div>
                {this.props.books.map((element,index) =>{
                    return (<Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={element.img} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            {element.description}
                        </Card.Text>
                        <Card.Text>
                            {element.status}
                        </Card.Text>
                    </Card.Body>
                </Card>)
                })}
                
            </div>
        )
    }
}

export default Books
