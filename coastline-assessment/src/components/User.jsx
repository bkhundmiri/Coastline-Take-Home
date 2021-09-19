import { Link } from "react-router-dom"

import './User.css'

const User = ({ user, usersData, setUsersData }) => {

    const handleDelete = () => {
        const updatedUsersData = usersData.filter((users) => users.id !== user.id)
        setUsersData(updatedUsersData)
    }

    return (
        <div className="user-card">
            <Link to={`/user/${user.id}`}>
                <div className="user-card-details">
                    <img className="user-profile" src={user.picture} alt='profile-pic'/>
                    <div className="user-fullname">{user.firstName} {user.lastName}</div>
                </div>
            </Link>
                <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default User