var clientes = [];
var cuentas = [];
var pagos = [];

var cliente = {};
var cuenta = {};
var pago = {};

var opcion = 0;
var paso = 0;
var anterior = null;

/*******************/
function inicio(){
    mensajeInicio();
    process.openStdin().addListener("data", function(d) {
        d = d.toString().trim();
        processEntrada(d);
    });
}

function mensajeInicio(){
    console.log("********************************************************************************************************");
    console.log("Que quieres hacer?");
    console.log("____________________________");
    console.log("1: Ver Listado de Clientes.");
    console.log("2: Crear Cliente.");
    console.log("3: Crear Cuenta");
    console.log("4: Ver Cuentas");
    console.log("5: Pagar");
    console.log("____________________________");
}

function processEntrada(d){
    if(opcion == 0){
        switch (d){
            case "1":
                opcion = "1";
                anterior = verListado;
                anterior(d);
                break;
            
            case "2":
                opcion = "2";
                anterior = crearCliente;
                anterior(d);
                break;

            case "3":
                opcion = "3";
                anterior = crearCuenta;
                anterior(d);
                break;

            case "4":
                opcion = "4";
                anterior = verCuentas;
                anterior(d);
                break;

            case "5":
                opcion = "5";
                anterior = pagar;
                anterior(d);
                break;
        }
    }else{
        anterior(d);
    }
}

function reset(){
    opcion = 0;
    paso = 0;
    mensajeInicio();
}

function verListado(d){
    console.clear();
    clientes.forEach((c, i)=> console.log("> " + i + " " + c.nombre) );
    reset();
}

function crearCliente(d){
    console.clear();
    switch (paso) {
        case 0:
            console.log("Escribe el nombre...");
            paso ++;
            break;
        
        case 1:
            cliente.nombre = d;
            console.log("Escribe numero de identificacion...");
            paso ++;
            break;

        case 2:
            cliente.identificacion = d;
            console.log("Escribe la direccion...");
            paso ++;
            break;

        case 3:
            cliente.direccion = d;
            for(prop in cliente){
                console.log( prop, ": ", cliente[prop]  );
            }
            clientes.push(cliente);
            cliente = {};
            reset();
            break;
    }

}

function crearCuenta(d){
    console.clear();
    switch (paso) {
        case 0:
            console.log("Escoge el cliente..");
            paso++;
            break;
    
        case 1:
            console.log(cliente = clientes[+d]);
            cuenta.idcliente = +d;
            cuenta.cliente = cliente['nombre'];
            cuenta.fecha = Math.round( new Date()/1000 );
            console.log("Capital..");
            paso++;
            break;
        
        case 2:
            cuenta.capital = +d;
            for (prop in cuenta) {
                console.log(prop + " : " + cuenta[prop]);
            }
            cuentas.push(cuenta);
            cuenta = {};
            cliente = {};
            reset();
            break;
    }
}

function verCuentas(d){
    console.clear();
    switch (paso) {
        case 0:
            console.log("Escoge el cliente..");
            paso++;
            break;

        case 1:
            console.log("cuentas de " + clientes[+d].nombre);
            for (var index = 0; index < cuentas.length; index++) {
                const cuenta = cuentas[index];
                if(cuenta.cliente == clientes[+d].nombre && cuenta.idcliente == +d){
                    console.log("\n")
                    console.log( "idcuenta: ", index );
                    console.log( "capital: ", cuenta["capital"] );
                    console.log( "fecha: ", new Date(cuenta['fecha'] * 1000).toLocaleDateString() );

                    for(var i = 0; i < pagos.length; i++){
                        var p = pagos[i];
                        if(p.idcuenta = index){
                            console.log("\t" + p.capital + " > " + new Date(p.fecha*1000));
                        }
                    }
                }
            }
            reset();
            break;
    }
}

function pagar(d){
    console.clear();
    switch (paso) {
        case 0:
            console.log("Escoge el cliente..");
            paso++;
            break;

        case 1:
            cliente = clientes[+d];
            pago.idcliente = +d;
            console.log("Escoge la cuenta..");
            paso++;
            break;

        case 2:
            cuenta = cuentas[+d];
            pago.idcuenta = +d;
            console.log("Cantidad del pago..");
            paso++;
            break;

        case 3:
            pago.cantidad = +d;
            pago.fecha = Math.round( new Date()/1000 );
            pagos.push(pago);
            pago = {};
            cliente = {};
            cuenta = {};
            reset();
            break;
    }
}

inicio();
