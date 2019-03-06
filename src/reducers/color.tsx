import * as actions from '../actions'

import { TRootActions } from '../actions';
import { getType } from 'typesafe-actions';

interface IColorState {
  readonly color: string
}

// 초기 상태를 정의합니다.
const initialState: IColorState = {
  color: 'black'
}

/* 리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다.
   state가 undefined일 때(스토어가 생성될 때) state 기본 값을 initialState로 사용합니다.
   action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
   기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야 합니다.
*/

function counter(state: IColorState = initialState, action: TRootActions): IColorState {
  switch (action.type) {
    case getType(actions.setColor):
      return {
        color: action.payload.color
      }
    default:
      return state;
  }
};

export default counter;