import { Link } from "react-router-dom"

const User = ({ user }) => {
    return (
        <Link to={`/user/${user.id}`}>
            <div>
                <img src={user.picture} alt='profile-pic'/>
                {user.firstName} {user.lastName}
            </div>
        </Link>
    )
}

export default User