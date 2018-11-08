/*
  Copyright 2018 Stratumn SAS. All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';
import { NavBar } from './NavBar';

class App extends Component {
  public render() {
    const assets = ['asset1', 'asset2'];
    return (
      <Router>
        <div>
          <NavBar assets={assets} />
          <Route path='/' exact component={Home}>
            <Home />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;