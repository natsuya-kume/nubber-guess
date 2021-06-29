import React, { FC } from "react";
import NumberButton from "./components/NumberButton";

const Board: FC = () => {
  // 数字がクリックされた時の関数
  const handleNumberClick = (num: number): void => {
    console.log(num);
  };
  return (
    <>
      <div>数字当てゲーム</div>
      <div>1〜100の数字を予想しよう！</div>
      <div>
        <NumberButton onClick={() => handleNumberClick(0)}>0</NumberButton>
        <NumberButton onClick={() => handleNumberClick(1)}>1</NumberButton>
        <NumberButton onClick={() => handleNumberClick(2)}>2</NumberButton>
        <NumberButton onClick={() => handleNumberClick(3)}>3</NumberButton>
        <NumberButton onClick={() => handleNumberClick(4)}>4</NumberButton>
        <NumberButton onClick={() => handleNumberClick(5)}>5</NumberButton>
        <NumberButton onClick={() => handleNumberClick(6)}>6</NumberButton>
        <NumberButton onClick={() => handleNumberClick(7)}>7</NumberButton>
        <NumberButton onClick={() => handleNumberClick(8)}>8</NumberButton>
        <NumberButton onClick={() => handleNumberClick(9)}>9</NumberButton>
      </div>
    </>
  );
};
export default Board;
