import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './client/container/store';
import './index.css';
import './App.css';
import PlaceList from './client/components/placeList';
import DetailView from './client/components/detailView';
import Favourite from './client/components/Favourite';


/* NOTE - You have to keep the ID outside render as each render we dont need to get root element ,
 As everytime render we don't need to get root element. */
const rootElement = document.getElementById("root");

// default route to /places.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <Switch>
            <Redirect exact from = "/" to = "/places" />
            <Route exact path = "/places" component={PlaceList} />
            <Route exact path = "/places/id" component={DetailView} />
            <Route exact path = '/favourites' component={Favourite} />
          </Switch>
      </Router> 
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
