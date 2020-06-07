import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams(); //used to parameter
    //alert(id);
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { name, username, email, phone, website } = user; //local variable or es6 it is distruction

    const onInputChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value }); //.... means spread method used to not getting error when typing any filds
    };

    const onSubmit = async e => {
        e.preventDefault(); // default behaviour stop. if not use default value shows in url
        await Axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    }
    useEffect(() => {
        console.log("Sucessfully load 1");
        loadUser();
    }, []);

    const loadUser = async () => {
        console.log("Sucessfully");
        //const result = await Axios.get("http://localhost:3003/users/" + id);
        const result = await Axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
        console.log(result.data);

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-5">
                <h2 className="text-center mb-4">Edit Userr</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;