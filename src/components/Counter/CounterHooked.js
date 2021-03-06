import React, { useState, useEffect, useContext } from 'react';
import { ColorContext } from '../../ColorContext';
import StyledButton from "../../styled/StyledButton";

export default function Counter() {
  const [count, setCount] = useState(10);
  const [text, setText] = useState('zero');
  const { state, dispatch } = useContext(ColorContext);

  useEffect(
    () => {
      document.body.style.backgroundColor = state.currentColor;
    },
    [state.currentColor]
  );

  const setColor = color => {
   // dispatch({ type: "SET-COLOR", payload: color })
   ColorContext.currentColor =color;
  };

  return (
    <div id="counter-hooked">
      <p>You clicked {count} times. Current number is {text}</p>
      <StyledButton onClick={() => {
        setCount(count + 1);
        setText((count + 1 ) > 0 ? 'positive': 'zero');
        if (count >= 5) {
          setColor('azure');
        } else if ((count + 1) === 0) {
          setColor('beige');
        }
      }}>
        Increment
      </StyledButton>
      
    </div>
  );
}
