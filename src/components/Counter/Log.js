import React, { useState, useEffect, useContext } from 'react';
import { ColorContext } from '../../ColorContext';
import StyledButton from "../../styled/StyledButton";
import { useRandomColor } from "../../useRandomColor";

export default function LoadColor() {
  const colors = ["red", "blue", "green", "black"];
  //first item is to refer the current color and the second item is a function to change state
  const [color, changeColor] = useRandomColor(colors, "white");

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0",
        backgroundColor: color
      }}
    >
      <h2 style={{ color: "#fff" }}>Click below button to change Color</h2>
      <br />
      <button onClick={changeColor}>Change</button>
    </div>
  );
};
