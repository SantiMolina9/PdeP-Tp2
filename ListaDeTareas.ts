import { stringify } from "querystring";
let prompt = require("prompt-sync")();


function Menu(){
    console.log("¿Que desea hacer?");
    console.log("[1] Ver mis tareas ");
    console.log("[2] Buscar mis tareas ");
    console.log("[3] Agregar tarea ");
    console.log("[0] Salir");
}

function VerTarea(){
    console.log("¿Que tarea desea ver?\n\n");
    console.log("[1] Todas ");
    console.log("[2] Pendientes ");
    console.log("[3] En curso ");
    console.log("[4] Terminadas");
    console.log("[0] Volver");
}

function listaDeTareas (a: string, tarea:NewTarea[] ){
    let i: number;
    let edit: string;

    switch(a){
        case "1":
        for(i=0; i<tarea.length; i++){    
            console.log("[" ,i+1 +" ] " + "Tarea: " +tarea[i].titulo );
            
}   
            console.log("¿Desea ver los detalles de alguna? ");
            console.log("Introduce el numero para ver la descripcion o 0 para volver\n opcion: ");
            op=parseInt(prompt("Opcion: ") || "");

            if(op!==0 && tarea.length>=op){

            console.log("descripcion: " +tarea[op-1].descripcion );
            console.log("Estado: " +tarea[op-1].estado );
        
            console.log("Fecha de Creacion: " +tarea[op-1].fechaCreacion.toLocaleDateString() );
            if (tarea[op-1].fechaVencimiento === null) {
                console.log("Fecha de Vencimiento: No hay fecha limite");
            }else{
            console.log("Fecha de Vencimiento: " +tarea[op-1].fechaVencimiento?.toLocaleDateString() || "No hay fecha limite" );
            }
            console.log("Dificultad: " +tarea[op-1].dificultad );

            

            edit=prompt('si deseas editar la tarea precione "1" sino precione "0"') || "0";
            if (edit==="1"){
                modificar(op-1, tarea);
            }

        }
            else{
                if (op===0){
                
                }else{
                    console.log("Opcion invalida");
                prompt("ENTER para continuar");
                }
                
            }   
            break;
        case "2":

        
        for(i=0; i<tarea.length; i++){  
            if (tarea[i].estado==="Pendiente"){
                console.log("["+ i+1, "]", tarea[i].estado );  
            }}
            
            console.log("¿Desea ver los detalles de alguna? ");
            console.log("Introduce el numero para ver la descripcion o 0 para volver");
            op=parseInt(prompt("Opcion: ") || "");

            if(op!==0 && tarea.length>=op && tarea[i].estado==="En curso"){

            console.log("Descripcion: " + tarea[op-1].descripcion );
            console.log("Estado: " + tarea[op-1].estado );
        
            console.log("Fecha de Creacion: " + tarea[op-1].fechaCreacion.toLocaleDateString() );
            if (tarea[op-1].fechaVencimiento === null) {
                console.log("Fecha de Vencimiento: No hay fecha limite");
            }else{
            console.log("Fecha de Vencimiento: " +tarea[op-1].fechaVencimiento?.toLocaleDateString() || "Fecha de Vencimiento: No hay fecha limite");
            }
            console.log("Dificultad: " +tarea[op-1].dificultad );
            edit=prompt('Si deseas editar la tarea presione "1" sino presione "0"\n Opcion: ') || "";
            if (edit==="1"){
                for(i=0; i<tarea.length; i++){
                    if(tarea[i].estado==="Pendiente"){
                modificar(i, tarea);
            }}
            }}
            else{
                if (op===0){
                
                }else{
                    console.log("Opcion invalida");
                prompt("ENTER para continuar");
                }
            }   
            break;
            

        case "3":

        for(i=0; i<tarea.length; i++){  
            if (tarea[i].estado==="En curso"){
                console.log("["+ i+1, "]", tarea[i].estado );  
            }}
            
            console.log("¿Desea ver los detalles de alguna? ");
            console.log("Introduce el numero para ver la descripcion o 0 para volver");
            op=parseInt(prompt("Opcion: ") || "");

            if(op!==0 && tarea.length>=op && tarea[i].estado==="En curso"){

            console.log("Descripcion: " +tarea[op-1].descripcion );
            console.log("Estado: " +tarea[op-1].estado );
        
            console.log("Fecha de Creacion: " + tarea[op-1].fechaCreacion.toLocaleDateString() );
            if (tarea[op-1].fechaVencimiento === null) {
                console.log("Fecha de Vencimiento: No hay fecha limite");
            }else{
            console.log("Fecha de Vencimiento: " + tarea[op-1].fechaVencimiento?.toLocaleDateString() || "Fecha de Vencimiento: No hay fecha limite" );
            }
            console.log("Dificultad: " + tarea[op-1].dificultad );
            edit=prompt('si deseas editar la tarea precione "1" sino precione "0"\opcion: ') || "";
            if (edit==="1"){
                for(i=0; i<tarea.length; i++){
                    if(tarea[i].estado==="En curso"){
                modificar(i, tarea);
            }}
            }}
            else{
                if (op===0){
                }else{
                    console.log("Opcion invalida");
                    prompt("ENTER para continuar");
                }
            }   
            break;
        case "4":
            for(i=0; i<tarea.length; i++){  
                if (tarea[i].estado==="Terminada"){
                    console.log("["+ i+1, "]", tarea[i].estado );  
                }
            }
                console.log("¿Desea ver los detalles de alguna? ");
                console.log("Introduce el numero para ver la descripcion o 0 para volver");
                op=parseInt(prompt("Opcion: ") || "");
                if(op!==0 && tarea.length >= op && tarea[i].estado === "En curso"){

                console.log("Descripcion: " + tarea[op-1].descripcion );
                console.log("Estado: " + tarea[op-1].estado );
            
                console.log("Fecha de Creacion: " + tarea[op-1].fechaCreacion.toLocaleDateString() );
                if (tarea[op-1].fechaVencimiento === null) {
                    console.log("Fecha de Vencimiento: No hay fecha limite");
                }else{
                console.log("Fecha de Vencimiento: " + tarea[op-1].fechaVencimiento?.toLocaleDateString() || "no hay fehca limite"  );
                }
                console.log("Dificultad: " + tarea[op-1].dificultad );
                edit=prompt('si deseas editar la tarea precione "1" sino precione "0"\opcion: ') || "";
                if (edit==="1"){
                    for(i = 0; i < tarea.length; i++){
                        if(tarea[i].estado==="Terminada"){
                    modificar(i, tarea);
                }}
                }}
                else{
                    if (op === 0){
                
                    }else{
                        console.log("Opcion invalida");
                    prompt("ENTER para continuar");
                    }}
                    break;
                default:
                        console.log("Opcion Incorrecta...");
                        break;
                }   
            
    }

function modificar(a: number, tarea:NewTarea[]){
    console.clear();
    let dia: number | null;
    let mes: null | number;
    let año: number | null;
    console.log("Introduzca el Titulo nuevo a tu tarea:\n Si no deseas cambiar nada presiona ENTER");
    let crearTitulo=prompt(">");
        if (crearTitulo!==""){
            tarea[a].titulo = crearTitulo
    }

    console.clear();
    console.log("Introduzca una  descripcion nueva a tu tarea. Si no deseas cambiar nada presiona ENTER ");

    let crearDescripcion=prompt(">");
    if (crearDescripcion!==""){
        tarea[a].descripcion=crearDescripcion
    }
    console.clear();

    console.log("Introduzca la fecha de vencimiento. En el caso que no quiera poner una fecha presione ENTER: ");
    dia =parseInt(prompt("Ingrese el Dia: ") || 0 );
    let crearFecha:Date;

    if (dia===0){

    } else{
        mes=parseInt(prompt("Ingrese el Mes: ") || "" ); 
        año=parseInt(prompt("Ingrese el Año: ")|| "" );
        crearFecha=new Date(año, mes-1, dia)
        tarea[a].fechaVencimiento=crearFecha
    }

    console.clear();
    console.log("Elige la dificultad:");
    console.log("[1]Facil\n[2]Medio\n[3]Dificil");

    let crearDificultad: string=prompt("Opcion: ")

    switch(crearDificultad){
        case "1":
            crearDificultad="🌕🌑🌑";
            tarea[a].dificultad = crearDificultad;
        break;
        case "2":
            crearDificultad="🌕🌕🌑";
            tarea[a].dificultad = crearDificultad;
            break;
        case "3":
            crearDificultad="🌕🌕🌕";
            tarea[a].dificultad = crearDificultad;
            break;
        default:
                console.log("El valor ingresado es incorrecto");
                prompt("Presiona ENTER para continuar");
                break;
            }
            console.log("Introduzca una opcion para cambiar el estado de la tarea");
            console.log("[1]Pendiente\n[2]En curso\n[3]Terminada");
            let crearEstado=prompt("Opcion: ");
            switch(crearEstado){
                case "1":
                    crearEstado="Pendiente";
                    tarea[a].estado = crearEstado;
                break;
                case "2":
                    crearEstado="En curso";
                    tarea[a].estado = crearEstado;
                    break;
                case "3":
                    crearEstado="Terminada"
                    tarea[a].estado = crearEstado;
                    break;
                default:
                        console.log("El valor ingresado es incorrecto");
                        prompt("Presiona ENTER para continuar");
                    break;
                }
}




function CrearTarea(tarea:NewTarea[]){
    let crearTitulo: String;
    let crearDescripcion:String;
    let crearEstado: String;
    let crearFecha: null| Date = null;
    let crearDificultad : String;
    let dia: number | null;
    let mes: null | number;
    let año: number | null;
    
        crearTitulo=prompt("Ponle un Titulo a tu tarea: ") || "";
        console.clear();
        crearDescripcion = prompt("Agrega una descripcion a tu tarea. Si no deseas poner nada presiona ENTER: ") || "";
        if (crearDescripcion===""){
            crearDescripcion=("Sin descripcion");
        };
    console.clear();

    console.log("Ingresa una fecha de vencimiento. En el caso que no desee poner una fecha presione ENTER : ");
    dia=parseInt(prompt("Ingrese el Dia: ") || 0);
    if (dia === null || dia === 0){
        
    }else{
    mes =parseInt(prompt("Ingrese el Mes: ") || "" ); 
    año=parseInt(prompt("Ingrese el Año: ") || "");
    crearFecha=new Date(año, mes-1, dia);

    }
    console.clear();

    console.log("Elige la dificultad:");
    console.log("Si no desea agregar una dificultad preciona Enter(se guardara como dificultad facil)");
    console.log("[1]Facil\n[2]Medio\n[3]Dificil");
    crearDificultad=prompt("Opcion: ") || "1"
    switch(crearDificultad){
        case "1":
            crearDificultad="🌕🌑🌑";
        break;
        case "2":
            crearDificultad="🌕🌕🌑";
            break;
        case "3":
            crearDificultad="🌕🌕🌕"
            break;
        default:
            if (crearDificultad===""){

                crearDificultad="🌕🌑🌑";

            }else{
                crearDificultad="🌕🌑🌑";
                console.log("El valor ingresado es incorrecto, la dificultad se ha guardado en -Facil- ");
                prompt("Presiona ENTER para continuar");
            }
            break;
    }
    crearEstado = "pendiente";
    
    const Tareas:NewTarea = {
        titulo : crearTitulo,
        descripcion : crearDescripcion,
        estado:crearEstado,
        fechaCreacion : new Date(),
        fechaVencimiento : crearFecha,
        dificultad: crearDificultad ,
    }
    tarea.push(Tareas);  
}


function buscar(tarea:NewTarea[]) {
        let i:number;
        let palabra: string;
        console.log("Ingrese el titulo de la tarea");
        palabra=prompt(">");

        for (i=0; i<tarea.length; i++){
            let texto = tarea[i].titulo
            let textoEnMinusculas=texto.toLowerCase();

            if(textoEnMinusculas.includes(palabra)){
                console.log("[",i+1+" ]" ,tarea[i].titulo);
        }
        else{if(i===tarea.length-1){
            console.log("No se encontro ninguna tarea relacionada");
        }   
    }
    }
    let edit=prompt('si deseas editar la tarea precione "1" sino precione "0"\n opcion: ');
    if (edit==="1"){
        modificar(i, tarea);
    }
}

let op:string | number, op2:string;
let tarea : NewTarea[] = [];

interface NewTarea{
    titulo: String,
    descripcion:String ,
    estado:String,
    fechaCreacion :Date,
    fechaVencimiento: null | Date,
    dificultad:String,
}

let validar:number=0;
do{
console.clear();

Menu();
op=prompt("Opcion: ") || "";

switch(op){
    case "1":
        if (validar===1){
        console.clear();
        VerTarea();
        op2 = prompt("Opcion: ") || "";
        listaDeTareas(op2, tarea);
        }else{
            console.log("Primero debe cargar una tarea");
            prompt("Enter para continuar");
        }
        break;
    case "2":
        if (validar===1 ){
            buscar(tarea)
        }else{
            console.log("Primero debe cargar una tarea");
            prompt("Enter para continuar");
        }
    break;
    case "3":
        validar=1;
        CrearTarea(tarea);
        break;

}
}while( op !=="0");