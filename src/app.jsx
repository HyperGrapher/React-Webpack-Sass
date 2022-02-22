import React from 'react';
import { hot } from 'react-hot-loader';

import style from './app.scss';

const App = () => {
  return (
    <div className={style.app}>
      <h3 className={style.title}>
        React Starter Template with Webpack And Sass
      </h3>
    </div>
  );
};

export default hot(module)(App);
