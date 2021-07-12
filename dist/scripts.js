let pokemonRepository = function() { let e = [],
        t = document.querySelector("#searchIn"),
        n = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    function o(t) { "object" == typeof t && "name" in t ? e.push(t) : console.log("pokemon is not correct") } let i = document.querySelector(".modal-content");

    function l(e) { i.innerHTML = ""; let t = document.createElement("div"),
            n = document.createElement("div");
        n.classList.add("img-container"); let o = document.createElement("img");
        o.classList.add("PokeImage"), o.src = e.imageUrl; let l = document.createElement("h1");
        l.innerText = e.name; let c = document.createElement("p");
        c.innerText = "Height:" + e.height, t.appendChild(l), t.appendChild(c), i.appendChild(t), t.appendChild(n), n.appendChild(o), i.classList.add("is-visible") }

    function c(e) { pokemonRepository.loadDetails(e).then(function() { l(e) }) } return t.addEventListener("input", function() { let e = document.querySelectorAll(".list-group-item"),
            n = t.value.toUpperCase();
        e.forEach(function(e) { e.innerText.toUpperCase().indexOf(n) > -1 ? e.style.display = "" : e.style.display = "none" }) }), { add: o, getAll: function() { return e }, addListItem: function(e) { let t = document.querySelector("#list-group"),
                n = document.createElement("li");
            n.classList.add("list-group-item"); let o = document.createElement("button");
            o.innerText = e.name, o.classList.add("btn-outline-dark"), n.appendChild(o), t.appendChild(n), o.addEventListener("click", function(t) { c(e) }) }, loadList: function() { return fetch(n).then(function(e) { return e.json() }).then(function(e) { e.results.forEach(function(e) { let t = { name: e.name, detailsUrl: e.url };
                    o(t), console.log(t) }) }).catch(function(e) { console.error(e) }) }, loadDetails: function(e) { let t = e.detailsUrl; return fetch(t).then(function(e) { return e.json() }).then(function(t) { e.imageUrl = t.sprites.front_default, e.height = t.height, e.types = t.types }).catch(function(e) { console.error(e) }) }, showDetails: c, showModal: l } }();
pokemonRepository.loadList().then(function() { pokemonRepository.getAll().forEach(function(e) { pokemonRepository.addListItem(e) }) });