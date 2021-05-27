import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './styles.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

const App = () => (
    <div>
      <div>Welcome to my-webpack-react-starter</div>
    </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
