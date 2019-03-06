/* action 객체를 만드는 액션 생성 함수들을 선언합니다(action creators).
   여기에서 () => ({})은 function() { return { } }와 동일한 의미입니다.
*/

import { createAction, ActionType } from 'typesafe-actions';

const CREATE = 'CREATE';
const REMOVE = 'REMOVE';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_COLOR = 'SET_COLOR';

export const create = createAction(CREATE, action => {
  return (color: string) => action({ color })
});

export const remove = createAction(REMOVE)

export const increment = createAction(INCREMENT, action => {
  return (index: number) => action({ index });
});
export const decrement = createAction(DECREMENT, action => {
  return (index: number) => action({ index });
});

export const setColor = createAction(SET_COLOR, action => {
  return (payload: Readonly<{ index: number, color: string }>) => action({ ...payload });
});

// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
/*
export const setColor = (arg0: {
  readonly index: number,
  readonly color: string
}) => action(
  types.SET_COLOR,
  arg0
)
*/

// for generating type type of actions
import * as thisActions from '.';
export type TRootActions = ActionType<typeof thisActions>;