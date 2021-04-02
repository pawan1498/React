import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Main from './Main'

// import Content from './Content'
function Home() {
    return (
      <div>
        <Navbar/>
        <Main/>
        <Footer/>
        {/* <Content/> */}
      </div>
    );
  }
export default Home; 