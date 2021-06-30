import React, { FC, ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

type LongButtonProps = {
  onClick(): void;
  backgroundColor: string;
  children: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const LongButton: FC<LongButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button style={{ backgroundColor: props.backgroundColor }}>
        {props.children}
      </Button>
    </div>
  );
};
export default LongButton;
