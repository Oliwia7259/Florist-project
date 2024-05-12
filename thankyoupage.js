document.addEventListener("DOMContentLoaded", function() {
    
    let orderData = JSON.parse(localStorage.getItem("orderData"));
    let cart = JSON.parse(localStorage.getItem("data")) || [];
    
    
    let shopItemsDate = [
        {
            id:"1",
            name:"Monstera",
            price:"80",
            type:"ROŚLINY",
            img: "./img/monstera.jpg"
        },
        {
            id:"2",
            name:"Bonsai",
            price:"90",
            type:"ROŚLINY",
            img: "./img/bonsai.jpg"
        },
        {
            id:"3",
            name:"Aloes",
            price:"45",
            type:"ROŚLINY",
            img: "./img/aloes.jpg"
        },
        {
            id:"4",
            name:"Skrzydłokwiat",
            price:"75",
            type:"ROŚLINY",
            img: "./img/skrzydlokwiat.jpg"
        },
        {    
            id:"5",
            name:"Satin Pothos",
            price:"70",
            type:"ROŚLINY",
            img: "./img/satin.jpg"
        },
        {
            id:"6",
            name:"Gasteria",
            price:"30",
            type:"ROŚLINY",
            img: "./img/gasteria.jpg"
        },
        {
            id:"7",
            name:"Palma Areca",
            price:"260",
            type:"ROŚLINY",
            img: "./img/areca.jpg"
        },
        {    
            id:"8",
            name:"Jade",
            price:"55",
            type:"ROŚLINY",
            img: "./img/jade.jpg"
        
        },
        {    
            id:"9",
            name:"Zamioculcas",
            price:"90",
            type:"ROŚLINY",
            img: "./img/zamioculcas.jpg"
        },
        {
            id:"10",
            name:"Strelitzia",
            price:"70",
            type:"ROŚLINY",
            img: "./img/strelitzia.jpg"
        },
        {
            id:"11",
            name:"Maranta",
            price:"65",
            type:"ROŚLINY",
            img: "./img/maranta.jpg"
        },
        {    
            id:"12",
            name:"Calathea",
            price:"45",
            type:"ROŚLINY",
            img: "./img/calathea.jpg"
        
        },
        {
            id:"21",
            name:"Doniczka Boho",
            price:"60",
            type:"DONICZKI",
            img: "./img/flowerpot-boho.png"
        },
        {
            id:"22",
            name:"Doniczka",
            price:"50",
            type:"DONICZKI",
            img: "./img/flowerpot-white.png"
        },
        {
            id:"23",
            name:"Chipsy kokosowe",
            price:"28",
            type:"ZIEMIA I NAWOZY",
            img: "./img/coconut-chips.png"
        },
        {
            id:"24",
            name:"Ziemia doniczkowa",
            price:"12",
            type:"ZIEMIA I NAWOZY",
            img: "./img/soil.png"
        },
    ];

    let chosenDeliveryMethod = localStorage.getItem('chosenDeliveryMethod');
    let selectedDeliveryDate = localStorage.getItem('selectedDeliveryDate');

    const cartItems = document.querySelector('.cart-itmes');
    const totalCostElement = document.querySelector('.total-cost-p');



    // Ordered products list
    const generateFinalOrder = () => {
        if (cart.length !== 0) {
            cartItems.innerHTML = cart.map((x) => {
                let { id, item } = x;
                let search = shopItemsDate.find((z) => z.id === String(id)) || {};
                return `
                <div class="cart-item">
                    <img class="cart-item-img" src=${search.img} width="100" height="100">
                    <div class="cart-item-name">${search.name}</div>
                    <div class="cart-item-price">${search.price}zł</div>
                    <div class="items-quantity">x${item}</div>
                </div>
                `;
            }).join("");
        } else {
            cartItems.innerHTML = "<p>Koszyk jest pusty.</p>";
        }
    };

    generateFinalOrder();

    // total cost
    const totalCost = () => {
        let cost = 0;
        if (cart.length !== 0) {
            cost = cart.map((x) => {
                let { item, id } = x;
                let search = shopItemsDate.find((z) => z.id === String(id)) || {};
                return item * parseFloat(search.price);
            }).reduce((a, b) => a + b, 0);
        }
        totalCostElement.textContent = `${cost}zł`;
    };

    totalCost();

    // Delivery Method
    const deliveryMethodElement = document.getElementById('delivery-method');
    deliveryMethodElement.textContent = chosenDeliveryMethod || 'Nie wybrano sposobu doręczenia';

    // Delivery Date
    const deliveryDateInput = document.getElementById("delivery-time");
    deliveryDateInput.textContent = selectedDeliveryDate || 'Nie wybrano daty dostawy';

});

