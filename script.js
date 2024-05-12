

// shopping cart
const offer = document.getElementById('offer');

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
];

let cart = JSON.parse(localStorage.getItem("data")) || [];

const generateOffer = () => {
    return (offer.innerHTML= shopItemsDate
        .map((x) => {
            let { id, name, price, type, img } = x;
            let search = cart.find((x)=>x.id === id) || [];
        return `
        <figure id=product-id-${id}>
            <div class="image-offer">
            <img src=${img}
            </div>
            <h4>${type}</h4>
            <div class="name-and-price">
                <h5 class="name">${name}</h5>
                <h5 class="price">${price}zł</h5>
            </div>
            <div class="buttons">
                <i  onclick="increment(${id})" class="bi bi-plus"></i>
                <div id=${id} class="items-quantity">${search.item === undefined? 0 : search.item}</div>
                <i  onclick="decrement(${id})" class="bi bi-dash"></i>
                </div>
        </figure>
    `;
    }).join(""));
    
};
generateOffer();

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
    generateOffer()
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
        update(id);
        cart = cart.filter((x)=>x.item !== 0);
    }
};

const update = () => {
    cart.forEach((item) => {
        const quantityElement = document.getElementById(item.id);
        if (quantityElement !== null) {
            quantityElement.innerText = item.item;
        }
    });
    calcalation();
};


const calcalation = () => {
    const itemsNumber = document.getElementById('items-number');
    itemsNumber.innerHTML = cart.map((x)=>x.item).reduce((x,y)=>x+y,0)
};

generateOffer();
update();
