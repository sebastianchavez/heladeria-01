# 🍦 Dulce Tentación - Heladería Artesanal

E-commerce completo para heladería desarrollado con **HTML5**, **Tailwind CSS** y **JavaScript nativo**. Incluye diseño responsivo, datos mockeados y funcionalidad de carrito de compras persistente con `localStorage`.

## 🚀 Inicio Rápido

No requiere instalación. Simplemente abre `index.html` en tu navegador.

```bash
# Opcional: servir con un servidor local
npx serve .
# o
python -m http.server 8000
```

## 📄 Páginas

| Página | Archivo | Descripción |
|--------|---------|-------------|
| Inicio | `index.html` | Landing page con categorías, best sellers, destacados y testimonios |
| Nosotros | `about.html` | Historia, valores, equipo y timeline de la empresa |
| Productos | `products.html` | Catálogo con filtros por categoría, precio, búsqueda y ordenamiento |
| Contacto | `contact.html` | Formulario de contacto, horarios y ubicación |
| Detalle Producto | `product-detail.html` | Galería, ingredientes, selector de cantidad y reseñas |
| Carrito | `cart.html` | Gestión de productos, cupones y resumen del pedido |
| Checkout | `checkout.html` | Dirección de envío, método de envío y medio de pago |
| Confirmación | `order-confirmation.html` | Comprobante con botones de imprimir e historial |
| Mi Perfil | `profile.html` | Historial de pedidos del usuario |
| Detalle Pedido | `order-detail.html` | Información completa del pedido |
| Reseña | `review.html` | Formulario de reseña con calificación de estrellas |
| Privacidad | `privacy.html` | Políticas de privacidad |
| Términos | `terms.html` | Términos y condiciones |
| Registro | `register.html` | Registro de usuario con indicador de fortaleza de contraseña |
| Login | `login.html` | Autenticación con opción de mostrar/ocultar contraseña |
| Recuperar | `forgot-password.html` | Recuperación de contraseña |

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **Tailwind CSS** (CDN) - Estilos utility-first
- **JavaScript (ES6+)** - Lógica de la aplicación sin frameworks
- **LocalStorage** - Persistencia de carrito, sesión y pedidos
- **Google Fonts** - Poppins e Inter
- **Unsplash** - Imágenes placeholder

## 🎨 Diseño

- **Estilo**: Playful & Colorful
- **Paleta**: Rosa (#FF6B9D), Turquesa (#4ECDC4), Amarillo (#FFE66D), Crema (#FFF9F5)
- **Responsive**: Mobile-first, adaptable a todos los tamaños
- **Animaciones**: Fade-in, float, hover effects

## 📁 Estructura

```
heladeria-01/
├── index.html
├── about.html
├── products.html
├── contact.html
├── product-detail.html
├── cart.html
├── checkout.html
├── order-confirmation.html
├── profile.html
├── order-detail.html
├── review.html
├── privacy.html
├── terms.html
├── register.html
├── login.html
├── forgot-password.html
├── css/
│   └── custom.css
├── js/
│   ├── utils.js
│   ├── cart.js
│   ├── auth.js
│   └── products.js
└── data/
    └── mock-data.js
```

## 🧪 Usuario de Prueba

- **Email**: `juan@email.com`
- **Contraseña**: cualquier valor
- También puedes registrar un usuario nuevo desde `register.html`

## ⚙️ Funcionalidades

- Carrito de compras con persistencia en localStorage
- Autenticación de usuarios (registro, login, logout)
- Filtrado y búsqueda de productos
- Sistema de reseñas con calificación de estrellas
- Proceso completo de checkout (dirección, envío, pago)
- Generación de comprobantes imprimibles
- Historial de pedidos y detalle de orden
- Notificaciones toast
- Modales de confirmación
- Menú móvil responsive
- Indicador de fortaleza de contraseña
