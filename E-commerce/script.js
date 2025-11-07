const CURRENCY = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
function svgCircleDataUri(hexColor, label) {
  const fg = '#ffffff';
  const size = 600;
  const fontSize = 140;
  const text = (label || '').slice(0, 3).toUpperCase();

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>
    <defs>
      <filter id="s" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="20" flood-color="rgba(0,0,0,0.12)"/>
      </filter>
    </defs>
    <g filter="url(#s)">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 20}" fill="${hexColor}"/>
    </g>
    <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" fill="${fg}" font-family="Inter, Arial, sans-serif" font-size="${fontSize}" font-weight="700">${escapeXml(text)}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeXml(s) {
  return String(s).replace(/[<>&'"]/g, function (c) {
    return {'<':'&lt;', '>':'&gt;', '&':'&amp;', "'":'&apos;', '"':'&quot;'}[c];
  });
}

const SERVICE_DEFS = [
  ['Website Design', 'Design', 450, 'Custom modern website design tailored to your brand.', ['design','ui','ux'],'#4f46e5'],
  ['Landing Page', 'Design', 199, 'High-converting single-page landing tailored for campaigns.', ['design','landing'],'#7c3aed'],
  ['Logo Design', 'Design', 120, 'Unique logo marks and branding assets for your company.', ['brand','logo'],'#e11d48'],
  ['Brand Identity Pack', 'Design', 650, 'Logo + color palette + typography + guidelines.', ['brand','strategy'],'#06b6d4'],
  ['UX Audit', 'Design', 300, 'Detailed UX review with prioritized improvements.', ['ux','audit'],'#0ea5e9'],
  ['Website Development', 'Development', 900, 'Front-end + basic CMS setup for small businesses.', ['html','css','js'],'#10b981'],
  ['E-commerce Setup', 'Development', 1200, 'Complete online store setup with product import.', ['shop','ecom'],'#f59e0b'],
  ['SaaS Landing Build', 'Development', 700, 'High-fidelity landing and pricing pages for SaaS.', ['saas','landing'],'#ef4444'],
  ['Performance Optimization', 'Development', 350, 'Improve load times and Core Web Vitals.', ['perf','seo'],'#6366f1'],
  ['Accessibility Fixes', 'Development', 280, 'Bring your site up to WCAG AA accessibility standards.', ['a11y','audit'],'#00b894'],
  ['SEO Audit', 'Marketing', 260, 'Comprehensive SEO health check and roadmap.', ['seo','audit'],'#8b5cf6'],
  ['Technical SEO', 'Marketing', 420, 'On-site technical fixes and sitemap/schema updates.', ['seo','tech'],'#06b6d4'],
  ['Local SEO Setup', 'Marketing', 190, 'Google Business, citations and local optimization.', ['local','seo'],'#ef4444'],
  ['Content Marketing Plan', 'Marketing', 320, '3-month content strategy with editorial calendar.', ['content','plan'],'#fb7185'],
  ['Monthly Blog Package (4)', 'Writing', 280, 'Four SEO-optimized blog posts per month.', ['writing','blog'],'#f97316'],
  ['Copywriting — Landing', 'Writing', 160, 'Conversion-focused copy for landing pages.', ['copy','ux'],'#7dd3fc'],
  ['Product Descriptions (10)', 'Writing', 140, 'Optimized product descriptions for stores.', ['ecom','copy'],'#34d399'],
  ['Social Media Content Pack', 'Marketing', 220, '10 posts + captions + hashtags strategy.', ['social','content'],'#c084fc'],
  ['PPC Campaign Setup', 'Marketing', 350, 'Google Ads or Facebook Ads campaign creation.', ['ads','ppc'],'#f97316'],
  ['Ad Creative (3)', 'Marketing', 200, 'Three ad creatives (images & copy) for campaigns.', ['ads','creative'],'#fb7185'],
  ['Email Campaign (1)', 'Marketing', 120, 'Design + copy + send plan for a one-off campaign.', ['email','campaign'],'#60a5fa'],
  ['Email Automation Setup', 'Marketing', 380, 'Automations for welcome, cart-abandon & onboarding.', ['email','automation'],'#34d399'],
  ['Productized Consulting — 1hr', 'Consulting', 80, 'One hour of expert product / growth consulting.', ['consult','call'],'#f472b6'],
  ['Growth Strategy Session', 'Consulting', 420, 'Quarterly growth roadmap and OKR planning.', ['strategy','growth'],'#60a5fa'],
  ['Technical Audit', 'Consulting', 330, 'Full stack technical review with action items.', ['tech','audit'],'#0ea5e9'],
  ['Onboarding Workshop', 'Consulting', 500, 'Team workshop for product onboarding & activation.', ['workshop','training'],'#a78bfa'],
  ['UX Research Sprint', 'Design', 620, '1-week prototype + user interviews + report.', ['research','ux'],'#ef4444'],
  ['Prototype (Clickable)', 'Design', 340, 'Figma clickable prototype for validation.', ['prototype','figma'],'#fb7185'],
  ['App UI Kit', 'Design', 269, 'Re-usable UI kit for mobile or web apps.', ['ui','kit'],'#7c3aed'],
  ['Frontend Component Library', 'Development', 480, 'Reusable component library in vanilla HTML/CSS.', ['components','ui'],'#4f46e5'],
  ['API Integration', 'Development', 390, 'Connect third-party APIs (Stripe, Mailchimp, etc.)', ['api','integration'],'#ef4444'],
  ['Headless CMS Setup', 'Development', 760, 'Headless CMS wiring + sample content templates.', ['cms','headless'],'#10b981'],
  ['Subscription Checkout Flow', 'Development', 520, 'Stripe subscription flow implementation (mock).', ['payments','stripe'],'#f59e0b'],
  ['Analytics & Tracking', 'Marketing', 210, 'GA4 setup, events, and dashboard basics.', ['analytics','ga4'],'#06b6d4'],
  ['Conversion Rate Review', 'Marketing', 290, 'CRO audit with A/B test ideas.', ['cro','cvr'],'#fb7185'],
  ['LinkedIn Profile Refresh', 'Writing', 120, 'Optimized LinkedIn About, headline and summary.', ['profile','copy'],'#34d399'],
  ['Resume & Portfolio Review', 'Consulting', 99, 'Professional review + improvement plan.', ['career','review'],'#60a5fa'],
  ['Technical Interview Prep', 'Consulting', 150, 'Mock interview and feedback (45 mins).', ['interview','prep'],'#f472b6'],
  ['Brand Naming Session', 'Design', 420, 'Name brainstorming + shortlisting + checks.', ['brand','naming'],'#a78bfa'],
  ['Illustration Set (5)', 'Design', 350, 'Custom illustrations for web or marketing.', ['illustration','design'],'#ef4444'],
  ['Video Promo (30s)', 'Marketing', 650, 'Short promo video with captions and music.', ['video','promo'],'#f59e0b'],
  ['On-page Content Refresh', 'Writing', 180, 'Rewrite up to 5 pages for clarity & SEO.', ['content','seo'],'#7dd3fc'],
  ['Technical Documentation', 'Writing', 260, 'API or product docs for your engineering team.', ['docs','tech'],'#0ea5e9'],
  ['App Store Listing', 'Marketing', 140, 'ASO-optimized title, description & assets.', ['aso','store'],'#34d399'],
  ['Customer Support Templates', 'Writing', 99, 'Email/chat templates and FAQ content.', ['support','templates'],'#c084fc'],
  ['Monthly Retainer — Dev (10hrs)', 'Development', 900, 'Monthly retainer for development support (10h).', ['retainer','dev'],'#4f46e5']
];

const PRODUCTS = SERVICE_DEFS.map((item, idx) => {
  const [title, category, price, desc, tags, color] = item;
  const id = `s${(idx+1).toString().padStart(2,'0')}`;
  const initials = title.split(' ').map(w => w[0]).join('').slice(0,3);
  return {
    id,
    title,
    price,
    desc,
    img: svgCircleDataUri(color, initials),
    category,
    tags,
  };
});

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const productsGrid = $('#products-grid');
const categoryFilter = $('#category-filter');
const sortSelect = $('#sort-select');
const searchInput = $('#search-input');

const productModal = $('#product-modal');
const modalClose = $('#product-modal-close');
const modalClose2 = $('#modal-close-2');
const modalAdd = $('#modal-add');
const modalTitle = $('#modal-title');
const modalDesc = $('#modal-desc');
const modalPrice = $('#modal-price');
const modalImage = $('#modal-image');
const modalQty = $('#modal-qty');

const cartButton = $('#cart-button');
const cartDrawer = $('#cart-drawer');
const cartClose = $('#cart-close');
const cartItemsEl = $('#cart-items');
const cartCount = $('#cart-count');
const cartSubtotal = $('#cart-subtotal');
const cartShipping = $('#cart-shipping');
const cartTotal = $('#cart-total');
const clearCartBtn = $('#clear-cart');
const checkoutBtn = $('#checkout-btn');

const toast = $('#toast');
const viewProductsBtn = $('#view-products');
const yearSpan = $('#year');

let cart = {};

function init(){
  yearSpan.textContent = new Date().getFullYear();
  loadCart();
  populateFilters();
  renderProducts();
  syncCartUI();
  attachListeners();
}

function loadCart(){
  try {
    const raw = localStorage.getItem('shopmock_cart');
    cart = raw ? JSON.parse(raw) : {};
  } catch (e) {
    cart = {};
  }
}

function persistCart(){ localStorage.setItem('shopmock_cart', JSON.stringify(cart)); }

function showToast(msg, t=1800){
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>toast.classList.add('hidden'), t);
}

function populateFilters(){
  const cats = Array.from(new Set(PRODUCTS.map(p => p.category)));
  categoryFilter.innerHTML = `<option value="all">All categories</option>${cats.map(c => `<option value="${c}">${capitalize(c)}</option>`).join('')}`;
}

function renderProducts(){
  const q = (searchInput?.value || '').trim().toLowerCase();
  const cat = (categoryFilter?.value) || 'all';
  let list = PRODUCTS.filter(p => {
    if(cat !== 'all' && p.category !== cat) return false;
    if(!q) return true;
    return (p.title + ' ' + p.desc + ' ' + (p.tags || []).join(' ')).toLowerCase().includes(q);
  });

  const sort = sortSelect?.value || 'default';
  if(sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
  else if(sort === 'price-desc') list.sort((a,b)=>b.price-a.price);

  productsGrid.innerHTML = list.map(p => productCardHtml(p)).join('');
  $$('.product-card').forEach(el=>{
    el.querySelector('.btn-add')?.addEventListener('click', (e)=>{
      e.preventDefault(); e.stopPropagation();
      addToCart(el.dataset.id, 1);
    });
    el.addEventListener('click', ()=> openProductModal(el.dataset.id));
  });
}

function productCardHtml(p){
  return `
  <article class="card product-card" data-id="${p.id}" tabindex="0" aria-labelledby="title-${p.id}">
    <img class="thumb" src="${p.img}" alt="${escapeHtml(p.title)}" onerror="this.src='data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22600%22%3E%3Crect%20width=%22600%22%20height=%22600%22%20fill=%22%2394a3b8%22/%3E%3C/svg%3E'">
    <div class="card-body">
      <h3 id="title-${p.id}">${escapeHtml(p.title)}</h3>
      <p class="muted">${escapeHtml(p.desc)}</p>
      <div class="badge-row" style="margin-top:8px">${(p.tags||[]).slice(0,4).map(t=>`<span class="badge">${escapeHtml(t)}</span>`).join('')}</div>
    </div>
    <div class="card-footer">
      <div style="font-weight:800">${CURRENCY.format(p.price)}</div>
      <div style="display:flex;gap:8px;align-items:center">
        <a class="link btn-add" href="#" data-id="${p.id}">Add</a>
        <a class="link" href="#" onclick="event.preventDefault()">View</a>
      </div>
    </div>
  </article>`;
}

function openProductModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = CURRENCY.format(p.price);
  modalImage.src = p.img;
  modalImage.alt = p.title;
  modalQty.value = 1;
  productModal.classList.remove('hidden');
  productModal.setAttribute('aria-hidden','false');

  modalAdd.onclick = () => {
    addToCart(p.id, Number(modalQty.value || 1));
    closeProductModal();
  };
}
function closeProductModal(){
  productModal.classList.add('hidden');
  productModal.setAttribute('aria-hidden','true');
}

function addToCart(id, qty=1){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  if(cart[id]) cart[id].qty += qty;
  else cart[id] = { id: p.id, title: p.title, price: p.price, qty: qty, img: p.img };
  if(cart[id].qty <= 0) delete cart[id];
  persistCart();
  syncCartUI();
  showToast('Added to cart');
}

function removeFromCart(id){ delete cart[id]; persistCart(); syncCartUI(); }
function updateCartQty(id, qty){ if(!cart[id]) return; cart[id].qty = Math.max(0, Math.floor(qty) || 0); if(cart[id].qty === 0) delete cart[id]; persistCart(); syncCartUI(); }
function clearCart(){ cart = {}; persistCart(); syncCartUI(); }

function syncCartUI(){
  const count = Object.values(cart).reduce((s,i)=>s + i.qty, 0);
  cartCount.textContent = count;
  cartItemsEl.innerHTML = '';
  if(count === 0){
    cartItemsEl.innerHTML = `<p class="muted">Your cart is empty.</p>`;
  } else {
    Object.values(cart).forEach(it => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${it.img}" alt="${escapeHtml(it.title)}" onerror="this.src='https://placehold.co/80x80/94a3b8/ffffff?text=Img'">
        <div class="item-info">
          <h4>${escapeHtml(it.title)}</h4>
          <div class="small">${CURRENCY.format(it.price)} × ${it.qty} = <strong>${CURRENCY.format(it.price * it.qty)}</strong></div>
        </div>
        <div class="item-actions">
          <input type="number" min="1" value="${it.qty}" data-id="${it.id}" class="qty-input" />
          <button class="btn remove-btn" data-id="${it.id}">Remove</button>
        </div>
      `;
      cartItemsEl.appendChild(div);
    });
    $$('.qty-input').forEach(inp => inp.addEventListener('change', e => updateCartQty(e.target.dataset.id, Number(e.target.value))));
    $$('.remove-btn').forEach(b => b.addEventListener('click', e => removeFromCart(e.target.dataset.id)));
  }

  const subtotal = Object.values(cart).reduce((s,i)=>s + (i.price * i.qty), 0);
  const shipping = subtotal > 100 ? 0 : (subtotal === 0 ? 0 : 6.00);
  const total = subtotal + shipping;
  cartSubtotal.textContent = CURRENCY.format(subtotal);
  cartShipping.textContent = CURRENCY.format(shipping);
  cartTotal.textContent = CURRENCY.format(total);
}

function checkout(){
  const count = Object.values(cart).reduce((s,i)=>s + i.qty, 0);
  if(count === 0){ showToast('Your cart is empty'); return; }
  showToast('Checkout successful — thank you!', 2500);
  clearCart();
  closeCart();
}

function openCart(){ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); }
function closeCart(){ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); }

function escapeHtml(str){ if(!str) return ''; return String(str).replace(/[&<>"']/g, (s)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[s]); }
function capitalize(s){ return s?.charAt(0).toUpperCase() + s?.slice(1); }
function debounce(fn, wait=150){ let t; return (...args)=>{ clearTimeout(t); t = setTimeout(()=>fn(...args), wait); }; }

function attachListeners(){
  if(searchInput) searchInput.addEventListener('input', debounce(()=>renderProducts(), 200));
  if(categoryFilter) categoryFilter.addEventListener('change', renderProducts);
  if(sortSelect) sortSelect.addEventListener('change', renderProducts);

  if(viewProductsBtn) viewProductsBtn.addEventListener('click', ()=>{ const sec = document.querySelector('.product-section'); if(sec) window.scrollTo({top: sec.offsetTop - 20, behavior: 'smooth'}); });

  if(modalClose) modalClose.addEventListener('click', closeProductModal);
  if(modalClose2) modalClose2.addEventListener('click', closeProductModal);
  if(productModal) productModal.addEventListener('click', (e)=> { if(e.target === productModal) closeProductModal(); });

  if(cartButton) cartButton.addEventListener('click', openCart);
  if(cartClose) cartClose.addEventListener('click', closeCart);
  if(clearCartBtn) clearCartBtn.addEventListener('click', ()=> { if(confirm('Clear your cart?')) clearCart(); });
  if(checkoutBtn) checkoutBtn.addEventListener('click', checkout);

  window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ closeProductModal(); closeCart(); }});
}

init();
