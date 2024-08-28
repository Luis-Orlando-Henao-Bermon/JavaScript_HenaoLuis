fetch("./sjson.json")
.then(res=>res.json())
.then(archivo=>{
 

  document.getElementById("boton1").addEventListener("click",mostrarProducto)
  document.getElementById("boton2").addEventListener("click",mostrarProveedor)
  document.getElementById("boton3").addEventListener("click",mostrarPedido)

  //!---------------------------------------------------Botones de gestionar productos------------------------------------------------------
  document.getElementById("botoneEliminarProducto").addEventListener("click",deleteProduct)
  document.getElementById("botonAgregarProducto").addEventListener("click",addProduct)
  document.getElementById("botoneCambiarProducto").addEventListener("click",updateProduct)
  //!---------------------------------------------------Botones de gestionar proveedores------------------------------------------------------
  document.getElementById("botonAgregarProveedor").addEventListener("click",addSupplier)
  document.getElementById("botoneEliminarProveedor").addEventListener("click",deleteSupplier)
  //!---------------------------------------------------Botones de gestionar pedidos------------------------------------------------------
  document.getElementById("botonAgregarPedido").addEventListener("click",addOrder)
  document.getElementById("botonEliminarPedido").addEventListener("click",deleteOrder)
  
  function mostrarProducto() {
    let prod=document.getElementById("Prod");
    prod.style.display="flex";
    let Prove=document.getElementById("Prove");
    Prove.style.display="none";
    let Ped=document.getElementById("Ped");
    Ped.style.display="none";
    
    document.getElementById("thbd").innerHTML=""
    viewProducts()
  }
  function mostrarProveedor() {
    let prod=document.getElementById("Prod");
    prod.style.display="none";
    let Prove=document.getElementById("Prove");
    Prove.style.display="flex";
    let Ped=document.getElementById("Ped");
    Ped.style.display="none";
    
    document.getElementById("thbd1").innerHTML=""
    viewSuppliers()
  }
  function mostrarPedido() {
    let prod=document.getElementById("Prod");
    prod.style.display="none";
    let Prove=document.getElementById("Prove");
    Prove.style.display="none";
    let Ped=document.getElementById("Ped");
    Ped.style.display="flex";
    
    document.getElementById("thbd2").innerHTML=""
    viewOrders()
    
  }
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!
  function addOrder(order) {//!funcion para añadir un pedido
    let idPedido=archivo.orders.length+1001
    let fecha=date()
    let idProductoPedido=document.getElementById("idProductoPedido").value
    let cantidadPedido=document.getElementById("cantidadPedido").value
    if (idProductoPedido===""||cantidadPedido==="") {
      alert("Por favor rellena todos los campos para agregar pedido")
    } else {
      idProductoPedido=parseInt(idProductoPedido)
      if (archivo.products.some(i=>i.id===idProductoPedido)) {
        let order={"orderId":idPedido,"productId":idProductoPedido,"quantity":cantidadPedido,"orderDate":fecha,"status":"Sent"}
        archivo.orders.push(order)
        document.getElementById("thbd2").innerHTML=""
        viewOrders()
      } else {
        alert("ID no encontrado")
      }
      
    }
  }
  
  function deleteOrder(orderId) {//! funcion para eliminar un pedido
    let idPedidoEliminar=parseInt(document.getElementById("idPedidoEliminar").value)
    if (archivo.orders.some(i=> i.orderId===idPedidoEliminar)) {
      archivo.orders=archivo.orders.filter(i=> i.orderId!==idPedidoEliminar)
      document.getElementById("thbd2").innerHTML=""
      viewOrders()
      
    } else {
      alert("ID no encontrado")
    }
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
    var tabla = document.querySelector("#Pedidos tbody")
    archivo.orders.forEach(element => {
      
      
      let fila= document.createElement('tr');
      fila.innerHTML += `
      <td>${element.orderId}
      <td>${element.productId}
      <td>${element.quantity}
      <td>${element.orderDate}
      <td>${element.status}
      
      `;
      tabla.appendChild(fila)
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!
  function addSupplier(){//!funcion para añadir proveedores
    let idProveedor=archivo.suppliers.length+101
    let nombreProveedor=document.getElementById("nombreProveedor").value
    let telefonoProveedor=document.getElementById("telefonoProveedor").value
    let emailProveedor=document.getElementById("emailProveedor").value
    let direccionProveedor=document.getElementById("direccionProveedor").value
    if (idProveedor===""||nombreProveedor===""||telefonoProveedor===""||emailProveedor===""||direccionProveedor==="") {
      alert("Por favor rellena todos los campos")
    } else {
      let supplier={"id":idProveedor,"name":nombreProveedor,"contactInfo":{"phone":telefonoProveedor,"email":emailProveedor,"address":direccionProveedor}}
  
      archivo.suppliers.push(supplier)
      document.getElementById("thbd1").innerHTML=""
      viewSuppliers()
      
    }
  }

  function viewSuppliers() {//!funcion para ver proveedores
    var tabla = document.querySelector("#Proveedor tbody")
    archivo.suppliers.forEach(element => {
      
      
      let fila= document.createElement('tr');
      fila.innerHTML += `
      <td>${element.id}
      <td>${element.name}
      <td>${element.contactInfo.phone}
      <td>${element.contactInfo.email}
      <td>${element.contactInfo.address}
      
      `;
      tabla.appendChild(fila)
    });
    
  }
  
  viewSuppliers()

  function deleteSupplier() {//! funcion para eliminar un proveedor
    let idProveedorEliminar=parseInt(document.getElementById("idProveedorEliminar").value)
    if (archivo.suppliers.some(i=> i.id===idProveedorEliminar)) {
      archivo.suppliers=archivo.suppliers.filter(i=> i.id!==idProveedorEliminar)
      document.getElementById("thbd1").innerHTML=""
      viewSuppliers()
      
    } else {
      alert("ID no encontrado")
    }
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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!
  function addProduct() {// !funcion para agregar productos
    var idProducto=archivo.products.length+1
    var nombreProducto=document.getElementById("nombreProducto").value
    var categoriaProducto=document.getElementById("categoriaProducto").value
    var precioProducto=parseInt(document.getElementById("precioProducto").value)
    var cantidadStockProducto=parseInt(document.getElementById("cantidadStockProducto").value)
    var idProveedorProducto=parseInt(document.getElementById("idProveedorProducto").value)
    
    if (idProducto===""||nombreProducto===""||categoriaProducto===""||precioProducto==""||cantidadStockProducto==""||idProveedorProducto=="") {
      alert("Por favor rellenar todos los campos para agregar producto")
    } else {
      var product={"id":idProducto,"name":nombreProducto,"category":categoriaProducto,"price":precioProducto,"quantityInStock":cantidadStockProducto,"supplierId":idProveedorProducto}
      
      archivo.products.push(product)
      document.getElementById("thbd").innerHTML=""
      viewProducts()
      
    }
    
  }
  
  function deleteProduct(id) {// ! funcion para eliminar productos
    idEliminarProducto=parseInt(document.getElementById("idProductoEliminar").value)
    if (archivo.products.find(i=>i.id===idEliminarProducto)) {
      
      archivo.products=archivo.products.filter(i =>i.id!==idEliminarProducto)
      
      document.getElementById("thbd").innerHTML=""
      viewProducts()
      
    } else {
      alert("Ese id no existe")
    }

  
  }
  
  function viewProducts(){//! funcion para ver productos
    var tabla = document.querySelector("#Productos tbody")
    archivo.products.forEach(element => {
      
      
      let fila= document.createElement('tr');
      fila.innerHTML += `
      <td>${element.id}
      <td>${element.name}
      <td>${element.category}
      <td>${element.price}
      <td>${element.quantityInStock}
      <td>${element.supplierId}
      
      `;
      tabla.appendChild(fila)
    });
    
  }
  
  function updateProduct(){//!Funcion para cambiar el precio de un producto
    let idCambiarPrecio=document.getElementById("idProductoCambiar").value
    let precioCambiar=document.getElementById("precioCambiar").value
    if (idCambiarPrecio==""||precioCambiar=="") {
      alert("Por favor rellena todos los campos de cambiar precio")
    } else {
      idCambiarPrecio=parseInt(idCambiarPrecio)
      precioCambiar=parseInt(precioCambiar)
      if (archivo.products.find(i=>i.id==idCambiarPrecio)) {
        
        archivo.products.find(i=>i.id==idCambiarPrecio).price=precioCambiar
      } else {
        console.log(archivo.products.find(i=>i.id==idCambiarPrecio));
        
        alert("ID no encontrado")
      }
    }
    document.getElementById("thbd").innerHTML=""
      viewProducts()
    
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
  
  
})