// LoginForm.js
import React, { useState } from "react";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/AuthContext";

const LoginForm = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth(); // Access the login function

    const database = [
        {
            username: "user1",
            password: "1234"
        }
    ];

    const errors = {
        pass: "Incorrect password",
        uname: "Invalid credentials"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const uname = form.uname.value;
        const pass = form.pass.value;

        const userData = database.find((user) => user.username === uname);

        if (userData) {
            if (userData.password !== pass) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                login(); // Call the login function
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Redirect to Dashboard if form is submitted
    if (isSubmitted) {
        navigate("/dashboard");
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    return (
        <div className="horizontal-stack">
            <img 
                src="car2.png" 
                alt="Car" 
                className="responsive-image" 
                style={{ width: '50%', height: '50%' }} 
            />
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Welcome!</h1>
                    
                    
                    <div className="input-box">
                        <FaUser className="icon"/>
                        <input type="text" placeholder="Username" name="uname" required />
                    </div>
                    <div className="input-box">
                        <FaLock className="icon"/>
                        <input type="password" placeholder="Password" name="pass" required />
                        <div style={{ fontSize: '25px', color: 'red' }}>
                            {renderErrorMessage("pass")}
                            {renderErrorMessage("uname")}
                        </div>
                    </div>
                    <button type="submit" className="hover-button">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;