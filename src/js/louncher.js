import "../css/styles.css";
import "../css/postcss.css";
import "../scss/styles.scss";
import "../less/styles.less";
import "../stylus/styles.styl";

function louncher() {
  console.log("🚀 louncherr 🚀");
  // código react
  const $title = document.getElementById("title");
  $title.innerHTML = "Preprocesadores con webpack";
}
export default louncher;
