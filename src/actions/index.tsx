/* action 객체를 만드는 액션 생성 함수들을 선언합니다(action creators).
   여기에서 () => ({})은 function() { return { } }와 동일한 의미입니다.
*/

import * as types from './ActionTypes';
import { action, ActionType } from 'typesafe-actions';

export const create = (color: string) => action(
  types.CREATE,
  { color }
);

export const remove = () => action(types.REMOVE)

export const increment = (index: number) => action(types.INCREMENT, { index });
export const decrement = (index: number) => action(types.DECREMENT, { index });

// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
export const setColor = (arg0: {
  readonly index: number,
  readonly color: string
}) => action(
  types.SET_COLOR,
  arg0
)

// for generating type type of actions
import * as thisActions from '.';
export type TRootActions = ActionType<typeof thisActions>;