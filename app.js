// Productos con precios reales del sitio
const products = [
  // iPhone 17
  { name: 'iPhone 17 Pro Max', storage: '256GB', price: 1430, category: 'iphone', badge: 'Nuevo', img: 'https://www.importcaballito.com.ar/products/iphone-17-pro-max-256.png' },
  { name: 'iPhone 17 Pro Max', storage: '512GB', price: 1690, category: 'iphone', badge: 'Nuevo', img: 'https://www.importcaballito.com.ar/products/iphone-17-pro-max-512.png' },
  { name: 'iPhone 17 Pro Max', storage: '1TB', price: 1950, category: 'iphone', badge: 'Nuevo', img: 'https://www.importcaballito.com.ar/products/iphone-17-pro-max-1tb.png' },

  // Cables
  { name: 'Cable iPhone', storage: 'USB a Lightning', price: 15, category: 'cables', badge: 'Nuevo', img: 'IMAGENES/CABLES/cable iphone usb a Ligtning/portada .png', img2: 'IMAGENES/CABLES/cable iphone usb a Ligtning/tipo c a ligthning.png' },
  { name: 'Cable iPhone', storage: 'Tipo C a Tipo C', price: 12, category: 'cables', badge: 'Nuevo', img: 'IMAGENES/CABLES/Cable iphone Tipo c a Tipo c/PORTADA.png', img2: 'IMAGENES/CABLES/Cable iphone Tipo c a Tipo c/1.png', img3: 'IMAGENES/CABLES/Cable iphone Tipo c a Tipo c/2.jpg' },
  {
    name: 'Cable iPhone', storage: 'Tipo C a Lightning', price: 10, category: 'cables', badge: 'Nuevo',
    img: 'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/1.0 PORTADA.png',
    img2: 'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/3.2.png',
    img3: 'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/5.3.png',
    img4: 'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/5.4.png',
    img5: 'IMAGENES/CABLES/Cable iphone Tipo C a ligthning/6.1.png'
  },

  // Samsung
  {
    name: 'Samsung Z Flip 7', storage: '256GB', price: 995, category: 'samsung', badge: 'Nuevo',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554628/us-galaxy-zflip7-f766-547880088',
    img2: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554629/us-galaxy-zflip7-f766-547880089',
    img3: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554630/us-galaxy-zflip7-f766-547880090'
  },
  {
    name: 'Samsung Z Fold 7', storage: '256GB', price: 1695, category: 'samsung', badge: 'Nuevo',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554117/us-galaxy-z-fold7-f966-547879983',
    img2: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554118/us-galaxy-z-fold7-f966-547879984',
    img3: 'https://images.samsung.com/is/image/samsung/p6pim/us/feature/554119/us-galaxy-z-fold7-f966-547879985'
  },

  // iPad
  { name: 'iPad Pro M4', storage: '256GB', price: 950, category: 'ipad', badge: 'Nuevo', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-m4-finish-unselect-202405?wid=5120&hei=2880&fmt=jpeg&qlt=70' },
  { name: 'iPad Pro M5', storage: '256GB', price: 1100, category: 'ipad', badge: 'Nuevo', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-m4-finish-unselect-202405?wid=5120&hei=2880&fmt=jpeg&qlt=70' },

  // Apple Watch
  { name: 'Apple Watch SE 3', storage: '40mm', price: 280, category: 'watch', badge: 'Nuevo', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-2nd-gen-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=jpeg&qlt=70' },
  { name: 'Apple Watch Series 11', storage: '42mm', price: 450, category: 'watch', badge: 'Nuevo', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-unselect-gallery-2-202409?wid=5120&hei=2880&fmt=jpeg&qlt=70' },
  { name: 'Apple Watch Ultra 3', storage: '49mm', price: 950, category: 'watch', badge: 'Nuevo', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-2-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=jpeg&qlt=70' },

  // AirPods
  {
    name: 'AirPods Pro 2da Gen', storage: 'USB-C', price: 250, category: 'airpods', badge: 'Nuevo',
    img: 'IMAGENES/AURICULARES/importia_full_res_1773547371138.png',
    img2: 'IMAGENES/AURICULARES/importia_full_res_1773584182730.png',
    img3: 'IMAGENES/AURICULARES/27f3b309-f9ab-4731-b8cf-9219441fc697.png',
    img4: 'IMAGENES/AURICULARES/ded32eac-29ad-4aca-986f-86a8dd2c590f.png',
    img5: 'IMAGENES/AURICULARES/ChatGPT Image 15 mar 2026, 12_06_11 p.m..png',
    img6: 'IMAGENES/AURICULARES/ChatGPT resol 16-9.png',
    video: 'IMAGENES/AURICULARES/PORTADA airpods pro 2.mp4'
  },
];

const DOLLAR_RATE = 1440;

function renderProducts(category = 'all') {
  const grid = document.getElementById('products-grid');
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => {
    const priceARS = product.price * DOLLAR_RATE;
    const priceTransfer = Math.round(priceARS * 1.03);
    const badgeColor = product.badge === 'Seminuevo'
      ? 'style="background:rgba(255,136,0,0.1); color:#ffb347; border:1px solid rgba(255,136,0,0.4);"'
      : 'style="background:rgba(0,240,104,0.1); color:#00F068; border:1px solid rgba(0,240,104,0.4);"';

    const productJson = encodeURIComponent(JSON.stringify(product));
    return `
      <article class="relative flex flex-col rounded-2xl px-4 py-3 shadow-sm transition-all"
        style="background: linear-gradient(135deg, #0a120e 0%, #0f1a12 100%); border: 1px solid #1a2e1f; cursor:pointer;"
        onmouseover="this.style.borderColor='#00A849'; this.style.boxShadow='0 0 20px rgba(0,240,104,0.15)';"
        onmouseout="this.style.borderColor='#1a2e1f'; this.style.boxShadow='none';"
        onclick="openCart(JSON.parse(decodeURIComponent('${productJson}')))">
        <div class="absolute right-3 top-3">
          <span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium" ${badgeColor}>${product.badge}</span>
        </div>
        <div class="mt-2 mb-3 rounded-2xl flex items-center justify-center py-2 overflow-hidden" style="background:rgba(0,0,0,0.5); min-height:8.5rem;">
          ${product.video
        ? `<video autoplay muted loop playsinline
                style="height:128px; width:100%; object-fit:cover; border-radius:14px;">
                <source src="${encodeURI(product.video)}" type="video/mp4">
               </video>`
        : `<img src="${product.img}" alt="${product.name}" loading="lazy"
                class="h-32 w-auto object-contain drop-shadow-xl"
                onerror="this.src='https://via.placeholder.com/200x200/0a120e/00F068?text=${product.name}'">`
      }
        </div>
        <div class="space-y-1 pr-16">
          <h3 class="text-sm font-semibold leading-tight" style="color:#E7E7E7;">${product.name}</h3>
          <p class="text-xs" style="color:#5B5B5B;">${product.storage}</p>
        </div>
        <div class="mt-3 rounded-xl px-3 py-2.5 space-y-1.5" style="border:1px solid #1a2e1f; background:rgba(0,0,0,0.4);">
          <div class="flex justify-between text-xs">
            <span style="color:#5B5B5B;">ARS referencia</span>
            <span class="text-xs font-medium" style="color:#00F068;">$ ${priceARS.toLocaleString('es-AR')}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span style="color:#5B5B5B;">Transferencia (+3%)</span>
            <span class="text-xs font-medium" style="color:#E7E7E7;">$ ${priceTransfer.toLocaleString('es-AR')}</span>
          </div>
        </div>
        <div class="mt-3 flex gap-2" onclick="event.stopPropagation()">
          <button onclick="openCart(JSON.parse(decodeURIComponent('${productJson}')))"
            class="flex-1 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold transition"
            style="background:#00F068; color:#000000;"
            onmouseover="this.style.background='#00d458'" onmouseout="this.style.background='#00F068'">
            🛒 Comprar
          </button>
          <button onclick="openCart(JSON.parse(decodeURIComponent('${productJson}')))"
            class="flex-1 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold transition"
            style="background:#0a120e; color:#E7E7E7; border:1px solid #1a2e1f;"
            onmouseover="this.style.background='#0f1a12'; this.style.borderColor='#00A849';"
            onmouseout="this.style.background='#0a120e'; this.style.borderColor='#1a2e1f';">
            Detalles
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// ---- Cart state ----
let cartProduct = null;
let cartQty = 1;

// ---- Open cart modal ----
function openCart(product) {
  cartProduct = product;
  cartQty = 1;

  const DOLLAR_RATE = 1440;
  const priceARS = product.price * DOLLAR_RATE;
  const priceTransfer = Math.round(priceARS * 1.03);

  // Populate modal fields
  document.getElementById('cart-title').textContent = product.name + ' · ' + product.storage;
  // ---- Media: carousel (multi-media) o thumbnail simple ----
  const carouselSection = document.getElementById('cart-carousel-section');
  const carouselTrack = document.getElementById('cart-carousel-track');
  const dotsContainer = document.getElementById('cart-carousel-dots');
  const cartPreviewRow = document.getElementById('cart-preview-row');
  const cartMediaBox = document.getElementById('cart-media-box');
  const cartImg = document.getElementById('cart-img');
  const cartImg2 = document.getElementById('cart-img2');
  const cartVideo = document.getElementById('cart-video');

  // Detener video previo
  cartVideo.pause();

  if (product.video || product.img2 || product.img3 || product.img4 || product.img5 || product.img6) {
    // ---- Modo carrusel horizontal ----
    carouselSection.style.display = 'block';
    cartMediaBox.style.display = 'none';

    // Armar lista de slides: primero imágenes, luego video
    const mediaItems = [];
    const galleryImgs = [];
    ['img', 'img2', 'img3', 'img4', 'img5', 'img6'].forEach(key => {
      if (product[key]) { mediaItems.push({ type: 'img', src: product[key] }); galleryImgs.push(product[key]); }
    });
    if (product.video) { mediaItems.push({ type: 'video', src: product.video }); }

    // Construir slides
    carouselTrack.innerHTML = '';
    dotsContainer.innerHTML = '';
    mediaItems.forEach((item, i) => {
      const slide = document.createElement('div');
      slide.style.cssText = 'flex:0 0 100%; width:100%; height:210px; display:flex; align-items:center; justify-content:center; background:#000; overflow:hidden;';

      if (item.type === 'img') {
        const img = document.createElement('img');
        img.src = encodeURI(item.src);
        img.style.cssText = 'max-width:100%; max-height:210px; object-fit:contain; cursor:zoom-in;';
        img.onclick = (e) => { e.stopPropagation(); openImgZoomSrc(item.src, galleryImgs, galleryImgs.indexOf(item.src)); };
        slide.appendChild(img);
      } else {
        const vid = document.createElement('video');
        vid.autoplay = true; vid.muted = true; vid.loop = true; vid.playsInline = true;
        vid.style.cssText = 'width:100%; height:210px; object-fit:cover;';
        const src = document.createElement('source');
        src.src = encodeURI(item.src); src.type = 'video/mp4';
        vid.appendChild(src);
        slide.appendChild(vid);
      }
      carouselTrack.appendChild(slide);

      // Dot indicador
      const dot = document.createElement('div');
      dot.style.cssText = `width:7px; height:7px; border-radius:50%; cursor:pointer; transition:background .2s;
        background:${i === 0 ? '#00F068' : 'rgba(255,255,255,0.35)'};`;
      dot.onclick = () => cartCarouselGoTo(i);
      dotsContainer.appendChild(dot);
    });

    // Estado inicial del carrusel
    window._cartCarouselIdx = 0;
    window._cartCarouselTotal = mediaItems.length;
    carouselTrack.style.transform = 'translateX(0)';

    const multi = mediaItems.length > 1;
    document.getElementById('cart-prev-arrow').style.display = multi ? 'flex' : 'none';
    document.getElementById('cart-next-arrow').style.display = multi ? 'flex' : 'none';
    dotsContainer.style.display = multi ? 'flex' : 'none';

    // Fijar cart-img para compatibilidad con lightbox
    cartImg.src = encodeURI(product.img);

  } else {
    // ---- Modo thumbnail simple ----
    carouselSection.style.display = 'none';
    cartMediaBox.style.display = 'flex';

    cartImg.style.display = 'block';
    cartImg.src = encodeURI(product.img);
    cartImg.alt = product.name;
    cartImg.style.maxWidth = '76px';
    cartImg.style.maxHeight = '76px';
    cartImg.style.cursor = 'zoom-in';
    cartImg.onclick = openImgZoom;
    cartMediaBox.onclick = openImgZoom;

    cartVideo.style.display = 'none';
    if (cartImg2) cartImg2.style.display = 'none';
  }
  document.getElementById('cart-name').textContent = product.name;
  document.getElementById('cart-storage').textContent = product.storage;
  document.getElementById('cart-ars').textContent = '$ ' + priceARS.toLocaleString('es-AR');
  document.getElementById('qty-display').textContent = '1';

  // Reset payment selection & shipping
  document.querySelector('input[name="payment"][value="efectivo"]').checked = true;
  document.getElementById('ship-barrio').value = '';
  document.getElementById('ship-cp').value = '';
  document.getElementById('ship-cost').value = '';
  // Reset toggle to retiro presencial
  const tog = document.getElementById('ship-toggle');
  const thumb = document.getElementById('ship-toggle-thumb');
  const fields = document.getElementById('ship-fields');
  if (tog) { tog.style.background = '#3a3a3a'; thumb.style.left = '2px'; }
  if (fields) fields.style.display = 'none';
  document.getElementById('toggle-label-retiro').style.color = '#E7E7E7';
  document.getElementById('toggle-label-envio').style.color = '#5B5B5B';

  // Update total + WhatsApp link
  updateTotal();
  updateWhatsAppLink();

  // Show overlay + animate modal in
  const overlay = document.getElementById('cart-overlay');
  const modal = document.getElementById('cart-modal');
  overlay.style.display = 'block';
  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Block body scroll
  document.body.style.overflow = 'hidden';
}

// ---- Close cart modal ----
function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  const modal = document.getElementById('cart-modal');
  modal.style.opacity = '0';
  modal.style.transform = 'translate(-50%, -50%) scale(0.92)';
  setTimeout(() => { overlay.style.display = 'none'; }, 220);
  document.body.style.overflow = '';
}

// ---- Cart carousel navigation ----
function cartCarouselGoTo(idx) {
  const total = window._cartCarouselTotal || 1;
  window._cartCarouselIdx = ((idx % total) + total) % total;
  const track = document.getElementById('cart-carousel-track');
  if (track) track.style.transform = `translateX(-${window._cartCarouselIdx * 100}%)`;
  // Actualizar dots
  const dots = document.getElementById('cart-carousel-dots');
  if (dots) Array.from(dots.children).forEach((d, i) => {
    d.style.background = i === window._cartCarouselIdx ? '#00F068' : 'rgba(255,255,255,0.35)';
  });
}

function cartCarouselNav(dir) {
  cartCarouselGoTo((window._cartCarouselIdx || 0) + dir);
}

// ---- Quantity controls ----
function changeQty(delta) {
  cartQty = Math.max(1, cartQty + delta);
  document.getElementById('qty-display').textContent = cartQty;
  updateTotal();
  updateWhatsAppLink();
}

// ---- Update total based on qty × payment method + shipping ----
function updateTotal() {
  if (!cartProduct) return;
  const DR = 1440;
  const paymentEl = document.querySelector('input[name="payment"]:checked');
  const payment = paymentEl ? paymentEl.value : 'efectivo';
  const shipCost = parseFloat(document.getElementById('ship-cost')?.value) || 0;
  let baseARS;
  if (payment === 'usdt') {
    const totalEl = document.getElementById('cart-total');
    const totalUSD = (cartProduct.price * cartQty);
    // For USDT show in USD + shipping in ARS separately if any
    totalEl.textContent = 'US$ ' + totalUSD.toLocaleString('es-AR') + (shipCost > 0 ? ' + envío' : '');
    return;
  }
  baseARS = cartProduct.price * DR * cartQty;
  if (payment === 'transferencia') baseARS = Math.round(baseARS * 1.03);
  else if (payment === 'mercadopago') baseARS = Math.round(baseARS * 1.065);
  const totalARS = baseARS + shipCost;
  document.getElementById('cart-total').textContent = '$ ' + totalARS.toLocaleString('es-AR');
}

// ---- Build WhatsApp message dynamically ----
function updateWhatsAppLink() {
  if (!cartProduct) return;
  updateTotal();
  const paymentEl = document.querySelector('input[name="payment"]:checked');
  const payment = paymentEl ? paymentEl.value : 'efectivo';
  const paymentMap = { efectivo: 'efectivo', transferencia: 'transferencia bancaria', usdt: 'USDT', mercadopago: 'Mercado Pago' };
  const payLabel = paymentMap[payment] || payment;
  const isEnvio = document.getElementById('ship-toggle')?.style.background.includes('0,168');
  const barrio = document.getElementById('ship-barrio')?.value.trim();
  const cp = document.getElementById('ship-cp')?.value.trim();
  const shipCost = parseFloat(document.getElementById('ship-cost')?.value) || 0;
  let msg = `Hola! Quiero comprar ${cartQty}x ${cartProduct.name} ${cartProduct.storage}. Método de pago: ${payLabel}.`;
  if (isEnvio) {
    msg += `\nEntrega: Envío a domicilio`;
    if (barrio || cp) msg += ` (${[barrio, cp].filter(Boolean).join(', ')})`;
    msg += '.';
    if (shipCost > 0) msg += ` Costo de envío: $${shipCost.toLocaleString('es-AR')}.`;
  } else {
    msg += `\nEntrega: Retiro presencial.`;
  }
  document.getElementById('cart-whatsapp-btn').href = `https://wa.me/message/5H2NAGZ7RIJ6C1?text=${encodeURIComponent(msg)}`;
}

// ---- Toggle entrega retiro / envío ----
function toggleEntrega() {
  const tog = document.getElementById('ship-toggle');
  const thumb = document.getElementById('ship-toggle-thumb');
  const fields = document.getElementById('ship-fields');
  const labelRetiro = document.getElementById('toggle-label-retiro');
  const labelEnvio = document.getElementById('toggle-label-envio');
  const isOn = thumb.style.left === '22px';
  if (isOn) {
    // Switch OFF → Retiro
    tog.style.background = '#3a3a3a';
    thumb.style.left = '2px';
    fields.style.display = 'none';
    labelRetiro.style.color = '#E7E7E7';
    labelEnvio.style.color = '#5B5B5B';
    document.getElementById('ship-cost').value = '';
    updateTotal();
  } else {
    // Switch ON → Envío
    tog.style.background = '#00A849';
    thumb.style.left = '22px';
    fields.style.display = 'flex';
    labelRetiro.style.color = '#5B5B5B';
    labelEnvio.style.color = '#E7E7E7';
  }
  updateWhatsAppLink();
}

// Listen to payment method changes
document.addEventListener('change', (e) => {
  if (e.target.name === 'payment') updateWhatsAppLink();
});

// Close on Escape key
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart(); });

// ---- Category filter ----
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.category);
  });
});

// ---- Initialize ----
renderProducts();
