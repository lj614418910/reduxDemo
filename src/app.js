import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';




const render = () => {
  ReactDom.render(
    <Root store = {configureStore()}/>,
    document.getElementById("root")
  )
}

render();
