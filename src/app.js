import louncher from "./js/louncher.js";
louncher();
if (module.hot) {
  module.hot.accept(["./js/louncher.js", "./css/styles.css"], function() {
    louncher();
  });
}
console.log("cargando webpack");
