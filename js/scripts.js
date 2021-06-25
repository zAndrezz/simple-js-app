let pokemonRepository = (function() {
    let repository = [{
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
        return repository;
    }

    function add(pokemon) {
        repository.push(pokemon);
    }

    function showDetails(pokemon) {
        console.log(pokemon);

    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");

        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }



    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    };
})();


pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});