import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
//  <Switch>
//             <Route exact path='/'component={Dashboard} />
//             <Route path='/project/:id' component={ProjectDetails} />
//             <Route path='/signin' component={SignIn} />
//             <Route path='/signup' component={SignUp} />
//           </Switch>