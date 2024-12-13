import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./signup.css";

 function Signup() {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('wrong password');
            return;
        }

        if (username === '' || email === '' || password === '') {
            setError('Fill in all fields')
            return;            
        }

        setError('');

        navigate('/');
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h2>Register Account</h2>
            
            <div>
                <input 
                type="text"
                placeholder='Name'
                id='username'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                />   
            </div>

            <div>
                <input 
                type="email"
                placeholder='Email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
            </div>

            <div>
                <input 
                type="password"
                placeholder='Password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
            </div>  

            <div>
                <input 
                type="password" 
                placeholder='Confirm Password'
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type='submit'>Register</button>
        </form>
        </div>
    );
}

export default Signup;