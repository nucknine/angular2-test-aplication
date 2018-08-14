import { Injectable } from "@angular/core";

export class Product {
    constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public description: string,
      public categories: Array<string>) {
        
    }
  }
  
  @Injectable()
  export class ProductService {

    getProducts(): Array<Product> {
      return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
    }
    getCategories(): Array<String> {
      return categories;
    }
    addProduct(title, price, rating, description, categories) {
      let id = products.length;
      let product = {
        "id": id,
        "title": title,
        "price": price,
        "rating": rating,
        "description": description,
        "categories": categories
      }

      products.push(product);
    }
  }
  
  var categories = ['electronics', 'hardware', 'books'];

  var products = [
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
  ];