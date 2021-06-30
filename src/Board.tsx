import React, { FC } from "react";
import NumberButton from "./components/NumberButton";
import LongButton from "./components/LongButton";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";

const Board: FC = () => {
  // 数字がクリックされた時の関数
  const handleNumberClick = (num: number): void => {
    console.log(num);
  };

  // 質問文がクリックされた時の関数
  const handleQuestionSentenceClick = (sentence: string) => {
    console.log(sentence);
  };

  // クリアボタンがクリックされた時の関数
  const handleClearClick = () => {};

  // クリアボタンがクリックされた時の関数
  const handleGuessClick = () => {};
  return (
    <>
      <CssBaseline />
      <h1 style={{ textAlign: "center" }}>数字当てゲーム</h1>
      <h2 style={{ textAlign: "center" }}>1〜100の数字を予想しよう！</h2>
      <Grid container item>
        <Grid style={{ marginLeft: "200px", marginTop: "50px" }}>
          <Grid container item xs={12}>
            <NumberButton onClick={() => handleNumberClick(0)}>0</NumberButton>
            <NumberButton onClick={() => handleNumberClick(1)}>1</NumberButton>
            <NumberButton onClick={() => handleNumberClick(2)}>2</NumberButton>
            <NumberButton onClick={() => handleNumberClick(3)}>3</NumberButton>
            <NumberButton onClick={() => handleNumberClick(4)}>4</NumberButton>
          </Grid>
          <Grid container item xs={12}>
            <NumberButton onClick={() => handleNumberClick(5)}>5</NumberButton>
            <NumberButton onClick={() => handleNumberClick(6)}>6</NumberButton>
            <NumberButton onClick={() => handleNumberClick(7)}>7</NumberButton>
            <NumberButton onClick={() => handleNumberClick(8)}>8</NumberButton>
            <NumberButton onClick={() => handleNumberClick(9)}>9</NumberButton>
          </Grid>
          <Grid container item>
            <LongButton
              onClick={() => handleQuestionSentenceClick("biggerThan")}
              backgroundColor="#f0831e"
            >
              より上ですか？
            </LongButton>
            <LongButton
              onClick={() => handleQuestionSentenceClick("smallerThan")}
              backgroundColor="#f0831e"
            >
              より下ですか？
            </LongButton>
            <LongButton
              onClick={() => handleQuestionSentenceClick("exact")}
              backgroundColor="#f0831e"
            >
              ですか？
            </LongButton>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <LongButton onClick={handleClearClick} backgroundColor="#dddddd">
                クリア
              </LongButton>
            </Grid>
            <Grid item xs={3}>
              <LongButton onClick={handleGuessClick} backgroundColor="#de3400">
                予想する
              </LongButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "250px" }}>
          <h1>予想履歴</h1>
        </Grid>
      </Grid>
    </>
  );
};
export default Board;
