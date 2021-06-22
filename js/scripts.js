let pokemonRepository = (function() {
    let pokemonList = [{
            name: 'Raichu',
            height: 0.8,
            types: ['electric'],
            generation: 1,
        },
        {
            name: 'Keldeo',
            height: 1.4,
            types: ['fighting', 'water'],
            generation: 5,
        },
        {
            name: 'Ivysaur',
            height: 1,
            types: ['grass', 'poison'],
            generation: 1,
        },
    ];

    function getAll() {
        return pokemonList;
    }

    function add(item) {
        pokemonList.push(item);
    }

    return {
        getAll: getAll,
        add: add
    };

})();

newPokemonList = pokemonRepository.getAll();

newPokemonList.forEach((pokemon, i) => {
    document.write("<p>" + 'name:' + newPokemonList[i].name + ' height: ' + newPokemonList[i].height + 'generation:' + newPokemonList[i].generation + "</p>");
});

document.write("<br><br>");