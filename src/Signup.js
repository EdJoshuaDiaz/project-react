import { useState } from "react";
import {validateEmail} from "./utils"; 
import { useTheme } from "./ThemeContext";

function Signup () {

const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState({value: "", isTouched: false});
const {theme} = useTheme();

const PasswordError = () => {
    return (
        <p className="pword-error">Password must be atleast 8 characters.</p>
    );
}

function ClearForm() {
    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setPassword({value:"", isTouched:false})
}

function SubmitHandler(e) {
    alert("Successfully registered!")
    e.preventDefault();
    ClearForm();
}

function FormChecker() {
    if (fname && lname && phone.length === 11 && validateEmail(email) && password.value.length >= 8) {
        return true;
    }
}

return (
    <>
        <div className="form-wrapper">
            <form className="feedback-form" style={{backgroundColor: theme === "light" ? "#e9e9e9" : "#333333"}} onSubmit={SubmitHandler}>
                <div>
                    <label htmlFor="first-name">
                        First Name <sup>*</sup>
                    </label>
                    <input 
                        type="text" 
                        id="first-name"
                        value={fname}
                        onChange={e => {setFname(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="last-name">
                        Last Name <sup>*</sup>
                    </label>
                    <input 
                        type="text" 
                        id="last-name"
                        value={lname}
                        onChange={e => {setLname(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="phone">
                        Phone Number <sup>*</sup>
                    </label>
                    <input 
                        type="tel" 
                        id="phone"
                        pattern="[0-9]{11}"
                        value={phone}
                        onChange={e => {setPhone(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="email">
                        Email Address <sup>*</sup>
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="password">
                        Password <sup>*</sup>
                    </label>
                    <input 
                        type="password" 
                        id="password"
                        value={password.value}
                        onChange={e => {setPassword({...password, value: e.target.value})}}
                        onFocus={e => {setPassword({...password, isTouched: true})}}
                    />
                    {password.isTouched && password.value.length < 8 ? (<PasswordError/>) : null}
                </div>
                <button type="submit" disabled={!FormChecker()}>Signup</button>
            </form>
        </div>
    </>
);
}

export default Signup;