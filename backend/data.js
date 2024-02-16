import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sofiane',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('HTcBE5mr$qz$pBAm'),
      isAdmin: true
    },
    {
      name: 'Abou Abderrahim',
      email: 'abou.abderrahim@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    }
  ],

  products: [
    {
      // _id: '1',
      name: "Aisha - Les parfums d'Igor",
      slug: 'aisha-les-parfums-d-igor',
      category: "Les Parfums d'Igor",
      image: '/images/aisha-les-parfums-d-igor-600x600.webp', // 600px × 600px
      price: 120,
      countInStock: 10,
      brand: "Les Parfums d'Igor",
      rating: 4.5,
      numReviews: 10,
      description: 'Eau de parfum de qualité'
    },
    {
      // _id: '2',
      name: 'Black Boat - Black Edition',
      slug: 'black-boat-black-edition',
      category: 'Black Edition',
      image: '/images/black-boat-clark-kent-black-edition-600x600.webp',
      price: 250,
      countInStock: 0,
      brand: 'Black Edition',
      rating: 4.0,
      numReviews: 10,
      description: 'Fragrance au top'
    },
    {
      // _id: '3',
      name: 'Sucre Noir - Arte Profumi',
      slug: 'sucre-noir-arte-profumi',
      category: 'Arte Profumi',
      image: '/images/sucre-noir-arte-profumi-600x600.webp',
      price: 25,
      countInStock: 15,
      brand: 'Arte Profumi',
      rating: 3.5,
      numReviews: 14,
      description: "Eau de parfum d'excellence"
    },
    {
      // _id: '4',
      name: 'Yara Lattafa Perfumes',
      slug: 'yara-lattafa-perfumes',
      category: 'Lattafa Perfumes',
      image: '/images/yara-lattafa-perfumes-600x600.webp',
      price: 65,
      countInStock: 5,
      brand: 'Lattafa Perfumes',
      rating: 2.5,
      numReviews: 10,
      description: 'Excellent parfum pour femme'
    }
  ]
};
export default data;
