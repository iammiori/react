import React, {Component} from 'react';

class Iteration extends Component{
    state= {
        names : ['눈사람', '얼음', '눈', '바람']
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names : this.state.names.concat(this.state.name),
            name : ''
        });
    }

    handleRemove = (index) => {
        const {names} = this.state;
        this.setState({
            names:[
                ...names.slice(0,index),
                ...names.slice(index+1,names.length)
            ]
        });
    }
    render(){
        //const names = ['눈사람','얼음','눈','바람'];
        const nameList = this.state.names.map(
            (name, index)=>(<li
                key={index}
                onDoubleClick={()=>this.handleRemove(index)}
            >{name}</li>)
        );

        return(
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <button onClick={this.handleInsert}> 추가 </button>

          <ul>
              {nameList}
          </ul>
            </div>
        );
    }
}

export default Iteration;