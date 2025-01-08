import React from 'react';
import { Link } from 'react-router-dom'; // Optional if you're using React Router

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>Go back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        color: '#333',
        padding: '1em',
    },
    title: {
        fontSize: '4rem',
        margin: '0.5em 0',
    },
    message: {
        fontSize: '1.2rem',
        margin: '0.5em 0 1.5em',
    },
    link: {
        textDecoration: 'none',
        color: '008B8B',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
};

export default NotFoundPage;
