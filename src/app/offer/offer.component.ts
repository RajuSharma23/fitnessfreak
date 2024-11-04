import { Component } from '@angular/core';

interface Offer {
  image: string;
  name: string;
  price: number;
  mrp: number;
  discount: number;
  author: string;
  date: string;
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
  offers: Offer[] = [
    {
      image: 'https://img4.hkrtcdn.com/35790/pck_3578903_c_m.jpg',
      name: 'Biozyme Performance Whey 2 kg ',
      price: 299,
      mrp: 399,
      discount: 100,
      author: 'Author 1',
      date: '2023-10-01'
    },
    {
      image: 'https://img2.hkrtcdn.com/33161/pck_3316091_c_m.jpg',
      name: 'Ultimate Fit Stack',
      price: 499,
      mrp: 699,
      discount: 200,
      author: 'Author 2',
      date: '2023-09-15'
    },
    {
      image: 'https://img4.hkrtcdn.com/35581/pck_3558053_c_m.jpg',
      name: 'MuscleBlaze Biozyme Performance Whey 1 kg ',
      price: 299,
      mrp: 399,
      discount: 100,
      author: 'Author 1',
      date: '2023-10-01'
    },
    {
      image: 'https://img2.hkrtcdn.com/33161/pck_3316091_c_m.jpg',
      name: 'Ultimate Fit Stack',
      price: 499,
      mrp: 699,
      discount: 200,
      author: 'Author 2',
      date: '2023-09-15'
    },
    {
      image: 'https://img4.hkrtcdn.com/35790/pck_3578903_c_m.jpg',
      name: 'Biozyme Performance Whey 2 kg ',
      price: 299,
      mrp: 399,
      discount: 100,
      author: 'Author 1',
      date: '2023-10-01'
    },
    {
      image: 'https://img2.hkrtcdn.com/33161/pck_3316091_c_m.jpg',
      name: 'Ultimate Fit Stack',
      price: 499,
      mrp: 699,
      discount: 200,
      author: 'Author 2',
      date: '2023-09-15'
    },
    {
      image: 'https://img4.hkrtcdn.com/35790/pck_3578903_c_m.jpg',
      name: 'Biozyme Performance Whey 2 kg ',
      price: 299,
      mrp: 399,
      discount: 100,
      author: 'Author 1',
      date: '2023-10-01'
    },
    {
      image: 'https://img2.hkrtcdn.com/33161/pck_3316091_c_m.jpg',
      name: 'Ultimate Fit Stack',
      price: 499,
      mrp: 699,
      discount: 200,
      author: 'Author 2',
      date: '2023-09-15'
    },
    // Add more products here
  ];
  addToCart(product: Offer) {
    console.log(`${product.name} added to cart!`);
    // Implement actual cart logic here
  }
}
