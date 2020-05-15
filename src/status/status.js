
import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Status extends Component {
    render() {
        return (
            <div className="status">
              <div className="status-titlebar">
                <div className="status-title">
                  <FormattedMessage id="app.status.status"/>
                </div>
              </div>
              <div className="status-panel status-equipment-panel">

              </div>
              <div className="status-panel status-stats-panel">
                <div className="status-stats-row">
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-hp" alt="hp"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.hp"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.hp}
                    </span>
                  </div>
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-mp" alt="mp"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.mp"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.mp}
                    </span>
                  </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-strength" alt="strength"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.strength"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.strength}
                    </span>
                  </div>
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-intelligence" alt="intelligence"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.intelligence"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.intelligence}
                    </span>
                  </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-vitality" alt="vitality"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.vitality"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.vitality}
                    </span>
                  </div>
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-spirit" alt="spirit"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.spirit"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.spirit}
                    </span>
                  </div>
                </div>

                <div className="status-stats-row">

                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-physicalatk" alt="physicalatk"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.physicalatk"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.physicalatk}
                  </span>
                  </div>
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-magicalatk" alt="magicalatk"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.magicalatk"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.magicalatk}
                  </span>
                  </div>
                </div>
                <div className="status-stats-row">
                  <div className="status-stats-cell">

                    <span>
                      <span className="status-stats-icon status-icon-independentatk" alt="independentatk"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.independentatk"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.independentatk}
                    </span>

                  </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-physicaldefense" alt="physicaldefense"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.physicaldefense"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.physicaldefense}
                  </span>
                  </div>

                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-magicaldefense" alt="magicaldefense"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.magicaldefense"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.magicaldefense}
                  </span>
                  </div>
                </div>
                <div className="status-stats-row">
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-physicalcriticalchance" alt="physicalcriticalchance"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.physicalcriticalchance"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.physicalcriticalchance}
                    </span>
                  </div>

                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-magicalcriticalchance" alt="magicalcriticalchance"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.magicalcriticalchance"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.magicalcriticalchance}
                  </span>
                  </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-attackspeed" alt="attackspeed"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.attackspeed"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.attackspeed}
                  </span>
                  </div>
                  <div className="status-stats-cell">
                <span>
                  <span className="status-stats-icon status-icon-castingspeed" alt="castingspeed"/>
                  <span className="status-stats-name"><FormattedMessage id="app.status.castingspeed"/></span>
                </span>
                <span className="status-value">
                  {this.props.castingspeed}
                </span>
                </div>

                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-movementspeed" alt="movementspeed"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.movementspeed"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.movementspeed}
                    </span>
                  </div>

                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-exorcism" alt="exorcism"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.exorcism"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.exorcism}
                  </span>
                  </div>

                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-hitrate" alt="hitrate"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.hitrate"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.hitrate}
                  </span>
                  </div>

                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-evasionrate" alt="evasionrate"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.evasionrate"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.evasionrate}
                  </span>
                  </div>
                </div>



                <div className="status-stats-row">

                 <div className="status-stats-cell">
                 <span>
                   <span className="status-stats-icon status-icon-hprecoveryrate" alt="hprecoveryrate"/>
                   <span className="status-stats-name"><FormattedMessage id="app.status.hprecoveryrate"/></span>
                 </span>
                 <span className="status-value">
                   {this.props.hprecoveryrate}
                 </span>
                 </div>

                 <div className="status-stats-cell">
                 <span>
                   <span className="status-stats-icon status-icon-mprecoveryrate" alt="mprecoveryrate"/>
                   <span className="status-stats-name"><FormattedMessage id="app.status.mprecoveryrate"/></span>
                 </span>
                 <span className="status-value">
                   {this.props.mprecoveryrate}
                 </span>
                 </div>
                </div>



                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-immobility" alt="immobility"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.immobility"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.immobility}
                  </span>
                  </div>

                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-hitrecovery" alt="hitrecovery"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.hitrecovery"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.hitrecovery}
                  </span>
                  </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-elementaldamage-fire" alt="elementaldamagefire"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.fire"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.elementaldamagefire}
                  </span>
                  </div>
                  <div className="status-stats-cell">
                    <span>
                      <span className="status-stats-icon status-icon-elementalresistance-fire" alt="elementalresistance-fire"/>
                      <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.fire"/></span>
                    </span>
                    <span className="status-value">
                      {this.props.elementalresistancefire}
                    </span>
                </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-elementaldamage-water" alt="elementaldamagewater"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.water"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.elementaldamagefire}
                  </span>
                  </div>
                  <div className="status-stats-cell">
                <span>
                  <span className="status-stats-icon status-icon-elementalresistance-water" alt="elementalresistance-water"/>
                  <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.water"/></span>
                </span>
                <span className="status-value">
                  {this.props.elementalresistancewater}
                </span>
                </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-elementaldamage-light" alt="elementaldamagelight"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.light"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.elementaldamagelight}
                  </span>
                  </div>
                  <div className="status-stats-cell">
                <span>
                  <span className="status-stats-icon status-icon-elementalresistance-light" alt="elementalresistance-light"/>
                  <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.light"/></span>
                </span>
                <span className="status-value">
                  {this.props.elementalresistancelight}
                </span>
                </div>
                </div>

                <div className="status-stats-row">
                  <div className="status-stats-cell">
                  <span>
                    <span className="status-stats-icon status-icon-elementaldamage-shadow" alt="elementaldamageshadow"/>
                    <span className="status-stats-name"><FormattedMessage id="app.status.elementaldamage.shadow"/></span>
                  </span>
                  <span className="status-value">
                    {this.props.elementaldamageshadow}
                  </span>
                  </div>
                  <div className="status-stats-cell">
                <span>
                  <span className="status-stats-icon status-icon-elementalresistance-shadow" alt="elementalresistance-shadow"/>
                  <span className="status-stats-name"><FormattedMessage id="app.status.elementalresistance.shadow"/></span>
                </span>
                <span className="status-value">
                  {this.props.elementalresistanceshadow}
                </span>
                </div>
                </div>










              </div>
              <div className="status-panel status-bottom-panel">

              </div>
          </div>
        );
    }
}

export default Status;