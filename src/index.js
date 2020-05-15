import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from "react-intl";

import status_en from "./translations/en.json";
import status_cn from "./translations/zh-CN.json";
import status_ja from "./translations/ja-JP.json";
import status_kr from "./translations/ko-kr.json";

const status = {
  'en': status_en,
  'cn': status_cn,
  'ja': status_ja,
  'kr': status_kr
}

//const language = navigator.language.split(/[-_]/)[0];
const language = "cn";

ReactDOM.render(
  <React.StrictMode>
  <IntlProvider locale={language} messages={status[language]}>
    <App />
  </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
