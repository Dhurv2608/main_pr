import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { fireStoreDb } from "../firebaseConfig";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {
    addDoc,
    collection,
} from "firebase/firestore";
const Registration = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is mendatory')
            .min(3, 'Password must be at 3 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [first, setfirst] = useState('')
    const [last, setlast] = useState('')
    const [gender, setgender] = useState('')
    const [phone, setphone] = useState('')
    const handleCreate = async () => {
        // Add a new document in collection "cities"
        if (email) {
            await addDoc(collection(fireStoreDb, "register"), {
                email: email,
                password: password,
                firstname: first,
                lastname: last,
                gender: gender
            });

            setemail("");
            setpassword("");
            setfirst("");
            setlast("");
            setgender('');
        }
    };
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
      console.log(JSON.stringify(data, null, 4))
      return false
    }
  
    return (
        <div>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2> Registration Form</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={handleCreate()}>
                                <div className="input_field">
                                    {" "}
                                    <span>
                                        <i aria-hidden="true" className="fa fa-envelope" />
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)} 
                                        required
                                    />
                                </div>
                                <div className="input_field">
                                    {" "}
                                    <span>
                                        <i aria-hidden="true" className="fa fa-lock" />
                                    </span>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="invalid-feedback">{errors.password?.message}</div>

                                <div className="input_field">
                                    {" "}
                                    <span>
                                    <i class="fa-solid fa-phone"></i>
                                    </span>
                                    <input
                                        type="number"
                                        name="password"
                                        placeholder="Phone number"
                                        maxlength="10"
                                        minlength="10"
                                        pattern=".{10}"
                                        value={phone}
                                        onChange={(e) => setphone(e.target.value)}
                                        required
                                        title="(only 10 chars allow)"
                                    />
                                </div>
                                <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field">
                                            {" "}
                                            <span>
                                                <i aria-hidden="true" className="fa fa-user" />
                                            </span>
                                            <input type="text" name="name" placeholder="First Name" value={first} onChange={(e) => setfirst(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field">
                                            {" "}
                                            <span>
                                                <i aria-hidden="true" className="fa fa-user" />
                                            </span>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Last Name"
                                                value={last}
                                                onChange={(e) => setlast(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field radio_option" onChange={(e) => setgender(e.target.value)}  >
                                    <input type="radio" name="radiogroup1" id="rd1" value={'male'} />
                                    <label htmlFor="rd1" required>Male</label>
                                    <input type="radio" name="radiogroup1" id="rd2" value={'female'} />
                                    <label htmlFor="rd2" >Female</label>
                                </div>

                                <div className="input_field checkbox_option">
                                    <input type="checkbox" id="cb1" required/>
                                    <label htmlFor="cb1">I agree with terms and conditions</label>
                                </div>
                                <div className="nput_field checkbox_option">
                                    <input type="checkbox" id="cb2" />
                                    <label htmlFor="cb2">I want to receive the newsletter</label>
                                </div>
                               
                                  
                                    <Link to='/login' >
                                        <input className="button" type="submit"
                                         F defaultValue="Register" />

                                    </Link>
                                
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className="credit">
                Developed by{" "}
                <a href="https://main-pr.vercel.app/" target="_blank">
                    CAKEY
                </a>
            </p>
        </div>
    )
}

export default Registration;