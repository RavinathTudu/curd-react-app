import React, { useState, useEffect } from "react"; //useEffect used to load effect
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]); //used to store data in array initial null

    useEffect(() => {
        console.log("testing");
        loadUsers();
    }, []); //blank array is depandecy used to limit

    const loadUsers = async () => {
        const results = await axios.get("http://localhost:3003/users");
        console.log(results);
        setUser(results.data.reverse());
    };

    const deleteUser = async id => {
        const result = await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to = {`/user/view/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to = {`/user/edit/${user.id}`}>Update</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Home;  //access out side
