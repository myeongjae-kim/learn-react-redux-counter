import React from 'react'; import Counter from './Counter';
import { TCounterListState } from '../reducers'

import './CounterList.css'

export interface ICounterListProps {
  counters: TCounterListState,
  onIncrement: (index: number) => void,
  onDecrement: (index: number) => void,
  onSetColor: (index: number) => void,
}

const CounterList: React.SFC<ICounterListProps> =
  ({ counters, onIncrement, onDecrement, onSetColor }: ICounterListProps) => {

    const counterList = counters.map(
      (counter, i) => (
        <Counter
          key={i}
          index={i}
          {...counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onSetColor={onSetColor} />
      )
    )

    return (
      <div className="CounterList">
        {counterList}
      </div>
    );
  }

export default CounterList;