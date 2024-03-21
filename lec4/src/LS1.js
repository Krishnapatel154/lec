import React from "react";
class LS1 extends React.Component
{
    constructor()
    {
       super();
       this.state={
        name:"krishna"
    }
    }
    componentDidMount()
    {
        console.warn("componentdidMount")
    }
    render()
    {
        return(
            <div>
            <h1>hello {this.state.name}</h1>
            <button onClick={()=>this.setState({name:"kishu"})}>update data</button>
            </div>
        )
       
    }
}
export default LS1