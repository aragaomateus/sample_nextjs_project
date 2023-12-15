import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import animStyles from '../styles/Animations.module.css';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    // Example logic to determine if an element is visible on the screen
    // You can adjust this based on your specific needs
    const elem = document.getElementById('animatedElement');
    const rect = elem.getBoundingClientRect();
    setIsVisible(rect.top < window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to My Next.js Project</h1>
        <button className={animStyles.buttonHover}>Hover Over Me!</button>
        <div
          id="animatedElement"
          className={`${animStyles.fadeIn} ${isVisible ? animStyles.fadeInVisible : ''}`}
        >
          Scroll-triggered Animation!
        </div>
      </main>
    </div>
  );
};

export default HomePage;
