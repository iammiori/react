import React, {Component} from 'react';

class EventPractice extends Component{
    state={ //state 선언
        my_id:'',
        my_pw:''
    }


    handleChange= (e) => { //화살표 함수
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleClick= () => {
        alert(this.state.my_id+'님! 비밀번호는'+this.state.my_pw);
        this.setState({
            my_id:'',
            my_pw:''
        });
    }

    handleKeyPress = (e) => {
        if (e.key==='Enter'){
            this.handleClick();
        }
    }

    render(){
        return(
          <div>
              <h1> event practice</h1>
              <input
                  type="text"
                  name="my_id"
                  placeholder='your id'
                  value={this.state.my_id}
                  onChange={this.handleChange}
              />
              <input
                  type="password"
                  name="my_pw"
                  placeholder='your pw'
                  value={this.state.my_pw}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
              />
              <button onClick={this.handleClick}> Login </button>


          </div>
        );
    }
}

export default EventPractice;

