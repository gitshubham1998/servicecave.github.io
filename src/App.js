import React,{Component}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './Form/SignUp';
import Login from './Form/Login';
import NavBar from './NavBar';
import Home from './Home';
import aboutUs from './Component/aboutUs';
import Electrician from './Component/Electrician';
import Painter from './Component/Painter';
import Plumber from './Component/Plumber';
import Mehndi from './Component/Mehndi';
import Card from './Card'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar className='nav'/>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path='/Form/Login' component={Login} />
            <Route path='/Form/SignUp' component={SignUp} />
            <Route path='/Home' component={Home} />
            <Route path='/aboutUs' component={aboutUs} />
            <Route path='/Electrician' component={Electrician} />
            <Route path='/Painter' component={Painter} />
            <Route path='/Plumber' component={Plumber} />
            <Route path='/Mehndi' component={Mehndi} />
            <Route path='/Card' component={Card} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;