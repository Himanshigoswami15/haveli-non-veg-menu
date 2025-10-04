import { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
  {
    category: 'Breakfast',
    subCategory: 'Egg to Order',
    items: [
      { id: 1, name: 'Bread Omelette', price: 135, imageUrl: 'https://source.unsplash.com/400x300/?bread-omelette' },
      { id: 2, name: 'Cheese Omelette', price: 145, imageUrl: 'https://source.unsplash.com/400x300/?cheese-omelette' },
      { id: 3, name: 'Boiled Egg (2 pcs)', price: 99, imageUrl: 'https://source.unsplash.com/400x300/?boiled-egg' },
      { id: 4, name: 'Masala Omelette', price: 135, imageUrl: 'https://source.unsplash.com/400x300/?masala-omelette' },
    ],
  },
  {
    category: 'On The Run',
    description: 'Served from 10:00 am to 10:30pm',
    items: [
      { id: 5, name: 'Fish Finger', description: 'Stick of battered boneless fish are mixed with spicy seasoning', price: 475, imageUrl: 'https://source.unsplash.com/400x300/?fish-fingers' },
      { id: 6, name: 'Chicken Kathi Roll', description: 'Pieces of chicken cooked with chopped onions & herbs, and rolled in soft flaky parathas', price: 399, imageUrl: 'https://source.unsplash.com/400x300/?kathi-roll' },
      { id: 7, name: 'Egg Kathi Roll', description: 'Pieces of egg cooked with chopped onions & herbs, and rolled in soft flaky parathas', price: 299, imageUrl: 'https://source.unsplash.com/400x300/?egg-roll' },
      { id: 8, name: 'Chicken Sandwich', description: 'Bread stuffed with chicken, bell peppers, along with onions and spices', price: 355, imageUrl: 'https://source.unsplash.com/400x300/?chicken-sandwich' },
      { id: 9, name: 'Chicken Pizza', description: 'Flat bread topped with cheese, chilies, onion, garlic sauce and chunks of chicken', price: 445, imageUrl: 'https://source.unsplash.com/400x300/?chicken-pizza' },
    ],
  },
  {
    category: 'Sandwiches',
    items: [
      { id: 10, name: 'Chicken Sandwich Special', description: 'Slices of bread stuffed with chicken and veggies, served along with French fries', price: 295, imageUrl: 'https://source.unsplash.com/400x300/?club-sandwich' },
    ],
  },
  {
    category: 'Grill Charm',
    items: [
      { id: 11, name: 'Non-Veg Sizzler', description: 'Non-vegetarian sizzler consists of rice, chicken chunks, fish and saute veg. (might vary sometime)', price: 599, imageUrl: 'https://source.unsplash.com/400x300/?sizzler-platter' },
      { id: 12, name: 'Tandoori Non-Veg Sizzler', description: 'Non-vegetarian sizzler consists of Tandoori preparations including chicken, fish etc. (might vary sometime)', price: 715, imageUrl: 'https://source.unsplash.com/400x300/?tandoori-platter' },
      { id: 13, name: 'Chinese Non-Veg Sizzler', description: 'Chinese non veg (any 3 preparations) preparations as per the guest choice', price: 549, imageUrl: 'https://source.unsplash.com/400x300/?chinese-sizzler' },
    ],
  },
  {
    category: 'Pizza',
    items: [
      { id: 14, name: 'Chicken Pizza Supreme', description: 'Flat bread topped with cheese, chilies, onion, garlic sauce and chunks of chicken', price: 455, imageUrl: 'https://source.unsplash.com/400x300/?chicken-pizza,supreme' },
    ],
  },
  {
    category: 'Non-Vegetarian Selection',
    items: [
      { id: 15, name: 'Chicken Nugget', description: 'Deboned chopped chicken is battered and grilled on the hot plate', price: 399, imageUrl: 'https://source.unsplash.com/400x300/?chicken-nuggets' },
      { id: 16, name: 'Chicken Lollipop', description: 'Frenched chicken drumette is marinated and battered before being fried or baked until crisp', price: 499, imageUrl: 'https://source.unsplash.com/400x300/?chicken-lollipop' },
      { id: 17, name: 'Chilli Chicken', description: 'A sweet, spicy & slightly sour crispy appetizer made with chicken, bell peppers, garlic, chili sauce & soya sauce', price: 399, imageUrl: 'https://source.unsplash.com/400x300/?chilli-chicken' },
      { id: 18, name: 'Chicken Steak', description: 'Grilled tender chicken pieces marinated thoroughly, bursting with flavours of spices', price: 600, imageUrl: 'https://source.unsplash.com/400x300/?chicken-steak' },
      { id: 19, name: 'Garlic Chicken', description: 'Tiny pieces of chicken marinated with crushed garlic, dry chilies, vinegar & salt, cooked with onion and tomatoes', price: 449, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Garlic%20Chicken.jpg?updatedAt=1759592085164' },
      { id: 20, name: 'Steam Chicken', description: 'Chicken is marinated in yogurt, ginger, garlic, and spices before being steamed for a soft and supple texture', price: 399, imageUrl: 'https://source.unsplash.com/400x300/?steamed-chicken' },
      { id: 21, name: 'Lemon Chicken', description: 'Pieces of sautéed and deep-fried chicken meat wrapped in a thick, sweet lemon-flavored sauce', price: 449, imageUrl: 'https://source.unsplash.com/400x300/?lemon-chicken' },
      { id: 22, name: 'Grilled Chicken', description: 'Chicken breast is marinated and grilled to perfection', price: 599, imageUrl: 'https://source.unsplash.com/400x300/?grilled-chicken' },
      { id: 23, name: 'Chicken Salt & Pepper', description: 'Crispy seasoned chicken, fried up with crunchy onions and spicy chilies', price: 499, imageUrl: 'https://source.unsplash.com/400x300/?salt-pepper-chicken' },
      { id: 24, name: 'Chicken Shashlik', description: 'Boneless chicken and veggies are marinated in a sweet and spicy flavor, and cooked on a hot plate', price: 499, imageUrl: 'https://source.unsplash.com/400x300/?chicken-shashlik' },
      { id: 25, name: 'Chicken Gulbadan', description: 'Boneless chicken is thoroughly marinated and fried, with an omelette stuffed inside it', price: 499, imageUrl: 'https://source.unsplash.com/400x300/?stuffed-chicken' },
      { id: 26, name: 'Mutton Bhuna Gost', description: 'Mutton is slow-cooked and served dry with a variety of spice blends', price: 475, imageUrl: 'https://source.unsplash.com/400x300/?mutton-bhuna' },
      { id: 27, name: 'Chilli Fish', description: 'Boneless pieces of fish, batter fried and soaked in a spicy-tangy sauce made with soya, tomato & chili sauce along with chilies, ginger & garlic', price: 475, imageUrl: 'https://source.unsplash.com/400x300/?chilli-fish' },
      { id: 28, name: 'Masala Grilled Fish', description: 'Marinated fish is grilled in a peppery coating and served with tartar sauce', price: 465, imageUrl: 'https://source.unsplash.com/400x300/?grilled-fish' },
      { id: 29, name: 'Grilled Lemon Butter Fish', description: 'Fish is marinated in rich spices for a savoury flavour with a very smooth texture before being grilled', price: 499, imageUrl: 'https://source.unsplash.com/400x300/?lemon-butter-fish' },
      { id: 30, name: 'Fried Fish', description: 'Marinated fish deeply fried and served with tartar sauce', price: 499, imageUrl: 'https://source.unsplash.com/400x300/?fried-fish' },
    ]
  },
  {
    category: 'Soup',
    items: [
      { id: 31, name: 'Chicken Hot & Sour Soup', description: 'Shredded chicken cooked with chopped veggies, garlic, spices and herbs', price: 195, imageUrl: 'https://source.unsplash.com/400x300/?hot-sour-soup' },
    ],
  },
  {
    category: 'Non-Veg Main Course',
    subCategory: 'Chicken',
    items: [
        { id: 32, name: 'Butter Chicken', price: 375, imageUrl: '' },
        { id: 33, name: 'Chicken Masala', price: 345, imageUrl: '' },
        { id: 34, name: 'Chicken Curry', price: 345, imageUrl: '' },
        { id: 35, name: 'Kadhai Chicken', price: 375, imageUrl: '' },
        { id: 36, name: 'Chicken Salona', price: 649, imageUrl: '' },
        { id: 37, name: 'Chicken Handi', price: 345, imageUrl: '' },
        { id: 38, name: 'Bhunjma Chicken', price: 375, imageUrl: '' },
    ],
  },
  {
    category: 'Mutton & Fish',
    items: [
        { id: 39, name: 'Laal Maans', price: 595, imageUrl: '' },
        { id: 40, name: 'Mutton Curry', price: 595, imageUrl: '' },
        { id: 41, name: 'Mutton Masala', price: 595, imageUrl: '' },
        { id: 42, name: 'Bhunjma Gosth', price: 595, imageUrl: '' },
        { id: 43, name: 'Mutton Rahra', price: 595, imageUrl: '' },
        { id: 44, name: 'Gosht Rogan Josh', price: 595, imageUrl: '' },
        { id: 45, name: 'Mutton Biryani', price: 595, imageUrl:'' },
        { id: 46, name: 'Mutton Yakhni Pulao', price: 595, imageUrl: '' },
        { id: 47, name: 'Fish Curry', price: 375, imageUrl: '' },
        { id: 48, name: 'Fish Korma', price: 375, imageUrl: '' },
        { id: 49, name: 'Fish Curry Home Style', price: 375, imageUrl: '' },
    ],
  },
];