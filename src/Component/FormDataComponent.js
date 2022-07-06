import React from 'react';

export default class FormDataComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            nameOfStudent: "Vicky",
            age: "10",
            genderofstudent :"Female",
            school : "KV"
           
        }
    }
    updateInputBox = (event) => {
        if(event.target.value.length >= 5) {
            this.setState({
                [event.target.id]: event.target.value.replace("a", "e")
            })
        } else {
            alert("You cannot have name less than 3 character")
        }

        if (event.target.value<=5){
            alert("not applicable")
        }
    }

    render() {
        return (
            <div style={{padding: "10px", margin: "10px",border :"2px solid red"}}>
                <div >
                    Enter student Name: <input id="nameOfStudent" type="text" value={this.state.nameOfStudent} onChange={this.updateInputBox} />(enter the full name)<br/><br/>
                    Enter Age of Student: <input id="age" type="text" value={this.state.age}  /><br/><br/>
                    Gender: <input id="genderofstudent" type="radio" value={this.state.genderofstudent}/><br/><br/>
                    School : <input id="school" type = "text" value={this.state.School}/><br/><br/>
                   
                </div>
            
                name of the student is {this.state.nameOfStudent} ,age of the student is {this.state.age} belongs to school { this.state.school}<br/><br/>
            
            </div>
        )
    }
}