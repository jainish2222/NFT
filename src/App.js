import React from 'react';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import TopFold from './components/TopFold';
import Brandsintegration from './components/Brandsintegration';
import Infosection from './components/Infosection';
import Trandingnfts from './components/Trandingnfts';
const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <Brandsintegration />
      <Trandingnfts />
      <Infosection />
      <Footer />
    </div>
  )
}
// Jainish Koladiya 
export default App
