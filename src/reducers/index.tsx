<<<<<<< HEAD
import number, { TNumberState } from './number';
import color, { TColorState } from './color';

import { combineReducers } from 'redux';

/* 서브 리듀서를 하나로 합칩니다.
   combineReducers를 실행하고 나면, 나중에 store 형태를
   파라미터로 전달한 객체 모양대로 만드빈다.
   지금은 다음과 같이 만듭니다.
   {
     numberData: {
       number: 0
     },
     colorData: {
       color: 'black'
     }
   }
*/

const reducers = combineReducers({
  numberData: number,
  colorData: color
})
=======
import * as actions from '../actions';
import * as actionTypes from '../actions/ActionTypes';
import { ActionType } from 'typesafe-actions';

export type State = Readonly<{
  color: string
  number: number
}>

// 초기 상태를 정의합니다.
const initialState: State = {
  number: 0,
  color: 'black'
}

/* 리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다.
   state가 undefined일 때(스토어가 생성될 때) state 기본 값을 initialState로 사용합니다.
   action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
   기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야 합니다.
*/

export type CounterAction = ActionType<typeof actions>;

function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case actionTypes.SET_COLOR:
      return {
        ...state,
        color: action.payload
      }
    default:
      return state;
  }
};

export default counter;
>>>>>>> single-reducer-counter
