import React, { Component } from 'react';
import Navigations from './post_navigation';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigations />
        {this.props.children}
      </div>
    );
  }
}
