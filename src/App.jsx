import React, {Component} from 'react';
import LeftPanel from './LeftPanel.jsx';
import Mirror from './Mirror.jsx';
import RightPanel from './RightPanel.jsx';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <LeftPanel />
        <Mirror />
        <RightPanel />
      </div>
    );
  }
}
export default App;
