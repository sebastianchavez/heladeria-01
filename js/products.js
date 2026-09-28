const Products = {
  getAll() {
    return MOCK_DATA.products;
  },

  getById(id) {
    return MOCK_DATA.products.find(p => p.id === parseInt(id));
  },

  getByCategory(categoryId) {
    if (!categoryId || categoryId === 'all') return this.getAll();
    return MOCK_DATA.products.filter(p => p.categoryId === parseInt(categoryId));
  },

  getFeatured() {
    return MOCK_DATA.products.filter(p => p.featured);
  },

  getBestSellers() {
    return MOCK_DATA.products.filter(p => p.bestSeller);
  },

  search(query) {
    if (!query) return this.getAll();
    const q = query.toLowerCase();
    return MOCK_DATA.products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  },

  filter(options = {}) {
    let results = this.getAll();

    if (options.category && options.category !== 'all') {
      results = results.filter(p => p.categoryId === parseInt(options.category));
    }

    if (options.minPrice) {
      results = results.filter(p => p.price >= parseFloat(options.minPrice));
    }

    if (options.maxPrice) {
      results = results.filter(p => p.price <= parseFloat(options.maxPrice));
    }

    if (options.search) {
      const q = options.search.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (options.inStock) {
      results = results.filter(p => p.inStock);
    }

    if (options.sort) {
      switch (options.sort) {
        case 'price_asc':
          results.sort((a, b) => a.price - b.price);
          break;
        case 'price_desc':
          results.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          results.sort((a, b) => b.rating - a.rating);
          break;
        case 'name':
          results.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }

    return results;
  },

  getReviews(productId) {
    return MOCK_DATA.reviews.filter(r => r.productId === parseInt(productId));
  },

  addReview(productId, userId, rating, comment) {
    const review = {
      id: MOCK_DATA.reviews.length + 1,
      productId: parseInt(productId),
      userId: parseInt(userId),
      userName: Auth.getCurrentUser().name,
      rating: parseInt(rating),
      comment,
      date: new Date().toISOString().split('T')[0]
    };
    MOCK_DATA.reviews.push(review);
    return review;
  },

  getCategories() {
    return MOCK_DATA.categories;
  },

  renderGrid(products, containerId = 'products-grid') {
    const container = $(`#${containerId}`);
    if (!container) return;

    if (products.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12">
          <span class="text-6xl">🔍</span>
          <p class="text-gray-500 mt-4 text-lg">No se encontraron productos</p>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map(p => createProductCard(p)).join('');
  }
};
