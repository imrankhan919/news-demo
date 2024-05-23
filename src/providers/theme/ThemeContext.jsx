import { createContext, useReducer } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialState = {
    dark: true,
  };
  const ThemeReducer = (state, action) => {
    if (action.type === "CHANGE_THEME") {
      return {
        ...state,
        dark: state.dark ? false : true,
      };
    }
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
