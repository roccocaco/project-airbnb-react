import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./contact.css";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/confirmation')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Contact us</h2>
                <div>
                    <input 
                        type="text"   
                        placeholder='Name'  
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                </div>

                <div>
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required    
                     />
                </div>     

                <div>
                    <textarea
                        value={message}
                        placeholder='Message'
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        ></textarea>
                </div>
                    <button type='submit'>Send</button>
            </form>
        </div>
    );
}

export default Contact;