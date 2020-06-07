import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


const UserView = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { id } = useParams();
    useEffect(() => { //useEffect used to load data when page loading.
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data); //set user
    }
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
      </Link>      
            <h1 className="display-4">User Id: {id}</h1>
            <hr />            
            <div class="offset-2 col-7 align-self-center">
                <table className="table border shadow">
                    <tr>
                        <td><b>NAME:</b></td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td><b>USER NAME:</b></td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td><b>EMAIL:</b></td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td><b>PHONE:</b></td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td><b>WEBSITE:</b></td>
                        <td>{user.website}</td>
                    </tr>                   
                </table>
            </div>

            
        </div>
    )
}

export default UserView;