import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import HomeView from './views/HomeView';
import client from './ApolloClient';
import store from './store';
import ApartmentView from './views/ApartmentView';
import ApartmentSearchView from './views/ApartmentSearchView';
import NavLinks from './components/NavLinks';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <div>
              <NavLinks/>
              <Switch>
                <Route exact path='/' component={HomeView} />
                <Route path='/search' component={ApartmentSearchView} />
                <Route path='/apartments/:apartmentId' component={ApartmentView} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
