import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root';
import store from './configureStore';




const render = () => {
  ReactDom.render(
    <Root store = {store}/>,
    document.getElementById("root")
  )
}

render();
