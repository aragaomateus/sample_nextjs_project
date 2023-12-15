import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to My Next.js Project</h1>
        <p>This is the home page.</p>
        {/* Add more content as needed */}
      </main>
    </div>
  );
};

export default HomePage;
