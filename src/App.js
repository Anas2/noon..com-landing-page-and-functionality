import './App.css';
import NavBar from './Component/navBar/navbar'
import MainContent from './Component/main-content/mainContent'
import Categories from './Component/categories/categories'
import Banner from './Component/banner/banner'
import Slider from './Component/slider/slider';
import Banner1 from './Component/remaining/afterMainContent'

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container,Row,columns } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">

      <NavBar />
      <Categories />
      <Banner />
      <Slider />
      <MainContent />
      <Banner1 />
{/* <div>
  <h1>l</h1>
</div> */}
    </div>

  );
}

export default App;
