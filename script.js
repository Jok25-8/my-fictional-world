
/* =====================================
   MY FICTION WORLD
===================================== */


/* =====================================
   YOUR COLLECTION
===================================== */

const items = [

    {
        title: "Monster",
        type: "anime",
        image: "https://imgs.search.brave.com/PgPyKhtU7jMqyJy__SnPfbfeymmIJfXieNGABjG0VV8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNjQ2/NjIwNC5qcGc",
        rating: 5,
        description: "A psychological thriller about Dr. Kenzo Tenma and the consequences of one decision.",
        thoughts: "Johan is one of those characters that makes you stare at the screen like: WHAT AM I WATCHING."
    },

    {
        title: "Higurashi When They Cry",
        type: "anime",
        image: "https://imgs.search.brave.com/Ywuhq7AMHiw8R8pCDPhAuB-pMOE2eJCQ1-rgz6USwTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM1LzJl/Lzk4LzM1MmU5ODQy/ZDdlZGYwMzI5MGU3/Yjg3NzY4YjAzZjQy/LmpwZw",
        rating: 5,
        description: "Absolute genjam and....genjam",
        thoughts: "Looks innocent. Absolutely not innocent."
    },

    {
        title: "Rick and Morty",
        type: "shows",
        image: "https://imgs.search.brave.com/jKpSDltBTj1qGyzA3fQhaNxWcJnpiFk_LXcU0XtpS-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vUmlj/ay1BbmQtTW9ydHkt/Q292ZXItV2FsbC1Q/b3N0ZXItMjItMzc1/LXgtMzRfMDY0ZTlm/MmMtNzQ2OS00OTZk/LTk0YmEtYjk1ZjI1/NTFmNjMxLmYxNDFi/YjA0Mzg5NmRiMDMy/MWE2NzI5N2Q2NzAx/NDhiLmpwZWc_b2Ru/SGVpZ2h0PTU3NiZv/ZG5XaWR0aD01NzYm/b2RuQmc9RkZGRkZG",
        rating: 5,
        description: "blah blah blah.",
        thoughts: "Rick does crazy gnjm and pulls morty into the genjam."
    },

    {
        title: "Berserk",
        type: "manga",
        image: "https://imgs.search.brave.com/5XCmuQaDyPTP-9yTv5YFgzDiJZtCintQOX5YHbv3SUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EwLzc4/L2YwL2EwNzhmMDgx/NmIxYTdkNTBiM2Vj/NTlhMDc2M2QzNTQ3/LmpwZw",
        rating: 5,
        description: "Something.",
        thoughts: "GRIFFITHHH!!!!!HIS NAME SHALL BE FORGOTTEN."
    },

    {
        title: "20th Century Boys",
        type: "manga",
        image: "https://imgs.search.brave.com/ZZC9Xx-E3U9v2Vcu2UGVGqj3FMHkoe1ai1axmGJGppg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFoRXhKWStYekwu/anBn",
        rating: 5,
        description: "Friends are truly the worst and best.",
        thoughts: "'So dayo, Boku dayo..Boku da,Tomodachi dayo."
    },

    {
        title: "The Cosmos",
        type: "other",
        image: "https://placehold.co/600x800/202040/ffffff?text=THE+COSMOS",
        rating: 5,
        description: "Stars, planets, galaxies, black holes and all the ridiculous stuff happening in space.",
        thoughts: "I literally made an entire website about this. Space is cool."
    },

    {
        title: "Japanese",
        type: "other",
        image: "https://imgs.search.brave.com/BUTMwGnzqqacWDWkm2dF2nqEtAmbva6KlZf6k1Z5g0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41OTgx/NjgyMzU3LjQ1MzUv/cmFmLDM2MHgzNjAs/MDc1LHQsZmFmYWZh/OmNhNDQzZjQ3ODYu/anBn",
        rating: 4,
        description: "Learning Japanese because anime somehow turned into an actual language-learning side quest.",
        thoughts: "Kimi wa tomodachi da yo."
    },

    {
        title: "Chess",
        type: "games",
        image: "https://imgs.search.brave.com/-f0gMXDPMd3jSWzOD-YmYWyKwDBtGvrmMjZUw6WB4F0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2hlc3Njb21m/aWxlcy5jb20vdXBs/b2Fkcy92MS9jaGVz/c190ZXJtLzIzODNk/ZTE4LWI4YjItMTFl/Yi1hNGI0LTRiYzk4/N2EwMGFmZS5kMzQz/MjFhZS42MzB4MzU0/by45ZTYyMDQxYmM0/YjUucG5n",
        rating: 4,
        description: "pure gnjm after 800 ELO",
        thoughts: "DO NOT PLAY"
    },

    {
    title: "Minecraft",
    type: "games",
    image: "https://imgs.search.brave.com/T5kY6IXt0iUVWMvmM8IyFcrv5IFtmt_c6QgAf9p96rc/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3N0ZXZlLW9u/LWdyYXNzLWFuZC1k/aWFtb25kLW1pbmVj/cmFmdC1oZC03Mjht/bWk1eGp3Ym10Zjc5/LmpwZw",
    rating: 5,
    description: "A sandbox game where you can build, explore, survive and accidentally spend 6 hours mining.",
    thoughts: "LA PEACE"
},

{
    title: "Elden Ring",
    type: "games",
    image: "https://imgs.search.brave.com/z9ZgcXTwlboNR0EN0GX4BDbPj1zAu7OOTvXjHe9NAMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGlzcGxhdGUuY29t/L2FydHdvcmsvMjAy/My0wMi0wOS80YjI5/ZDBjNjFjNDliYzAw/ZWY0NzNjNWU1ZDYz/NjVmZV8zOTQ3ZGMw/YmQ1NGM1MTJjZTU5/ZjZlMmQ1YWZkNzAx/My5qcGc_c3BlZWRz/aXplPXdfNjgx",
    rating: 5,
    description: "Bosses,fights and pure peak cinema.",
    thoughts: "Malenia's scarlet rott is the best."
},

{
    title: "BLACK SOULS",
    type: "games",
    image: "https://imgs.search.brave.com/HA-7Q7jjDCeZY1Ft5qG4HkjvmnYiwaDnfJiTxV_hvXE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuYWthbWFpLnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzM3NTU4/NjAvOWU3ZGYxMDUy/MzRiN2FiYmVlYmM4/OGVhMTFmMWZkYTBm/ZmM0ODUxOS9oZWFk/ZXIuanBnP3Q9MTc4/ODkyMTg4MQ",
    rating: 5,
    description: "Leaf............",
    thoughts: "This game is completely unhinged."
},

{
    title: "BLACK SOULS II",
    type: "games",
    image: "https://imgs.search.brave.com/f0cRrZ5coS4q0N1Pcpww4y6J4rtdaG9Mj1nn3cUTfOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Yi53aWtpbWVkaWEu/b3JnL3dpa2lwZWRp/YS9lbi90aHVtYi85/Lzk1L0JsYWNrc291/bHNfcHJvbW90aW9u/X2FydC5wbmcvMzMw/cHgtQmxhY2tzb3Vs/c19wcm9tb3Rpb25f/YXJ0LnBuZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PXBhcnNlciZ1dG1f/Y29udGVudD10aHVt/Ym5haWw",
    rating: 5,
    description: "Alice??",
    thoughts: "Where's Alice?"
},



];


/* =====================================
   DISPLAY ITEMS
===================================== */

const grid = document.getElementById("collectionGrid");


function displayItems(list) {

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column: 1/-1;
                text-align:center;
                padding:40px;
                background:#fff6d6;
                border:4px solid #33244d;
                box-shadow:7px 7px 0 #ff72b6;
            ">
                <h2>NOPE. NOTHING HERE 😭</h2>
                <p>Try searching for something else.</p>
            </div>
        `;

        return;
    }


    list.forEach(function(item) {

        const card = document.createElement("div");

        card.className = "card";

        card.onclick = function() {
            openModal(item);
        };


        let stars = "";

        for (let i = 0; i < item.rating; i++) {
            stars += "★";
        }


        card.innerHTML = `

            <div class="tape"></div>

            <img
                class="card-image"
                src="${item.image}"
                alt="${item.title}"
            >

            <p class="card-type">
                ${item.type.toUpperCase()}
            </p>

            <h3>
                ${item.title}
            </h3>

            <div class="rating">
                ${stars}
            </div>

        `;


        grid.appendChild(card);

    });

}


/* =====================================
   FILTER
===================================== */

function filterItems(category) {

    if (category === "all") {

        displayItems(items);

        return;
    }


    const filtered = items.filter(function(item) {

        return item.type === category;

    });


    displayItems(filtered);

}


/* =====================================
   SEARCH
===================================== */

function searchItems() {

    const searchText =
        document.getElementById("searchBox")
        .value
        .toLowerCase();


    const results = items.filter(function(item) {

        return (
            item.title.toLowerCase().includes(searchText) ||
            item.type.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText)
        );

    });


    displayItems(results);

}


/* =====================================
   MODAL
===================================== */

function openModal(item) {

    document.getElementById("modal").style.display = "flex";


    document.getElementById("modalImage").src =
        item.image;


    document.getElementById("modalTitle").innerText =
        item.title;


    document.getElementById("modalType").innerText =
        item.type.toUpperCase();


    document.getElementById("modalDescription").innerText =
        item.description;


    document.getElementById("modalThoughts").innerText =
        item.thoughts;


    let stars = "";

    for (let i = 0; i < item.rating; i++) {

        stars += "★";

    }

    document.getElementById("modalRating").innerText =
        stars;

}


/* =====================================
   CLOSE MODAL
===================================== */

function closeModal() {

    document.getElementById("modal").style.display =
        "none";

}


/* =====================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================== */

window.onclick = function(event) {

    const modal =
        document.getElementById("modal");


    if (event.target === modal) {

        closeModal();

    }

};


/* =====================================
   PAGE NAVIGATION
===================================== */

function showSection(sectionName) {

    const pages = [
        "home",
        "favorites",
        "collection",
        "about"
    ];


    pages.forEach(function(page) {

        const element =
            document.getElementById(page);


        if (page === sectionName) {

            element.style.display =
                "block";

        } else {

            element.style.display =
                "none";

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   START THE WEBSITE
===================================== */

displayItems(items);