import React from "react";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'
import axios from "axios";

//Inherite from React.Component
export class BookItem extends React.Component{

    constructor(){
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    DeleteBook(e){
        e.preventDefault();
        //Delete from this URL with this id
        axios.delete('http://localhost:4000/api/book/' + this.props.book._id)
        .then((res)=>{
            this.props.ReloadData(); //Then invoke this method to reload page
        })
        .catch();
    }

    render(){
        return( 
            //Added card
            <div style={{ marginLeft:620}}>
                 <Card className="text-center" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.book.cover} />
                  <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <h4>{this.props.book.author}</h4>
                    </Card.Text>
                  </Card.Body>
                  <Link to={'/edit/' + this.props.book._id} className="btn btn-primary">Edit</Link>
                  {/* Adds red button 
                    Calls DeleteBook Method when clicked*/}
                  <Button variant="danger" onClick={this.DeleteBook}>Delete</Button> 
                 </Card>
                {/* <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200"/>
                <h4>{this.props.book.authors[0]}</h4> */}
            </div>
        );
    }    
}