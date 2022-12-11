import React from "react";
//Must mark for export
//Extend React.Component and add render()
export class Header extends React.Component{

    render(){
        return(
            <div>
                <h1>My Header in another component</h1>
            </div>
        )
    }
}