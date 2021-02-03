import { createContext, useState } from "react";
import { StylesProvider } from "@material-ui/core";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Expenses } from "./Expenses/Expenses";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ExpenseDetails } from "./Expenses/ExpenseDetails/ExpenseDetails";

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: () => {},
});

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      name: 40,
      category: 0,
      details: "Lorem ipsum dolor sit amet",
      id: "sjdhfhudsfjghuio",
    },
  ]);

  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <ExpensesContext.Provider
          value={{ expenses: expenses, setExpenses: setExpenses }}
        >
          <Switch>
            <Route path="/expense/:id" exact>
              <ExpenseDetails />
            </Route>
            <Route path="/" exact>
              <Expenses expenses={expenses} setExpenses={setExpenses} />
            </Route>
            <Route>404 Not found</Route>
          </Switch>
        </ExpensesContext.Provider>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
