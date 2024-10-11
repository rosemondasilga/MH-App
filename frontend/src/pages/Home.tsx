// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header'; // Adjust the path if necessary
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
        <div className='top-0 sticky'>
        <Header />
        </div>
     <div>
     <Hero />
     </div>
    
    </div>
  );
};

export default Home;
