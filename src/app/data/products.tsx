import { Coffee } from 'lucide-react'

export const products = [
  // Hot Coffee
  {
    id: 'espresso',
    name: "Espresso",
    category: "Hot Coffee",
    price: "$4.50",
    description: "Rich and bold single shot",
    longDescription: "Our signature espresso is crafted with precision using premium arabica beans, resulting in a perfectly balanced shot with rich crema and intense flavor notes.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Premium Arabica Beans", "Filtered Water"],
  },
  {
    id: 'cappuccino',
    name: "Cappuccino",
    category: "Hot Coffee",
    price: "$5.50",
    description: "Espresso with steamed milk foam",
    longDescription: "A perfect blend of espresso and steamed milk, topped with velvety milk foam. A classic Italian coffee drink.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
  },
  {
    id: 'latte',
    name: "Latte",
    category: "Hot Coffee",
    price: "$5.00",
    description: "Espresso with steamed milk",
    longDescription: "Smooth and creamy, our latte combines rich espresso with perfectly steamed milk for a balanced coffee experience.",
    image: "https://images.unsplash.com/photo-1569161031678-f49b4b9ca1c2?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Espresso", "Steamed Milk"],
  },
  // Cold Drinks
  {
    id: 'iced-latte',
    name: "Iced Latte",
    category: "Cold Drinks",
    price: "$5.50",
    description: "Chilled espresso with cold milk",
    longDescription: "A refreshing combination of our signature espresso and cold milk served over ice.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Espresso", "Cold Milk", "Ice"],
  },
  {
    id: 'cold-brew',
    name: "Cold Brew",
    category: "Cold Drinks",
    price: "$5.75",
    description: "24-hour steeped coffee",
    longDescription: "Smooth and low-acid coffee that's cold-brewed for 24 hours to extract the perfect flavor.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Specialty Coffee Beans", "Filtered Water"],
  },
  // Tea Selection
  {
    id: 'green-tea',
    name: "Green Tea",
    category: "Tea Selection",
    price: "$4.00",
    description: "Premium Japanese sencha",
    longDescription: "Premium Japanese sencha green tea with a smooth, refreshing taste and subtle umami notes.",
    image: "https://images.unsplash.com/photo-1582793988951-9aed5555d7d3?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Japanese Sencha Leaves"],
  },
  {
    id: 'matcha',
    name: "Matcha Latte",
    category: "Tea Selection",
    price: "$5.75",
    description: "Ceremonial grade green tea powder",
    longDescription: "Traditional Japanese matcha prepared with ceremonial grade green tea powder and steamed milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Ceremonial Grade Matcha", "Steamed Milk"],
  },
  // Pastries
  {
    id: 'croissant',
    name: "Croissant",
    category: "Pastries",
    price: "$3.75",
    description: "Buttery, flaky pastry",
    longDescription: "Freshly baked butter croissants with a perfectly flaky exterior and soft, layered interior.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Butter", "Flour", "Yeast"],
  },
  {
    id: 'muffin',
    name: "Blueberry Muffin",
    category: "Pastries",
    price: "$3.50",
    description: "Daily baked assortment",
    longDescription: "Freshly baked blueberry muffins made with real wild blueberries and a streusel topping.",
    image: "https://images.unsplash.com/photo-1607958996333-41785b3dcb88?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Fresh Blueberries", "Flour", "Butter", "Sugar"],
  }
]

export type Product = (typeof products)[number]

export const menuCategories = [
  {
    name: "Hot Coffee",
    icon: <Coffee className="w-6 h-6" />,
    items: products.filter(p => p.category === "Hot Coffee")
  },
  {
    name: "Cold Drinks",
    icon: <Coffee className="w-6 h-6" />,
    items: products.filter(p => p.category === "Cold Drinks")
  },
  {
    name: "Tea Selection",
    icon: <Coffee className="w-6 h-6" />,
    items: products.filter(p => p.category === "Tea Selection")
  },
  {
    name: "Pastries",
    icon: <Coffee className="w-6 h-6" />,
    items: products.filter(p => p.category === "Pastries")
  }
]