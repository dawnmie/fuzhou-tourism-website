import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;