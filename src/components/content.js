import React from "react";
//Must mark for export
//Extend React.Component and add render()
export class Content extends React.Component{
    
    render(){
        //Javascript always goes in return()
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
         );
            
    }

}