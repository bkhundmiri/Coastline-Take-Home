import { useEffect, useState } from "react";
import { getUsers } from "../services/crud";
import User from "../components/User"

const Home = () => {
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsers = await getUsers()
            setUsersData(allUsers.data)
        }
        fetchUsers()
    }, [])

    console.log(usersData);

    const usersJSX = usersData.map((user, index) => (
        <User key={index} user={user}/>
    ))

    return (
        <div>
            {!usersData? (
                <div>Loading...</div>
                ) : (
                    <div>{usersJSX}</div>
                )
            }
        </div>
    )
}

export default Home