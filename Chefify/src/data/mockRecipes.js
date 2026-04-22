const mockRecipes = [
  {
    id: 'r1',
    title: 'Summer Strawberry Shortcake',
    image: new URL('../assets/avacador_salad.png', import.meta.url).href,
    cookTime: '45 min',
    author: 'Chef Anna',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,
    tags: ['Summer', 'Dessert'],
    ingredients: ['2 cups flour', '1 cup sugar', '3 eggs'],
    steps: [
      { step: 1, text: 'Mix ingredients', image: new URL('../assets/avacador_salad.png', import.meta.url).href },
      { step: 2, text: 'Bake for 25 mins', image: new URL('../assets/avacador_salad.png', import.meta.url).href }
    ],
    rating: 4.5,
    reviews: [
      { id: 'rv1', name: 'Maya', text: 'Delicious!', date: '2024-04-01' }
    ]
  },
  {
    id: 'r2',
    title: 'Grilled Lemon Chicken',
    image: new URL('../assets/corn_salad.png', import.meta.url).href,
    cookTime: '35 min',
    author: 'Chef Bruno',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,
    tags: ['Grilled', 'Main'],
    ingredients: ['1 kg chicken', '2 lemons'],
    steps: [{ step: 1, text: 'Marinate', image: new URL('../assets/corn_salad.png', import.meta.url).href }],
    rating: 4.8,
    reviews: []
  },
  {
    id: 'r3',
    title: 'Pan-fried Garlic Salmon',
    image: new URL('../assets/cucumber_salad_charry_tomatoes.png', import.meta.url).href,
    cookTime: '25 min',
    author: 'Chef Kira',
    authorAvatar: new URL('../assets/avatar_small.png', import.meta.url).href,
    tags: ['Pan-fried', 'Fish'],
    ingredients: ['Salmon fillets', 'Garlic', 'Butter'],
    steps: [{ step: 1, text: 'Sear salmon', image: new URL('../assets/cucumber_salad_charry_tomatoes.png', import.meta.url).href }],
    rating: 4.7,
    reviews: []
  },
  {
    id: 'r4',
    title: 'Black Forest Cake',
    image: new URL('../assets/five_color_salad.png', import.meta.url).href,
    cookTime: '50 min',
    author: 'Chef Lina',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,    tags: ['Baked', 'Dessert'],
    ingredients: ['Cocoa powder', 'Cherries'],
    steps: [{ step: 1, text: 'Bake cake', image: new URL('../assets/five_color_salad.png', import.meta.url).href }],
    rating: 4.9,
    reviews: []
  },
  {
    id: 'r5',
    title: 'Stir-fried Veggies',
    image: new URL('../assets/italian_style_tomato_salad.png', import.meta.url).href,
    cookTime: '20 min',
    author: 'Chef Mei',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,
    tags: ['Stir-fried', 'Vegan'],
    ingredients: ['Mixed vegetables', 'Soy sauce'],
    steps: [{ step: 1, text: 'Stir-fry veggies', image: new URL('../assets/italian_style_tomato_salad.png', import.meta.url).href }],
    rating: 4.3,
    reviews: []
  },
  {
    id: 'r6',
    title: 'Roasted Root Veggies',
    image: new URL('../assets/Lotus delight salad.png', import.meta.url).href,
    cookTime: '40 min',
    author: 'Chef Omar',
    authorAvatar: new URL('../assets/avatar_small.png', import.meta.url).href,
    tags: ['Roasted', 'Sides'],
    ingredients: ['Carrots', 'Potatoes'],
    steps: [{ step: 1, text: 'Roast veggies', image: new URL('../assets/Lotus delight salad.png', import.meta.url).href }],
    rating: 4.2,
    reviews: []
  },
  {
    id: 'r7',
    title: 'Sautéed Mushrooms',
    image: new URL('../assets/Potato Salad.png', import.meta.url).href,
    cookTime: '15 min',
    author: 'Chef Léo',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,
    tags: ['Sautéed', 'Vegan'],
    ingredients: ['Mushrooms', 'Butter'],
    steps: [{ step: 1, text: 'Sauté mushrooms', image: new URL('../assets/Potato Salad.png', import.meta.url).href }],
    rating: 4.0,
    reviews: []
  },
  {
    id: 'r8',
    title: 'Baked Ziti',
    image: new URL('../assets/Salad with cabbage.png', import.meta.url).href,
    cookTime: '45 min',
    author: 'Chef Rosa',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,
    tags: ['Baked', 'Pasta'],
    ingredients: ['Ziti', 'Tomato sauce'],
    steps: [{ step: 1, text: 'Bake ziti', image: new URL('../assets/Salad with cabbage.png', import.meta.url).href }],
    rating: 4.6,
    reviews: []
  },
  {
    id: 'r9',
    title: 'Steamed Dumplings',
    image: new URL('../assets/salad_with_cabbage_and_shrimp.png', import.meta.url).href,
    cookTime: '30 min',
    author: 'Chef Wei',
    authorAvatar: new URL('../assets/avatar_small.png', import.meta.url).href,
    tags: ['Steamed', 'Dim Sum'],
    ingredients: ['Dumpling wrappers', 'Pork'],
    steps: [{ step: 1, text: 'Steam dumplings', image: new URL('../assets/salad_with_cabbage_and_shrimp.png', import.meta.url).href }],
    rating: 4.4,
    reviews: []
  },
  {
    id: 'r10',
    title: 'Grilled Veggie Skewers',
    image: new URL('../assets/Bean, shrimp, and potato salad.png', import.meta.url).href,
    cookTime: '25 min',
    author: 'Chef Sam',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,
    tags: ['Grilled', 'Vegan'],
    ingredients: ['Bell peppers', 'Zucchini'],
    steps: [{ step: 1, text: 'Grill skewers', image: new URL('../assets/Bean, shrimp, and potato salad.png', import.meta.url).href }],
    rating: 4.1,
    reviews: []
  },
  {
    id: 'r11',
    title: 'Stewed Beef Ragù',
    image: new URL('../assets/Sunny-side up fried eggs.png', import.meta.url).href,
    cookTime: '120 min',
    author: 'Chef Marco',
    authorAvatar: new URL('../assets/avatar.png', import.meta.url).href,
    tags: ['Stewed', 'Main'],
    ingredients: ['Beef', 'Tomatoes'],
    steps: [{ step: 1, text: 'Stew beef', image: new URL('../assets/Sunny-side up fried eggs.png', import.meta.url).href }],
    rating: 4.8,
    reviews: []
  },
  {
    id: 'r12',
    title: 'Sweet Cake',
    image: new URL('../assets/Snack cakes.png', import.meta.url).href,
    cookTime: '60 min',
    author: 'Chef Nina',
    authorAvatar: new URL('../assets/avatar_small.png', import.meta.url).href,
    tags: ['Dessert'],
    ingredients: ['Flour', 'Sugar'],
    steps: [{ step: 1, text: 'Bake cake', image: new URL('../assets/Snack cakes.png', import.meta.url).href }],
    rating: 3.9,
    reviews: []
  }
];

export default mockRecipes;
