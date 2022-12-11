import React from "react";
import { BookItem } from "./bookItem";

//Inherite from React.Component
export class Books extends React.Component{

    render(){
        //Map will perform same operation on each element in array
        //Creates a bookItem for every book in array
        //this.props.books accesses properties of parent
        //Add unique key so that you don't end up in infinite loop
        
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book._id} ReloadData={this.props.ReloadData}></BookItem> //_id is the unique identifier
            }
        );
    }    
}