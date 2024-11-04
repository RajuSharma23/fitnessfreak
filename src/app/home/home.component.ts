import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
products: any[]= [
  
    {
      image: 'https://img2.hkrtcdn.com/33161/pck_3316081_c_m.jpg',
      name: 'Everyday Gyming Stack 4 Protein Muesli Dark Chocolate & Cranberry 1 kg Combo',
      price: 499,
      mrp: 799,
      discount: 300,
      author: 'Abi',
      date: '4 days ago',
    },

    {
      image: 'https://img10.hkrtcdn.com/34453/pck_3445299_c_m.jpg',
      name: 'MuscleBlaze Super Gainer XXL 2 kg Chocolate & Creatine Monohydrate CreAMP 100g Combo',
      price: 499,
      mrp: 799,
      discount: 300,
      author: 'Abi',
      date: '4 days ago',
    },

    {
      image: 'https://img4.hkrtcdn.com/35686/pck_3568533_c_m.jpg',
      name: 'MuscleBlaze Creatine Monohydrate CreAMP & PRE Workout 200 Xtreme 0.22 lb Combo',
      price: 499,
      mrp: 799,
      discount: 300,
      author: 'Abi',
      date: '4 days ago',
    },

    {
      image: 'https://img10.hkrtcdn.com/35858/pck_3585729_c_m.jpg',
      name: 'High Protein Oats Dark Chocolate & High Protein  Muesli Dark Chocolate & Cranberry 1 kg Combo',
      price: 499,
      mrp: 799,
      discount: 300,
      author: 'Abi',
      date: '4 days ago',
    },

    {
      image: 'https://img4.hkrtcdn.com/35083/pck_3508233_c_m.jpg',
      name: 'MuscleBlaze Creatine Monohydrate CreAMP 100g & Protein   Chocolate Fish Oil 30 Caps Combo',
      price: 499,
      mrp: 799,
      discount: 300,
      author: 'Abi',
      date: '4 days ago',
    },
];
// Fit Food Store
proudect_sectios_2: any[]=[
  {
    image: 'https://img6.hkrtcdn.com/29836/prd_2983545_o.jpg',
    name: 'High Protein Oats, 1 kg  Unflavoured',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },

  {
    image: 'https://img6.hkrtcdn.com/29313/prd_2931265-MuscleBlaze-Chocolate-Peanut-Butter-1-kg-Crunchy_o.jpg',
    name: 'Chocolate Peanut Butter, 1 kg  Crunchy ',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },


  {
    image: 'https://img10.hkrtcdn.com/30394/prd_3039359-MuscleBlaze-High-Protein-Muesli-1-kg-Dark-Chocolate-Cranberry_o.jpg',
    name: 'High Protein Muesli,  1 kg  Dark Chocolate & Cranberry',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },

  {
    image: 'https://img9.hkrtcdn.com/22852/prd_2285188-MuscleBlaze-Protein-Bar-20-gm-Protein-6-bars-Cookies-Cream_o.jpg',
    name: 'Protein Bar (20 gm Protein),  6 bar(s)  Cookies & Cream',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },

  {
    image: 'https://img8.hkrtcdn.com/29896/prd_2989517-MuscleBlaze-High-Protein-Peanut-Butter-1-kg-Dark-Chocolate-Creamy_o.jpg',
    name:   'High Protein Peanut Butter, 1 kg  Dark Chocolate ',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },
  
];
// Pre Workout WrathX Range
proudect_sectios_3: any[]=[
  {
    image: 'https://img4.hkrtcdn.com/34953/prd_3495223-MuscleBlaze-Pre-Workout-WrathX-0.66-lb-Voodoo-Black_c_m.jpg',
    name: 'Pre Workout WrathX,   0.75 lb  Cola Frost ',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },
  {
    image: 'https://img6.hkrtcdn.com/35590/prd_3558985-MuscleBlaze-Pre-Workout-WrathX-1.12-lb-Fruit-Fury_c_m.jpg',
    name: 'Pre Workout WrathX,  1.12 lb  Fruit Fury ',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },
  {
    image: 'https://img6.hkrtcdn.com/34952/prd_3495185-MuscleBlaze-Pre-Workout-WrathX-1.1-lb-Voodoo-Black_c_m.jpg',
    name: 'Pre Workout WrathX,  1.12 lb  Cola Frost ',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },
  {
    image: 'https://img4.hkrtcdn.com/35591/prd_3559003-MuscleBlaze-Pre-Workout-WrathX-0.74-lb-Fruit-Fury_c_m.jpg',
    name: 'Pre Workout WrathX,  0.75 lb  Fruit Fury ',
    price: 499,
    mrp: 799,
    discount: 300,
    author: 'Abi',
    date: '4 days ago',
  },
  
];
addToCart(_t17: any) {
throw new Error('Method not implemented.');
}

}
