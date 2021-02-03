import { createContext, useContext, useEffect, useState } from "react";
import { CssBaseline, StylesProvider } from "@material-ui/core";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Expenses } from "./Expenses/Expenses";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ExpenseDetails } from "./Expenses/ExpenseDetails/ExpenseDetails";

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: () => {},
});

export const ThemeColorContext = createContext("");

export const useThemeColor = () => {
  const themeColor = useContext(ThemeColorContext);
  return themeColor;
};

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      name: 40,
      category: 0,
      details: "Lorem ipsum dolor sit amet",
      id: "dsa",
    },
    {
      name: 100,
      category: 3,
      details: "Lorem ipsum dolor sit amet",
      id: "21",
    },
    {
      name: 15,
      category: 6,
      details: "Lorem ipsum dolor sit amet",
      id: "dsad2",
    },
  ]);

  const themeColor1 = "red";
  const themeColor2 = "green";

  const [themeColor, setThemeColor] = useState(themeColor1);

  useEffect(() => {
    setTimeout(() => {
      setThemeColor(themeColor2);
    }, 1000);
  }, []);

  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <CssBaseline />
        <ThemeColorContext.Provider value={themeColor}>
          <ExpensesContext.Provider
            value={{ expenses: expenses, setExpenses: setExpenses }}
          >
            <Switch>
              <Route path="/expense/:id" exact>
                <ExpenseDetails />
              </Route>
              <Route path="/" exact>
                <ThemeColorContext.Provider>
                  <Expenses
                    css={css`
                      display: block;
                    `}
                  />
                </ThemeColorContext.Provider>
              </Route>
              <Route>404 Not found</Route>
            </Switch>
          </ExpensesContext.Provider>
        </ThemeColorContext.Provider>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
