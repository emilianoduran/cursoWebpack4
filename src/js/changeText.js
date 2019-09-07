function changeText() {
    let $title = document.querySelector('#title')
    $title.innerHTML = "Un cambio externo al louncher y se actualiza el HMR";

    class Persona {
        constructor(name) {
            this.name = name;
        }
    }

    const emiliano = new Persona('Emiliano')
    $title.innerHTML = emiliano.name;

}
export default changeText