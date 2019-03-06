import * as React from 'react';
import './Counter.css'

export interface ICounterProps {
  number: number
  color: string
  index: number
  onIncrement: (index: number) => void
  onDecrement: (index: number) => void
  onSetColor: (index: number) => void
};

const Counter: React.SFC<ICounterProps> =
  ({ number, color, index, onIncrement, onDecrement, onSetColor }: ICounterProps) => {
    return (
      <div
        className="Counter"
        onClick={() => onIncrement(index)}
        onContextMenu={(e) => {
          e.preventDefault();
          onDecrement(index);
        }}
        onDoubleClick={() => onSetColor(index)}
        style={{ backgroundColor: color }}
      >
        {number}
      </div>);
  };

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: (index: number) => console.warn('onIncrement not defined'),
  onDecrement: (index: number) => console.warn('onDecrement not defined'),
  onSetColor: (index: number) => console.warn('onSetColor not defined')
};

export default Counter;