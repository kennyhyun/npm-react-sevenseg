import React, { Component } from 'react';
import {SevenSeg} from './sevenseg';

export const SSString = ({ str, style }) => {
  const arr = str.split('');
  return (
    <div style={ style }>
      {arr.map((char, idx) => {
        const dot = arr[idx+1] === '.';
        return char !== '.'
          && <SevenSeg char={char} dot={dot} />;
      })}
    </div>
  );
};
