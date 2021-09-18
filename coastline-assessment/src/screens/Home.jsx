import { useEffect, useState } from "react";
import { getUsers } from "../services/crud";
import User from "../components/User"
import Search from "../components/Search";

const Home = () => {
    const [usersData, setUsersData] = useState([])
    const [queriedUsersData, setQueriedUsersData] = useState([])

    
    //Get Request for Data
    useEffect(() => {
        const fetchUsers = async () => {
            const allUsers = await getUsers()
            setUsersData(allUsers.data)
        }
        fetchUsers()
    }, [])


    // Search Function
    const handleSearch = (e) => {
        const queriedUsersData = usersData.filter((user) => {
            const fullName = user.firstName + user.lastName;
            return fullName.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setQueriedUsersData(queriedUsersData)
    }
    const handleSubmit = (e) => e.preventDefault()


    //All users constructor
    const usersJSX = usersData.map((user, index) => (
        <User key={index} user={user} usersData={usersData} setUsersData={setUsersData}/>
    ))
    //Queried users constructor
    const queriedUsersJSX = queriedUsersData.map((user, index) => (
        <User key={index} user={user} usersData={usersData} setUsersData={setUsersData}/>
    ))

    return (
        <>
            {!usersData? (
                <div>Loading...</div>
                ) : (
                    <div>
                        <Search onSubmit={handleSubmit} onChange={handleSearch} />
                        <div>{queriedUsersData.length? queriedUsersJSX: usersJSX}</div>
                    </div>
                )
            }
        </>
    )
}

export default Home