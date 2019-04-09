//view
/*
1. tabel 그려줌
2. post container 의 자식/ 각각 pinstItem 담고 있어 (postItem 이자식)
 */
import React from 'react'
import PostItem from '../model/PostItem'

function PostList(props) {
    return (
        <table>
            <colgroup>
                <col width="20%" /><col /><col width="30%" /><col width="10%" />
            </colgroup>
            <thead>
            <tr>
                <th>ID</th><th>Title</th><th>Contents</th><th>delete</th>
            </tr>
            </thead>
            <tbody>
            {props.postList.map((post) => <PostItem key={post.id} post={post} onDelete={props.onDelete} />)}
            </tbody>
        </table>
    );
}
export default PostList;