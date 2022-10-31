import React, {Component} from "react";
const internalcss = {color: "blue"} ;
const internalcss2 = {color: "darkBlue"}


const FuncComoponent = () =>{
   return(
    <div className="card1">
    <h1> This is created using Functional Component </h1>
    <p> this is done using External Css</p>
    <p style={internalcss}> this is done by using internalcss</p>
    </div>
   )
}
export default FuncComoponent;

export class ClassComponent extends Component {
    render(){
        return(
            <div className="card2"> 
            <h1>This is creadted using Class Componenet</h1>
            <p> this is done by using external Css</p>
            <p style={internalcss2}> this is done by using internal Css</p>
            </div>
        )
    }
}