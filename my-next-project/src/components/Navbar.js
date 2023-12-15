import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/listOperations">List Operations</Link>

      {/* Add other navigation links as needed */}
    </nav>
  );
};

export default Navbar;
