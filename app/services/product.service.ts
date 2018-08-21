import { Injectable } from "@angular/core";
import { Product } from "./product";


  @Injectable()
  export class ProductService {

    // Отправка GET запроса нв сервер
    getProducts(): Promise<Array<Product>>
    {
      return productsPromise
      .then(function(n)
      {
            return n.map(function(p)
            {
              return new Product(p.id, p.title, p.price, p.rating, p.description, p.categories);
            });
      });
    }

    getProduct(id: number): Promise<Product> {
      return productsPromise
      .then(n => n.find(p => p.id === id ));
    }

    getCategories(): Promise<Array<String>> {
      return categoriesPromise;
    }

    // Отправка POST запроса на сервер, добавление нового продукта в базу.
    addProduct(prod) {
      try {
        if (prod.title && prod.price && prod.rating && prod.description && prod.categories) {
          let id = products.length,
          product = {
            "id": id,
            "title": prod.title,
            "price": prod.price,
            "rating": prod.rating,
            "description": prod.description,
            "categories": prod.categories.split(',')
          }
          products.push(product);
        } else {
          throw new Error("some fields are empty");
        }
      } catch(e) {
        console.log(e.message);
      }
    }

    deleteProduct(value) {
      let delId = [value];
      for (var i = 0; i < products.length; i++) {
          var obj = products[i];

          if (delId.indexOf(obj.id) !== -1) {
              products.splice(i, 1);
              i--;
          }
      }
    }
  }

  var categories = ['electronics', 'hardware', 'books'],
  products = [
    {
      "id": 0,
      "title": "First Product",
      "price": 24.99,
      "rating": 4.3,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["electronics", "hardware"]
    },
    {
      "id": 1,
      "title": "Second Product",
      "price": 64.99,
      "rating": 3.5,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["books"]
    },
    {
      "id": 2,
      "title": "Third Product",
      "price": 74.99,
      "rating": 4.2,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["electronics"]
    },
    {
      "id": 3,
      "title": "Fourth Product",
      "price": 84.99,
      "rating": 3.9,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["hardware"]
    },
    {
      "id": 4,
      "title": "Fifth Product",
      "price": 94.99,
      "rating": 5,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["electronics", "hardware"]
    },
    {
      "id": 5,
      "title": "Sixth Product",
      "price": 54.99,
      "rating": 4.6,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["books"]
    },
    {
      "id": 6,
      "title": "Sixth Product",
      "price": 54.99,
      "rating": 4.6,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["books"]
    },
    {
      "id": 7,
      "title": "Sixth Product",
      "price": 54.99,
      "rating": 4.6,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["books"]
    },
    {
      "id": 8,
      "title": "Sixth Product",
      "price": 54.99,
      "rating": 4.6,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["books"]
    },
    {
      "id": 9,
      "title": "Sixth Product",
      "price": 54.99,
      "rating": 4.6,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["books"]
    },
    {
      "id": 10,
      "title": "Sixth Product",
      "price": 54.99,
      "rating": 4.6,
      "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "categories": ["books"]
    }
  ],
  categoriesPromise = Promise.resolve(categories),
  productsPromise = Promise.resolve(products);