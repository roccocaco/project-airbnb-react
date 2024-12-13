import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Fill in all fields");
      return;
    }

    setError("");

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <div>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Signup;
