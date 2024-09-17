import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/sobre" style={styles.navLink}>Sobre</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/login" style={styles.navLink}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

// Estilos simples para o navbar
const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
    },
    navItem: {
        margin: '0 15px',
    },
    navLink: {
        color: 'white', // Cor branca para o link
        textDecoration: 'none', // Remove sublinhado
    },
};

export default Navbar;
