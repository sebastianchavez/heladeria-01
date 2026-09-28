const MOCK_DATA = {
  categories: [
    { id: 1, name: "Clásicos", icon: "🍦", description: "Sabores de siempre", image: "https://images.unsplash.com/photo-1497034825429-c343d2c6a6a8?w=400&h=300&fit=crop" },
    { id: 2, name: "Premium", icon: "🍨", description: "Sabores exclusivos", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop" },
    { id: 3, name: "Frutales", icon: "🍓", description: "Con frutas naturales", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop" },
    { id: 4, name: "Especiales", icon: "🧁", description: "Ediciones limitadas", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop" },
    { id: 5, name: "Veganos", icon: "🌱", description: "Sin lácteos", image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400&h=300&fit=crop" },
    { id: 6, name: "Paletas", icon: "🍡", description: "Helados en palito", image: "https://images.unsplash.com/photo-1550371656-516c56d2d417?w=400&h=300&fit=crop" }
  ],

  products: [
    { id: 1, name: "Helado de Fresa", category: "Clásicos", categoryId: 1, price: 45.00, originalPrice: 55.00, description: "Delicioso helado de fresa natural con trozos de fruta real. Elaborado con fresas frescas de temporada para un sabor auténtico e irresistible.", ingredients: ["Leche", "Crema", "Fresas naturales", "Azúcar", "Vainilla"], image: "https://images.unsplash.com/photo-1497034825429-c343d2c6a6a8?w=500&h=500&fit=crop", rating: 4.5, reviewCount: 128, inStock: true, featured: true, bestSeller: true, images: ["https://images.unsplash.com/photo-1497034825429-c343d2c6a6a8?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1516559828984-fb3b999bfbfc?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=600&h=600&fit=crop"] },
    { id: 2, name: "Helado de Chocolate", category: "Clásicos", categoryId: 1, price: 48.00, description: "Intenso helado de chocolate belga con cacao premium. Una experiencia chocolatosa para los verdaderos amantes del cacao.", ingredients: ["Leche", "Crema", "Cacao belga", "Chocolate oscuro", "Azúcar"], image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=500&fit=crop", rating: 4.8, reviewCount: 215, inStock: true, featured: true, bestSeller: true, images: ["https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=600&fit=crop"] },
    { id: 3, name: "Helado de Vainilla", category: "Clásicos", categoryId: 1, price: 42.00, description: "Clásico helado de vainilla de Madagascar con semillas naturales. Suave, cremoso y perfecto para cualquier ocasión.", ingredients: ["Leche", "Crema", "Vainilla de Madagascar", "Azúcar", "Yema de huevo"], image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&h=500&fit=crop", rating: 4.3, reviewCount: 96, inStock: true, featured: false, bestSeller: true, images: ["https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=600&fit=crop"] },
    { id: 4, name: "Helado de Mango", category: "Frutales", categoryId: 3, price: 50.00, description: "Refrescante helado de mango ataulfo maduro. Sabor tropical intenso con textura sedosa que te transporta al paraíso.", ingredients: ["Leche", "Mango ataulfo", "Crema", "Azúcar", "Limón"], image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&h=500&fit=crop", rating: 4.6, reviewCount: 87, inStock: true, featured: true, bestSeller: false, images: ["https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=600&fit=crop"] },
    { id: 5, name: "Helado de Pistache", category: "Premium", categoryId: 2, price: 65.00, description: "Exquisito helado de pistache importado de Sicilia. Elaborado artesanalmente con los mejores pistaches para un sabor único.", ingredients: ["Leche", "Crema", "Pistache de Sicilia", "Azúcar", "Sal marina"], image: "https://images.unsplash.com/photo-1515037027986-4d14d3b5b4c3?w=500&h=500&fit=crop", rating: 4.9, reviewCount: 64, inStock: true, featured: true, bestSeller: true, images: ["https://images.unsplash.com/photo-1515037027986-4d14d3b5b4c3?w=600&h=600&fit=crop"] },
    { id: 6, name: "Helado de Coco", category: "Veganos", categoryId: 5, price: 52.00, description: "Helado vegano de coco cremoso y natural. Hecho con leche de coco orgánica, perfecto para quienes buscan opciones sin lácteos.", ingredients: ["Leche de coco", "Coco rallado", "Azúcar de coco", "Vainilla", "Agar-agar"], image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&h=500&fit=crop", rating: 4.4, reviewCount: 53, inStock: true, featured: false, bestSeller: false, images: ["https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&h=600&fit=crop"] },
    { id: 7, name: "Helado de Cookies & Cream", category: "Especiales", categoryId: 4, price: 55.00, description: "Helado de vainilla con trozos generosos de galletas de chocolate. La combinación perfecta de cremosidad y crunch.", ingredients: ["Leche", "Crema", "Galletas Oreo", "Vainilla", "Chocolate"], image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&h=500&fit=crop", rating: 4.7, reviewCount: 142, inStock: true, featured: true, bestSeller: true, images: ["https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=600&fit=crop"] },
    { id: 8, name: "Paleta de Frutos Rojos", category: "Paletas", categoryId: 6, price: 35.00, description: "Paleta artesanal de frutos rojos con trozos reales de fruta. Refrescante, natural y perfecta para los días calurosos.", ingredients: ["Fresa", "Frambuesa", "Arándano", "Zarzamora", "Azúcar"], image: "https://images.unsplash.com/photo-1550371656-516c56d2d417?w=500&h=500&fit=crop", rating: 4.2, reviewCount: 76, inStock: true, featured: false, bestSeller: false, images: ["https://images.unsplash.com/photo-1550371656-516c56d2d417?w=600&h=600&fit=crop"] },
    { id: 9, name: "Helado de Dulce de Leche", category: "Clásicos", categoryId: 1, price: 48.00, description: "Cremoso helado con swirl de dulce de leche artesanal. Una combinación irresistible de helado y caramelo.", ingredients: ["Leche", "Crema", "Dulce de leche", "Azúcar", "Caramelo"], image: "https://images.unsplash.com/photo-1516559828984-fb3b999bfbfc?w=500&h=500&fit=crop", rating: 4.8, reviewCount: 189, inStock: true, featured: true, bestSeller: true, images: ["https://images.unsplash.com/photo-1516559828984-fb3b999bfbfc?w=600&h=600&fit=crop"] },
    { id: 10, name: "Helado de Matcha", category: "Premium", categoryId: 2, price: 62.00, description: "Helado de té matcha japonés ceremonial. Sabor único con antioxidantes naturales y un toque de elegancia.", ingredients: ["Leche", "Crema", "Matcha ceremonial", "Azúcar", "Miel"], image: "https://images.unsplash.com/photo-1536221358379-425430ab166e?w=500&h=500&fit=crop", rating: 4.5, reviewCount: 48, inStock: true, featured: false, bestSeller: false, images: ["https://images.unsplash.com/photo-1536221358379-425430ab166e?w=600&h=600&fit=crop"] },
    { id: 11, name: "Helado de Limón", category: "Frutales", categoryId: 3, price: 40.00, description: "Sorbet refrescante de limón natural. Ligero, ácido y perfecto para limpiar el paladar o disfrutar solo.", ingredients: ["Limón", "Agua", "Azúcar", "Clara de huevo", "Menta"], image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500&h=500&fit=crop", rating: 4.1, reviewCount: 67, inStock: true, featured: false, bestSeller: false, images: ["https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&h=600&fit=crop"] },
    { id: 12, name: "Helado de Oreo", category: "Especiales", categoryId: 4, price: 55.00, description: "Helado base de crema con abundantes trozos de galleta Oreo. Para los amantes de las galletas más famosas del mundo.", ingredients: ["Leche", "Crema", "Galletas Oreo", "Azúcar", "Chocolate"], image: "https://images.unsplash.com/photo-1633933358115-a3a733592944?w=500&h=500&fit=crop", rating: 4.6, reviewCount: 156, inStock: true, featured: true, bestSeller: true, images: ["https://images.unsplash.com/photo-1633933358115-a3a733592944?w=600&h=600&fit=crop"] },
    { id: 13, name: "Paleta de Chocolate", category: "Paletas", categoryId: 6, price: 32.00, description: "Paleta de chocolate cubierto con chispas de colores. Divertida, deliciosa y perfecta para los niños.", ingredients: ["Chocolate", "Leche", "Chispas de colores", "Azúcar"], image: "https://images.unsplash.com/photo-1519744727524-0d957691f577?w=500&h=500&fit=crop", rating: 4.3, reviewCount: 98, inStock: true, featured: false, bestSeller: false, images: ["https://images.unsplash.com/photo-1519744727524-0d957691f577?w=600&h=600&fit=crop"] },
    { id: 14, name: "Helado de Açaí", category: "Veganos", categoryId: 5, price: 58.00, description: "Helado vegano de açaí brasileño con granola. Superalimento convertido en un postre delicioso y nutritivo.", ingredients: ["Açaí", "Plátano", "Leche de almendra", "Granola", "Miel de agave"], image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&h=500&fit=crop", rating: 4.7, reviewCount: 41, inStock: true, featured: true, bestSeller: false, images: ["https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=600&fit=crop"] },
    { id: 15, name: "Helado de Caramelo Salado", category: "Premium", categoryId: 2, price: 58.00, description: "Helado de caramelo con cristales de sal de mar. La combinación perfecta de dulce y salado en cada cucharada.", ingredients: ["Leche", "Crema", "Caramelo", "Sal de mar", "Mantequilla"], image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=500&fit=crop", rating: 4.8, reviewCount: 112, inStock: true, featured: true, bestSeller: true, images: ["https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop"] },
    { id: 16, name: "Helado de Maracuyá", category: "Frutales", categoryId: 3, price: 50.00, description: "Helado tropical de maracuyá con un toque ácido y dulce. Una explosión de sabor exótico en cada bocado.", ingredients: ["Maracuyá", "Leche", "Crema", "Azúcar", "Limón"], image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&h=500&fit=crop", rating: 4.4, reviewCount: 59, inStock: true, featured: false, bestSeller: false, images: ["https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&h=600&fit=crop"] }
  ],

  reviews: [
    { id: 1, productId: 1, userId: 1, userName: "María García", rating: 5, comment: "¡El mejor helado de fresa que he probado! Las fresas se sienten muy frescas y naturales.", date: "2026-09-15" },
    { id: 2, productId: 1, userId: 2, userName: "Carlos López", rating: 4, comment: "Muy rico, aunque me gustaría que tuviera más trozos de fruta. Pero el sabor es excelente.", date: "2026-09-10" },
    { id: 3, productId: 1, userId: 3, userName: "Ana Martínez", rating: 5, comment: "Increíble sabor. Lo pedí para mi cumpleaños y todos quedaron encantados.", date: "2026-09-08" },
    { id: 4, productId: 2, userId: 1, userName: "María García", rating: 5, comment: "El chocolate es intenso y delicioso. Se nota que es de alta calidad.", date: "2026-09-14" },
    { id: 5, productId: 2, userId: 4, userName: "Roberto Hernández", rating: 5, comment: "El mejor helado de chocolate de la ciudad. Sin duda alguna.", date: "2026-09-12" },
    { id: 6, productId: 5, userId: 2, userName: "Carlos López", rating: 5, comment: "El pistache es auténtico, no como otros lugares que usan saborizante. ¡Vale cada peso!", date: "2026-09-11" },
    { id: 7, productId: 7, userId: 3, userName: "Ana Martínez", rating: 4, comment: "Las galletas le dan un toque crujiente delicioso. Muy buen helado.", date: "2026-09-09" },
    { id: 8, productId: 9, userId: 4, userName: "Roberto Hernández", rating: 5, comment: "El dulce de leche es perfecto. Me recuerda al que hacía mi abuelita.", date: "2026-09-07" },
    { id: 9, productId: 12, userId: 1, userName: "María García", rating: 5, comment: "Para los amantes de Oreo, este helado es un sueño hecho realidad.", date: "2026-09-06" },
    { id: 10, productId: 15, userId: 2, userName: "Carlos López", rating: 4, comment: "La combinación de dulce y salado es adictiva. Muy original.", date: "2026-09-05" }
  ],

  team: [
    { id: 1, name: "Don Ricardo Mendoza", role: "Fundador & Chef Principal", bio: "Con más de 30 años de experiencia en repostería, Don Ricardo fundó Dulce Tentación con la visión de crear los mejores helados artesanales.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
    { id: 2, name: "Sofía Mendoza", role: "Directora de Operaciones", bio: "Hija del fundador, Sofía combina la tradición familiar con innovación para llevar Dulce Tentación al siguiente nivel.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
    { id: 3, name: "Miguel Ángel Torres", role: "Chef Heladero", bio: "Especialista en sabores únicos y técnicas artesanales. Miguel crea las recetas más innovadoras de nuestra carta.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
    { id: 4, name: "Laura Jiménez", role: "Gerente de Tienda", bio: "Laura se asegura de que cada cliente tenga una experiencia dulce y memorable en nuestra tienda.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
    { id: 5, name: "Diego Ramírez", role: "Encargado de Calidad", bio: "Diego supervisa que cada helado cumpla con nuestros estándares de calidad y frescura.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
    { id: 6, name: "Valentina Ruiz", role: "Diseñadora de Experiencia", bio: "Valentina crea presentaciones y experiencias únicas que hacen de cada visita algo especial.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" }
  ],

  testimonials: [
    { id: 1, name: "Patricia Sánchez", text: "Los mejores helados que he probado en mi vida. El de pistache es simplemente divino.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
    { id: 2, name: "Fernando Gómez", text: "Cada vez que vengo descubro un sabor nuevo increíble. El servicio es excepcional.", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { id: 3, name: "Isabel Torres", text: "Llevo a mis hijos cada fin de semana. Les encanta la variedad de sabores y las paletas.", rating: 4, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" }
  ],

  orders: [
    {
      id: "ORD-2026-001",
      userId: 1,
      items: [
        { productId: 1, name: "Helado de Fresa", price: 45.00, quantity: 2, image: "https://images.unsplash.com/photo-1497034825429-c343d2c6a6a8?w=100&h=100&fit=crop" },
        { productId: 5, name: "Helado de Pistache", price: 65.00, quantity: 1, image: "https://images.unsplash.com/photo-1515037027986-4d14d3b5b4c3?w=100&h=100&fit=crop" }
      ],
      subtotal: 155.00,
      shipping: 50.00,
      total: 205.00,
      status: "delivered",
      date: "2026-09-10",
      shippingAddress: { street: "Av. Reforma 123", city: "Ciudad de México", state: "CDMX", zipCode: "06600", country: "México" },
      shippingMethod: "express",
      paymentMethod: "card"
    },
    {
      id: "ORD-2026-002",
      userId: 1,
      items: [
        { productId: 2, name: "Helado de Chocolate", price: 48.00, quantity: 3, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=100&h=100&fit=crop" },
        { productId: 7, name: "Helado de Cookies & Cream", price: 55.00, quantity: 2, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=100&h=100&fit=crop" }
      ],
      subtotal: 254.00,
      shipping: 0.00,
      total: 254.00,
      status: "shipped",
      date: "2026-09-18",
      shippingAddress: { street: "Calle Juárez 456", city: "Ciudad de México", state: "CDMX", zipCode: "06010", country: "México" },
      shippingMethod: "standard",
      paymentMethod: "paypal"
    },
    {
      id: "ORD-2026-003",
      userId: 1,
      items: [
        { productId: 9, name: "Helado de Dulce de Leche", price: 48.00, quantity: 1, image: "https://images.unsplash.com/photo-1516559828984-fb3b999bfbfc?w=100&h=100&fit=crop" }
      ],
      subtotal: 48.00,
      shipping: 50.00,
      total: 98.00,
      status: "processing",
      date: "2026-09-22",
      shippingAddress: { street: "Av. Reforma 123", city: "Ciudad de México", state: "CDMX", zipCode: "06600", country: "México" },
      shippingMethod: "express",
      paymentMethod: "card"
    }
  ],

  currentUser: null,

  users: [
    { id: 1, name: "Juan Pérez", email: "juan@email.com", phone: "55 1234 5678" }
  ],

  shippingMethods: [
    { id: "standard", name: "Envío Estándar", price: 0, description: "3-5 días hábiles", icon: "📦" },
    { id: "express", name: "Envío Express", price: 50, description: "1-2 días hábiles", icon: "🚀" },
    { id: "same_day", name: "Envío Mismo Día", price: 99, description: "Entrega hoy", icon: "⚡" }
  ],

  paymentMethods: [
    { id: "card", name: "Tarjeta de Crédito/Débito", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "🅿️" },
    { id: "oxxo", name: "OXXO", icon: "🏪" },
    { id: "transfer", name: "Transferencia Bancaria", icon: "🏦" }
  ]
};
