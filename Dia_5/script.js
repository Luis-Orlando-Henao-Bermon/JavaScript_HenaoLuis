var archivo={
    "products": [
      {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99,
        "quantityInStock": 50,
        "supplierId": 101
      },
      {
        "id": 2,
        "name": "Iphone 12",
        "category": "Electronics",
        "price": 499.99,
        "quantityInStock": 50,
        "supplierId": 101
      },
      {
        "id": 30,
        "name": "Glasses",
        "category": "Home",
        "price": 39.99,
        "quantityInStock": 50,
        "supplierId": 101
      }
    ],
    "suppliers": [
      {
        "id": 101,
        "name": "Tech Supplies Inc.",
        "contactInfo": {
          "phone": "123-456-7890",
          "email": "sales@techsupplies.com",
          "address": "123 Tech Lane, Silicon Valley, CA"
        }
      }
    ],
    "orders": [
      {
        "orderId": 1001,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-10-23",
        "status": "Delivered"
      },
      {
        "orderId": 10012,
        "productId": 2,
        "quantity": 20,
        "orderDate": "2024-08-24",
        "status": "Sent"
      },
      {
        "orderId": 10012,
        "productId": 2,
        "quantity": 5,
        "orderDate": "2024-08-24",
        "status": "Sent"
      },
      {
        "orderId": 10013,
        "productId": 30,
        "quantity": 2,
        "orderDate": "2024-08-23",
        "status": "Delivered"
      },
      {
        "orderId": 10013,
        "productId": 30,
        "quantity": 2,
        "orderDate": "2024-08-23",
        "status": "Delivered"
      }
    ]
  }
function generateSalesReport(startDate, endDate) {//funcion de generar informe de ventas
  let informeVentas = archivo.orders.filter(n => n.orderDate >=startDate && n.orderDate<=endDate);
  
  if (informeVentas.length==0) {
    console.log("No hay Ventas en esa fecha");
    
  } else {
    var ingresosT=0
    for (const i of informeVentas) {
      for (const e of archivo.products) {
        if (i.productId===e.id) {
          ingresosT+=(i.quantity*e.price)
        }
      }
    }
    console.log(`Numero total de pedidos: ${informeVentas.length}\nTotal de ingresos: ${ingresosT}`);
  }
}
function generateInventoryReport() {//funcion para generar informe de productos
  for (const i of archivo.products) {
    console.log(`ID del producto: ${i.id}\nNombre del producto: ${i.name}\nNivel de stok: ${i.quantityInStock}\nPrecio: ${i.price}`);
    console.log("-----Informacion del proveedor-----");
    for (const e of archivo.suppliers) {
      if (i.supplierId===e.id) {
        console.log(`Nombre: ${e.name}\nTelefono: ${e.contactInfo.phone}\nCorreo electronico: ${e.contactInfo.email}\nDireccion: ${e.contactInfo.address}`);
      }
    }
    console.log(`Valor del stok: ${i.quantityInStock*i.price}`);
    
    console.log("-----------------------------------------------");
  }
}
function searchProducts(query) {//funcion de buscar productos
  switch (query) {
    case 1:
      console.log("------Productos------");
      let productosF=[];
      for (const i of archivo.products) {
        console.log(`ID del producto: ${i.id} \nNombre: ${i.name}\nPrecio: ${i.price}\nCantidad en stok: ${i.quantityInStock}\n-------------------------------------`);
      }
      
      break;
  
    case 2:
      console.log("---------Categorias---------");
      var cat=[];
      var contador=1;
      for (const i of archivo.products) {
        if (!(cat.includes(i.category ))) {
          cat.push(i.category)
          console.log(contador,i.category);
          contador+=1
        }
      }
      let BusquedaC= Number(prompt("Ingrese el numero de la categoria por la que quiere hacer el filtrado"))
      console.clear()
      for (const i of archivo.products) {
        if (i.category===cat[BusquedaC-1]) {
          console.log(`ID del producto: ${i.id} \nNombre: ${i.name}\nPrecio: ${i.price}\nCantidad en stok: ${i.quantityInStock}\n-------------------------------------`);
        }
        
      }
      break;
  
    case 3:
      console.log("---------Proveedores---------");
      for (const i of archivo.suppliers) {
        console.log(`ID del proveedor: ${i.id} \nNombre: ${i.name}`);
      }
      let BusquedaP= Number(prompt("Ingrese el ID del proovedor por el que quieres hacer el filtrado"))
      console.clear()
      var contador=1;
      for (const i of archivo.products) {
        if (i.supplierId===BusquedaP) {
          console.log(`ID del producto: ${i.id} \nNombre: ${i.name}\nPrecio: ${i.price}\nCantidad en stok: ${i.quantityInStock}\n-------------------------------------`);
          contador=0;
        }
      }
      if (contador===1) {
        console.log("No hay productos con ese proveedor");
      }
      break;
  
    default:
      console.log("Opcion invalida");
      
      break;
  }
  
}
function filterOrders(criteria) {//Funcion de filtrar productos
  switch (criteria) {
    case 1:
      console.log("-------Estados-------\n1. Delivered\n2. Sent");
      let estado=Number(prompt("Ingresa el estado por el cual quieres hacer el filtrado"))
      switch (estado) {
        case 1:
          var filterE = archivo.orders.filter(n => n.status == "Delivered");
          if (filterE.length===0) {
            console.log("No hay productos con ese estado");
          }
          else{
            for (const i of filterE) {
              console.log(`ID de la orden: ${i.orderId}`)
              for (const e of archivo.products) {
                if (e.id===i.productId) {
                  console.log(`Nombre del producto: ${e.name}`);
                }
              }
            }
          }


          break;
      
        case 2:
          filterE = archivo.orders.filter(n => n.status == "Sent");
          if (filterE.length===0) {
            console.log("No hay productos con ese estado");
          }
          else{
            for (const i of filterE) {
              console.log(`ID de la orden: ${i.orderId}`)
              for (const e of archivo.products) {
                if (e.id===i.productId) {
                  console.log(`Nombre del producto: ${e.name}`);
                }
              }
            }
          }
          break;
      
        default:
          console.log("Opcion Invalida");
          
          break;
      }
      
      break;
      
    case 2:
      let date=String(prompt("Ingresa la fecha por la que quieres hacer el filtrado en el siguiente formato: (2024-08-23)"));
      
      let filterF = archivo.orders.filter(n => n.orderDate == date);
      if (filterF.length==0) {
        console.log("No hay datos con esa fecha");
        
      } else {
        for (const i of filterF) {
          console.log(`ID de la orden: ${i.orderId}`)
          for (const e of archivo.products) {
            if (e.id===i.productId) {
              console.log(`Nombre del producto: ${e.name}`);
            }
          }
        }
      }
      break;
  
    case 3:
      console.log("------Productos------");
      let productosF=[];
      for (const i of archivo.products) {
        console.log(`ID del producto: ${i.id} ${i.name}`);
        productosF.push(i.id)
      }
      let produc =Number(prompt("Ingresa el id del producto por el cual quieres hacer el filtrado"))
      console.clear()
      let filterP=archivo.orders.filter(n=> n.productId == produc)
      if (filterP.length===0) {
        console.log("No hay pedidos con ese producto");
        
      } else {
        for (const i of filterP) {
          for (const e of archivo.products) {
            if (i.productId===e.id) {
              console.log(`ID del producto: ${e.id}\nNombre Del producto: ${e.name}\nCategoria: ${e.category}\nPrecio: ${e.price}\nCantidad Comprada ${i.quantity}\nFecha del pedido ${i.orderDate}\n------------------------`);
            }
          }
        }
      }

      break;
  
    default:
      console.log("Opcion invalida");
      
      break;
  }
  
}



function date() {//crear la fecha en la que se ejecuta el programa
    let hola =new Date()
    let mes =Number(hola.getMonth())
    mes+=1
    mes=String(mes)
    
    if (mes.length===1) {
      mes="0"+mes
    }
    
    var fecha =String(hola.getFullYear()+"-"+mes+"-"+hola.getDate())

    return fecha;
}

bol=true;
while (bol===true) {
  
  console.clear();
  console.log("1. Gestionar productos\n2. Gestionar proveedores\n3. Gestionar pedidos\n4. Gestionar existencias\n5. Generacion de informes\n6. Busqueda y filtrado\n7. Salir");
  let opc=Number(prompt("Ingresa una opcion"))
  console.clear()
  switch (opc) {
    case 1:
      
      break;
  
    case 2:
      
      break;
  
    case 3:
      
      break;
  
    case 4:
      
      break;
  
    case 5:
      console.log("1. Generar reporte de ventas\n2. Generar reporte de inventario");
      let report =Number(prompt("Ingresa una opcion"));
      switch (report) {
        case 1:
          let startDate =prompt("Ingresa la fecha de inicio para hacer el informe en el siguiente formato: (2024-08-23)")
          let endDate =prompt("Ingresa la fecha de finalizacion para hacer el informe en el siguiente formato: (2024-08-23)")
          console.clear();
          generateSalesReport(startDate, endDate)
          prompt("Preciona Enter Para continuar")
          break;
          
        case 2:
          console.clear();
          generateInventoryReport()
          prompt("Preciona Enter Para continuar")
          break;
      
        default:
          console.log("Opcion invalida");
          
          break;
      }
      
      break;
  
    case 6:
      console.log("1. Buscar productos\n2. Filtrar pedidos");
      let busquedaFiltro=Number(prompt("Ingresa una opcion"))
      console.clear()
      switch (busquedaFiltro) {
        case 1:
          console.log("1. Nombre\n2. Categoria\n3. Proveedor");
          let query=Number(prompt("¿Como quieres buscar los productos?"))
          console.clear()
          searchProducts(query)
          prompt("Preciona Enter Para continuar")
          
          break;
      
        case 2:
          console.log("1. Estado\n2. Fecha\n3. Producto");
          let criteria=Number(prompt("¿Como quieres filtrar los productos?"))
          console.clear()
          filterOrders(criteria)
          prompt("Preciona Enter Para continuar")
          break;
      
        default:
          console.log("Opcion invalida");
          
          break;
      }
      
      break;
  
    case 7:
      console.log("Gracias por usar el programa");
      bol=false   
      
      break;
  
    default:
      console.log("Opcion invalida");
      
      break;
  }
}