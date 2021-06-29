import React, { FC, ReactNode } from "react";

type NumberButtonProps = {
  onClick(): void;
  children: ReactNode;
};

const NumberButton: FC<NumberButtonProps> = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};
export default NumberButton;
