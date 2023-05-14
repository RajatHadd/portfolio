import "./App.css";
import IndexFile from "../src/components/index";
import { themeContext } from "./contexts/themecontext";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <IndexFile />
    </div>
  );
}

export default App;
