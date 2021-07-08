let pokemonRepository = (function() {
    let pokemonList = [];
    let searchInput = document.querySelector("#searchIn");

    // API Url to fetch data from
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {



        let pokemonList = document.querySelector("#list-group");

        let listpokemon = document.createElement("li");
        listpokemon.classList.add("list-group-item")

        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("btn-outline-primary");


        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function(event) {
            showDetails(pokemon);

        });
    }



    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }



    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e) {
            console.error(e);
        });
    }

    let modalContainer = document.querySelector('.modal-content');

    function showModal(pokemon) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('img-container');
        let pokeImage = document.createElement('img');
        pokeImage.classList.add('PokeImage');
        pokeImage.src = pokemon.imageUrl;

        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;

        let contentElement = document.createElement('p');
        contentElement.innerText = ("Height:" + pokemon.height);





        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
        modal.appendChild(imageContainer);
        imageContainer.appendChild(pokeImage);

        modalContainer.classList.add('is-visible');
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function() {
            showModal(item);
        });
    }

    searchInput.addEventListener('input', function() {
        let listPokemon = document.querySelectorAll('.list-group-item');
        let value = searchInput.value.toUpperCase();

        listPokemon.forEach(function(pokemon) {
            if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
                pokemon.style.display = '';
            } else {
                pokemon.style.display = 'none';
            }
        })
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
    };
})();


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});