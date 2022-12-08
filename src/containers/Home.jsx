import React from 'react'
import '../assets/css/style.css';
import Header from '../components/Header';
import Search from '../components/Search';
import Card from '../components/Card';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Search />
        <hr style={{color: "white", size: 20, borderStyle: "solid"}} />
        <main>
            <div className="main-box grid g-col">
              <Card />
            </div>
            <div className="pat-btn">
                <button id="patent-btn">View more patents</button>
            </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home