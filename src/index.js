// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import { createStore } from 'redux';
//
// import Root from './components/Root';
// import './index.css';
//
// import reducer from './reducers';
//
// import * as sales from '../data/Webdev_data2.json';
//
//
//
// const store = createStore(reducer, {
//   costs: [15000, 15000, 15000],
//   incomes: [22000, 13000, 18000],
//   savings: [20000, 11000, 15000]
// });
//
// ReactDOM.render(
//   <Root store={ store } />,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";
import SaleList from "./components/SaleList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

//import "./styles.css";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
      <SaleList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
