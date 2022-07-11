function agregarAlCarrito(producto,stock){
    const tenemosStock = validarStock (stock);
    if (tenemosStock === ('hay stock')){
        console.log ("agregarmos producto al carrito " + producto);    
    }
    else{
        console.los ("no tenemos stock");
    } 
}

function validarStock (stockProducto){
    if (stockProducto > 0) {
        return ("hay stock");
    }
    else {
        return ("no hay stock");
    }
}

agregarAlCarrito("asado" , 1)

