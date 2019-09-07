import "../css/styles.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/app";

function louncher() {
  console.log("🚀 louncherr 🚀");
  // código react

  // @ts-ignore
  render(<App />, document.querySelector(".container"));
}
export default louncher;
