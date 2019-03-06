import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/Footer/Footer';
import Passengers from './pages/Passengers';
import Payment from './pages/Payment';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="containers">
            <Header />
          </div>
          <Switch>
            <Route path="/" exact={true} component={Passengers}/>
            <Route path="/payment" component={Payment}/>
          </Switch> 
          <Footer />
        </div>
    
      </BrowserRouter>
    );
  }
}

export default App;
