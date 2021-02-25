import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import City from './pages/City';
import {BrowserRouter as Router, Route} from "react-router-dom";
import RestaurantDetail from './pages/RestaurantDetail';

class App extends Component {
  render() {
    return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/city/:city_idd" component={City} />
      <Route path="/restaurant/:restaurant_id" component={RestaurantDetail} />
      <Footer/>
    </Router>
    );
      }
}

export default App;
// menggunakan state untuk memanfaatkan data binding di react
// tidak bisa menggunakan functional component ketika sudah memakai state
//ubah menjadi class component