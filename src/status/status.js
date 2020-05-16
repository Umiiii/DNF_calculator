
import React, {Component} from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import dict from '../translations/en.json'
import "./status.js";

class Status extends Component {
    render() {
        return (
            <div className="status">
            <StatusTitleBar />
            <StatusEquipmentPanel />
            <StatusStatsPanel status={this.props.status}/>
            <StatusBottomPanel langChange={this.props.changeLanguage}/>
          </div>
        );
    }
}

class StatusTitleBar extends Component {
  render() {
    return (
      <div className="status-titlebar">
        <div className="status-title">
          <FormattedMessage id="app.status.status" />
        </div>
      </div>
    );
  }
}

class StatusEquipmentPanel extends Component {
  render() {
    return (<div className="status-panel status-equipment-panel">

    </div>);
  }
}

class StatusStatsPanel extends Component {
  render() {
    return (
      <div className="status-panel status-stats-panel">
 
        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-hp" alt="hp" />
              <span className="status-stats-name"><FormattedMessage id="app.status.hp" /></span>
            </span>
            <span className="status-value">
              {this.props.status.hp}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-mp" alt="mp" />
              <span className="status-stats-name"><FormattedMessage id="app.status.mp" /></span>
            </span>
            <span className="status-value">
              {this.props.status.mp}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-strength" alt="strength" />
              <span className="status-stats-name"><FormattedMessage id="app.status.strength" /></span>
            </span>
            <span className="status-value">
              {this.props.status.strength}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-intelligence" alt="intelligence" />
              <span className="status-stats-name"><FormattedMessage id="app.status.intelligence" /></span>
            </span>
            <span className="status-value">
              {this.props.status.intelligence}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-vitality" alt="vitality" />
              <span className="status-stats-name"><FormattedMessage id="app.status.vitality" /></span>
            </span>
            <span className="status-value">
              {this.props.status.vitality}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-spirit" alt="spirit" />
              <span className="status-stats-name"><FormattedMessage id="app.status.spirit" /></span>
            </span>
            <span className="status-value">
              {this.props.status.spirit}
            </span>
          </div>
        </div>

        <div className="status-stats-row">

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-physicalatk" alt="physicalatk" />
              <span className="status-stats-name"><FormattedMessage id="app.status.physicalatk" /></span>
            </span>
            <span className="status-value">
              {this.props.status.physicalatk}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-magicalatk" alt="magicalatk" />
              <span className="status-stats-name"><FormattedMessage id="app.status.magicalatk" /></span>
            </span>
            <span className="status-value">
              {this.props.status.magicalatk}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">

            <span>
              <span className="status-stats-icon status-icon-independentatk" alt="independentatk" />
              <span className="status-stats-name"><FormattedMessage id="app.status.independentatk" /></span>
            </span>
            <span className="status-value">
              {this.props.status.independentatk}
            </span>

          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-physicaldefense" alt="physicaldefense" />
              <span className="status-stats-name"><FormattedMessage id="app.status.physicaldefense" /></span>
            </span>
            <span className="status-value">
              {this.props.status.physicaldefense}
            </span>
          </div>

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-magicaldefense" alt="magicaldefense" />
              <span className="status-stats-name"><FormattedMessage id="app.status.magicaldefense" /></span>
            </span>
            <span className="status-value">
              {this.props.status.magicaldefense}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-physicalcriticalchance" alt="physicalcriticalchance" />
              <span className="status-stats-name"><FormattedMessage id="app.status.physicalcriticalchance" /></span>
            </span>
            <span className="status-value">
              {this.props.status.physicalcriticalchance}
            </span>
          </div>

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-magicalcriticalchance" alt="magicalcriticalchance" />
              <span className="status-stats-name"><FormattedMessage id="app.status.magicalcriticalchance" /></span>
            </span>
            <span className="status-value">
              {this.props.status.magicalcriticalchance}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-attackspeed" alt="attackspeed" />
              <span className="status-stats-name"><FormattedMessage id="app.status.attackspeed" /></span>
            </span>
            <span className="status-value">
              {this.props.status.attackspeed}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-castingspeed" alt="castingspeed" />
              <span className="status-stats-name"><FormattedMessage id="app.status.castingspeed" /></span>
            </span>
            <span className="status-value">
              {this.props.status.castingspeed}
            </span>
          </div>

        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-movementspeed" alt="movementspeed" />
              <span className="status-stats-name"><FormattedMessage id="app.status.movementspeed" /></span>
            </span>
            <span className="status-value">
              {this.props.status.movementspeed}
            </span>
          </div>

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-exorcism" alt="exorcism" />
              <span className="status-stats-name"><FormattedMessage id="app.status.exorcism" /></span>
            </span>
            <span className="status-value">
              {this.props.status.exorcism}
            </span>
          </div>

        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-hitrate" alt="hitrate" />
              <span className="status-stats-name"><FormattedMessage id="app.status.hitrate" /></span>
            </span>
            <span className="status-value">
              {this.props.status.hitrate}
            </span>
          </div>

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-evasionrate" alt="evasionrate" />
              <span className="status-stats-name"><FormattedMessage id="app.status.evasionrate" /></span>
            </span>
            <span className="status-value">
              {this.props.status.evasionrate}
            </span>
          </div>
        </div>

        <div className="status-stats-row">

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-hprecoveryrate" alt="hprecoveryrate" />
              <span className="status-stats-name"><FormattedMessage id="app.status.hprecoveryrate" /></span>
            </span>
            <span className="status-value">
              {this.props.status.hprecoveryrate}
            </span>
          </div>

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-mprecoveryrate" alt="mprecoveryrate" />
              <span className="status-stats-name"><FormattedMessage id="app.status.mprecoveryrate" /></span>
            </span>
            <span className="status-value">
              {this.props.status.mprecoveryrate}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-immobility" alt="immobility" />
              <span className="status-stats-name"><FormattedMessage id="app.status.immobility" /></span>
            </span>
            <span className="status-value">
              {this.props.status.immobility}
            </span>
          </div>

          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-hitrecovery" alt="hitrecovery" />
              <span className="status-stats-name"><FormattedMessage id="app.status.hitrecovery" /></span>
            </span>
            <span className="status-value">
              {this.props.status.hitrecovery}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementaldamage-fire" alt="elementaldamagefire" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.fire" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementaldamagefire}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementalresistance-fire" alt="elementalresistance-fire" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.fire" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementalresistancefire}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementaldamage-water" alt="elementaldamagewater" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.water" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementaldamagefire}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementalresistance-water" alt="elementalresistance-water" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.water" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementalresistancewater}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementaldamage-light" alt="elementaldamagelight" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.light" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementaldamagelight}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementalresistance-light" alt="elementalresistance-light" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.light" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementalresistancelight}
            </span>
          </div>
        </div>

        <div className="status-stats-row">
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementaldamage-shadow" alt="elementaldamageshadow" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.shadow" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementaldamageshadow}
            </span>
          </div>
          <div className="status-stats-cell">
            <span>
              <span className="status-stats-icon status-icon-elementalresistance-shadow" alt="elementalresistance-shadow" />
              <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.shadow" /></span>
            </span>
            <span className="status-value">
              {this.props.status.elementalresistanceshadow}
            </span>
          </div>
        </div>

      </div>
    );
  }
}


const StatusBottomPanel = injectIntl((props) => {
  const { intl, langChange } = props
  return (
    <div className="status-panel status-bottom-panel">
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


export default Status;
