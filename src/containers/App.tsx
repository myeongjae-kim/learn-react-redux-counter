import * as React from 'react';
import CounterContainer from './CounterContainer'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <CounterContainer />
      </div>);
  }
}

export default App;