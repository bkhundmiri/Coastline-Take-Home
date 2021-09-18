import "./Post.css"

const Post = ({ post }) => {
    return (
        <div className='post-container'>
            <img src={post.image} alt="user-post" className='post-img'/>
            <div>
                <div>{post.text}</div>
                <div>{post.likes}</div>
            </div>
        </div>
    )
}

export default Post