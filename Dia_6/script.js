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
  document.getElementById("cambioProvee1").addEventListener("click",mostrarCambioname)
  document.getElementById("cambioProvee2").addEventListener("click",mostrarCambioTelefono)
  document.getElementById("cambioProvee3").addEventListener("click",mostrarCambioEmail)
  document.getElementById("cambioProvee4").addEventListener("click",mostrarCambioAdress)
  document.getElementById("botoneCambiarProveedor1").addEventListener("click",updateSuppliername)
  document.getElementById("botoneCambiarProveedor2").addEventListener("click",updateSupplierTelefono)
  document.getElementById("botoneCambiarProveedor3").addEventListener("click",updateSupplierEmail)
  document.getElementById("botoneCambiarProveedor4").addEventListener("click",updateSupplierAdress)
  
  //!---------------------------------------------------Botones de gestionar pedidos------------------------------------------------------
  document.getElementById("botonAgregarPedido").addEventListener("click",addOrder)
  document.getElementById("botonEliminarPedido").addEventListener("click",deleteOrder)
  document.getElementById("cambioPedido1").addEventListener("click",mostrarCambioPedidoCant)
  document.getElementById("botoneCambiarPedido1").addEventListener("click",updateOrdersCant)
  document.getElementById("cambioPedido2").addEventListener("click",mostrarCambioPedidoStatus)
  document.getElementById("botoneCambiarPedido2").addEventListener("click",updateOrdersStatus)
  
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
  function addOrder() {//!funcion para añadir un pedido
    let idPedido=archivo.orders[archivo.orders.length-1].orderId+1
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
  
  function deleteOrder() {//! funcion para eliminar un pedido
    let idPedidoEliminar=parseInt(document.getElementById("idPedidoEliminar").value)
    if (archivo.orders.some(i=> i.orderId===idPedidoEliminar)) {
      archivo.orders=archivo.orders.filter(i=> i.orderId!==idPedidoEliminar)
      document.getElementById("thbd2").innerHTML=""
      viewOrders()
      
    } else {
      alert("ID no encontrado")
    }
  }
  function mostrarCambioPedidoStatus(){//!Funcion para actualizar informacion estado de un pedido
    document.getElementById("idPedidoCambiarEstado").value=""
    document.getElementById("pedidoCambioEstado").value=""
    document.getElementById("cambiopedido").style.display="none"  
    document.getElementById("cambiopedido1").style.display="flex"
  
  }
  function updateOrdersStatus(){//!Funcion para actualizar informacion estado de un pedido
    var idCNPedid=parseInt(document.getElementById("idPedidoCambiarEstado").value)
    var CNPedid=document.getElementById("pedidoCambioEstado").value

    archivo.orders.find(i=>i.orderId===idCNPedid).status=CNPedid
    document.getElementById("thbd2").innerHTML=""
    viewOrders()
    document.getElementById("cambiopedido1").style.display="none"
  }

  function mostrarCambioPedidoCant(){//!Funcion para actualizar informacion cantidad de un pedido
    document.getElementById("idPedidoCambiar").value=""
    document.getElementById("pedidoCambio").value=""
    document.getElementById("cambiopedido").style.display="flex"  
    document.getElementById("cambiopedido1").style.display="none"
  
  }
  function updateOrdersCant(){//!Funcion para actualizar informacion cantidad de un pedido
    var idCNPedid=parseInt(document.getElementById("idPedidoCambiar").value)
    var CNPedid=document.getElementById("pedidoCambio").value

    archivo.orders.find(i=>i.orderId===idCNPedid).quantity=CNPedid
    document.getElementById("thbd2").innerHTML=""
    viewOrders()
    document.getElementById("cambiopedido").style.display="none"
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
    let idProveedor=archivo.suppliers[archivo.suppliers.length-1].id+1
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
  
  function mostrarCambioAdress(){//!Funcion para actualizar informacion email de un proveedor
    document.getElementById("idProveedorCambiarAdress").value=""
    document.getElementById("proveedorCambioAdress").value=""
    document.getElementById("cambio").style.display="none"  
    document.getElementById("cambio1").style.display="none"  
    document.getElementById("cambio2").style.display="none"  
    document.getElementById("cambio3").style.display="flex"  
  
  }
  function mostrarCambioEmail(){//!Funcion para actualizar informacion email de un proveedor
    document.getElementById("idProveedorCambiarEmail").value=""
    document.getElementById("proveedorCambioEmail").value=""
    document.getElementById("cambio").style.display="none"  
    document.getElementById("cambio1").style.display="none"  
    document.getElementById("cambio2").style.display="flex"  
    document.getElementById("cambio3").style.display="none"  
  
  }
  function mostrarCambioTelefono(){//!Funcion para actualizar informacion telefono de un proveedor
    document.getElementById("idProveedorCambiarphone").value=""
    document.getElementById("proveedorCambiophone").value=""
    document.getElementById("cambio").style.display="none"  
    document.getElementById("cambio1").style.display="flex"  
    document.getElementById("cambio2").style.display="none"  
    document.getElementById("cambio3").style.display="none"  
  
  }
  function mostrarCambioname(){//!Funcion para actualizar informacion nombre de un proveedor
    document.getElementById("idProveedorCambiar").value=""
    document.getElementById("proveedorCambio").value=""
    document.getElementById("cambio").style.display="flex"  
    document.getElementById("cambio1").style.display="none"  
    document.getElementById("cambio2").style.display="none"  
    document.getElementById("cambio3").style.display="none" 
  
  }
  function updateSupplierAdress(){//!Funcion para actualizar informacion nombre de un proveedor
    
    var idCNProvee=parseInt(document.getElementById("idProveedorCambiarAdress").value)
    var CNProvee=document.getElementById("proveedorCambioAdress").value
    if (archivo.suppliers.find(i=>i.id===idCNProvee)) {
      if(CNProvee===""){
        alert("Por favor rellena todos los cambios")
      } else{
        archivo.suppliers.find(i=>i.id===idCNProvee).contactInfo.address=CNProvee
        document.getElementById("thbd1").innerHTML=""
        viewSuppliers()
        document.getElementById("cambio3").style.display="none"
      }
      
    } else{
      alert("ID no encontrado")
    }
  }
  function updateSupplierEmail(){//!Funcion para actualizar informacion nombre de un proveedor
    
    var idCNProvee=parseInt(document.getElementById("idProveedorCambiarEmail").value)
    var CNProvee=document.getElementById("proveedorCambioEmail").value
    if (archivo.suppliers.find(i=>i.id===idCNProvee)) {
      if(CNProvee===""){
        alert("Por favor rellena todos los cambios")
      } else{
        archivo.suppliers.find(i=>i.id===idCNProvee).contactInfo.email=CNProvee
        document.getElementById("thbd1").innerHTML=""
        viewSuppliers()
        document.getElementById("cambio2").style.display="none"
      }
      
    } else{
      alert("ID no encontrado")
    }
  }
  function updateSupplierTelefono(){//!Funcion para actualizar informacion nombre de un proveedor
    
    var idCNProvee=parseInt(document.getElementById("idProveedorCambiarphone").value)
    var CNProvee=document.getElementById("proveedorCambiophone").value
    if (archivo.suppliers.find(i=>i.id===idCNProvee)) {
      if(CNProvee===""){
        alert("Por favor rellena todos los cambios")
      } else{
        archivo.suppliers.find(i=>i.id===idCNProvee).contactInfo.phone=CNProvee
        document.getElementById("thbd1").innerHTML=""
        viewSuppliers()
        document.getElementById("cambio1").style.display="none"
      }
      
    } else{
      alert("ID no encontrado")
    }
  }
  function updateSuppliername(){//!Funcion para actualizar informacion nombre de un proveedor
    
    var idCNProvee=parseInt(document.getElementById("idProveedorCambiar").value)
    var CNProvee=document.getElementById("proveedorCambio").value
    if (archivo.suppliers.find(i=>i.id===idCNProvee)) {
      if(CNProvee===""){
        alert("Por favor rellena todos los cambios")
      } else{
        archivo.suppliers.find(i=>i.id===idCNProvee).name=CNProvee
        document.getElementById("thbd1").innerHTML=""
        viewSuppliers()
        document.getElementById("cambio").style.display="none"
      }
      
    } else{
      alert("ID no encontrado")
    }
  }



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!
  function addProduct() {// !funcion para agregar productos
    var idProducto=archivo.products[archivo.products.length-1].id+1
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