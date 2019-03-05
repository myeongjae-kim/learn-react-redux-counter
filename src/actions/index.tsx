/* action 객체를 만드는 액션 생성 함수들을 선언합니다(action creators).
   여기에서 () => ({})은 function() { return { } }와 동일한 의미입니다.
*/

import * as types from './ActionTypes';
import { action, ActionType } from 'typesafe-actions';

export const increment = () => action(types.INCREMENT);
export const decrement = () => action(types.DECREMENT);

// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
export const setColor = (color: string) => action(types.SET_COLOR, color);

// for generating type type of actions
import * as thisActions from '.';
export type TRootAction = ActionType<typeof thisActions>;