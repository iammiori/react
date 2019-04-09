// model
//post input 에서 입력한 data 처리
import React from 'react'

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(e) {
        this.props.onDelete(this.props.post.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.post.id}</td>
                <td>{this.props.post.title}</td>
                <td>{this.props.post.contents}</td>
                <td><button onClick={this.delete}>삭제</button></td>
            </tr>
        );
    }
}

export default PostItem;