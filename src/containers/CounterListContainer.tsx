import CounterList from '../components/CounterList'
import * as actions from '../actions'
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { TRootState } from '../reducers';
import { TRootActions } from '../actions'

import getRandomColor from '../lib/getRandomColor';

// store 안의 state 값을 props로 연결합니다.
const mapStateToProps = (state: TRootState) => ({
  counters: state.counters
});

/* 액션 생성자를 사용하여 액션을 만들고,
   해당 액션을 dispatch한느 함수를 만든 후 이를 props로 연결합니다.
*/

const mapDispatchToProps = (dispatch: Dispatch<TRootActions>) => ({
  onIncrement: (index: number) => dispatch(actions.increment(index)),
  onDecrement: (index: number) => dispatch(actions.decrement(index)),
  onSetColor: (index: number) => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }));
  }
})

// 데이터와 함수들이 props로 붙은 컴포넌트 생성
const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;