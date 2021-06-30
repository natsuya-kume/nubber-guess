import React, { FC, useEffect, useState } from "react";
import NumberButton from "./components/NumberButton";
import LongButton from "./components/LongButton";
import GuessHistory from "./components/GuessHistory";
import SuccessModal from "./components/SuccessModal";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";

type questionSentenceType =
  | ""
  | "より上ですか？"
  | "より下ですか？"
  | "ですか？";

type handleSentenceType = "biggerThan" | "smallerThan" | "exact";

const Board: FC = () => {
  // 予想した数字の管理
  const [guessNumber, setGuessNumber] = useState<number>(0);
  // 答えの数字の管理
  const [answer, setAnswer] = useState<number>(0);
  // 質問文の管理
  const [
    questionSentence,
    setQuestionSentence,
  ] = useState<questionSentenceType>("");
  // 予想回数の管理
  const [guessCount, setGuessCount] = useState<number>(0);
  // 履歴の管理
  const [history, setHistory] = useState<[number, string, string][]>([]);
  // モーダルの管理
  const [open, setOpen] = useState<boolean>(false);

  // 初期レンダリング時　0~100までの答えを設定
  useEffect(() => {
    setAnswer(Math.floor(Math.random() * 100) + 1);
  }, []);

  // 数字がクリックされた時の関数
  const handleNumberClick = (num: number): void => {
    // 最初はnumだけ　2回目は二桁or100の場合に数字をセット
    let newGuessNumber: number = guessNumber * 10 + num;
    if (newGuessNumber >= 1 && newGuessNumber <= 100) {
      setGuessNumber(newGuessNumber);
    }
  };

  // 質問文がクリックされた時の関数
  const handleQuestionSentenceClick = (sentence: handleSentenceType): void => {
    // 質問文に応じてstate更新
    if (sentence === "biggerThan") {
      setQuestionSentence("より上ですか？");
    } else if (sentence === "smallerThan") {
      setQuestionSentence("より下ですか？");
    } else if (sentence === "exact") {
      setQuestionSentence("ですか？");
    } else {
      return;
    }
  };

  // クリアボタンがクリックされた時の関数
  const handleClearClick = (): void => {
    // 予想番号と質問文をクリア
    setGuessNumber(0);
    setQuestionSentence("");
  };

  // 予想ボタンがクリックされた時の関数
  const handleGuessClick = (): void => {
    // 予想の内容が入力されていない場合はすぐに返す
    if (questionSentence === "") return;
    // 予想した回数をふやす
    setGuessCount(guessCount + 1);

    if (questionSentence === "より上ですか？") {
      if (guessNumber < answer) {
        setHistory([...history, [guessNumber, "より上ですか？", "はい"]]);
      } else {
        setHistory([...history, [guessNumber, "より上ですか？", "いいえ"]]);
      }
    } else if (questionSentence === "より下ですか？") {
      if (guessNumber > answer) {
        setHistory([...history, [guessNumber, "より下ですか？", "はい"]]);
      } else {
        setHistory([...history, [guessNumber, "より下ですか？", "いいえ"]]);
      }
    } else if (questionSentence === "ですか？") {
      if (guessNumber === answer) {
        setHistory([...history, [guessNumber, "ですか？", "はい"]]);
        // ここでモーダルを開く
        setOpen(true);
      } else {
        setHistory([...history, [guessNumber, "ですか？", "いいえ"]]);
      }
    }
    // 予想した後は予想番号を1に戻して予想文を空文字にする
    setGuessNumber(0);
    setQuestionSentence("");
  };

  console.log(answer);

  return (
    <>
      <CssBaseline />
      <h1 style={{ textAlign: "center" }}>🃏数字当てゲーム🃏</h1>
      <h2 style={{ textAlign: "center" }}>1〜100の数字を予想しよう！</h2>
      <Grid container item>
        <Grid style={{ marginLeft: "200px", marginTop: "50px" }}>
          <h1 style={{ textAlign: "center" }}>
            {guessNumber} {questionSentence}
          </h1>
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
          <GuessHistory history={history} />
        </Grid>
      </Grid>
      <SuccessModal open={open} guessCount={guessCount} answer={answer} />
    </>
  );
};
export default Board;
