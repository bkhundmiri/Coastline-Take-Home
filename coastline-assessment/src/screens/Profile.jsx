import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Post from "../components/Post"
import { getPosts, getUser } from "../services/crud"

const Profile = () => {
    const [userData, setUserData] = useState({})
    const [userPosts, setUserPosts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUser(id)
            setUserData(userData)
        }
        fetchUserData()
    }, [id])

    useEffect(() => {
        const fetchUserPostData = async () => {
            const userPosts = await getPosts(id)
            setUserPosts(userPosts.data)
        }
        fetchUserPostData()
    }, [id])

    const postJSX = userPosts.map((post, index) => (
        <Post key={index} post={post}/>
    ))

    console.log(userData);
    console.log(userPosts);

    return (
        <div>
            {!userData ? (
                    <div>Loading</div>
                ) : (
                    <div>
                        <div>{userData.firstName} {userData.lastName}</div>
                        <div>{userData.phone}</div>
                        <div>{userData.email}</div>
                        {postJSX}
                    </div>
                )
            }
        </div>
    )
}

export default Profile