import React, { Component } from 'react';

import { Header, Footer } from './components';
import { Timeline } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timeline />
        <Footer />
      </div>
    );
  }
}

export default App;
