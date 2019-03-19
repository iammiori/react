import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps={
        name : '기리보이'
    }
    static propTypes={
        name : PropTypes.string,
        age : PropTypes.number.isRequired // 꼭존재
    }
    state={
        number : 0
    }
    /*
    constructor(props){
        super(props);
        this.state={
            number:1
        }
    }
*/
    render(){
        return(
          <div>
              영어로 버블 그녀의 거품 {this.props.name} GR
              <p>기리보이는 {this.props.age}살</p>
              <p>숫자 : {this.state.number}</p>
              <button onClick={()=>{
                 this.setState({
                 number:this.state.number+1
              })
              }
              }>더하기</button>

          </div>
        );
    }
}

export default MyComponent;