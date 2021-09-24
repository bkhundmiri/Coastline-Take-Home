import { useEffect, useState } from "react";
import { getUsers } from "../services/crud";
import User from "../components/User";
import Search from "../components/Search";

import "./Home.css";

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const [queriedUsersData, setQueriedUsersData] = useState([]);
  const [userInput, setUserInput] = useState("");

  //Get Request for Data
  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await getUsers();
      setUsersData(allUsers.data);
    };
    fetchUsers();
  }, []);

  // Search Function
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => e.preventDefault();

  const userSort = (a, b) => a.firstName.localeCompare(b.firstName);

  //   const userSort = (a, b) => {
  //       if(a < b) {
  //           return - 1
  //       } else if (a > b) {
  //           return 1
  //       } else {
  //           return 0
  //       }
  //   }

  //All users constructor
  const usersJSX = usersData
    .filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(userInput.toLowerCase());
    })
    .sort(userSort)
    .map((user, index) => (
      <User
        key={index}
        user={user}
        usersData={usersData}
        setUsersData={setUsersData}
      />
    ));

  // //Queried users constructor
  // const queriedUsersJSX = queriedUsersData.map((user, index) => (
  //     <User key={index} user={user} usersData={usersData} setUsersData={setUsersData}/>
  // ))

  return (
    <>
      {!usersData.length ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Search onSubmit={handleSubmit} onChange={handleSearch} />
          <div className="users-container">{usersJSX}</div>
        </div>
      )}
    </>
  );
};

export default Home;
