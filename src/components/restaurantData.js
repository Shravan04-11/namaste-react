const restaurantData = [
  {
    id: 1,
    name: "Meghna Foods",
    cuisines: "South Indian, Biryani",
    rating: "4.4 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Paradise Biryani",
    cuisines: "Hyderabadi, Biryani",
    rating: "4.3 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Nagarjuna",
    cuisines: "Andhra, South Indian",
    rating: "4.5 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Udupi Palace",
    cuisines: "South Indian, Vegetarian",
    rating: "4.2 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "The Curry House",
    cuisines: "North Indian, Mughlai",
    rating: "4.1 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Coastal Catch",
    cuisines: "Seafood, Coastal",
    rating: "4.6 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Bengaluru Bites",
    cuisines: "Indian, Street Food",
    rating: "4.0 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Amma's Kitchen",
    cuisines: "Home Style, South Indian",
    rating: "4.4 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Punjab Grill",
    cuisines: "Punjabi, North Indian",
    rating: "4.5 stars",
    deliveryTime: "40-45 mins",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Chaat Junction",
    cuisines: "Chaat, Snacks",
    rating: "4.3 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Masala Library",
    cuisines: "Indian, Fine Dining",
    rating: "4.7 stars",
    deliveryTime: "45-50 mins",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Dosa Corner",
    cuisines: "Dosa, South Indian",
    rating: "4.2 stars",
    deliveryTime: "15-20 mins",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Royal Thali",
    cuisines: "Rajasthani, Thali",
    rating: "4.4 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Wok This Way",
    cuisines: "Chinese, Asian",
    rating: "4.1 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Tandoor Tales",
    cuisines: "Kebabs, Mughlai",
    rating: "4.6 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Idli Express",
    cuisines: "South Indian, Breakfast",
    rating: "4.0 stars",
    deliveryTime: "15-20 mins",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Green Leaf Cafe",
    cuisines: "Healthy, Vegetarian",
    rating: "4.3 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Biryani Blues",
    cuisines: "Biryani, Hyderabadi",
    rating: "4.5 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "Pizza Piazza",
    cuisines: "Italian, Pizza",
    rating: "4.2 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Burger Barn",
    cuisines: "Burgers, American",
    rating: "4.1 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    name: "Namma Oota",
    cuisines: "Kannada, South Indian",
    rating: "4.4 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    name: "Kolkata Kathi Roll",
    cuisines: "Rolls, Bengali",
    rating: "4.3 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    name: "Momos & More",
    cuisines: "Tibetan, Fast Food",
    rating: "4.0 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    name: "Saffron Garden",
    cuisines: "Persian, North Indian",
    rating: "4.6 stars",
    deliveryTime: "40-45 mins",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    name: "Taco Fiesta",
    cuisines: "Mexican, Fast Food",
    rating: "4.2 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    name: "The Breakfast Club",
    cuisines: "Breakfast, Cafe",
    rating: "4.5 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    name: "Mangalore Pearl",
    cuisines: "Coastal, Seafood",
    rating: "4.4 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    name: "Pasta Street",
    cuisines: "Italian, Pasta",
    rating: "4.1 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    name: "Kebab Kingdom",
    cuisines: "Kebabs, Mughlai",
    rating: "4.7 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 30,
    name: "Rasoi Junction",
    cuisines: "Gujarati, Vegetarian",
    rating: "4.3 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 31,
    name: "Noodle Nation",
    cuisines: "Asian, Noodles",
    rating: "4.0 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 32,
    name: "Rice Bowl Co.",
    cuisines: "Asian, Rice Bowls",
    rating: "4.2 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 33,
    name: "The Dessert Room",
    cuisines: "Desserts, Bakery",
    rating: "4.5 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 34,
    name: "Chai & Snacks",
    cuisines: "Tea, Snacks",
    rating: "4.1 stars",
    deliveryTime: "15-20 mins",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 35,
    name: "Bombay Sandwich Co.",
    cuisines: "Sandwiches, Street Food",
    rating: "4.3 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 36,
    name: "Kerala Kitchen",
    cuisines: "Kerala, Seafood",
    rating: "4.6 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 37,
    name: "The Ramen Bar",
    cuisines: "Japanese, Ramen",
    rating: "4.4 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 38,
    name: "Maharaja's Table",
    cuisines: "Royal Indian, Thali",
    rating: "4.8 stars",
    deliveryTime: "45-50 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 39,
    name: "Falafel Factory",
    cuisines: "Middle Eastern, Healthy",
    rating: "4.2 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1593001872095-7d5b3868d6d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 40,
    name: "Pancake House",
    cuisines: "Breakfast, American",
    rating: "4.3 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 41,
    name: "Andhra Spice",
    cuisines: "Andhra, Biryani",
    rating: "4.5 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 42,
    name: "The Salad Story",
    cuisines: "Salads, Healthy",
    rating: "4.0 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 43,
    name: "Mithai Junction",
    cuisines: "Sweets, Indian",
    rating: "4.4 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1601303516534-7c4f4c7e8f3c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 44,
    name: "Grill House",
    cuisines: "Grills, Continental",
    rating: "4.6 stars",
    deliveryTime: "35-40 mins",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 45,
    name: "Pani Puri Point",
    cuisines: "Chaat, Street Food",
    rating: "4.1 stars",
    deliveryTime: "15-20 mins",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 46,
    name: "Basil & Bean",
    cuisines: "Cafe, Italian",
    rating: "4.3 stars",
    deliveryTime: "25-30 mins",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 47,
    name: "Chennai Express",
    cuisines: "Tamil, South Indian",
    rating: "4.5 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 48,
    name: "Urban Tiffin",
    cuisines: "Tiffin, Vegetarian",
    rating: "4.2 stars",
    deliveryTime: "20-25 mins",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 49,
    name: "Spice Route",
    cuisines: "Indian, Asian Fusion",
    rating: "4.7 stars",
    deliveryTime: "40-45 mins",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 50,
    name: "Food Street Social",
    cuisines: "Multi-Cuisine, Snacks",
    rating: "4.4 stars",
    deliveryTime: "30-35 mins",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  }
]

export default restaurantData