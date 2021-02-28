import React from 'react';
import Menu from './menu';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Middle from '../components/Middle';
import '../components/css/Menu.css';
import '../components/css/Header.css';
const Home = () => {
  return (
    <>
      <Menu></Menu>
      <Header></Header>
      <Middle />
      <Footer />
    </>
  );
};

export default Home;
