import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
// 兼容ie浏览器
import "@babel/polyfill";

import createStore from "./redux";

import Webpage from "./Webpage";

import "./index.css";
import "./fontcss/iconfont.css";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Webpage />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
