import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Hello webpack-react</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
