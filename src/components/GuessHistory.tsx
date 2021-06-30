import React, { FC } from "react";

type GuessHistoryProps = {
  history: [number, string, string][];
};

const GuessHistory: FC<GuessHistoryProps> = (props) => {
  return (
    <div>
      <h1>予想履歴</h1>
      {props.history.map((guess, index) => (
        <h2 key={index}>
          {index + 1}. {guess[0]}
          {guess[1]}: {guess[2]}
        </h2>
      ))}
    </div>
  );
};

export default GuessHistory;
