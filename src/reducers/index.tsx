import { TRootActions } from '../actions';
import * as actionTypes from '../actions/ActionTypes';

export type TCounterState = Readonly<{
  color: string,
  number: number
}>

export type TCounterListState = Readonly<Array<TCounterState>>

export type TRootState = Readonly<{
  counters: TCounterListState
}>

const initialState: TRootState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
}

function counter(state: TRootState = initialState, action: TRootActions): TRootState {
  // 레퍼런스 생성
  const { counters } = state;

  switch (action.type) {
    case actionTypes.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.payload.color,
            number: 0
          }
        ]
      };
    case actionTypes.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };
    case actionTypes.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.payload.index), // 선택한 인덱스의 전 아이템들
          {
            ...counters[action.payload.index], // 기존 객체에
            number: counters[action.payload.index].number + 1 // 새 number 값 덮어쓰기
          },
          ...counters.slice(action.payload.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
        ]
      };
    case actionTypes.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.payload.index), // 선택한 인덱스의 전 아이템들
          {
            ...counters[action.payload.index], // 기존 객체에
            number: counters[action.payload.index].number - 1 // 새 number 값 덮어쓰기
          },
          ...counters.slice(action.payload.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
        ]
      };
    case actionTypes.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.payload.index), // 선택한 인덱스의 전 아이템들
          {
            ...counters[action.payload.index], // 기존 객체에
            color: action.payload.color // 새 color 값 덮어쓰기
          },
          ...counters.slice(action.payload.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
        ]
      };
    default:
      return state;
  }
}

export default counter;