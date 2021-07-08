// Lista de productos. Se pueden agregar mas
var nuevaBebida;
class Drinks { // 
    constructor(name,size,price,type,ID){
        this.name = name;
        this.size = size;
        this.price = parseInt(price);
        this.type  = type;
        this.ID = ID;
        this.stock = 0;
    }       
    
    agregarStock(){
        var x;
        var y = true 
        console.log('Largo del array pre entrada: ' + drinksArray.length + ' Ultima entrada: ' + drinksArray[(drinksArray.length)-1].name)
        for (x of drinksArray){
            if (x.ID == this.ID){
                console.log('Stock del producto pre entrada: '  +  x.name +' '+ x.stock )
                x.stock += 1
                y = false 
                console.log('Stock del producto post entrada: ' +  x.name +' '+ x.stock )  }
            }
            if (y){
                nuevaBebida.stock +=1
                drinksArray.push(nuevaBebida)
                console.log('Largo del array post entrada: ' + drinksArray.length + ' Ultima entrada: ' + drinksArray[(drinksArray.length)-1].name) }
    
     } 
     
}     
   


// ID: Primer numero refiere al tipo de bebida, 2do a la bebida y 3ero al tamano
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
    name: 'gin beeafeter',
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

function admin(){
    const opcion = prompt('Opciones: agregar producto, ordenar o \'salir\' para salir ')
    if (opcion == 'ordenar'){
        let orden = ordenar(prompt('Como desea ordenar los productos ? Opciones: precio, tipo, nombre'))
        var x;
        for (x of orden){
            console.log(x.name + ' $' + x.price + ' tipo: ' + x.type)
        }
        admin()
    } else if (opcion == 'agregar producto') {
        nuevaBebida = new Drinks(prompt('nombre'), prompt('tamano'), parseInt(prompt('precio')), prompt('tipo'), prompt('ID'))
        nuevaBebida.agregarStock();
        admin()

    } else if (opcion == 'salir'){
        console.log('Bebidas')
        for (const x of drinksArray){
            console.log(x.name + ' $' + x.price + ' tipo: ' + x.type + ' ID: ' + x.ID )
        }
    }
}

function usuario(){
    let carrito = [] ;
    var precio = 0;

    let item = prompt("Ingrese Item a comprar: Fernet Branca, Fernet 1882, Gin Beefeater, Gin Bombai, Smirnoff Vodka  o \'salir\' para salir");
    while(item != 'salir'){
        item = item.toLowerCase()
        carrito.push(drinksArray.filter(drink => drink.name == item)[0]);
        item = prompt("Ingrese Item a comprar: Fernet Branca, Fernet 1882, Gin Beefeater, Gin Bombai, Smirnoff Vodka  o \'salir\' para salir");
     }
    console.log('carrito')
    for(let i of carrito){
        console.log(i.name + '  $' + i.price)
        precio += i.price
    }
    console.log('Monto a pagar: $' + precio)
}    

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
    const cliente = prompt('Bienvenidos a drinks ! Sos usuario o admin ?')
        if (cliente == 'admin'){
            admin()
        } else if (cliente == 'usuario'){
            usuario()
            }
        }
main()
        


