var archivo={
    "informacion_personal": {
        "nombre": "Juan Pérez",
        "edad": 30,
        "direccion": {
            "calle": "Calle Principal",
            "numero": 123,
            "ciudad": "Ciudad Ejemplo"
        },
        "contacto": {
            "correo": "juan.perez@example.com",
            "telefono": "+123456789"
        }
    },
    "historial_educativo": [
        {
            "nivel": "Secundaria",
            "institucion": "Instituto Secundario",
            "anio_inicio": 2000,
            "anio_fin": 2005
        },
        {
            "nivel": "Universidad",
            "institucion": "Universidad Ejemplar",
            "titulo": "Licenciatura en Ciencias",
            "anio_inicio": 2006,
            "anio_fin": 2010
        }
    ],
    "experiencia_laboral": [
        {
            "puesto": "Desarrollador de Software",
            "empresa": "Tech Solutions",
            "periodo": "2010-2015",
            "responsabilidades": [
                "Desarrollo de aplicaciones web",
                "Mantenimiento de bases de datos"
            ]
        },
        {
            "puesto": "Gerente de Proyectos",
            "empresa": "Proyectos Avanzados",
            "periodo": "2016-actualidad",
            "responsabilidades": [
                "Planificación y supervisión de proyectos",
                "Coordinación de equipos"
            ]
        }
    ]
}
function menu() {
    console.log("1. Ver informacion\n2. Actualizar informacion\n3. Eliminar incormacion\n4. Añadir nueva informacion\n5. Salir");
}

var bol=true;
while (bol===true) {
    console.clear()
    menu()
    var opcion=Number(prompt("Ingresa una opcion"));
    console.clear()

    switch (opcion) {
        case 1:
            console.log("--------Informacion Personal--------");
            console.log("Nombre:",archivo["informacion_personal"]["nombre"]);
            console.log("Edad: "+archivo["informacion_personal"]["edad"],"años");
            console.log("Direccion\nCalle:",archivo["informacion_personal"]["direccion"]["calle"],"\nNumero: "+archivo["informacion_personal"]["direccion"]["numero"],"\nCiudad:",archivo["informacion_personal"]["direccion"]["ciudad"]);
            console.log("Contato\nCorreo:",archivo["informacion_personal"]["contacto"]["correo"],"\nTelefono:",archivo["informacion_personal"]["contacto"]["telefono"]);
            console.log("---------Historial educativo--------");
            for (const i of archivo["historial_educativo"]) {
                console.log("Nivel educativo:",i["nivel"]);
                console.log("Institucion educativa:",i["institucion"]);
                console.log("Titulo:",i["titulo"]);
                console.log("Año de inicio:",i["anio_inicio"]);
                console.log("Año de Finalizacion:",i["anio_fin"],"\n-------------------------")
            }
            console.log("---------Experiencia Laboral--------");
            for (const i of archivo["experiencia_laboral"]) {
                console.log("Puesto de trabajo:",i["puesto"]);
                console.log("Empresa en la que trabajo:",i["empresa"]);
                console.log("Periodo de trabajo:",i["periodo"]);
                console.log("----Responsabilidades----");
                for (const e of i["responsabilidades"]) {
                    console.log(e);
                }
                console.log("-------------------------");
            }
            prompt("preciona Enter para continuar")
            
            break;
        case 2:
            console.log("-------Informacion a actualizar-------");
            let contador=0;
            for (const i of Object.keys(archivo)) {

                console.log(contador+1+" "+i);
                contador+=1
            }
            
            let infoper=Number(prompt("¿Que deseas actualizar?\n1. Nombre\n2. Edad\n3. Direccion\n4. Contato"));
            switch (infoper) {
                case 1:
                    let nombre=prompt("Ingresa el nuevo nombre");
                    archivo["informacion_personal"]["nombre"]=nombre
                    break;
            
                case 2:
                    let edad=Number(prompt("Ingresa la nueva edad"));
                    archivo["informacion_personal"]["edad"]=edad
                    break;
            
                case 3:
                    let calle=prompt("Ingresa la nueva calle");
                    let numero=prompt("Ingresa el nuevo numero");
                    let ciudad=prompt("Ingresa la nueva ciudad");
                    archivo["informacion_personal"]["direccion"]={"calle":calle,"numero":numero,"ciudad":ciudad}

                    break;
            
                case 4:
                    let correo=prompt("Ingresa el nuevo correo electronico");
                    let telefono=prompt("Ingresa el nuevo numero de telefono");
                    archivo["informacion_personal"]["contacto"]={"correo":correo,"telefono":telefono}
                    break;
            
                default:
                    console.log("Opcion invalida");
                    
                    break;
            }
            
            break;
        case 3:
            
            break;
        case 4:
            console.log("A que deseas añadir informacion\n1. Historial educativo\n2. Experiencia laboral");
            let añadir=Number(prompt("Selecciona una opcion"))
            switch (añadir) {
                case 1:
                    let nivel =prompt("Ingresa el nivel educativo")
                    let institucion =prompt("Ingresa la institucion educativa")
                    let titulo =prompt("Ingresa el titulo")
                    let yearStart =prompt("Ingresa el año de inicio")
                    let yearend =prompt("Ingresa el año de finalizacion")
                    archivo["historial_educativo"].push({"nivel":nivel,"institucion":institucion,"titulo":titulo,"anio_inicio":yearStart,"anio_fin":yearend})
                    break;
            
                case 2:
                    let puesto=prompt("Ingresa el puesto que empeñaste")
                    let empresa=prompt("Ingresa la empresa en la que trabajaste")
                    let periodo=prompt("Ingresa el periodo en el que trabajaste")
                    let confi="si"
                    var respon="";
                    var responsabilidades=[]
                    while (confi==="si") {
                        respon=prompt("Que responsabilida tuviste")
                        responsabilidades.push(respon)
                        confi=prompt("Si tuviste otra responsabilidad escribe 'si' de lo contrario preciona Enter")
                    }
                    archivo["experiencia_laboral"].push({"puesto":puesto,"empresa":empresa,"periodo":periodo,"responsabilidades":responsabilidades})
                    break;
            
                default:
                    console.log("Opcion invalida");
                    
                    break;
            }
            break;
    
        case 5:
            bol=false
            break;
    
        default:
            console.log("Opcion invalida");
            
            break;
    }
    
}