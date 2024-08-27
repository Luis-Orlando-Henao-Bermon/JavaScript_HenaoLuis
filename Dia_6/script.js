fetch("sjson.json")
.then(res=>res.json())
.then(archivo=>{
  function xd() {
    fecha=document.getElementById("text")
    console.log(fecha);
    
  }
  
  function generateSalesReport(startDate, endDate) {// !funcion de generar informe de ventas
    let informeVentas = archivo.orders.filter(n => n.orderDate >=startDate && n.orderDate<=endDate);
  

    if (informeVentas.length==0) {
      console.log("No hay Ventas en esa fecha");
      
    } else {
      var ingresosT = 0;
      var productosVentas = {}; // diccionario para almacenar desglosamiento de productos
  
      for (const i of informeVentas) {
        for (const e of archivo.products) {
          if (i.productId === e.id) {
            ingresosT += (i.quantity * e.price);
            if (!productosVentas[e.name]) {
              productosVentas[e.name] = { cantidad: 0, ingresos: 0 };
            }
            productosVentas[e.name].cantidad += i.quantity;
            productosVentas[e.name].ingresos += (i.quantity * e.price);
          }
        }
      }
  
      console.log(`Numero total de pedidos: ${informeVentas.length}`);
      console.log(`Total de ingresos: ${ingresosT}`);
      console.log("Desglosamiento de productos:");
      for (const i in productosVentas) {
        console.log(`  ${i}: ${productosVentas[i].cantidad} unidades, ingresos: ${productosVentas[i].ingresos}`);
      }
    }
  }
  function generateInventoryReport() {// !funcion para generar informe de productos
    for (const i of archivo.products) {
      console.log(`ID del producto: ${i.id}\nNombre del producto: ${i.name}\nNivel de stock: ${i.quantityInStock}\nPrecio: ${i.price}`);
      console.log("-----Informacion del proveedor-----");
      for (const e of archivo.suppliers) {
        if (i.supplierId===e.id) {
          console.log(`Nombre: ${e.name}\nTelefono: ${e.contactInfo.phone}\nCorreo electronico: ${e.contactInfo.email}\nDireccion: ${e.contactInfo.address}`);
        }
      }
      console.log(`Valor del stock: ${i.quantityInStock*i.price}`);
      
      console.log("-----------------------------------------------");
    }
  }
  function searchProducts(query) {// !funcion de buscar productos
    switch (query) {
      case 1:
        console.log("------Productos------");
        let productosF=[];
        for (const i of archivo.products) {
          console.log(`ID del producto: ${i.id} \nNombre: ${i.name}\nPrecio: ${i.price}\nCantidad en stock: ${i.quantityInStock}\n-------------------------------------`);
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
            console.log(`ID del producto: ${i.id} \nNombre: ${i.name}\nPrecio: ${i.price}\nCantidad en stock: ${i.quantityInStock}\n-------------------------------------`);
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
            console.log(`ID del producto: ${i.id} \nNombre: ${i.name}\nPrecio: ${i.price}\nCantidad en stock: ${i.quantityInStock}\n-------------------------------------`);
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
  function filterOrders(criteria) {// !Funcion de filtrar productos
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
                console.log(`Cantidad vendida: ${i.quantity}\nEstado: ${i.status}\nFecha del pedido: ${i.orderDate}`);
                
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
                console.log(`ID de la orden: ${i.orderId} `)
                for (const e of archivo.products) {
                  if (e.id===i.productId) {
                    console.log(`Nombre del producto: ${e.name}`);
                  }
                }
                console.log(`Cantidad vendida: ${i.quantity}\nEstado: ${i.status}\nFecha del pedido: ${i.orderDate}`)
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
            console.log(`Cantidad vendida: ${i.quantity}\nEstado: ${i.status}\nFecha del pedido: ${i.orderDate}`)
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
                console.log(`ID del pedido:${i.orderId}\nID del producto: ${e.id}\nNombre Del producto: ${e.name}\nCategoria: ${e.category}\nPrecio: ${e.price}\nCantidad Comprada ${i.quantity}\nFecha del pedido ${i.orderDate}\n------------------------`);
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
  
  function checkStockLevels() {// ! funcion para ver productos en bajo stock
    for (const i of archivo.products) {
      if (i.quantityInStock<10) {
        console.log(`ID: ${i.id}\nNombre: ${i.name}\nCantidad en stock: ${i.quantityInStock}\n----------------------------------------------`);
      }
    }
  }
  
  function restockProduct(id, quantity) {// !funcion para añadir cantidad de un producto
    
    let comprovante=0;
    for (const i of archivo.products) {
      if (id==i.id) {
        comprovante=1;
        i.quantityInStock+=quantity
      }
    }
    if (comprovante===0) {
      console.log("No hay productos con ese id");
      
    }
  }
  
  function addOrder(order) {//!funcion para añadir un pedido
    archivo.orders.push(order)
  }
  
  function deleteOrder(orderId) {//! funcion para eliminar un pedido
    archivo.orders=archivo.orders.filter(i=> i.orderId!==orderId)
  }
  function updateOrder(orderId, newDetails) {//!funcion para actualizar datos en un pedido
    switch (newDetails) {
      case 1:
        console.log(archivo.orders.find(i=>i.orderId===orderId).orderId);
        
        if (archivo.orders.find(i=>i.orderId===orderId).status=="Delivered") {
          console.log("El estado de este producto es delivered por lo tanto no se puede cambiar");
          
        }
        else{
          archivo.orders.find(i=>i.orderId===orderId).status="Delivered"
          console.log("El estado de este producto a cambiado a Delivered");
        }
        break;
        
      case 2:
        var cant=Number(prompt("¿Cual es la nueva cantidad de productos en el pedido?"));
        let cantBefore=archivo.orders.find(i=>i.orderId===orderId).quantity
        let idProducto=archivo.orders.find(i=>i.orderId===orderId).productId
        while (cant-cantBefore>archivo.products.find(i=>i.id===idProducto).quantityInStock) {
          cant=Number(prompt("Esa cantidad supera la cantidad en stock por favor ingresa una menor"));
        } 
        archivo.products.find(i=>i.id===idProducto).quantityInStock-=(cant-cantBefore)
        archivo.orders.find(i=>i.orderId===orderId).quantity=cant
        console.log("Cantidad actualizada con exito");
        break;
    
      default:
        break;
    }
  }
  
  function viewOrders() {//!funcion para ver los pedidos
  
    for (const i of archivo.orders) {
      console.log(`ID del pedido: ${i.orderId}\nID del producto: ${i.productId}\nNombre del producto: ${archivo.products.find(x=>x.id===i.productId).name}\nCantidad:${i.quantity}\nFecha del pedido: ${i.orderDate}\nEstado del pedido: ${i.status}`);
      
    }
  }
  
  function addSupplier(supplier){//!funcion para añadir proveedores
    archivo.suppliers.push(supplier)
  }
  function viewSuppliers() {//!funcion para ver proveedores
    for (const i of archivo.suppliers) {
      console.log(`ID del proveedor: ${i.id}\nNombre: ${i.name}\nNumero de telefono: ${i.contactInfo.phone}\nCorreo electronico: ${i.contactInfo.email}\nDireccion: ${i.contactInfo.address}`);
      
    }
    
  }
  
  function deleteSupplier(id) {//! funcion para eliminar un proveedor
    archivo.suppliers=archivo.suppliers.filter(i=> i.id!==id)
  }
  
  function updateSupplier(id, newDetails){//!Funcion para actualizar informacion de un proveedor
    
    switch (newDetails) {
      case 1:
        var cambio=  prompt("¿Cual es el nuevo nombre del proveedor?");
        archivo.suppliers.find(i=>i.id===id).name=cambio
        console.log("Nombre actualizado con exito");
        break;
    
      case 2:
        cambio=  prompt("¿Cual es el nuevo telefono del proveedor?");
        archivo.suppliers.find(i=>i.id===id).contactInfo.phone=cambio
        console.log("Telefono actualizado con exito");
        
        break;
    
      case 3:
        cambio=  prompt("¿Cual es el nuevo correo electronico del proveedor?")
        archivo.suppliers.find(i=>i.id===id).contactInfo.email=cambio
        console.log("Correo electronico actualizado con exito");
  
  
        break;
    
      case 4:
        cambio=  prompt("¿Cual es la nueva direccion del proveedor?");
        archivo.suppliers.find(i=>i.id===id).contactInfo.address=cambio
        console.log("Direccion actualizada con exito");
        break;
    
      default:
        console.log("Opcion invalida");
        
        break;
    }
    
  }
  
  function addProduct(product) {//!funcion para agregar productos
    archivo.products.push(product)
  }
  
  function deleteProduct(id) {// ! funcion para eliminar productos
    archivo.products=archivo.products.filter(i =>i.id!==id)
  
  }
  
  function viewProducts(){//! funcion para ver productos
    for (const i of archivo.products) {
  
      console.log(`ID del producto: ${i.id}\nNombre: ${i.name}\nCategoria: ${i.category}\nPrecio: ${i.price}\nCantidad en stock: ${i.quantityInStock}\nID del proveedor: ${i.supplierId}\nNombre del proveedor: ${archivo.suppliers.find(x=>x.id===i.supplierId).name}`);
      
    }
    
    
  }
  
  function updateProduct(id, newDetails){//!Funcion para cambiar el precio de un producto
    archivo.products.find(i=>i.id===id).price=newDetails
    
  }
  
  function date() {// !crear la fecha en la que se ejecuta el programa
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
  
  
    
  console.clear();
  console.log("1. Gestionar productos\n2. Gestionar proveedores\n3. Gestionar pedidos\n4. Gestionar existencias\n5. Generacion de informes\n6. Busqueda y filtrado\n7. Salir");
  let opc=Number(prompt("Ingresa una opcion"))
  console.clear()
  switch (opc) {
    case 1:
      console.log("1. Agregar Producto\n2. Eliminar Producto\n3. Modificar Precio del producto \n4. Ver Productos");
      var opc3=Number(prompt("Ingresa una opcion"))
      console.clear()
      switch (opc3) {
        case 1:
          

          let idProducto=archivo.products.length+1;
          let nombre= prompt("Ingresa el nombre del producto");
          let categoria= prompt("Ingresa ls categoria del producto");
          let precio=Number(prompt("Ingresa el precio del producto"));
          let cantidad=Number(prompt("Ingresa la cantidad del producto")); 
          console.clear()
          for (const i of archivo.suppliers) {
            let prod=archivo.products.find(c=>c.id===i.productId)
            console.log(`ID del proveedor: ${i.id}\nNombre: ${i.name}`);
          }
          
          var id=Number(prompt("Ingresa el id del proveedor")); 
          while (!(archivo.suppliers.some(i=>i.id===id))) {
            id=Number(prompt("ID no encontrado por favor ingresa uno valido"))
          }

          let product={"id":idProducto,"name":nombre,"category":categoria,"price":precio,"quantityInStock":cantidad,"supplierId":id}
          addProduct(product)

          break;
      
        case 2:
          console.log("---------Productos----------");
          
          viewProducts()
          var id=Number(prompt("Ingresa el id del producto que deseas eliminar"))
          while (!(archivo.products.some(i=>i.id===id))) {
            id=Number(prompt("ID no encontrado por favor ingresa uno valido"))
          }
          deleteProduct(id)
          
          prompt("Preciona Enter Para continuar")
          
          break;
          
        case 3:
          console.log("---------Products----------");
          
          viewProducts()
          id=Number(prompt("Ingresa el id del Producto al que deseas modificar el precio"))
          while (!(archivo.products.some(i=>i.id===id))) {
            id=Number(prompt("ID no encontrado por favor ingresa uno valido"))
          }
          var newDetails=Number(prompt("Cual es el nuevo precio del producto"))
          while (isNaN(newDetails)===true) {
            newDetails=Number(prompt("Debes ingresar un valor numerico para el precio"))
          }
          
          updateProduct(id, newDetails)
          
          prompt("Preciona Enter Para continuar")

          break;
          
        case 4:
          viewProducts()
          prompt("Preciona Enter Para continuar")

          break;
          
        default:

          console.log("Opcion invalida");
          prompt("Preciona Enter Para continuar")
          
          break;
      }
      break;
    case 2:
      console.log("1. Agregar Poveedor\n2. Eliminar Proveedor\n3. Modificar Informacion de proveedor \n4. Ver proveedores");
      opc3=Number(prompt("Ingresa una opcion"))
      console.clear()
      switch (opc3) {
        case 1:
          

          let idproveedor=archivo.suppliers.length+101;
          let nombre= prompt("Ingresa el nombre del proveedor");
          let telefono= prompt("Ingresa el telefono del proveedor");
          let correo= prompt("Ingresa el correo del proveedor");
          let direccion= prompt("Ingresa la direccion del proveedor");

          let supplier={"id":idproveedor,"name":nombre,"contactInfo":{"phone":telefono,"email":correo,"address":direccion}}
          addSupplier(supplier)

          break;
      
        case 2:
          console.log("---------Proveedores----------");
          
          for (const i of archivo.suppliers) {
            console.log(`ID del proveedor: ${i.id}\nNombre: ${i.name}\nNumero de telefono: ${i.contactInfo.phone}\nCorreo electronico: ${i.contactInfo.email}\nDireccion: ${i.contactInfo.address}`);
          }
          var id=Number(prompt("Ingresa el id del proveedor que deseas eliminar"))
          while (!(archivo.suppliers.some(i=>i.id===id))) {
            id=Number(prompt("ID no encontrado por favor ingresa uno valido"))
          }
          deleteSupplier(id)
          
          prompt("Preciona Enter Para continuar")
          
          break;
          
        case 3:
          console.log("---------Proveedores----------");
          
          for (const i of archivo.suppliers) {
            console.log(`ID del proveedor: ${i.id}\nNombre: ${i.name}\nNumero de telefono: ${i.contactInfo.phone}\nCorreo electronico: ${i.contactInfo.email}\nDireccion: ${i.contactInfo.address}`);
          }
          id=Number(prompt("Ingresa el id del Proveedor que deseas modificar"))
          while (!(archivo.suppliers.some(i=>i.id===id))) {
            id=Number(prompt("ID no encontrado por favor ingresa uno valido"))
          }
          console.clear()
          console.log("1. Nombre\n2. Telefono\n3. Correo electronico\n4. Direccion");
          let newDetails= Number(prompt("¿Que detalle quieres cambiar del Proveedor?"))
          if (newDetails>=1 || newDetails<=4) {
            
            updateSupplier(id, newDetails)

          } else {
            console.log("Opcion no valida")
          }
          
          prompt("Preciona Enter Para continuar")

          break;
          
        case 4:
          viewSuppliers()
          prompt("Preciona Enter Para continuar")

          break;
          
        default:

          console.log("Opcion invalida");
          prompt("Preciona Enter Para continuar")
          
          break;
      }
      break;
  
    case 3:
      console.log("1. Agregar pedido\n2. Eliminar pedido\n3. Modificar pedido\n4. Ver pedidos");
      opc3=Number(prompt("Ingresa una opcion"))
      console.clear()
      switch (opc3) {
        case 1:
          for (const i of archivo.products) {
    
            console.log(`ID: ${i.id}\nNombre: ${i.name}\nCantidad en stock: ${i.quantityInStock}\nPrecio: ${i.price}\nCategoria: ${i.category}\n----------------------------------------------`);
          }

          let idp=Number(prompt("Ingresa el id del producto"))
          while (!(archivo.products.some(i=> i.id===idp))) {
            idp=Number(prompt("Ese id no Existe por favor ingresa uno valido"))
          }
          let product=archivo.products.find(i=> i.id ===idp)

          let cantidad=Number(prompt("Ingresa la cantidad del producto"))
          while (cantidad>product.quantityInStock) {
            cantidad=Number(prompt("La cantidad ingresada es mayor a la cantidad disponible en stock. Por favor ingresa una menor"))
          }
          archivo.products.find(i=> i.id === idp).quantityInStock-=cantidad
          let fecha=date()
          let oId=archivo.length+1001
          let order={"orderId":oId,"productId":idp,"quantity":cantidad,"orderDate":fecha,"status":"Sent"}
          addOrder(order)

          break;
      
        case 2:
          console.log("---------Pedidos----------");
          
          for (const i of archivo.orders) {
            let prod=archivo.products.find(c=>c.id===i.productId)
            console.log(`ID del Pedido: ${i.orderId}\nID del producto: ${i.productId} \nNombre del producto: ${prod.name}\nCantidad comprada: ${i.quantity}\nFecha del pedido: ${i.orderDate}`);
          }
          var orderId=Number(prompt("Ingresa el id del pedido que deseas eliminar"))
          while (!(archivo.orders.some(i=>i.orderId===orderId))) {
            orderId=Number(prompt("ID no encontrado por favor ingresa uno valido"))
          }
          deleteOrder(orderId)
          
          prompt("Preciona Enter Para continuar")
          
          break;
          
        case 3:
          console.log("---------Pedidos----------");
          
          for (const i of archivo.orders) {
            let prod=archivo.products.find(c=>c.id===i.productId)
            console.log(`ID del Pedido: ${i.orderId}\nID del producto: ${i.productId} \nNombre del producto: ${prod.name}\nCantidad comprada: ${i.quantity}\nFecha del pedido: ${i.orderDate}\nEstado: ${i.status}`);
          }
          orderId=Number(prompt("Ingresa el id del pedido que deseas modificar"))
          while (!(archivo.orders.some(i=>i.orderId===orderId))) {
            orderId=Number(prompt("ID no encontrado por favor ingresa uno valido"))
          }
          console.clear()
          console.log("1. Estado\n2. cantidad");
          let newDetails= Number(prompt("¿Que detalle quieres cambiar del pedido?"))
          if (newDetails===1 || newDetails===2) {
            
            updateOrder(orderId, newDetails)

          } else {
            console.log("Opcion no valida")
          }
          
          prompt("Preciona Enter Para continuar")

          break;
          
        case 4:
          viewOrders()
          prompt("Preciona Enter Para continuar")

          break;
          
        default:

          console.log("Opcion invalida");
          prompt("Preciona Enter Para continuar")
          
          break;
      }
      break;

    case 4:
      console.log("1. Ver productos con stock bajo\n2. Aumentar el nivel de existencias de un producto");
      let gestionExistencias = Number(prompt("Ingresa tu opcion"))
      console.clear()
      switch (gestionExistencias) {
        case 1:
          checkStockLevels()
          prompt("Preciona Enter Para continuar")

          break;
      
        case 2:
          for (const i of archivo.products) {
    
            console.log(`ID: ${i.id}\nNombre: ${i.name}\nCantidad en stock: ${i.quantityInStock}\n----------------------------------------------`);
          }
          let  id = Number(prompt("Ingresa el ID del producto"));
          let  quantity = Number(prompt("Ingresa la cantidad a aumentar"));
          restockProduct(id, quantity)
          prompt("Preciona Enter Para continuar")
          
          break;
      
        default:
          console.log("Opcion invalida");
          prompt("Preciona Enter Para continuar")
          
          break;
      }
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
          prompt("Preciona Enter Para continuar")
          
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
          prompt("Preciona Enter Para continuar")
          
          break;
      }
      
      break;
  
    case 7:
      console.log("Gracias por usar el programa");
      bol=false   
      
      break;
  
    default:
      console.log("Opcion invalida");
      prompt("Preciona Enter Para continuar")
      
      break;
  }
})