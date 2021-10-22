import React from 'react'
import NavBar from './components/navbar/Navbar.jsx'
import reactDom from 'react-dom';
import Banner from './components/banner/Banner.jsx'
import './css/styles.css'
import Video from './components/video/Video.jsx';
import Card from './components/card/Card.jsx';
import Text from './components/text/Text.jsx';
import Footer from './components/footer/Footer.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = ()=>{

  return(
    <div>
      <NavBar/>
      <Banner/>
      <Card/>
      <Video/>
      <Text/>
      <Footer/>
    </div>
  );

}



export default App;
