import { Link } from "react-router-dom"

const User = ({ user, usersData, setUsersData }) => {

    const handleDelete = () => {
        const updatedUsersData = usersData.filter((users) => users.id !== user.id)
        setUsersData(updatedUsersData)
    }

    return (
        <div>
            <Link to={`/user/${user.id}`}>
                <div>
                    <img src={user.picture} alt='profile-pic'/>
                    {user.firstName} {user.lastName}
                </div>
            </Link>
                <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default User