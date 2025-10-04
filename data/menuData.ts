import { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
  {
    category: 'Breakfast',
    subCategory: 'Egg to Order',
    items: [
      { id: 1, name: 'Bread Omelette', price: 135, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/bread%20and%20omlete.jpg?updatedAt=1759592083737' },
      { id: 2, name: 'Cheese Omelette', price: 145, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/cheese%20omelte.jpg?updatedAt=1759592084778' },
      { id: 3, name: 'Boiled Egg (2 pcs)', price: 99, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/boiled%202%20egg.jpg?updatedAt=1759592084805' },
      { id: 4, name: 'Masala Omelette', price: 135, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/masala%20omlete.jpg?updatedAt=1759592085064' },
    ],
  },
  {
    category: 'On The Run',
    description: 'Served from 10:00 am to 10:30pm',
    items: [
      { id: 5, name: 'Fish Finger', description: 'Stick of battered boneless fish are mixed with spicy seasoning', price: 475, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/fish%20fingers.jpg?updatedAt=1759592084016' },
      { id: 6, name: 'Chicken Kathi Roll', description: 'Pieces of chicken cooked with chopped onions & herbs, and rolled in soft flaky parathas', price: 399, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Kathi%20Roll.jpg?updatedAt=1759604151903' },
      { id: 7, name: 'Egg Kathi Roll', description: 'Pieces of egg cooked with chopped onions & herbs, and rolled in soft flaky parathas', price: 299, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Egg%20Kathi%20Roll.jpg?updatedAt=1759604148687' },
      { id: 8, name: 'Chicken Sandwich', description: 'Bread stuffed with chicken, bell peppers, along with onions and spices', price: 355, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Sandwich.jpg?updatedAt=1759604142520' },
      { id: 9, name: 'Chicken Pizza', description: 'Flat bread topped with cheese, chilies, onion, garlic sauce and chunks of chicken', price: 445, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Pizza.jpg?updatedAt=1759604142350' },
    ],
  },
  {
    category: 'Sandwiches',
    items: [
      { id: 10, name: 'Chicken Sandwich Special', description: 'Slices of bread stuffed with chicken and veggies, served along with French fries', price: 295, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Sandwich%20Special.jpg?updatedAt=1759604150867' },
    ],
  },
  {
    category: 'Grill Charm',
    items: [
      { id: 11, name: 'Non-Veg Sizzler', description: 'Non-vegetarian sizzler consists of rice, chicken chunks, fish and saute veg. (might vary sometime)', price: 599, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Non-Veg%20Sizzler.jpg?updatedAt=1759604151888' },
      { id: 12, name: 'Tandoori Non-Veg Sizzler', description: 'Non-vegetarian sizzler consists of Tandoori preparations including chicken, fish etc. (might vary sometime)', price: 715, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/tandoori%20and%20grill.webp?updatedAt=1759213988429' },
      { id: 13, name: 'Chinese Non-Veg Sizzler', description: 'Chinese non veg (any 3 preparations) preparations as per the guest choice', price: 549, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chinese%20Non-Veg%20Sizzler.jpg?updatedAt=1759604149464' },
    ],
  },
  {
    category: 'Pizza',
    items: [
      { id: 14, name: 'Chicken Pizza Supreme', description: 'Flat bread topped with cheese, chilies, onion, garlic sauce and chunks of chicken', price: 455, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Pizza%20Supreme.jpg?updatedAt=1759604152655' },
    ],
  },
  {
    category: 'Non-Vegetarian Selection',
    items: [
      { id: 15, name: 'Chicken Nugget', description: 'Deboned chopped chicken is battered and grilled on the hot plate', price: 399, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Nugget.jpg?updatedAt=1759604152786' },
      { id: 16, name: 'Chicken Lollipop', description: 'Frenched chicken drumette is marinated and battered before being fried or baked until crisp', price: 499, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Lollipop.jpg?updatedAt=1759592084616' },
      { id: 17, name: 'Chilli Chicken', description: 'A sweet, spicy & slightly sour crispy appetizer made with chicken, bell peppers, garlic, chili sauce & soya sauce', price: 399, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chilli%20Chicken.jpg?updatedAt=1759592083949' },
      { id: 18, name: 'Chicken Steak', description: 'Grilled tender chicken pieces marinated thoroughly, bursting with flavours of spices', price: 600, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Steak.jpg?updatedAt=1759604139773' },
      { id: 19, name: 'Garlic Chicken', description: 'Tiny pieces of chicken marinated with crushed garlic, dry chilies, vinegar & salt, cooked with onion and tomatoes', price: 449, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Garlic%20Chicken.jpg?updatedAt=1759592085164' },
      { id: 20, name: 'Steam Chicken', description: 'Chicken is marinated in yogurt, ginger, garlic, and spices before being steamed for a soft and supple texture', price: 399, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Steam%20Chicken.jpg?updatedAt=1759604141935' },
      { id: 21, name: 'Lemon Chicken', description: 'Pieces of sautéed and deep-fried chicken meat wrapped in a thick, sweet lemon-flavored sauce', price: 449, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Lemon%20Chicken.jpg?updatedAt=1759605023269' },
      { id: 22, name: 'Grilled Chicken', description: 'Chicken breast is marinated and grilled to perfection', price: 599, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/starters%20non%20veg.jpeg?updatedAt=1759213964874' },
      { id: 23, name: 'Chicken Salt & Pepper', description: 'Crispy seasoned chicken, fried up with crunchy onions and spicy chilies', price: 499, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Salt%20&%20Pepper.jpg?updatedAt=1759604147356' },
      { id: 24, name: 'Chicken Shashlik', description: 'Boneless chicken and veggies are marinated in a sweet and spicy flavor, and cooked on a hot plate', price: 499, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Shaslik.jpg?updatedAt=1759592085140' },
      { id: 25, name: 'Chicken Gulbadan', description: 'Boneless chicken is thoroughly marinated and fried, with an omelette stuffed inside it', price: 499, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/chicken%20gulbadan.JPG?updatedAt=1759606202133' },
      { id: 26, name: 'Mutton Bhuna Gost', description: 'Mutton is slow-cooked and served dry with a variety of spice blends', price: 475, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Mutton%20Bhuna%20Gost.jpg?updatedAt=1759595287535' },
      { id: 27, name: 'Chilli Fish', description: 'Boneless pieces of fish, batter fried and soaked in a spicy-tangy sauce made with soya, tomato & chili sauce along with chilies, ginger & garlic', price: 475, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chilli%20Fish.jpg?updatedAt=1759604147386' },
      { id: 28, name: 'Masala Grilled Fish', description: 'Marinated fish is grilled in a peppery coating and served with tartar sauce', price: 465, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Masala%20Grilled%20Fish.jpg?updatedAt=1759605023202' },
      { id: 29, name: 'Grilled Lemon Butter Fish', description: 'Fish is marinated in rich spices for a savoury flavour with a very smooth texture before being grilled', price: 499, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/grilledd%20lemon%20butter%20fish.jpg?updatedAt=1759606201983' },
      { id: 30, name: 'Fried Fish', description: 'Marinated fish deeply fried and served with tartar sauce', price: 499, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Fried%20Fish.jpg?updatedAt=1759605023288' },
    ]
  },
  {
    category: 'Soup',
    items: [
      { id: 31, name: 'Chicken Hot & Sour Soup', description: 'Shredded chicken cooked with chopped veggies, garlic, spices and herbs', price: 195, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Hot%20&%20Sour%20Soup.jpg?updatedAt=1759606287140' },
    ],
  },
  {
    category: 'Non-Veg Main Course',
    subCategory: 'Chicken',
    items: [
        { id: 32, name: 'Butter Chicken', price: 375, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Butter%20Chicken.jpg?updatedAt=1759592084805' },
        { id: 33, name: 'Chicken Masala', price: 345, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Masala.jpg?updatedAt=1759604152818' },
        { id: 34, name: 'Chicken Curry', price: 345, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Curry.jpg?updatedAt=1759604151523' },
        { id: 35, name: 'Kadhai Chicken', price: 375, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Kadhai%20Chicken.jpg?updatedAt=1759592084567z' },
        { id: 36, name: 'Chicken Salona', price: 649, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/chicken%20salona.webp?updatedAt=1759606201567' },
        { id: 37, name: 'Chicken Handi', price: 345, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Chicken%20Handi.jpg?updatedAt=1759604152652' },
        { id: 38, name: 'Bhunjma Chicken', price: 375, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Bhunjma%20Chicken.jpg?updatedAt=1759604148907' },
    ],
  },
  {
    category: 'Mutton & Fish',
    items: [
        { id: 39, name: 'Laal Maans', price: 595, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Laal%20Maans.jpg?updatedAt=1759595386934' },
        { id: 40, name: 'Mutton Curry', price: 595, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Mutton%20Curry.jpg?updatedAt=1759595893812' },
        { id: 41, name: 'Mutton Masala', price: 595, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/carry%20non%20veg.jpg?updatedAt=1759213927719' },
        { id: 42, name: 'Bhunjma Gosth', price: 595, imageUrl: '' },
        { id: 43, name: 'Mutton Rahra', price: 595, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/mutton%20rahra.jpg?updatedAt=1759606202035' },
        { id: 44, name: 'Gosht Rogan Josh', price: 595, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Gosht%20Rogan%20Josh.jpg?updatedAt=1759595283830' },
        { id: 45, name: 'Mutton Biryani', price: 595, imageUrl:'https://ik.imagekit.io/j1fgksdwx/Mutton%20Biryani.jpg?updatedAt=1759595893464' },
        { id: 46, name: 'Mutton Yakhni Pulao', price: 595, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Mutton%20Yakhni%20Pulao.jpg?updatedAt=1759595894235' },
        { id: 47, name: 'Fish Curry', price: 375, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Fish%20Curry%20Home%20Style.jpg?updatedAt=1759592085058' },
        { id: 48, name: 'Fish Korma', price: 375, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/fish%20kormaa.jpg?updatedAt=1759606201705' },
        { id: 49, name: 'Fish Curry Home Style', price: 375, imageUrl: 'https://ik.imagekit.io/j1fgksdwx/Fish%20Curry%20Home%20Style.jpg?updatedAt=1759595171914' },
    ],
  },
];