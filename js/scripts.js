let pokemonList;

pokemonList = [{
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

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height :" + pokemonList[i].height + ")");
    if (pokemonList[i].height > 1.3) {
        document.write(" - Wow, that's big!");
    }
    document.write("<br><br>");
}