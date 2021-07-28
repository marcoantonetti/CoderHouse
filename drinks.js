var nuevaBebida;
class Drinks { 
    constructor(name,size,price,type,ID){
        this.name = name;
        this.size = size;
        this.price = parseInt(price);
        this.type  = type;
        this.ID = ID;
        this.stock = 0;
    }       
    //metodo
    agregarStock(){
        var x;
        var y = true 
       // console.log('Largo del array pre entrada: ' + drinksArray.length + ' Ultima entrada: ' + drinksArray[(drinksArray.length)-1].name)
        for (x of drinksArray){
            if (x.ID == this.ID){
                x.stock += 1
                let li = document.getElementById(`${x.name}`)
                li.textContent = `${x.name} $${x.price} Stock = ${x.stock}`
                y = false 
                 }
            }
            if (y){
                nuevaBebida.stock +=1
                drinksArray.push(nuevaBebida)
                let li = document.createElement('li')
                li.setAttribute('id',`${nuevaBebida.name}`) 
                li.textContent = `${nuevaBebida.name} $${nuevaBebida.price}       Stock = ${nuevaBebida.stock}`
                document.getElementById('lista').appendChild(li)}
    
     } 
     
}     
// Objetos
const FernetBranca = {
    name: 'fernet branca',
    size: '750',
    price: 650,
    type: 'fernet',
    ID:'012',
    dateOfPurchase: null,
    stock: 5,

}

const Fernet1882 = {
    name: 'fernet 1882',
    size: '750',
    price:  450,
    type: 'fernet',
    ID:'022',
    dateOfPurchase: null,
    stock: 5,

}

const GinBeefeater = {
    name: 'gin beefeater',
    size:   '750',
    price: 2150,
    type: 'gin',
    ID: '122', 
    dateOfPurchase: null,
    stock: 5,

}

const GinBombai = {
    name: 'gin bombai',
    size:  '750',
    price: 1900,
    type: 'gin',
    ID: '132',
    dateOfPurchase: null,
    stock: 5,

}

const SmirnoffVodka = {
    name: 'smirnoff vodka',
    size:  '750', 
    price: 750,
    type: 'vodka',
    ID: '202', 
    dateOfPurchase: null,
    stock: 5,
}

// Arrays

const drinksArray = [GinBeefeater,GinBombai,Fernet1882,FernetBranca,SmirnoffVodka];

// funciones

// Elije opcion ordenar o agregar producto. Esta ultima agrega nuevas bebidas a los producos, en caso de ya existir, stock +1
function admin(){
    let opcion;
    do{ opcion = prompt('Opciones: agregar producto, ordenar o \'salir\' para salir ')
        if (opcion == 'ordenar'){
            let arrayOrdenado = ordenar(prompt('Como desea ordenar los productos ? Opciones: precio, tipo, nombre'))
            console.log('101'+drinksArray[drinksArray.length-1].name)
            for (var x of arrayOrdenado){
                let li = document.getElementById(`${x.name}`)
                document.getElementById('lista').appendChild(li)
                }console.log('105'+drinksArray[drinksArray.length-1].name)
        } else if (opcion == 'agregar producto') {
                    nuevaBebida = new Drinks(prompt('nombre'), prompt('tamano'), parseInt(prompt('precio')), prompt('tipo'), prompt('ID'))
                    nuevaBebida.agregarStock();
                    console.log('109'+drinksArray[drinksArray.length-1].name)}
        }while(opcion!='salir'){}
        
    
}

// Agrega bebidas al carrito, y calcula el monto final a pagar
function usuario(){
    let carrito = [] ;
    var precio = 0;
    let i = 0;

    let item = prompt("Ingrese Item a comprar: Fernet Branca, Fernet 1882, Gin Beefeater, Gin Bombai, Smirnoff Vodka  o \'salir\' para salir");
    while(item != 'salir'){
        carrito.push(drinksArray.filter(drink => drink.name == item.toLowerCase())[0]); // agrega objeto de DrinksArray al carrito
        let li = document.createElement('li')
        li.textContent = `${carrito[i].name} $ ${carrito[i].price}`
        document.getElementById('carritoOL').appendChild(li)
        i++
        item = prompt("Ingrese Item a comprar: Fernet Branca, Fernet 1882, Gin Beefeater, Gin Bombai, Smirnoff Vodka  o \'salir\' para salir");
     }
    for(let i of carrito){
        precio += i.price
    }
    let p = document.createElement('p')
    p.textContent = `Monto a pagar: $ ${precio}`
    document.getElementById('carrito').appendChild(p)
}    

// ordena por tipo, nombre alfabetico o precio  
function ordenar(a){
    switch(a) {
        case ('tipo'):
            return drinksArray.sort((a,b) => a.type.localeCompare(b.type)) 
            break
        case('nombre'):
            return drinksArray.sort((a,b) => a.name.localeCompare(b.name)) 
        case ('precio'):
            return drinksArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));   
            }            
        }

function main(){
    console.log('Bebidas')
        for (const x of drinksArray){
            console.log(x.name + ' $' + x.price + ' tipo: ' + x.type + ' ID: ' + x.ID )
        }
    const cliente = prompt('Bienvenidos a drinks ! Sos usuario o admin ?')
        if (cliente == 'admin'){
            admin()
        } else if (cliente == 'usuario'){
            usuario()
            }
        }
main()
        

// event focus en bebida y number.pone max attr para canntidad 