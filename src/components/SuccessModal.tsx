import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Typography } from "@material-ui/core";

type SuccessModalProps = {
  answer: number;
  guessCount: number;
  open: boolean;
};

const getModalStyle = () => {
  const top: number = 50;
  const left: number = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      borderRadius: 20,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const SuccessModal: FC<SuccessModalProps> = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ textAlign: "center" }}>
        正解です!💯
      </h2>
      <Typography variant="h5" id="simple-modal-description">
        正解の数字:{props.answer}
      </Typography>
      <Typography variant="h5" id="simple-modal-description">
        正解までの質問数:{props.guessCount}
      </Typography>
    </div>
  );
  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default SuccessModal;
