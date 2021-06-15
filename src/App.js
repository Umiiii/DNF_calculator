import React from 'react';
import Status from './status/status';
import StatusValue from "./status/statusvalue";
import "./css/main.css"
import "./css/status.css";
import "./css/status_icon.css"


import { IntlProvider } from "react-intl";
import intl_en from "./translations/en.json";
import intl_cn from "./translations/zh-CN.json";
import intl_ja from "./translations/ja-JP.json";
import intl_kr from "./translations/ko-kr.json";
import Draggable from 'react-draggable';
const status = {
  'en': intl_en,
  'cn': intl_cn,
  'ja': intl_ja,
  'kr': intl_kr
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        locale: 'cn',
        messages: status.cn,
        mockstats: new StatusValue()
    }
  }

  onChangeLanguage = (evt) => {
    const lang = evt.target.value
    this.setState({ locale: lang, messages: status[lang] || intl_cn });
  }
  onStart(e) {
    console.log("hey")
    let elems = document.getElementsByClassName('react-draggable');
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.zIndex = 1;
      console.log(i)
      e.currentTarget.style.zIndex = 2;
    }
  }
  render() {
    const { locale, messages, mockstats } = this.state
    return (
      <IntlProvider locale={locale} messages={messages}>
        <Draggable onStart={this.onStart.bind(this)} handle=".status-titlebar">
          <div style={{position: `relative`, maxWidth: `425px`}}><Status status={mockstats} changeLanguage={this.onChangeLanguage} /></div>
        </Draggable>

        <Draggable onStart={this.onStart.bind(this)} handle=".status-titlebar">
          <div style={{ position: `relative`, maxWidth: `425px`}}><Status status={mockstats} changeLanguage={this.onChangeLanguage} /></div>
        </Draggable>
      </IntlProvider>

    )
  }
}



export default App;


// ko https://namu.wiki/w/%EB%8D%98%EC%A0%84%20%EC%95%A4%20%ED%8C%8C%EC%9D%B4%ED%84%B0/%EC%8B%9C%EC%8A%A4%ED%85%9C/%EC%86%8D%EC%84%B1
// ja https://wikiwiki.jp/dnf/%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9
// en https://wiki.dfo-world.com/view/Status