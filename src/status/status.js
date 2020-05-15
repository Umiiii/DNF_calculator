
import React, {Component} from 'react';

class Status extends Component {
    render() {
        return (
            <div className="status">
            <div className="status-panel">
              <div className="status-row">
                <span>
                  <span className="status-icon status-icon-hp" alt="hp"/>
                  <span className="status-name">HP</span>
                </span>
                <span className="status-value">
                  1000/1000
                </span>

              </div>

            </div>
          </div>
        );
    }
}

export default Status;