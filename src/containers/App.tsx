import * as React from 'react';
import CounterListContainer from './CounterListContainer'
import * as actions from '../actions'
import { Dispatch } from 'redux';
import { TRootActions } from '../actions';
import getRandomColor from '../lib/getRandomColor';
import { connect } from 'react-redux'
import Buttons from '../components/Buttons';

interface IAppProps {
  onCreate: () => void,
  onRemove: () => void
}

class App extends React.Component<IAppProps, {}> {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer />
      </div>);
  }
}

// 액션 생성 함수 준비
const mapToDispatch = (dispatch: Dispatch<TRootActions>) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove())
})

export default connect(null, mapToDispatch)(App);