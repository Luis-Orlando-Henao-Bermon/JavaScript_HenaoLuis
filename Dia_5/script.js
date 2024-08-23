var archivo={
    "products": [
      {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99,
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
        "orderDate": "2024-8-23",
        "status": "Delivered"
      },
      {
        "orderId": 10012,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-8-23",
        "status": "Delivered"
      },
      {
        "orderId": 10013,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-8-23",
        "status": "Delivered"
      }
    ]
  }

function filterOrders(criteria) {
    let busca = archivo.orders.filter(n => n.orderDate == "2024-8-23")
    for (const i of busca) {
        console.log(i.orderId);
        
    }
    
}
filterOrders()


function date() {
    let hola =new Date()
    let mes =Number(hola.getMonth())
    mes+=1
    var fecha =String(hola.getFullYear()+"-"+mes+"-"+hola.getDate())

    return fecha;
}

console.log(date());
