import React, { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setMessage("Registre completat!");
      navigate("/login");
    } catch (error) {
      setMessage("Error durant el registre. Siusplau, torna-ho a provar.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <FontAwesomeIcon icon={faLock} style={styles.icon} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
        <p style={styles.redirect}>
          Ja tens un compte?{" "}
          <button onClick={() => navigate("/login")} style={styles.link}>
            Inicia sessió
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #2196F3, #03A9F4)",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
  },
  input: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "16px",
  },
  icon: {
    color: "#888",
    fontSize: "18px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    color: "red",
    marginTop: "10px",
  },
  redirect: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    background: "none",
    border: "none",
    color: "#007BFF",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "14px",
  },
};

export default Register;