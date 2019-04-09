// parent of parent
// contorller

import React from 'react'
import PostList from '../view/PostList'
import PostInput from '../model/PostInput'

class PostContainer extends React.Component {
    //constructor : 객체가 처음 생성될 때 호출
    // 이때 반드시 1. super(props) 해줘야됨 => 상속, this 사용하게 해줌
    // 2. state 초기화 => this.setState
    // 3. bind 꼭해주기
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            id : 0
        };

        this.submit = this.submit.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentWillMount() {
    // 마운팅 되기 직전
        // render 전에

        this.setState({
            postList: [{
                //id: new Date().toLocaleTimeString(),
                id :this.state.id+1,
                title: 'first title',
                contents: 'lolololo',
            }]
        });

    }
// title, contents submit

   // componentDidMount() {
        /*
        this.setState({
            id : this.state.id +1
        });
        */
        /*
        this.setState((prevState)=>{
            return {
                id: prevState.id +1
            };
        })
        */

   // }


    submit(title, contents) {

        const post = {
           // id: new Date().toLocaleTimeString(),
            id: this.state.id,
            title: title,
            contents: contents,
        };

        const postList = this.state.postList.slice();

        postList.push(post);
        // add data

        this.setState({
            postList: postList,

        });
    }

    delete(id) {
        const postList = this.state.postList.slice();

        const deleteItem = postList.find((post) => {
            return post.id === id;
        });

        postList.splice(postList.indexOf(deleteItem), 1);
        this.setState({
            postList: postList,
        });
    }

    render() {
        return (
            <div>
                <PostList postList={this.state.postList} onDelete={this.delete} />
                <hr />
                <PostInput onSubmit={this.submit} />
            </div>
        );
    }
}

export default PostContainer;