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

    // Créer une liste
    // let productsList = []; 
    let productsList = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

    productsList.push(product); 

    // Sauvegarde dans le local storage
    localStorage.setItem('products', JSON.stringify(productsList));
  }
  // Retourne la liste des objets du local storage 
  function getProducts() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

  }

  (function showProducts() {
    const products = getProducts();
    const tableContent = document.getElementById('tableContent');
    console.log(products);
    products.forEach((item)=> {
      let row = tableContent.insertRow();
      let id = row.insertCell(0);
      let name = row.insertCell(1);
      let category = row.insertCell(2);
      let price = row.insertCell(3);
      let quantity = row.insertCell(4);
      let action = row.insertCell(5);

      id.innerHTML = item.idProduct;
      name.innerHTML = item.nameProduct; 
      category.innerHTML = `<img alt="${item.categoryProduct}" src="images/${(item.categoryProduct).toLowerCase()}.png"></img>${item.categoryProduct}`;
      price.innerHTML = `${item.priceProduct} €`; 
      quantity.innerHTML = item.quantityProduct; 
      action.innerHTML = `
      <a onclick="showEditProduct(${item.idProduct})"><i class="fas fa-edit iconEdit"></i></a>
      <a><i class="fas fa-trash-alt iconDelete"></i></a>`;
      
    });
  })();

  function showEditProduct(idEdit) {
    const products = getProducts();
    const productSingle = products.find((element)=>{ return element.idProduct == idEdit});
    // const productSingle = products.find((element) => element.idProduct == idEdit);

    console.log(productSingle);
    let modalEditProduct = new bootstrap.Modal(document.getElementById("modalEditProduct"));
    modalEditProduct.show();

    // Edite le formulaire
    let editName = document.getElementById('editName');
    editName.value = productSingle.nameProduct;
    let editPrice = document.getElementById('editPrice');
    editPrice.value = productSingle.priceProduct;    
    let editQuantity = document.getElementById('editQuantity');
    editQuantity.value = productSingle.quantityProduct;

  }

