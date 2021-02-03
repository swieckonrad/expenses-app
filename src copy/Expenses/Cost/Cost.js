import React, { useEffect, useState } from "react";
import {
  Typography,
  StylesProvider,
  Paper,
  useTheme,
  IconButton,
  Icon,
  Button,
  Collapse,
} from "@material-ui/core";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { CATEGORIES } from "../Expenses";
import { BrowserRouter, Route } from "react-router-dom";

const Cost = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const theme = useTheme();
  const styles = {
    root: css`
      margin: ${theme.spacing(2)}px 0;
      padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
    `,
    row: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
  };

  // const multiplyBy2: (a: number) => number = (a) => {
  //   return a * 2;
  // };
  // // policzyc cos i zwrocic

  // console.log(multiplyBy2(5)); // 10

  // const zmienna = 2;
  // const dodajCosDoZmiennej: (a: number) => void = (a) => {
  //   zmienna += a;
  // };

  // console.log((zmienna += 2));

  // // void to zrob coś

  // console.log(dodajCosDoZmiennej(5)); // undefined

  // const clientHeight  = useClientHeight

  // useEffect(() => {
  //   const text = document.querySelector("#root > div > h1");

  //   // console.log(text.clientHeight);
  // }, []);

  return (
    <Paper elevation={3} css={styles.root}>
      <div css={styles.row}>
        <Typography variant="h6">
          $ {props.price} [
          {CATEGORIES.find((cat) => cat.id === props.categoryId).name}]
        </Typography>
        <Button onClick={() => setShowDetails((prevState) => !prevState)}>
          {showDetails ? "Hide" : "Show"} details
        </Button>
        <IconButton onClick={() => props.handleRemoveExp(props.id)}>
          <Icon>delete</Icon>
        </IconButton>
        <IconButton>
          <Icon>open_in_new</Icon>
        </IconButton>
        <a href="http://localhost:3000/expense/5">Przejdz</a>
      </div>

      {/* {showDetails ? <div>{props.detail}</div> : null} */}
      {/* <div style={{ display: showDetails ? "block" : "none" }}>
        {props.detail}
      </div> */}
      <span>liczba expensow: {props.expenses.length}</span>

      <Collapse in={showDetails} timeout="auto" unmountOnExit={true}>
        <Typography align="justify">{props.details}</Typography>
      </Collapse>
    </Paper>
  );
};

export default Cost;
