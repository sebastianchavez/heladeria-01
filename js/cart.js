const Cart = {
  KEY: 'dulce_tentacion_cart',

  getItems() {
    const items = localStorage.getItem(this.KEY);
    return items ? JSON.parse(items) : [];
  },

  saveItems(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
  },

  add(productId, quantity = 1) {
    const items = this.getItems();
    const existing = items.find(item => item.productId === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ productId, quantity });
    }

    this.saveItems(items);
    const product = MOCK_DATA.products.find(p => p.id === productId);
    showToast(`${product.name} agregado al carrito`, 'success');
  },

  remove(productId) {
    let items = this.getItems();
    items = items.filter(item => item.productId !== productId);
    this.saveItems(items);
    showToast('Producto eliminado del carrito', 'info');
  },

  updateQuantity(productId, quantity) {
    const items = this.getItems();
    const item = items.find(i => i.productId === productId);
    if (item) {
      if (quantity <= 0) {
        this.remove(productId);
      } else {
        item.quantity = quantity;
        this.saveItems(items);
      }
    }
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadge();
  },

  getCount() {
    const items = this.getItems();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal() {
    const items = this.getItems();
    return items.reduce((sum, item) => {
      const product = MOCK_DATA.products.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  },

  getDetailedItems() {
    return this.getItems().map(item => {
      const product = MOCK_DATA.products.find(p => p.id === item.productId);
      return {
        ...item,
        product
      };
    }).filter(item => item.product);
  },

  updateBadge() {
    const badges = $$('.cart-badge');
    const count = this.getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};
