import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Timeline, Login } from './pages';

class App extends Component {
  // <Timeline />
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Timeline} />
              <Route exact path="/login" component={Login} />
            </Switch>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
