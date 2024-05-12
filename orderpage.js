document.addEventListener("DOMContentLoaded", function() {

    // take LS data to cart
    let cart = JSON.parse(localStorage.getItem("data")) || [];
    
    const orderDataFromStorage = JSON.parse(localStorage.getItem("orderData")) || {};
    
    // Fill in form if data available
    document.querySelector('#fullName').value = orderDataFromStorage.fullName || '';
    document.querySelector('#email').value = orderDataFromStorage.email || '';
    document.querySelector('#phone').value = orderDataFromStorage.phone || '';
    document.querySelector('#city').value = orderDataFromStorage.city || '';
    document.querySelector('#street').value = orderDataFromStorage.street || '';
    document.querySelector('#post-code').value = orderDataFromStorage.postCode || '';
    
    const orderButton = document.querySelector('.order-btn');

    const fullNameError = document.getElementById('fullNameError')
    const emailError = document.getElementById('emailError')
    const phoneError = document.getElementById('phoneError')
    const cityError = document.getElementById('cityError')
    const postcodeError = document.getElementById('postcodeError')
    const addressError = document.getElementById('addressError')
    
    orderButton.addEventListener('click', function(event) {
        event.preventDefault();
    
    const fullNameParts = document.querySelector('#fullName').value.split(' ');
    const firstName = fullNameParts[0];
    const lastName = fullNameParts.slice(1).join(' ');
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const city = document.querySelector('#city').value;
    const street = document.querySelector('#street').value;
    const postCode = document.querySelector('#post-code').value;

    let isError = false;
    
        if (phone === '') {
            phoneError.innerHTML= 'Proszę wypełnić wszystkie wymagane pola.';
            isError = true;
            }

        if (city === '') {
            cityError.innerHTML= 'Proszę wypełnić wszystkie wymagane pola.';
            isError = true;
            }

        if (postCode === '') {
            postcodeError.innerHTML= 'Proszę wypełnić wszystkie wymagane pola.';
            isError = true;
            }

        if (street === '') {
            addressError.innerHTML= 'Proszę wypełnić wszystkie wymagane pola.';
            isError = true;
            }

        if (firstName === '' || lastName === '') {
            fullNameError.innerHTML= 'Proszę wprowadzić imię i nazwisko.';
            isError = true;
            }
    
        if (!validateEmail(email)) {
            emailError.innerHTML= 'Proszę wprowadzić poprawny adres e-mail.';
            isError = true;
            }

        // validate email
        function validateEmail(email) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);
        }

        if (isError) {
            return;
        }
    
        const fullName = firstName + ' ' + lastName;
    
        const orderData = {
            fullName: fullName,
            email: email,
            phone: phone,
            city: city,
            street: street,
            postCode: postCode,
        };
    
        // save form data in LS/ go to TYPage
        localStorage.setItem('orderData', JSON.stringify(orderData));
        localStorage.removeItem('orderData');
        window.location.href = 'index3.html';
        });
    
        // save data from form in LS after changes
        const formInputs = document.querySelectorAll('input');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                const fullName = document.querySelector('#fullName').value;
                const email = document.querySelector('#email').value;
                const phone = document.querySelector('#phone').value;
                const city = document.querySelector('#city').value;
                const street = document.querySelector('#street').value;
                const postCode = document.querySelector('#post-code').value;
    
                const orderData = {
                    fullName: fullName,
                    email: email,
                    phone: phone,
                    city: city,
                    street: street,
                    postCode: postCode,
                };
    
                localStorage.setItem('orderData', JSON.stringify(orderData));

            fullNameError.innerHTML = "";
            emailError.innerHTML = "";
            phoneError.innerHTML = "";
            cityError.innerHTML = "";
            postcodeError.innerHTML = "";
            addressError.innerHTML = "";
            });
        });
    
    // delivery date - PASS
const deliveryDateInput = document.getElementById("data");
let today = new Date();
let minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
deliveryDateInput.min = minDate.toISOString().split('T')[0];
deliveryDateInput.addEventListener("change", function() {
    updateDeliveryDate(this.value);
});

function updateDeliveryDate(selectedDate) {
    const deliveryTimeElement = document.getElementById("delivery-time");
    deliveryTimeElement.textContent = selectedDate;
    localStorage.setItem("selectedDeliveryDate", selectedDate);
}
    
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
    
        const cartItems = document.getElementById('cart-items');
        const buttonsSection = document.getElementById('buttons-section')
    
    // count how many items in the cart
    const calcalation = () => {
        const itemsNumber = document.getElementById('items-number');
        itemsNumber.innerHTML = cart.map((x)=>x.item).reduce((x,y)=>x+y,0)
    };
    calcalation();
    
    // generate order 
    const generateOrder = () => {
        if (cart.length !== 0) {
            return cartItems.innerHTML = cart.map((x) => {
                let { id, item } = x;
                let search = shopItemsDate.find((z) => z.id === String(id)) || {};
                return `
                <div class="cart-item">
                    <img class="cart-item-img" src=${search.img} width="100" height="100">
                    <div class="cart-item-name">${search.name}</div>
                    <div class="cart-item-price">${search.price}zł</div>
                    <div class="items-quantity">x${item}</div>
                    <button class="remove" data-index="${id}">Usuń</button>
                </div>
                `;
            }).join("");
        } else {
            cartItems.innerHTML = ``;
            buttonsSection.innerHTML = `
            <p>Koszyk jest pusty</p>
            <a href="index.html">
            <button class="homePage">Wróć do sklepu</button>
            </a>`;
        }
    
    };
    generateOrder();
    
    //remove buttons
    function removeItem(id) {
        id = parseInt(id); 
        cart = cart.filter((item) => item.id !== id);
        localStorage.setItem("data", JSON.stringify(cart));
        generateOrder();
        calcalation();
        totalCost();
        generateAccessories();
        update();
    }
    
    
    cartItems.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove')) {
            let id = event.target.getAttribute('data-index');
            removeItem(id);
        }
    });
    
    // delivery method
    const radiobuttons = document.querySelectorAll("input[name='delivery-method']");
    let choosenButton = '';

    const findchoosen = () => {
        choosenButton = document.querySelector("input[name='delivery-method']:checked").value;
        localStorage.setItem('chosenDeliveryMethod', choosenButton);
    }

    radiobuttons.forEach(radiobutton => {
        radiobutton.addEventListener("change", findchoosen);
    });

    // total cost
    const totalCost = () => {
        let cost = 0;
        if (cart.length !== 0) {
            cost = cart.map((x) => {
                let { item, id } = x;
                let search = shopItemsDate.find((z) => z.id === String(id)) || {};
                return item * parseFloat(search.price);
            })
            .reduce((a, b) => a + b, 0);
        }
    
        const totalCostElement = document.getElementById('total-cost');
    
        totalCostElement.innerHTML = `
            <h3>Kwota łączna</h3>
            <p class="total-cost-p">${cost}zł</p>
        `;
    };
    totalCost();

    //Accessories

        const accessories = document.getElementById('accessories');
    
        let shopAccessoriesDate = [
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

    const increment = (id) => {
        let search = cart.find((x)=> x.id === id);
    
        if(search === undefined){
            cart.push({
                id: id,
                item: 1,
            });
        }else{
            search.item += 1;
        }
        localStorage.setItem("data", JSON.stringify(cart))
        generateOrder();
        totalCost();
        generateAccessories();
        update();
    };
    
    const decrement = (id) => {
        const quantityElement = document.getElementById(id);
        const quantity = parseInt(quantityElement.innerText);
        
        if (quantity > 0) {
            let search = cart.find((x)=> x.id === id);
            if(search === undefined){
                cart.push({
                    id: id,
                    item: 1,
                });
            }else{
                search.item -= 1;

            }

            localStorage.setItem("data", JSON.stringify(cart));
            generateOrder();
            totalCost();
            update();
            cart = cart.filter((x)=>x.item !== 0);
        }
    };
    
    window.increment = increment;
    window.decrement = decrement;
    
    const generateAccessories = () => {
        return (accessories.innerHTML= shopAccessoriesDate
            .map((item) => {
                let { id, name, price, type, img } = item;
                let search = cart.find((item) => item.id === id) || { item: 0 };
                return `
                <figure id=product-id-${id}>
                    <div class="image-offer">
                    <img src="${img}" alt="${name}">
                    </div>
                    <h4>${type}</h4>
                    <div class="name-and-price">
                        <h5 class="name">${name}</h5>
                        <h5 class="price">${price}zł</h5>
                    </div>
                    <div class="buttons">
                        <i onclick="increment(${id})" class="bi bi-plus"></i>
                        <div id=${id} class="items-quantity">${search.item}</div>
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    </div>
                </figure>
                `;
            }).join(""));
    };
    generateAccessories();

    
    const update = () => {
        cart.forEach((item) => {
            const quantityElement = document.getElementById(item.id);
            if (quantityElement) {
                quantityElement.innerText = item.item;
            }
        });
        calcalation();
    };
    update();
    generateOrder();
    totalCost();
    });