function addItemToCart(name, quantity, price) {
  alert("Added To Cart!");
  //   sessionStorage.clear();
  var currentCart = sessionStorage.getItem("cart");
  if (!currentCart) {
    var cart = '{"items": []}';
    sessionStorage.setItem("cart", JSON.parse(JSON.stringify(cart)));
    currentCart = sessionStorage.getItem("cart");
  }

  var newCart = "";
  var json = currentCart;
  var jsonString = JSON.parse(json);
  var items = jsonString.items;
  if (items.length == 0) {
    // console.log("array empty");
    var item =
      '{"item": "' +
      name +
      '", "quantity": "' +
      quantity +
      '", "price": "' +
      price +
      '"}';
    items.push(item);
    // console.log(items);
    newCart = '{ "items":' + JSON.stringify(items) + "}";
    sessionStorage.setItem("cart", newCart);
    // console.log(sessionStorage.getItem("cart"));
    return;
  }
  var found;
  var index;
  for (item in items) {
    var itemNo = JSON.parse(item);
    var item = JSON.parse(items[itemNo]);

    if (name.localeCompare(item.item) == 0) {
      //   console.log("found");
      found = true;
      index = itemNo;
    } else {
      //   console.log("not found");
      found = false;
    }
  }
  if (found) {
    var item = JSON.parse(items[index]);
    var newQuantity = item.quantity;
    if (quantity != 1) {
      item.quantity = parseInt(item.quantity, 10) + parseInt(quantity, 10);
    } else {
      item.quantity++;
    }
    newQuantity = item.quantity;
    items[itemNo] =
      '{"item": "' +
      name +
      '", "quantity": "' +
      newQuantity +
      '", "price": "' +
      price +
      '"}';
    // console.log(items);
    newCart = '{ "items":' + JSON.stringify(items) + "}";
    sessionStorage.setItem("cart", newCart);
  } else {
    var item =
      '{"item": "' +
      name +
      '", "quantity": "' +
      quantity +
      '", "price": "' +
      price +
      '"}';
    items.push(item);
    // console.log(items);
    newCart = '{ "items":' + JSON.stringify(items) + "}";
    sessionStorage.setItem("cart", newCart);
    // console.log(sessionStorage.getItem("cart"));
  }

  //   var item =
  //     '{ "item":"' +
  //     name +
  //     '", "quantity":"' +
  //     quantity +
  //     '", "price":"' +
  //     price +
  //     '"} ';
  //   var item =
  //     '{"items": [{"item": "Scàm Gradient Jacket", "quantity": "1", "price": "82.97"}]}';
  //   sessionStorage.setItem("cart", JSON.parse(JSON.stringify(item)));
  //   console.log(getCart());
}
