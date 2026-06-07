export const products = [
  // Smart Watches
  { id: 1, name: "Galaxy Watch Ultra", price: 349, oldPrice: 499, category: "Watches", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", rating: 4.9, reviews: 234, isNew: true, discount: 30 },
  { id: 2, name: "Apple Watch Series 9", price: 399, oldPrice: 449, category: "Watches", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", rating: 4.8, reviews: 189, isNew: true, discount: 11 },
  { id: 16, name: "VR Headset Pro", price: 299, oldPrice: 499, category: "Gadgets", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400", rating: 4.7, reviews: 345, isNew: true, discount: 40 },
  
  // Audio
  { id: 4, name: "AirPods Max Pro", price: 249, oldPrice: 399, category: "Audio", image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.8, reviews: 189, isNew: false, discount: 38 },
  { id: 5, name: "Sony WH-1000XM5", price: 299, oldPrice: 399, category: "Audio", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400", rating: 4.9, reviews: 567, isNew: true, discount: 25 },
  { id: 6, name: "Bose QC45", price: 279, oldPrice: 329, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", rating: 4.7, reviews: 234, isNew: false, discount: 15 },
  
  // Gaming
  { id: 7, name: "Quantum Headset X", price: 179, oldPrice: 259, category: "Gaming", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", rating: 4.7, reviews: 456, isNew: true, discount: 31 },
  { id: 8, name: "Razer BlackShark V2", price: 99, oldPrice: 159, category: "Gaming", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400", rating: 4.6, reviews: 789, isNew: false, discount: 38 },
  { id: 9, name: "Logitech G Pro X", price: 129, oldPrice: 199, category: "Gaming", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", rating: 4.8, reviews: 345, isNew: false, discount: 35 },
  
  // Accessories
  { id: 10, name: "Neo Mouse Pro", price: 59, oldPrice: 89, category: "Accessories", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400", rating: 4.6, reviews: 567, isNew: false, discount: 34 },
  { id: 11, name: "Aero Laptop Stand", price: 99, oldPrice: 149, category: "Accessories", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400", rating: 4.8, reviews: 123, isNew: true, discount: 34 },
  { id: 12, name: "Mechanical Keyboard", price: 89, oldPrice: 149, category: "Accessories", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400", rating: 4.7, reviews: 456, isNew: true, discount: 40 },
  { id: 13, name: "USB-C Hub 7in1", price: 49, oldPrice: 79, category: "Accessories", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", rating: 4.5, reviews: 234, isNew: false, discount: 38 },
  
  // Gadgets
  { id: 14, name: "4K Drone X", price: 599, oldPrice: 899, category: "Gadgets", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400", rating: 4.9, reviews: 89, isNew: true, discount: 33 },
  { id: 15, name: "GoPro Hero 12", price: 399, oldPrice: 499, category: "Gadgets", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", rating: 4.8, reviews: 234, isNew: true, discount: 20 },
  
];

export const categories = ['All', 'Watches', 'Audio', 'Gaming', 'Accessories', 'Gadgets'];

// Products with 34%+ discount for Hot Deals
export const dealsProducts = products.filter(p => p.discount >= 34);