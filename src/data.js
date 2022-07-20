const books = [
  {
    id: "1",
    title: "Cheese Burger",
    description: "Chees Burger penunda lapar",
    categorie: "Food",
    picture: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg",
    cost: 29000,
  },
  {
    id: "2",
    title: "Lime Cocktail Drink With Two Straws",
    description: "Minuman dingin penyegar dahaga",
    jmlHal: 184,
    categorie: "Drink",
    picture: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1187766.jpg&fm=jpg",
    cost: 19000,
  },
  {
    id: "3",
    title: "Baked Pizza with Basil Leaves	",
    description: "Baked Pizza with Basil Leaves",

    categorie: "Food",

    picture: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4-1152x1536.jpg",
    cost: 97000,
  },
  {
    id: "4",
    title: "Coca Cola",
    description: "Coca Cola",

    categorie: "Drink",

    picture: "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?cs=srgb&dl=pexels-olena-bohovyk-3819969.jpg&fm=jpg",
    cost: 18000,
  },
  {
    id: "5",
    title: "Jus Buah Naga",
    description: "Buah Naga",
    categorie: "Teen & Young Adult Fiction",

    picture: "https://images.pexels.com/photos/892615/pexels-photo-892615.jpeg?cs=srgb&dl=pexels-daria-shevtsova-892615.jpg&fm=jpg",
    cost: 15000,
  },
  {
    id: "6",
    title: "Mixed exotic salad served with sauce in summer cafe",
    description: "Salad",
    categorie: "Food",

    picture: "https://images.pexels.com/photos/4551971/pexels-photo-4551971.jpeg?cs=srgb&dl=pexels-roman-odintsov-4551971.jpg&fm=jpg",
    cost: 27000,
  },
  {
    id: "7",
    title: "Cappuccino",
    description: "Cappuccino in White Ceramic Cup on White Ceramic Saucer",
    categorie: "Drink",

    picture: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?cs=srgb&dl=pexels-tyler-nix-2396220.jpg&fm=jpg",
    cost: 30000,
  },
];

export const getProducts = () => {
  return books;
};
