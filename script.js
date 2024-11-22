function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
                
            }
            return response.json();
        })
        .then(data => {
            const pokemonInfo = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
                <p>Tipo: ${data.types.map(type => type.type.name).join(', ')}</p>
            `;
            document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
            document.getElementById('pokemonInfo').style.color ='green';
        })
        .catch(error => {
            document.getElementById('pokemonInfo').innerHTML = '<p>Pokémon no encontrado</p>';
            document.getElementById('pokemonInfo').style.color ='red';
        });
}
