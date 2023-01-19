import React, {useState} from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider(props) {
  const {children} = props;

  const [themeColor, setThemeColor] = useState('dark');

  const toggleTheme = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider
      value={{ color: themeColor, toggleTheme }}
    >
      <div className="App">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;