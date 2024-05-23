import { useContext } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";
import ThemeContext from "../providers/theme/ThemeContext";

const ThemeBtn = () => {
  const { dark, dispatch } = useContext(ThemeContext);

  const changeTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
    });
  };

  return (
    <button
      className={dark ? "btn btn-warning text-light" : "btn btn-dark"}
      id="theme-btn"
      onClick={changeTheme}
    >
      {dark ? <FaRegSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeBtn;
