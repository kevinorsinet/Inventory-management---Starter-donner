// Categories list
  const categoriesList = ['Vegetable', 'Meat', 'Fish', 'Fruit'];

  // DOM : access to the ID category element quickly
  const category = document.getElementById('category');
  
  categoriesList.forEach((item) => {
    /* console.log(`<option>${category}</option>`);*/
  
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    category.add(option);
  })

  function addNewProducts() {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const id = new Date().valueOf();

    // nouveau produit
    const product = {
      idProduct: id,
      // id:id,
      // id,
      nameProduct: name,
      priceProduct: price,
      categoryProduct: category,
      quantityProduct: quantity
    } 

    console.log("newProduct", product);
  }