import { useState } from "react";
import Cost from "./Cost/Cost";
import {
  Button,
  Typography,
  useTheme,
  TextField,
  Container,
  Icon,
  Select,
  InputLabel,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import uniqid from "uniqid";

export const CATEGORIES = [
  "Clothes",
  "Food",
  "Fuel",
  "Gifts",
  "Gadgets",
  "Party",
  "Online",
  "Other",
].map((cat, i) => ({ name: cat, id: i }));

export const Expenses = (props) => {
  const [addExpInVal, setAddExpInVal] = useState("");
  const [addDetInVal, setAddDetInVal] = useState("");
  const [categoryVal, setCategoryVal] = useState(0);

  const theme = useTheme();
  const styles = {
    root: css`
      padding-top: ${theme.spacing(2)}px;
      text-align: center;
    `,
    actions: css`
      display: flex;
      flex-direction: column;
      color: red;

      & > * {
        margin: ${theme.spacing(1)}px 0;
      }
    `,
    list: css`
      margin: 0 auto;
    `,
    button: css`
      text-align: inline-block;
    `,
    usersText: css`
      margin-top: 100px;
    `,
  };

  const handleAddExp = () => {
    if (addExpInVal === "") {
      return alert("Name of expense can't be empty");
    } else if (categoryVal === undefined) {
      return alert("Category can't be empty");
    }
    props.setExpenses((prevState) => [
      ...prevState,
      {
        name: addExpInVal,
        category: categoryVal,
        details: addDetInVal,
        id: uniqid(),
      },
    ]);
  };

  console.log(props);

  const handleDelExp = (elId) => {
    props.setExpenses((prevState) => prevState.filter(({ id }) => id !== elId));
  };

  return (
    <div css={styles.root}>
      <Typography variant="h1" align="center" gutterBottom>
        Expenses
      </Typography>
      <Container maxWidth="sm" css={styles.actions}>
        <TextField
          label="Input price"
          variant="outlined"
          size="small"
          color="secondary"
          type="number"
          value={addExpInVal}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={(event) => setAddExpInVal(event.target.value)}
        />{" "}
        <InputLabel id="label">Purchase category</InputLabel>
        <Select
          color="secondary"
          labelId="label"
          id="select"
          value={categoryVal}
          onChange={(e) => setCategoryVal(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <MenuItem value={cat.id}>{cat.name}</MenuItem>
          ))}
        </Select>
        <TextField
          label="Input details"
          variant="outlined"
          size="small"
          color="secondary"
          value={addDetInVal}
          onChange={(ev) => setAddDetInVal(ev.target.value)}
        />
        <div css={styles.button}>
          <Button variant="outlined" color="secondary" onClick={handleAddExp}>
            Add <Icon>add</Icon>
          </Button>
        </div>
      </Container>
      <Container maxWidth="xs" css={styles.list}>
        {props.expenses.map((expense) => (
          <Cost
            expenses={props.expenses}
            key={expense.id}
            id={expense.id}
            categoryId={expense.category}
            price={expense.name}
            details={expense.details}
            handleRemoveExp={handleDelExp}
          />
        ))}
      </Container>
    </div>
  );
};
