import search from './search'
import render from './render';

const changeText = () => {
    let $title = document.querySelector('#title')
    $title.innerHTML = "Pokemon";

    const id = prompt('Quien es ese pokemonn');
    search(id)
        .then((data) => {
            render(data)
        })
        .catch(() => {
            console.log('err');
        })

}
export default changeText;