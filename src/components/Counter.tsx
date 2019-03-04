import * as React from 'react';
import './Counter.css'

export interface ICounterProps {
  number: number
  color: string
  onIncrement: () => void
  onDecrement: () => void
  onSetColor: () => void
};

const Counter: React.SFC<ICounterProps> & { defaultProps: Partial<ICounterProps> } =
  ({ number, color, onIncrement, onDecrement, onSetColor }) => {
    return (
      <div
        className="Counter"
        onClick={onIncrement}
        onContextMenu={(e) => {
          e.preventDefault();
          onDecrement();
        }}
        onDoubleClick={onSetColor}
        style={{ backgroundColor: color }}
      >
        {number}
      </div>);
  };

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;