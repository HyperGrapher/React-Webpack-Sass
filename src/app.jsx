import React from 'react';
import { hot } from 'react-hot-loader';

import style from './app.scss';

const App = () => {
  return (
    <div className={style.app}>
      <h3 className={style.title}>
        React Starter Template with Webpack And Sass
      </h3>
      <p>Medium Link:</p>
      <a
        className={style.link}
        href="https://medium.com/@joshuacrass/react-scss-and-webpack-ae9bd84b9e43"
      >
        react-scss-and-webpack
      </a>
    </div>
  );
};

export default hot(module)(App);
