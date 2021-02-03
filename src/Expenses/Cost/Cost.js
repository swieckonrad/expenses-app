import { useState, useContext } from "react";
import {
  Typography,
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
import { Link } from "react-router-dom";
import { ExpensesContext } from "../../App";

const Cost = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const expenses = useContext(ExpensesContext).expenses;
  const expenseName = expenses.find((element) => element.id === props.id).name;
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

  return (
    <Paper elevation={3} css={styles.root}>
      <div css={styles.row}>
        <Typography variant="h6">
          $ {expenseName} [
          {CATEGORIES.find((cat) => cat.id === props.categoryId).name}]
        </Typography>
        <Button onClick={() => setShowDetails((prevState) => !prevState)}>
          {showDetails ? "Hide" : "Show"} brief details
        </Button>
        <IconButton onClick={() => props.handleRemoveExp(props.id)}>
          <Icon>delete</Icon>
        </IconButton>
        <IconButton component={Link} to={`/expense/${props.id}`}>
          <Icon>open_in_new</Icon>
        </IconButton>
      </div>
      <Collapse in={showDetails} timeout="auto" unmountOnExit={true}>
        <Typography align="justify">{props.details}</Typography>
      </Collapse>
    </Paper>
  );
};

export default Cost;
