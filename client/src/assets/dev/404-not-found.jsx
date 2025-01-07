import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "72px",
    color: "#333",
  },
  message: {
    fontSize: "18px",
    color: "#666",
  },
  link: {
    marginTop: "20px",
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
  },
};

export default NotFoundPage;