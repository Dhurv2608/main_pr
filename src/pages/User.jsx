import React, { useState } from 'react'
import '../css/Userstyle.css'
import { Link } from 'react-router-dom';
import { fireStoreDb } from "../firebaseConfig";
import {
  addDoc,
  collection,
  
} from "firebase/firestore";
import Home from './Home';
const User = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const handleCreate = async () => {
    // Add a new document in collection "cities"
    if (email) {
        await addDoc(collection(fireStoreDb, "login"), {
            email: email,
            password: password
        });

        setemail("");
        setpassword("");
       
    }
};
  return (
    <div>

      {/* account title start */}
      <div className="login-container  mt-4 ">
        <div className="login-box">
          <h2>Login</h2>
          <form >
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setemail(e.target.value)} 

              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setpassword(e.target.value)}

              />
            </div>
            <Link to='/'>
            <button type="submit" > Submit</button>

            </Link>
            <div className="register">
              <Link to='/registration'>
                <p className='text-light'>Create account</p>
              </Link>
            </div>
          </form>
        </div>
      </div>


      {/* account login end */}


    </div>
  )
}

export default User;