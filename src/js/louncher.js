import "../css/styles.css";
import React from "react";
import { render } from "react-dom";
import data from "./components/data.json";
import App from "./components/app";

function louncher() {
  console.log("🚀 louncherr 🚀");
  // código react
  console.log(data);
  // @ts-ignore
  render(<App />, document.querySelector(".container"));
}
export default louncher;
