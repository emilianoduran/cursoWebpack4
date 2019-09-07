const render = (data) => {
    const pokemon = document.createElement('img');
    const $container = document.querySelector('.container')
    const name = document.createElement('span')
    name.innerHTML = ` ${data.forms[0].name}`
    const $nameContainer = document.querySelector('#pokemon')
    pokemon.setAttribute('src', data.sprites.front_default);
    $container.appendChild(pokemon);
    $nameContainer.appendChild(name)
}

export default render;