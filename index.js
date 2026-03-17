// ============================================
// IMPORT CABALLITO - JAVASCRIPT
// ============================================

// === PRODUCTS DATA ===
const products = [
  // iPhone
  { name: 'iPhone 16 Pro Max', category: 'iphone', storage: '256GB', price: 1450, badge: 'Nuevo' },
  { name: 'iPhone 16 Pro', category: 'iphone', storage: '256GB', price: 1250, badge: 'Nuevo' },
  { name: 'iPhone 16 Plus', category: 'iphone', storage: '256GB', price: 1050, badge: 'Popular' },
  { name: 'iPhone 16', category: 'iphone', storage: '128GB', price: 950, badge: 'Popular' },
  { name: 'iPhone 15 Pro Max', category: 'iphone', storage: '256GB', price: 1350, badge: '' },
  { name: 'iPhone 15 Pro', category: 'iphone', storage: '256GB', price: 1150, badge: '' },
  { name: 'iPhone 15 Plus', category: 'iphone', storage: '256GB', price: 950, badge: '' },
  { name: 'iPhone 15', category: 'iphone', storage: '128GB', price: 850, badge: '' },
  { name: 'iPhone 14 Pro Max', category: 'iphone', storage: '256GB', price: 1100, badge: '' },
  { name: 'iPhone 14 Pro', category: 'iphone', storage: '256GB', price: 950, badge: '' },
  { name: 'iPhone 14', category: 'iphone', storage: '128GB', price: 750, badge: '' },
  { name: 'iPhone 13 Pro Max', category: 'iphone', storage: '256GB', price: 900, badge: '' },
  { name: 'iPhone 13 Pro', category: 'iphone', storage: '256GB', price: 800, badge: '' },
  { name: 'iPhone 13', category: 'iphone', storage: '128GB', price: 650, badge: 'Oferta' },
  
  // iPad
  { name: 'iPad Pro M5', category: 'ipad', storage: '256GB', price: 1200, badge: 'Nuevo' },
  { name: 'iPad Pro M4', category: 'ipad', storage: '256GB', price: 1050, badge: '' },
  { name: 'iPad Air M3', category: 'ipad', storage: '128GB', price: 750, badge: 'Popular' },
  { name: 'iPad 11va Gen', category: 'ipad', storage: '128GB', price: 550, badge: '' },
  { name: 'iPad mini (A17 Pro)', category: 'ipad', storage: '128GB', price: 650, badge: '' },
  
  // Apple Watch
  { name: 'Apple Watch Ultra 3 LTE', category: 'watch', storage: '—', price: 950, badge: 'Nuevo' },
  { name: 'Apple Watch Ultra 2 LTE', category: 'watch', storage: '—', price: 850, badge: '' },
  { name: 'Apple Watch Series 11', category: 'watch', storage: '—', price: 550, badge: 'Popular' },
  { name: 'Apple Watch SE 3', category: 'watch', storage: '—', price: 350, badge: '' },
  
  // AirPods
  { name: 'AirPods Pro 3ra Gen', category: 'airpods', storage: 'USB-C', price: 280, badge: 'Nuevo' },
  { name: 'AirPods Pro 2da Gen', category: 'airpods', storage: 'USB-C', price: 250, badge: 'Popular' },
  { name: 'AirPods Max', category: 'airpods', storage: 'USB-C', price: 650, badge: '' },
  { name: 'AirPods 4 con cancelación', category: 'airpods', storage: '—', price: 200, badge: '' },
  { name: 'AirPods 4 sin cancelación', category: 'airpods', storage: '—', price: 150, badge: '' },
  { name: 'AirPods 3ra Generación', category: 'airpods', storage: '—', price: 180, badge: '' },
  
  // Samsung
  { name: 'Samsung S25 Ultra', category: 'samsung', storage: '256GB', price: 1350, badge: 'Nuevo' },
  { name: 'Samsung S25 Plus', category: 'samsung', storage: '256GB', price: 1100, badge: 'Nuevo' },
  { name: 'Samsung S25', category: 'samsung', storage: '256GB', price: 950, badge: 'Nuevo' },
  { name: 'Samsung S24 Ultra', category: 'samsung', storage: '256GB', price: 1200, badge: '' },
  { name: 'Samsung Z Fold 7', category: 'samsung', storage: '256GB', price: 1800, badge: 'Premium' },
  { name: 'Samsung Z Flip 7', category: 'samsung', storage: '256GB', price: 1100, badge: '' },
  { name: 'Samsung A56', category: 'samsung', storage: '128GB', price: 450, badge: '' },
  { name: 'Samsung A36', category: 'samsung', storage: '128GB', price: 350, badge: '' },
];

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// === RENDER PRODUCTS ===
const productsGrid = document.getElementById('productsGrid');
const categoryButtons = document.querySelectorAll('.category-btn');

function renderProducts(filter = 'all') {
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);
  
  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card fade-in">
      <div class="product-header">
        <div class="product-name">${product.name}</div>
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      </div>
      <div class="product-specs">
        <div class="product-spec">
          <span class="product-spec-label">Almacenamiento:</span>
          <span>${product.storage}</span>
        </div>
        <div class="product-spec">
          <span class="product-spec-label">Garantía:</span>
          <span>12 meses</span>
        </div>
      </div>
      <div class="product-price">USD $${product.price}</div>
      <button class="product-cta" onclick="contactProduct('${product.name}')">
        Consultar por WhatsApp
      </button>
    </div>
  `).join('');
}

// === CATEGORY FILTER ===
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    renderProducts(category);
  });
});

// === CONTACT PRODUCT ===
function contactProduct(productName) {
  const message = encodeURIComponent(`Hola! Quiero info sobre ${productName}.`);
  window.open(`https://wa.me/5491156510895?text=${message}`, '_blank');
}

// === FAQ ACCORDION ===
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    faqItems.forEach(i => i.classList.remove('active'));
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .testimonial-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// === INITIALIZE ===
renderProducts();
