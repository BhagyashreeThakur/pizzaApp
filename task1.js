const data =
    [
        { "id": "MIR101", "image": "https://i.ibb.co/SR1Jzpv/mirinda.png", "type": "Beverage", "name": "Mirinda", "desc": "Mirinda", "veg": "Yes" },
        { "id": "PEP001", "image": "https://i.ibb.co/3vkKqsF/pepsiblack.png", "type": "Beverage", "name": "Pepsi Black Can", "desc": "Pepsi Black Can", "veg": "Yes" },
        { "id": "LIT281", "image": "https://i.ibb.co/27PvTng/lit.png", "type": "Beverage", "name": "Lipton Iced Tea", "desc": "Lipton Iced Tea", "veg": "Yes" },
        { "id": "PEP022", "image": "https://i.ibb.co/1M9xDZB/pepsi-new20190312.png", "type": "Beverage", "name": "Pepsi New", "desc": "Pepsi New", "veg": "Yes" },
        { "id": "BPCNV1", "image": "https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png", "type": "Burger Pizza", "name": "Classic Non Veg", "desc": "Oven-baked buns with cheese, peri-peri chicken, tomato &capsicum in creamy mayo", "veg": "No" },
        { "id": "BPCV03", "image": "https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png", "type": "Burger Pizza", "name": "Classic Veg", "desc": "Oven-baked buns with cheese, tomato &capsicum in creamy mayo", "veg": "Yes" },
        { "id": "BPPV04", "image": "https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png", "type": "Burger Pizza", "name": "Premium Veg", "desc": "Oven-baked buns with cheese, paneer,tomato, capsicum & red paprika in creamy mayo", "veg": "Yes" },
        { "id": "DIP033", "image": "https://i.ibb.co/0mbBzsw/new-cheesy.png", "type": "SideDish", "name": "Cheesy Dip", "desc": "An all-time favorite with your Garlic Breadsticks & Stuffed GarlicBread for a Cheesy indulgence", "veg": "Yes" },
        { "id": "DIP072", "image": "https://i.ibb.co/fY52zBw/new-jalapeno.png", "type": "SideDish", "name": "Cheesy Jalapeno Dip", "desc": "A spicy, tangy flavored cheese dip is a an absolutedelight with your favourite Garlic Breadsticks", "veg": "Yes" },
        { "id": "GAR952", "image": "https://i.ibb.co/BNVmfY9/Garlic-bread.png", "type": "SideDish", "name": "Garlic Breadsticks", "desc": "Baked to perfection. Your perfect pizza partner! Tastesbest with dip", "veg": "Yes" },
        { "id": "PARCH1", "image": "https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png", "type": "SideDish", "name": "Chicken Parcel", "desc": "Snacky bites! Pizza rolls with chicken sausage & creamyharissa sauce", "veg": "No" },
        { "id": "PARVG7", "image": "https://i.ibb.co/JHhrM7d/Parcel-Veg.png", "type": "Side Dish", "name": "VegParcel", "desc": "Snacky bites! Pizza rolls with paneer & creamy harissa sauce", "veg": "Yes" },
        { "id": "PATNV7", "image": "https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png", "type": "SideDish", "name": "White Pasta Italiano Non-Veg", "desc": "Creamy white pasta with pepper barbecuechicken", "veg": "No" },
        { "id": "PATVG4", "image": "https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png", "type": "SideDish", "name": "White Pasta Italiano Veg", "desc": "Creamy white pasta with herb grilledmushrooms", "veg": "Yes" },
        { "id": "DES044", "image": "https://i.ibb.co/gvpDKPv/Butterscotch.png", "type": "Dessert", "name": "Butterscotch Mousse Cake", "desc": "Sweet temptation! Butterscotch flavored mousse", "veg": "Yes" },
        { "id": "DES028", "image": "https://i.ibb.co/nm96NZW/ChocoLava.png", "type": "Dessert", "name": "Choco Lava Cake", "desc": "Chocolate lovers delight! Indulgent,gooey molten lava inside chocolate cake", "veg": "Yes" },
        { "id": "PIZVDV", "image": "https://i.ibb.co/F0H0SWG/deluxeveg.png", "type": "Pizza", "name": "DeluxeVeggie", "desc": "Veg delight - onion, capsicum, grilled mushroom, corn & paneer", "veg": "Yes" },
        { "id": "PIZVFH", "image": "https://i.ibb.co/4mHxB5x/farmhouse.png", "type": "Pizza", "name": "Farmhouse", "desc": "Delightful combination of onion, capsicum, tomato & grilled mushroom", "veg": "Yes" },
        { "id": "PIZVIT", "image": "https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png", "type": "Pizza", "name": "Indi Tandoori Paneer", "desc": "It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo", "veg": "Yes" },
        { "id": "PIZVMG", "image": "https://i.ibb.co/MGcHnDZ/mexgreen.png", "type": "Pizza", "name": "Mexican Green Wave", "desc": "Mexican herbs sprinkled on onion, capsicum, tomato &jalapeno", "veg": "Yes" },
        { "id": "PIZVPP", "image": "https://i.ibb.co/cb5vLX9/peppypaneer.png", "type": "Pizza", "name": "PeppyPaneer", "desc": "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika", "veg": "Yes" },
        { "id": "PIZVVE", "image": "https://i.ibb.co/gTy5DTK/vegextra.png", "type": "Pizza", "name": "VegExtravaganza", "desc": "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno &extra cheese", "veg": "Yes" },
        { "id": "PIZNCP", "image": "https://i.ibb.co/b5qBJ9d/cheesepepperoni.png", "type": "Pizza", "name": "Chicken Pepperoni", "desc": "A classic American taste! Relish the delectable flavor of Chicken Pepperoni,topped with extra cheese", "veg": "No" },
        { "id": "PIZNCD", "image": "https://i.ibb.co/GFtkbB1/ChickenDominator10.png", "type": "Pizza", "name": "Chicken Dominator", "desc": "Loaded with double pepperbarbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers", "veg": "No" },
        { "id": "PIZNPB", "image": "https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png", "type": "Pizza", "name": "Pepper Barbecue & Onion", "desc": "A classic favourite with pepperbarbeque chicken & onion", "veg": "No" },
        { "id": "PIZNIC", "image": "https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png", "type": "Pizza", "name": "Indi Chicken Tikka", "desc": "The wholesome flavour of tandoorimasala with Chicken tikka, onion, red paprika & mint mayo", "veg": "No" }
    ]

const sizes = ["Regular", "Medium", "Large"];
const crusts = ["New Hand Tossed", "Wheat Thin Crust", "Cheese Burst", "Fresh Pan Pizza", "Classic Hand Tossed"];

const cart = [];

show();

function show(active = 0) {
    let s1 = makeNavbar();
    let str = '';
    active === 1 ? str += showVegPizza() : str += '';
    active === 2 ? str += showNonVegPizza() : str += '';
    active === 3 ? str += showSideDishes() : str += '';
    active === 4 ? str += showOtherDishes() : str += '';
    document.getElementById('nav').innerHTML = '<div class="row"><div class="col-12">' + s1 + '</div></div>';
}


function showVegPizza() {
    let vegPizza = data.filter(ele => (ele.type == "Pizza" && ele.veg == "Yes"));
    let arr = vegPizza.map((ele, index) => {
        let str = '<div class="col-6"><div class="card text-center">';
        str += '<img class="card-img-top" src="' + ele.image + '">';
        str += '<div class="card-body">';
        str += '<h4 class="card-title">' + ele.name + '</h4>';
        str += '<p class="card-text">' + ele.desc + '</p>';
        str += '<div class="row" id=\'dropdown' + ele.id + '\'>';
        let find = cart.find(ele2 => ele.id == ele2.id);
        if (find)
            str += '<div class="col-4">' + makeDropdownDis('size' + ele.id, sizes, 'Select Size', find.size, '') + '</div>';
        else
            str += '<div class="col-4">' + makeDropdown('size' + ele.id, sizes, 'Select Size', '', '') + '</div>';
        str += '<div class="col-1"></div>';
        if (find)
            str += '<div class="col-6">' + makeDropdownDis('crust' + ele.id, crusts, 'Select Crust', find.crust, '') + '</div>';
        else
            str += '<div class="col-6">' + makeDropdown('crust' + ele.id, crusts, 'Select Crust', '', '') + '</div>';
        str += '</div>';
        str += '<br/>';
        if (find)
            str += '<button class="btn btn-sm btn-danger" onclick=\'minus("' + find.id + '")\'>-</button><button id=\'btn-2' + find.id + '\' class="btn btn-sm btn-secondary" muted>' + find.count + '</button><button class="btn btn-sm btn-primary" onclick=\'add("' + find.id + '")\')">+</button>';
        else
            str += '<div id=\'button' + ele.id + '\'><a href="#" onclick=\'AddToCart("' + ele.id + '")\' class="btn btn-primary">Add To Cart</a></div>';
        str += '</div>';
        str += '</div></div>';
        return str;

    });
    let table = '<div class="row">';
    table += arr.join('');
    table += '</div>';
    document.getElementById('show').innerHTML = table;
}

function showNonVegPizza() {
    let vegPizza = data.filter(ele => (ele.type == "Pizza" && ele.veg == "No"));
    let arr = vegPizza.map((ele, index) => {
        let str = '<div class="col-6"><div class="card text-center">';
        str += '<img class="card-img-top" src="' + ele.image + '">';
        str += '<div class="card-body">';
        str += '<h4 class="card-title">' + ele.name + '</h4>';
        str += '<p class="card-text">' + ele.desc + '</p>';
        str += '<div class="row" id=\'dropdown' + ele.id + '\'>';
        let find = cart.find(ele2 => ele.id == ele2.id);
        if (find)
            str += '<div class="col-4">' + makeDropdownDis('size' + ele.id, sizes, 'Select Size', find.size, '') + '</div>';
        else
            str += '<div class="col-4">' + makeDropdown('size' + ele.id, sizes, 'Select Size', '', '') + '</div>';
        str += '<div class="col-1"></div>';
        if (find)
            str += '<div class="col-6">' + makeDropdownDis('crust' + ele.id, crusts, 'Select Crust', find.crust, '') + '</div>';
        else
            str += '<div class="col-6">' + makeDropdown('crust' + ele.id, crusts, 'Select Crust', '', '') + '</div>';
        str += '</div>';
        str += '<br/>';
        if (find)
            str += '<button class="btn btn-sm btn-danger" onclick=\'minus("' + find.id + '")\'>-</button><button id=\'btn-2' + find.id + '\' class="btn btn-sm btn-secondary" muted>' + find.count + '</button><button class="btn btn-sm btn-primary" onclick=\'add("' + find.id + '")\')">+</button>';
        else
            str += '<div id=\'button' + ele.id + '\'><a href="#" onclick=\'AddToCart("' + ele.id + '")\' class="btn btn-primary">Add To Cart</a></div>';
        str += '</div>';
        str += '</div></div>';
        return str;
    });
    let table = '<div class="row">';
    table += arr.join('');
    table += '</div>';
    document.getElementById('show').innerHTML = table;

}

function showSideDishes() {
    let vegPizza = data.filter(ele => (ele.type == "SideDish"));
    let arr = vegPizza.map((ele, index) => {
        let str = '<div class="col-6"><div class="card text-center">';
        str += '<img class="card-img-top" src="' + ele.image + '">';
        str += '<div class="card-body">';
        str += '<h4 class="card-title">' + ele.name + '</h4>';
        str += '<p class="card-text">' + ele.desc + '</p>';
        let find = cart.find(ele2 => ele.id == ele2.id);
        if (find)
            str += '<button class="btn btn-sm btn-danger" onclick=\'minus("' + find.id + '")\'>-</button><button id=\'btn-2' + find.id + '\' class="btn btn-sm btn-secondary" muted>' + find.count + '</button><button class="btn btn-sm btn-primary" onclick=\'add("' + find.id + '")\')">+</button>';
        else
            str += '<div id=\'button' + ele.id + '\'><a href="#" onclick=\'showCart("' + ele.id + '")\' class="btn btn-primary">Add To Cart</a></div>';
        str += '</div>';
        str += '</div></div>';
        return str;
    });
    let table = '<div class="row">';
    table += arr.join('');
    table += '</div>';
    document.getElementById('show').innerHTML = table;
}


function showOtherDishes() {
    let vegPizza = data.filter((ele, index) => (ele.type != "Pizza" && ele.type != "SideDish"));
    let arr = vegPizza.map((ele, index) => {
        let str = '<div class="col-6"><div class="card text-center">';
        str += '<img class="card-img-top" src="' + ele.image + '">';
        str += '<div class="card-body">';
        str += '<h4 class="card-title">' + ele.name + '</h4>';
        str += '<p class="card-text">' + ele.desc + '</p>';
        let find = cart.find(ele2 => ele.id == ele2.id);
        if (find)
            str += '<button class="btn btn-sm btn-danger" onclick=\'minus("' + find.id + '")\'>-</button><button id=\'btn-2' + find.id + '\' class="btn btn-sm btn-secondary" muted>' + find.count + '</button><button class="btn btn-sm btn-primary" onclick=\'add("' + find.id + '")\')">+</button>';
        else
            str += '<div id=\'button' + ele.id + '\'><a href="#" onclick=\'showCart("' + ele.id + '")\' class="btn btn-primary">Add To Cart</a></div>';
        str += '</div>';
        str += '</div></div>';
        return str;
    });
    let table = '<div class="row">';
    table += arr.join('');
    table += '</div>';
    document.getElementById('show').innerHTML = table;
}

function AddToCart(id) {
    let crust = document.getElementById('crust' + id).value;
    let size = document.getElementById('size' + id).value;
    (checksize(id)) ? (checkCrust(id)) ? showCart(id) : alert('Select crust before adding to cart') : alert('Select a size before adding to cart');
}

function checksize(id) {
    let size = document.getElementById('size' + id).value;
    if (size === 'Select Size') {
        return false
    }
    else
        return true;
}

function showCart(id) {
    let ele = data.find(ele => ele.id == id);
    let count = 0;
    if (ele.type == "Pizza") {
        let Size = document.getElementById('size' + id).value;
        let Crust = document.getElementById('crust' + id).value;
        let find = cart.find(ele => ele.id == id);
        if (find) {
            find.count++;
        }
        else {
            let json = { type: ele.type, id: ele.id, image: ele.image, name: ele.name, desc: ele.desc, size: Size, crust: Crust, count: 1 };
            cart.push(json);
        }
    }
    else {
        let find = cart.find(ele => ele.id == id);
        if (find) {
            find.count++;
        }
        else {
            let json = { id: ele.id, image: ele.image, name: ele.name, desc: ele.desc, count: 1 };
            cart.push(json);
        }
    }
    showCrt(cart, id);
}
function showCrt(cart, id) {
    let find = cart.find(ele => ele.id == id);
    if (find.type) {
        let size1 = document.getElementById('size' + id).value;
        document.getElementById('size' + id).disabled = true;
        let crust1 = document.getElementById('crust' + id).value;
        document.getElementById('crust' + id).disabled = true;
    }
    let arr = cart.map((ele, index) => {
        let str = '<div class="row col-12" style="border: 1px solid lightgrey;"><div class="col-3">';
        str += '<img width="60" style="margin-top:4em;" src="' + ele.image + '">';
        str += '</div>';
        str += '<div class="col-9">';
        str += '<h4 >' + ele.name + '</h4>';
        str += '<p >' + ele.desc + '</p>';
        if (ele.type)
            str += '<p><b>' + ele.size + '|' + ele.crust + '</b></p>';
        str += '<button class="btn btn-sm btn-danger" onclick=\'minus("' + ele.id + '")\'>-</button><button id=\'btn-1' + ele.id + '\' class="btn btn-sm btn-secondary" muted>' + ele.count + '</button><button class="btn btn-sm btn-primary" onclick=\'add("' + ele.id + '")\')">+</button>';
        str += '</div>';
        str += '</div>';
        document.getElementById('button' + id).innerHTML = '<button class="btn btn-sm btn-danger" onclick=\'minus("' + ele.id + '")\')">-</button><button id=\'btn-2' + ele.id + '\' class="btn btn-sm btn-secondary" muted>' + ele.count + '</button><button class="btn btn-sm btn-primary" onclick=\'add("' + ele.id + '")\')">+</button>';
        return str;
    });
    document.getElementById('show2').innerHTML = '<h4  class="text-center">Cart</h4>' + arr.join('');
}

function add(id) {
    let find = cart.find(ele => ele.id == id)
    find.count++;
    document.getElementById('btn-1' + id).innerHTML = find.count;
    document.getElementById('btn-2' + id).innerHTML = find.count;
}
function minus(id) {
    let find = cart.find(ele => ele.id == id)
    let count = find.count--;
    if (count == 1) {
        let index = cart.indexOf(find);
        cart.splice(index, 1);
        let arr = cart.map((ele, index) => {
            let str = '<div class="row col-12" style="border: 1px solid lightgrey;"><div class="col-3">';
            str += '<img width="60" style="margin-top:4em;" src="' + ele.image + '">';
            str += '</div>';
            str += '<div class="col-9">';
            str += '<h4 >' + ele.name + '</h4>';
            str += '<p >' + ele.desc + '</p>';
            if (ele.type)
                str += '<p><b>' + ele.size + '|' + ele.crust + '</b></p>';
            str += '<button class="btn btn-sm btn-danger" onclick=\'minus("' + ele.id + '")\'>-</button><button id=\'btn-1' + ele.id + '\' class="btn btn-sm btn-secondary" muted>' + ele.count + '</button><button class="btn btn-sm btn-primary" onclick=\'add("' + ele.id + '")\')">+</button>';
            str += '</div>';
            str += '</div>';
            return str;
        });
        document.getElementById('show2').innerHTML = '<h4  class="text-center">Cart</h4>' + arr.join('');
        if (find.type) {
            document.getElementById('size' + id).disabled = false;
            document.getElementById('crust' + id).disabled = false;
            document.getElementById('button' + id).innerHTML = '<a href="#" onclick=\'showCart("' + id + '")\' class="btn btn-primary">Add To Cart</a>';
        }
        document.getElementById('button' + id).innerHTML = '<a href="#" onclick=\'showCart("' + id + '")\' class="btn btn-primary">Add To Cart</a>';
    }
    else {
        document.getElementById('btn-1' + id).innerHTML = find.count;
        document.getElementById('btn-2' + id).innerHTML = find.count;
    }
}


function checkCrust(id) {
    let crust = document.getElementById('crust' + id).value;
    if (crust === 'Select Crust') {
        return false;
    }
    else
        return true;
}


function makeDropdown(id, arr, firstItem, selValue, onChangeFn) {

    const arr1 = arr.map(function (opt) {
        if (opt == selValue)
            return '<option  selected>' + opt + '</option>';
        else
            return '<option>' + opt + '</option>';
    });
    let first = '<option   selected>' + firstItem + '</option>';
    if (selValue != '')
        first = '<option>' + firstItem + '</option>';

    let s1 = '<select id=\'' + id + '\'>';

    if (onChangeFn != '')
        s1 = '<select id=\'' + id + '\' onchange="filter()">';
    s1 += first + arr1.join('') + '</select>';
    return s1;
}

function makeDropdownDis(id, arr, firstItem, selValue, onChangeFn) {
    const arr1 = arr.map(function (opt) {
        if (opt == selValue)
            return '<option  selected>' + opt + '</option>';
        else
            return '<option>' + opt + '</option>';
    });
    let first = '<option selected>' + firstItem + '</option>';
    if (selValue != '')
        first = '<option>' + firstItem + '</option>';
    let s1 = '<div class="form-group">';
    s1 += '<select disabled id=\'' + id + '\'>';

    if (onChangeFn != '')
        s1 = '<select disabled id=\'' + id + '\' onchange="filter()">';
    s1 += first + arr1.join('') + '</select>';
    s1 += '</div>';
    return s1;
}

function showVeg() {
    show(1);
}
function showNonVeg() {
    show(2);
}
function showSide() {
    show(3);
}
function showOther() {
    show(4);
}

function makeNavbar(active = 0) {
    let str = '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
    str += '<a class="navbar-brand" href="#">MyFavPizza</a>';
    str += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">';
    str += '<span class="navbar-toggler-icon"></span>';
    str += '</button>';
    str += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    str += '<ul class="navbar-nav mr-auto">';
    let active1 = active === 1 ? 'active' : '';
    let active2 = active === 2 ? 'active' : '';
    let active3 = active === 3 ? 'active' : '';
    let active4 = active === 4 ? 'active' : '';

    str += '<li class="nav-item ' + active1 + '">';
    str += '<a class="nav-link" onclick="showVeg()">Veg Pizza</a>';
    str += '</li>';
    str += '<li class="nav-item ' + active2 + '">';
    str += '<a class="nav-link" onclick="showNonVeg()">Non-Veg Pizza</a>';
    str += '</li>';
    str += '<li class="nav-item ' + active3 + '">';
    str += '<a class="nav-link" onclick="showSide()">Side Dishes</a>';
    str += '</li>';
    str += '<li class="nav-item ' + active4 + '">';
    str += '<a class="nav-link" onclick="showOther()">Other items</a>';
    str += '</li>';
    str += '</ul>';
    str += '</div>';
    str += '</nav>';
    return str;

}