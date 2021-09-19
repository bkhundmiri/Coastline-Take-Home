import "./Post.css"

const Post = ({ post }) => {
    return (
        <div className='post-card'>
            <img src={post.image} alt="user-post" className='post-img'/>
            <div className='post-details'>
                <div>{post.text}</div>
                <div>Likes: {post.likes}</div>
            </div>
        </div>
    )
}

export default Post