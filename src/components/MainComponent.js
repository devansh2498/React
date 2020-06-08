import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dishes:DISHES
    }
  }
  render(){

const HomePage=()=>{
  return(
    <Home />
  );
}

    return (
      <div className="App">
        <Header />
       <Switch>
         <Route path='/home' component={HomePage}/>
         <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}/>} />
        <Redirect to='/home' />   
       </Switch>
        <Footer />
     </div>
    );
  }
  
}

export default Main;
