import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';


class Toolkit extends Component {
    render() {
        return (
            <div className="toolkit panel">
                <ToolkitTitleBar />
                <ChangeLanguageButton langChange={this.props.changeLanguage} />
            </div>
        );
    }
}

class ToolkitTitleBar extends Component {
    render() {
        return (
            <div className="toolkit-titlebar titlebar">
                <div className="toolkit-title title">
                    Debug
                </div>
            </div>
        )
    }
}

const ChangeLanguageButton = injectIntl((props) => {
    const { intl, langChange } = props
    return (
        <div className=" panel-content ">
            toolkit
            <div className="status-select">
                <select value={intl.locale} onChange={langChange}>
                    <option value="cn">中文</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    <option value="kr">한국어</option>
                </select>
            </div>
        </div>
    );
})

export default Toolkit;