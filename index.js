class ProductManager {
  products;
  static idIncrementable = 0;
  constructor() {
    this.products = [];
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    ProductManager.idIncrementable++;

    const articulos = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.idIncrementable,
    };

    ProductManager.idIncrementable++;

    const codeExist = this.products.find((prod) => prod.id === code);

    if (codeExist) {
      return "error";
    } else if (
      !articulos.title ||
      !articulos.description ||
      !articulos.price ||
      !articulos.thumbnail ||
      !articulos.code ||
      !articulos.stock
    ) {
      return "error";
    } else {
      this.products.push(articulos);
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const idExist = this.products.find((idem) => idem.id === id);
    if (!idExist) {
      return "Not Found";
    } else {
      return idExist;
    }
  }
}

const speed = new ProductManager();
speed.addProduct("speed", "Energizante", 180, "www.speed.com", 00, 04);
