import React,{ Component } from 'react'
export default class Todo extends Component{
    constructor(){
        super();
        this.state={
        tasks:[{id:1,task:'First'},{id:2,task:'Second'},{id:3,task:'Third'}],
        currTask:''
        }
    }
    handleChange=(e)=>{
        let val=e.target.value;
        this.setState({
            currTask:val
        })
    }
    handleSubmit=()=>{
        let ntasks=[...this.state.tasks,{id:this.state.tasks.length+1,task:this.state.currTask}];
        this.setState({
            tasks:ntasks,
            currTask:''
        })
    }
    onDelete=(id)=>{
        let nfa=this.state.tasks.filter(function(e){
            return e.id!=id;
        })
        this.setState({
            tasks:nfa
        })
    }
    render(){
        return(
            <div>
                <div className="input-container">
                    <input value={this.state.currTask} onChange={this.handleChange} type="text"></input>
                    <button onClick={this.handleSubmit}>ADD</button>
                </div>
                <div className="class-list">
                    <ul>
                        {
                            this.state.tasks.map((tobj)=>{
                                return(<li>
                                    <h1>{tobj.task}</h1>
                                    <button onClick={()=>{this.onDelete(tobj.id)}} >Delete</button>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}