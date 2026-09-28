function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function formatPrice(price) {
  return `$${price.toFixed(2)} MXN`;
}

function generateStars(rating, interactive = false, productId = null) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (interactive) {
      const filled = i <= Math.round(rating);
      html += `<button type="button" class="star-btn text-2xl cursor-pointer transition-transform hover:scale-125 ${filled ? 'text-yellow-400' : 'text-gray-300'}" data-rating="${i}" data-product="${productId || ''}">★</button>`;
    } else {
      const filled = i <= Math.floor(rating);
      const half = !filled && i <= rating;
      html += `<span class="text-lg ${filled || half ? 'text-yellow-400' : 'text-gray-300'}">${filled ? '★' : half ? '★' : '☆'}</span>`;
    }
  }
  return html;
}

function showToast(message, type = 'success') {
  const existing = $('.toast-container');
  if (existing) existing.remove();

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  const toast = document.createElement('div');
  toast.className = 'toast-container fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl text-white transform translate-x-full transition-transform duration-300 ' + colors[type];
  toast.innerHTML = `
    <span class="text-xl font-bold">${icons[type]}</span>
    <span class="font-medium">${message}</span>
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-x-full');
    toast.classList.add('translate-x-0');
  });

  setTimeout(() => {
    toast.classList.remove('translate-x-0');
    toast.classList.add('translate-x-full');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showModal(title, content, actions = []) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
  modal.id = 'app-modal';

  let actionsHtml = actions.map(a =>
    `<button class="px-6 py-2 rounded-lg font-medium transition-colors ${a.class || 'bg-pink-500 text-white hover:bg-pink-600'}" onclick="${a.onclick}">${a.label}</button>`
  ).join('');

  modal.innerHTML = `
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" onclick="closeModal()"></div>
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform scale-95 opacity-0 transition-all duration-300" id="modal-content">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-gray-800">${title}</h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
      </div>
      <div class="text-gray-600 mb-6">${content}</div>
      <div class="flex gap-3 justify-end">${actionsHtml}</div>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    $('#modal-content').classList.remove('scale-95', 'opacity-0');
    $('#modal-content').classList.add('scale-100', 'opacity-100');
  });
}

function closeModal() {
  const modal = $('#app-modal');
  if (modal) {
    $('#modal-content').classList.remove('scale-100', 'opacity-100');
    $('#modal-content').classList.add('scale-95', 'opacity-0');
    setTimeout(() => modal.remove(), 300);
  }
}

function getStatusBadge(status) {
  const badges = {
    processing: { class: 'bg-yellow-100 text-yellow-800', label: 'Procesando' },
    shipped: { class: 'bg-blue-100 text-blue-800', label: 'Enviado' },
    delivered: { class: 'bg-green-100 text-green-800', label: 'Entregado' },
    cancelled: { class: 'bg-red-100 text-red-800', label: 'Cancelado' }
  };
  const badge = badges[status] || badges.processing;
  return `<span class="px-3 py-1 rounded-full text-sm font-medium ${badge.class}">${badge.label}</span>`;
}

function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function navigateTo(url) {
  window.location.href = url;
}

function initHeader() {
  const cartCount = Cart.getCount();
  const user = Auth.getCurrentUser();

  const headerHtml = `
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="index.html" class="flex items-center gap-2">
            <span class="text-3xl">🍦</span>
            <span class="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Dulce Tentación</span>
          </a>
          <nav class="hidden md:flex items-center gap-8">
            <a href="index.html" class="text-gray-700 hover:text-pink-500 font-medium transition-colors">Inicio</a>
            <a href="products.html" class="text-gray-700 hover:text-pink-500 font-medium transition-colors">Productos</a>
            <a href="about.html" class="text-gray-700 hover:text-pink-500 font-medium transition-colors">Nosotros</a>
            <a href="contact.html" class="text-gray-700 hover:text-pink-500 font-medium transition-colors">Contacto</a>
          </nav>
          <div class="flex items-center gap-4">
            <a href="cart.html" class="relative p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
              ${cartCount > 0 ? `<span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">${cartCount}</span>` : ''}
            </a>
            ${user ? `
              <div class="relative group">
                <button class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div class="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">${user.name.charAt(0)}</div>
                </button>
                <div class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div class="p-3 border-b border-gray-100">
                    <p class="font-medium text-gray-800 text-sm">${user.name}</p>
                    <p class="text-gray-500 text-xs">${user.email}</p>
                  </div>
                  <a href="profile.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors">Mi Perfil</a>
                  <a href="profile.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors">Mis Pedidos</a>
                  <button onclick="Auth.logout()" class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100">Cerrar Sesión</button>
                </div>
              </div>
            ` : `
              <a href="login.html" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                Ingresar
              </a>
            `}
            <button class="md:hidden p-2 text-gray-700" onclick="toggleMobileMenu()">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100">
        <div class="px-4 py-3 space-y-2">
          <a href="index.html" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-500 font-medium">Inicio</a>
          <a href="products.html" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-500 font-medium">Productos</a>
          <a href="about.html" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-500 font-medium">Nosotros</a>
          <a href="contact.html" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-500 font-medium">Contacto</a>
          ${!user ? `<a href="login.html" class="block px-4 py-2 rounded-lg bg-pink-500 text-white text-center font-medium">Ingresar</a>` : ''}
        </div>
      </div>
    </header>
  `;

  const headerPlaceholder = $('#header-placeholder');
  if (headerPlaceholder) headerPlaceholder.innerHTML = headerHtml;
}

function initFooter() {
  const footerHtml = `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-3xl">🍦</span>
              <span class="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Dulce Tentación</span>
            </div>
            <p class="text-gray-400 text-sm">Desde 1995 creando los mejores helados artesanales con ingredientes naturales y mucho amor.</p>
            <div class="flex gap-4 mt-4">
              <a href="#" class="text-gray-400 hover:text-pink-400 transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" class="text-gray-400 hover:text-pink-400 transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="#" class="text-gray-400 hover:text-pink-400 transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-4">Enlaces</h4>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-gray-400 hover:text-pink-400 transition-colors text-sm">Inicio</a></li>
              <li><a href="products.html" class="text-gray-400 hover:text-pink-400 transition-colors text-sm">Productos</a></li>
              <li><a href="about.html" class="text-gray-400 hover:text-pink-400 transition-colors text-sm">Nosotros</a></li>
              <li><a href="contact.html" class="text-gray-400 hover:text-pink-400 transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-4">Legal</h4>
            <ul class="space-y-2">
              <li><a href="privacy.html" class="text-gray-400 hover:text-pink-400 transition-colors text-sm">Políticas de Privacidad</a></li>
              <li><a href="terms.html" class="text-gray-400 hover:text-pink-400 transition-colors text-sm">Términos y Condiciones</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-4">Contacto</h4>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-center gap-2">📍 Av. Reforma 123, CDMX</li>
              <li class="flex items-center gap-2">📞 +52 55 1234 5678</li>
              <li class="flex items-center gap-2">✉️ hola@dulcetentacion.mx</li>
              <li class="flex items-center gap-2">🕐 Lun-Dom: 10:00 - 22:00</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Dulce Tentación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;

  const footerPlaceholder = $('#footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHtml;
}

function toggleMobileMenu() {
  const menu = $('#mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

function createProductCard(product) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return `
    <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200 transform hover:-translate-y-1">
      <div class="relative overflow-hidden">
        <a href="product-detail.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
        </a>
        ${discount > 0 ? `<span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-${discount}%</span>` : ''}
        ${product.bestSeller ? `<span class="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">⭐ Best Seller</span>` : ''}
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div class="p-4">
        <span class="text-xs font-medium text-pink-500 bg-pink-50 px-2 py-1 rounded-full">${product.category}</span>
        <a href="product-detail.html?id=${product.id}">
          <h3 class="font-bold text-gray-800 mt-2 group-hover:text-pink-500 transition-colors">${product.name}</h3>
        </a>
        <div class="flex items-center gap-1 mt-1">
          ${generateStars(product.rating)}
          <span class="text-xs text-gray-500 ml-1">(${product.reviewCount})</span>
        </div>
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center gap-2">
            <span class="text-lg font-bold text-gray-800">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="text-sm text-gray-400 line-through">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <button onclick="Cart.add(${product.id})" class="p-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all" title="Agregar al carrito">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

function initPage() {
  initHeader();
  initFooter();
}

document.addEventListener('DOMContentLoaded', initPage);
