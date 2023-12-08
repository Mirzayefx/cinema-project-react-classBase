import React, { Component } from "react";

export class TodoApp extends Component {
    state ={
        inputValue: "",
        demo:  [] // JSON.parse(localStorage.getItem('text')) ||
    }
    getText=(myText)=>{
        this.setState({
            demo: myText
        })
    }
    inputHandler=(e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }
    btn=()=>{
        if(this.state.inputValue !== ''){
            let addText = {
                id: this.state.demo.length+1,
                text: this.state.inputValue
            }
            this.state.demo.push(addText)
            this.getText(this.state.demo)
            // localStorage.setItem("text",JSON.stringify(this.state.demo))
            console.log(this.state.demo);
        }else{
            alert("doldur")
        }
    }
    deleteBtn=(id)=>{
            let checkIndex = this.state.demo.findIndex(data=>data.id === +id)
            this.state.demo.splice(checkIndex,1)
            this.getText(this.state.demo)
            // localStorage.setItem("text",JSON.stringify(this.state.demo))
    }
  render() {
    const {inputValue,demo} = this.state
    return (
      <header style={{height: "100vh", color: "var(--white)"}}>
        <div style={{textAlign: "center"}} className="container">
            <h1 style={{ marginBottom: "100px"}}>TODO APP</h1>

            <input value={inputValue} onChange={this.inputHandler.bind(this)} style={{fontSize: "2rem"}} type="text" /><button onClick={this.btn.bind(this)} style={{fontSize: "2rem", width:"100px"}}>click</button>
            <h3 style={{marginTop: "50px"}}>
                {
                    demo.map((text,i) =>{
                        return <div key={i}>{text.text}<button onClick={this.deleteBtn.bind(this)}>delete</button></div>
                    })
                }
                </h3>

        </div>
      </header>
    );
  }
}

export default TodoApp;
