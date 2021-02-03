/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  AppBar,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ExpensesContext } from "../../App";
import { CATEGORIES } from "../Expenses";

export const ExpenseDetails = () => {
  const { id } = useParams();
  const expenses = useContext(ExpensesContext).expenses;

  const theme = useTheme();
  const styles = {
    closeButton: css`
      margin-right: ${theme.spacing(2)}px;
    `,
  };

  const foundExpense = expenses.find((exp) => exp.id === id);
  const foundExpenseCat = CATEGORIES.find(
    (cat) => cat.id === foundExpense.category
  );

  console.log(foundExpense);

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            css={styles.closeButton}
          >
            <Icon>clear</Icon>
          </IconButton>
          <Typography variant="h6">Detale wydatku o id {id}</Typography>
        </Toolbar>
      </AppBar>
      <div>
        Details: {foundExpense.details} <br />
        Price: {foundExpense.name} $ <br />
        Category: {foundExpenseCat.name}
      </div>
    </div>
  );
};
