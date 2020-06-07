import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import ReactEncrypt from 'react-encrypt';

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const{name, username,email,phone,password,repassword}=user; //local variable or es6 it is distruction

    const onInputChange = (e) => {
        //Here change password save in dycript
        setUser({...user,[e.target.name]: e.target.value}); //.... means spread method used to not getting error when typing any filds
    };

    const onSubmit = async e => {
         if(e.target.email.name == "password" && e.target.email.name =="repassword" ){
             alert("sucess email");
         }
        //console.log(e.target.email.name == "password");
        e.preventDefault(); // default behaviour stop. if not use default value shows in url
        await Axios.post("http://localhost:3003/users", user);
        history.push("/"); //home page redirect
    }
    return(
        <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2 className="text-center mb-4">Add A User</h2>
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
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your re password"
              name="repassword"
              value={repassword}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
    )
}

export default AddUser;