const spacexItems = [
    { name: "Unisex Starship Flight 5 T-Shirt", image: "", price: "$30.00" },
    { name: "Starship Flight 5 Mission Patch", image: "", price: "$15.00" },
    { name: "SpaceX Dragon and Starman Plush", image: "", price: "$60.00" },
    { name: "SPACEX RSF RESILIENCE EYEWEAR", image: "", price: "$749.00" },
    { name: "SPACEX DRAGON SCALE MODEL - PRE SALE", image: "", price: "$300.00" },
    { name: "SPACEX IVA SUIT FIGURE - PRE SALE", image: "", price: "$300.00" },
    { name: "Polaris Dawn Mission Patch", image: "", price: "$15.00" },
    { name: "Unisex Polaris Dawn T-Shirt", image: "", price: "$30.00" },
    { name: "SPACEX DRAGON PIN", image: "", price: "$30.00" },
    { name: "Kisses From Space", image: "", price: "" },
    { name: "STARSHIP TORCH", image: "", price: "$175.00" },
    { name: "Unisex Starship Flight 4 T-Shirt", image: "", price: "$30.00" },
    { name: "Starship Flight 4 Mission Patch", image: "", price: "$15.00" },
    { name: "Unisex Starship Flight 3 T-Shirt", image: "", price: "$30.00" },
    { name: "Unisex Starship Flight 2 T-Shirt", image: "", price: "$30.00" },
    { name: "Unisex Starship Test Flight T-Shirt", image: "", price: "$500.00" },
    { name: "SUPER HEAVY CHROME MODEL", image: "", price: "$499.00" },
    { name: "STARSHIP CHROME MODEL", image: "", price: "$300.00" },
    { name: "Hotstage | Booster upgrade kit", image: "", price: "$125.00" },
    { name: "Starship Test Flight Mission Patch", image: "", price: "$15.00" },
    { name: "Starship Flight 2 Mission Patch", image: "", price: "$15.00" },
    { name: "Starship Flight 3 Mission Patch", image: "", price: "$15.00" },
    { name: "Memes St. Sign", image: "", price: "$69.00" },
    { name: "SPACEX LAUNCH DAY SOCKS", image: "", price: "$30.00" },
    { name: "Unisex Year of Dragon T-shirt", image: "", price: "$30.00" },
    { name: "Unisex X Collection Sweatshirt", image: "", price: "$60.00" },
    { name: "Starship Sticker Pack", image: "", price: "$20.00" },
    { name: "Unisex X Collection Long Sleeve T-Shirt", image: "", price: "$40.00" },
    { name: "STARLINK ANYWHERE TUMBLER", image: "", price: "$46.00" },
];

const cardContainer = document.getElementById('card-container');

spacexItems.forEach(item => {
    
    const card = document.createElement('div');
    card.className = 'card';

    const link = document.createElement('a');
    link.href = `sho-detail.html/${item.name}`; // URL
    

    const image = document.createElement('img');
    image.src = item.image || 'https://via.placeholder.com/200';
    image.alt = item.name;

    const name = document.createElement('h3');
    name.textContent = item.name;

    const price = document.createElement('p');
    price.textContent = item.price ? item.price : "Price not available";

    link.appendChild(image);
    link.appendChild(name);
    card.appendChild(link);
    card.appendChild(price);

    cardContainer.appendChild(card);
});


