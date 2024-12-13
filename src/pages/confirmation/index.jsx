import { Link } from 'react-router-dom'; 

function Confirmation() {
    return (
        <div>
            <h2>Message Sent Successfully!</h2>
            <p>Thanks for getting in touch. We will soon return your message.</p>
            <Link to="/contact">Return to form</Link>
        </div>
    );
}

export default Confirmation;